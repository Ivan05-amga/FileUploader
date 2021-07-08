import "../styles/upload.scss";
import { useContext, useState } from "react";
import { ImageContext } from "../context/Imagecontext";
import DropZone from "./DropZone";
import { useHistory } from "react-router-dom";
import {storage, firebase} from "../function/firebaseFunction"
import {ProgressBar} from "./ProgressBar"


export default function Upload() {
  const { setImage } = useContext(ImageContext);
  const [progress,setProgress] = useState(0);
  const history = useHistory();

  const handleFile = (e) => {
    const regex = /\.(jpe?g|png)$/i;
    const file = e.target.files[0];
    if (regex.test(file.name)) {
      handleFileUpload(file)
    }
  }

  const handleFileUpload = (file) => {
    
    const date = Date.now().toString();
    const upload = storage.ref(`images/${file.name}${date}`).put(file);

    upload.on(
      "state_change",
      snapshot=> {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => console.log(error),
      () => {
        storage
          .ref("images")
          .child(file.name+date)
          .getDownloadURL().
          then(url =>{
            setImage(url)
          }
          )
      }
    )
  };

  if (progress >= 100 ){
    setProgress(0);
    history.push("/confirmation");
  }

  if (progress <= 0 ){
    return (
      <div className="confirmation-container">
        <h1>Upload your image</h1>
        <p>File should be Jpeg,Png...</p>
        <DropZone setImage={setImage} handleFileUpload={handleFileUpload} />
        <span>or</span>
        <br />
        <div class="file-open-button">
          <label for="file" class="button">
            Choose a file
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFile}
            style={{ display: "none" }}
          />
        </div>
      </div>

    )
  }
  return (
    <div className="confirmation-container">
      <ProgressBar progress={progress}></ProgressBar>
    </div>
  );

}


