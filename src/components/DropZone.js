import React from "react";
import { useDropzone } from "react-dropzone";
import uploadImage from "../assets/image.svg";

export default function DropZone({ setImage, handleFileUpload }) {
  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop: (acceptedFiles) =>
      acceptedFiles.map((file) => {
        handleFileUpload(file);
      })
  });

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div class={`drop-zone ${isDragAccept && "hover"}`}>
          <img src={uploadImage} alt="Drag Image"></img>
          <span>Drag & Drop your Image here</span>
        </div>
      </div>
    </div>
  );
}
