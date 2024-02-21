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
  };

  return (
    <div className="App">
      <h1>Insulator defect detector</h1>
      <form
        action="http://localhost:8000"
        method="post"
        encType="multipart/form-data"
        onSubmit={submitForm}
      >
        File
        <input type="file" name="file" />
        <br />
        <button type="submit">Send</button>
      </form>
      {fileName && <YoloImageDisplay fileName={fileName} />}
    </div>
  );
}

export default App;
