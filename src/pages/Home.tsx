import { useState } from "react";
import { api } from "../api/axios";
import Result from "./Result";
import type { AadhaarData } from "../types";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";



const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg"];
const MAX_FILE_SIZE_MB = 5;

const sanitizeFileName = (name: string) => {
  return name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
};

const Uploader = () => {
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [ocrResult, setOcrResult] = useState<AadhaarData | null>(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return "Only JPG, JPEG, PNG files are allowed.";
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      return `File size should be less than ${MAX_FILE_SIZE_MB}MB.`;
    }
    return null;
  };



    const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    type: "Front" | "Back"
  ) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateFile(file);
    if (validationError) {
      setError(`${type} Image Error: ${validationError}`);
      setFile(null);
      return;
    }

    // Optionally sanitize the file name
    const sanitized = new File([file], sanitizeFileName(file.name), {
      type: file.type,
    });

    setFile(sanitized);
  };



  const handleUpload = async () => {
    if (!frontFile || !backFile) return toast.error("Both images are required!");

    const formData = new FormData();
    formData.append("frontImage", frontFile);
    formData.append("backImage", backFile);

    try {
      setLoading(true);
      const res = await api.post("/ocr", formData);
      setOcrResult(res.data.data);
    } catch (error) {
      if (isAxiosError(error) ) {
        console.log(error);
        
        const message = error.response?.data?.error || "Upload failed. Try again.";
        toast.error(`❌ ${message}`);
        
        console.error(error);

      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Aadhaar OCR Upload</h2>

        <div className="upload-section">
          <div className="upload-box">
            <label htmlFor="front">Front Image</label>
            <input type="file" id="front" accept="image/*" onChange={(e) => handleFileChange(e, setFrontFile, "Front")} />
            {frontFile && <img src={URL.createObjectURL(frontFile)} alt="Front Preview" />}
          </div>

          <div className="upload-box">
            <label htmlFor="back">Back Image</label>
            <input type="file" id="back" accept="image/*" onChange={(e) =>handleFileChange(e, setBackFile, "Back")} />
            {backFile && <img src={URL.createObjectURL(backFile)} alt="Back Preview" />}
          </div>
        </div>


{error && (
        <div className="bg-bg-danger text-danger p-3 rounded-bottom-circle">{error}</div>
      )}
        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </div>




      {ocrResult && <Result data={ocrResult} />}
    </div>
  );
};

export default Uploader;
