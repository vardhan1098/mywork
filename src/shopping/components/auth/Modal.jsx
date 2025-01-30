import React from "react";

const Modal = ({ children, isOpen, handleClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)", // Background overlay
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "300px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* ✅ Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
