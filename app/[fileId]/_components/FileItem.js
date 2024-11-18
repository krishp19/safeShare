import React, { useState } from "react";

const FileShareCard = ({ fileName, fileType, fileSize, onDownload, file}) => {
  const [password, setPassword] = useState("");

  const handleDownload = () => {
    if (!password) {
      alert("Please enter the password!");
      return;
    }
    onDownload(password);
  };

  return file&&(
    <div style={styles.card}>
      {/* Centered Logo */}
      <div style={styles.logo}>
        <span style={{ color: "#00A8FF", fontWeight: "bold", fontSize: "32px" }}>
          {file.userName}
        </span>
      </div>
      <h2 style={styles.title}>Shared a file with you</h2>
      <p style={styles.subTitle}>Find file details below</p>
      {/* GIF replacing SVG */}
      <div style={styles.icon}>
        <img
          src="/among.gif" // Replace with the name of your GIF in the public folder
          alt="File GIF"
          style={{ width: "150px", height: "150px", marginBottom: "20px" }}
        />
      </div>
      <div style={styles.fileDetails}>
        <p>
          <strong>File Name:</strong> {file.fileName}
        </p>
        <p>
          <strong>Type:</strong> {file.fileType}
        </p>
        <p>
          <strong>Size:</strong> {file.fileSize} Bytes
        </p>
      </div>
      {file.password.length>3?<input
        type="password"
        placeholder="Enter password to access"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />:null}
      {/* Centered Button */}
      <div style={styles.buttonWrapper}>
        <button className="px-7 py-3 bg-blue-500 text-white rounded-lg text-base cursor-pointer flex items-center justify-center disabled:bg-gray-500" onClick={() => window.open(file?.fileUrl)}  disabled={file.password!==password}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            style={{ width: "20px", height: "20px", marginRight: "8px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5v-13m0 0l-4 4m4-4l4 4M9 19h6"
            />
          </svg>
          Download
        </button>
      </div>
      <p style={styles.terms}>*Terms and Conditions apply</p>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "800px", // Significantly wider
    margin: "0 auto",
    padding: "40px", // Increased padding for more space inside the card
    borderRadius: "12px",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.9)", // Enhanced shadow for better depth
  },
  logo: {
    marginBottom: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "12px",
    fontSize: "24px", // Increased font size for better readability
    fontWeight: "700",
  },
  subTitle: {
    marginBottom: "20px",
    color: "#bbb",
    fontSize: "16px",
  },
  icon: {
    margin: "0 auto 20px", // Center the GIF with additional spacing
    display: "flex",
    justifyContent: "center",
  },
  fileDetails: {
    marginBottom: "20px",
    fontSize: "16px", // Larger font size
    lineHeight: "2", // Increased line spacing for better readability
    textAlign: "center",
  },
  input: {
    padding: "14px", // Larger input field
    width: "100%",
    marginBottom: "20px",
    border: "1px solid #555",
    borderRadius: "8px",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "16px", // Larger text inside the input
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  button: {
    padding: "14px 28px", // Larger button
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px", // Larger text
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  terms: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#bbb",
  },
};

export default FileShareCard;
