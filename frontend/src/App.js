import { useState } from "react";
import "./App.css";
import YoloImageDisplay from "./component/YoloImageDisplay";

function App() {
  const [fileName, setFileName] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFileName(data.fileName);
        console.log("Received filename from server:", data.fileName);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    document.getElementById("fileInput").value = "";
  };

  return (
    <div>
      <h1 className="p-4 bg-info text-white mb-5 text-center">
        Insulator Defect Detection
      </h1>
      <form
        action="http://localhost:8000"
        method="post"
        encType="multipart/form-data"
        onSubmit={submitForm}
        className="text-center background pt-5 m-5"
      >
        <label htmlFor="fileInput" className="background">
          File :
        </label>
        <br />
        <input
          type="file"
          name="file"
          id="fileInput"
          className="border bg-white m-2"
        />
        <br />
        <button type="submit" className="btn btn-warning  mb-5">
          Send
        </button>
      </form>
      {fileName && <YoloImageDisplay fileName={fileName} />}
    </div>
  );
}

export default App;
