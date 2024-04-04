from ultralytics import YOLO
python detect.py --weights runs/train/yolov7-custom11/weights/last.pt --conf 0.5 --img-size 640 --source testimages/test/160730v.jpg --no-trace