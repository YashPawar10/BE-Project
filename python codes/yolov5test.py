import sys
filename = sys.argv[1]

# -*- coding: utf-8 -*-

from ultralytics import YOLO

import cv2
from IPython.display import display, Image
from ultralytics import YOLO

# model = YOLO("E:/Project/weights/yolov5best.pt")

# conf_thresh = 0.25
# hide_conf = True

# img_path = "E:/Project/VOC/VOC/images/test/170030v.jpg"
# img = cv2.imread(img_path)

# results = model.predict(img, stream=True)

# for result in results:
#     boxes = result.boxes.cpu().numpy()  # get boxes on CPU in NumPy

# for box in boxes:  # iterate boxes
#     r = box.xyxy[0].astype(int)  # get corner points as int
#     class_name = model.names[int(box.cls[0])]  # get class name
#     confidence = box.conf[0]  # get confidence value

#     # Draw boxes, class name, and confidence on img with increased font size
#     cv2.rectangle(img, r[:2], r[2:], (0, 255, 0), 2)
#     # Format text with class name and confidence
#     display_text = f"{class_name}: {confidence:.2f}"
#     cv2.putText(img, display_text, (r[0], r[1] - 5),
#                 cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), 2, cv2.LINE_AA)

# # Save the modified image
# cv2.imwrite('E:/Project/python codes/output images/modified_image3.jpg', img)

# # Display the image in fullscreen
# img_path = 'E:/Project/python codes/output images/modified_image3.jpg'
# # display(Image(filename=img_path, width=1920, height=1080))
# Image(filename=img_path)


model = YOLO("E:/Project/weights/2yolov5best.pt")

conf_thresh = 0.25
hide_conf = True

# img_path = "E:/Project/VOC/VOC/images/test/170030v.jpg"
img_path = "E:/Project/BACKEND/uploads/"+filename+".jpg"
img = cv2.imread(img_path)

results = model.predict(img, stream=True)

for result in results:
    boxes = result.boxes.cpu().numpy()  # get boxes on CPU in NumPy

for box in boxes:  # iterate boxes
    r = box.xyxy[0].astype(int)  # get corner points as int
    class_name = model.names[int(box.cls[0])]  # get class name
    confidence = box.conf[0]  # get confidence value

    # Draw boxes, class name, and confidence on img with increased font size
    cv2.rectangle(img, r[:2], r[2:], (0, 255, 0), 2)
    # Format text with class name and confidence
    display_text = f"{class_name}: {confidence:.2f}"
    cv2.putText(img, display_text, (r[0], r[1] - 5),
                cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255, 255, 255), 2, cv2.LINE_AA)

# Save the modified image
# cv2.imwrite('modified_image2.jpg', img)
# E:\Project\python codes
# cv2.imwrite('E:/Project/python codes/output images/modified_image4.jpg', img)

cv2.imwrite('E:/Project/frontend/public/images/YOLO5-'+filename+'.jpg', img)

# Display the image in fullscreen
# img_path = 'E:/Project/python codes/output images/modified_image4.jpg'
# display(Image(filename=img_path, width=1920, height=1080))
# Image(filename=img_path)
