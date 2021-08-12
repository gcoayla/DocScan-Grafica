import React, {useState} from "react";
import Download from "./components/Download";
import UploadEdit from "./components/UploadEdit";

function App() {
  const [image, setImage] = useState(null)
  const [uploadMode, setUploadMode] = useState(true)
  const [imageEncoded, setImageEncoded] = useState('')
  const reader = new FileReader()
    reader.addEventListener("load", function () {
    setImageEncoded(reader.result)
  }, false);
  if(image){
    reader.readAsDataURL(image)
  }
        

  return (
    <div className="general-content">
      {uploadMode ? <UploadEdit setUploadMode={setUploadMode} image={image} setImage={setImage}/> : <Download setUploadMode={setUploadMode} image={imageEncoded}/> }
    </div>
  )
}

export default App;
