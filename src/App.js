import React, {useState} from "react";
import Download from "./components/Download";
import UploadEdit from "./components/UploadEdit";

function App() {

  const [uploadMode, setUploadMode] = useState(true)

  return (
    <div className="general-content">
      {uploadMode ? <UploadEdit setUploadMode={setUploadMode} /> : <Download setUploadMode={setUploadMode}/> }
    </div>
  )
}

export default App;
