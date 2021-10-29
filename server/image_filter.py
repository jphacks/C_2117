import glob
import os

from PIL import Image
from PIL.ExifTags import TAGS

os.chdir("./media")
images = glob.glob('*.JPG')
os.chdir("./test")
i=0
for fname in images:
    os.chdir("..")
    i+=1
    print(fname)
    # 画像ファイルを開く
    im = Image.open(fname)
    exif = im._getexif()
    dic_ = {}
    date=str(i)
    tag = str(i)
    for id, value in exif.items():
        dic_[TAGS.get(id)] = value
        if TAGS.get(id) == "DateTimeOriginal":
            year = dic_['DateTimeOriginal'].split(' ')[0].split(':')[0]
            date = str(i)+"_Original_"+dic_['DateTimeOriginal'].split(' ')[0].split(':')[1] + '-' + dic_['DateTimeOriginal'].split(' ')[0].split(':')[2]
            continue
        if date==str(i) and TAGS.get(id) == "DateTimeDigitized":
            tag = str(i)+"_Digitized_"+dic_['DateTimeDigitizedl']

    os.chdir("./test")
    im.save(date+".jpg")


