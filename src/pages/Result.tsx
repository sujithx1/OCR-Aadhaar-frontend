import type { AadhaarData } from "../types";
import './uploader.css'
const Result = ({ data }: { data: AadhaarData }) => {
  return (
    <div className="result-card">
      <h3>🔍 OCR Extracted Details</h3>
      <ul>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>DOB:</strong> {data.dob}</li>
        <li><strong>Gender:</strong> {data.gender || "N/A"}</li>
        <li><strong>Aadhaar No:</strong> {data.aadhaarNumber}</li>
        <li><strong>Father's Name:</strong> {data.fatherName}</li>
        <li><strong>Address:</strong> {data.address}</li>
        <li><strong>Pincode:</strong> {data.pincode}</li>
        <li><strong>Phone:</strong> {data.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default Result;
