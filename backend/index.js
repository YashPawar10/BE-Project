const express = require("express");
const app = express();
const multer = require("multer");
const { exec } = require("child_process");//for python
const path = require("path");
const cors = require("cors");

const pythonScript1 = path.join("E:/Project/python codes", "yolov3test.py");
const pythonScript2 = path.join("E:/Project/python codes", "yolov5test.py");
const pythonScript3 = path.join("E:/Project/python codes", "yolov8test.py");

let originalname;


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const date = Date.now()+"-";
    originalname = date+path.parse(file.originalname).name; 
    return cb(null, date+file.originalname);
  },
});
const upload = multer({ storage: storage });

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("Hello from Home Page");
});

app.post("/", upload.single("file"), (req, res) => {
  // filename = req.body.name;
  // console.log(req.body);
  // console.log(req.file);
  console.log(originalname);
  
  //yolo-3
  exec(
    `"C:/Users/Dell/AppData/Local/Programs/Python/Python312/python.exe" "${pythonScript1}" "${originalname}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        return;
      }
      
      console.log(`Python script output:\n${stdout}`);
      console.error(`Python script errors:\n${stderr}`);
    }
    );
  
    // yolo-5 
    exec(
    `"C:/Users/Dell/AppData/Local/Programs/Python/Python312/python.exe" "${pythonScript2}" "${originalname}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        return;
      }
      
      console.log(`Python script output:\n${stdout}`);
      console.error(`Python script errors:\n${stderr}`);
    }
    );

    //yolo-7

    exec(
    `"C:/Users/Dell/AppData/Local/Programs/Python/Python312/python.exe" "${pythonScript3}" "${originalname}"`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        return;
      }
      
      console.log(`Python script output:\n${stdout}`);
      console.error(`Python script errors:\n${stderr}`);
    }
    );
    
    res.json({fileName:originalname});

});

app.listen(8000, () => {
  console.log("server started");
});
