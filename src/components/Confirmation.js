import { useContext } from "react";
import { ImageContext } from "../context/Imagecontext";
import copy from "copy-to-clipboard";

export default function Confiramtion() {
  const { image } = useContext(ImageContext);

  function copyRoomCodeToClipboard() {
    copy(image);
  }
  return (
    <div className="confirmation-container page">

      <h1>Upload successfuly</h1>
      <img src={image}></img>

      <div className="copy-area">
        <span>{image.substr(0, 30) + "..."}</span>
        <button onClick={copyRoomCodeToClipboard}>Copy Link</button>
      </div>
    </div>
  );
}
