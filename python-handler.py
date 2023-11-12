from time import sleep
import sys

def servo_toggle():
    print("Dropping!")
    servo.max()
    sleep(0.5)
    servo.mid()
    sleep(1)
    servo.min()
    sleep(0.5)
    servo.mid()

def led_strip_controller(color0, color1, color2, color3, color4, color5, color6, color7):
    print("Settings colors!")
    pixels[0] = color0
    pixels[1] = color1
    pixels[2] = color2
    pixels[3] = color3
    pixels[4] = color4
    pixels[5] = color5
    pixels[6] = color6
    pixels[7] = color7

def play_music(song):
    if song == "1":
        proc = subprocess.Popen("mpg123 music/1.mp3", shell=True)
    if song == "2":
        proc = subprocess.Popen("mpg123 music/2.mp3", shell=True)
    if song == "3":
        proc = subprocess.Popen("mpg123 music/3.mp3", shell=True)
    if song == "4":
        proc = subprocess.Popen("mpg123 music/4.mp3", shell=True)
    if song == "5":
        proc = subprocess.Popen("mpg123 music/5.mp3", shell=True)
    if song == "6":
        proc = subprocess.Popen("mpg123 music/6.mp3", shell=True)

def stop_music():
    subprocess.Popen("pkill mpg123", shell=True)


try:
    try:
        if sys.argv[1] == "pixels":
            import board
            import neopixel
            pixels = neopixel.NeoPixel(board.D21, 8)
    except:
        pass

    try:
        if sys.argv[1] == "servo":
            servo = Servo(20)
            from gpiozero import Servo
    except:
        pass

    try:
        if sys.argv[1] == "song":
            import subprocess
            if sys.argv[2] == "play":
                play_music(sys.argv[3])
            elif sys.argv[2] == "stop":
                stop_music()
    except:
        pass

    print("ERROR: No arguments were provided.")
except:
    print("ERROR: An error occured!")