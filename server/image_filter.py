import cv2
import glob
import os

from PIL import Image
from PIL.ExifTags import TAGS

os.chdir("./media")
images = glob.glob('*.JPG')
os.chdir("./test")
i=0
for fname in images:
    img = cv2.imread(fname)




