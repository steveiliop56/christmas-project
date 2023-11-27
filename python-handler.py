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

def led_strip_controller(color_list):
    print("Settings colors!")
    for i in range(7):
        color = color_list[i]
        pixels[i] = tuple(int(color[i:i+2], 16) for i in (0, 2, 4))

def play_music(song):
    proc = subprocess.Popen(f"mpg123 music/{str(song)}.mp3", shell=True)

def stop_music():
    subprocess.Popen("pkill mpg123", shell=True)

try:
    try:
        if sys.argv[1] == "pixels":
            import board
            import neopixel
            pixels = neopixel.NeoPixel(board.D21, 8)
            color_list = [sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9]]
            led_strip_controller(color_list)
    except:
        pass

    try:
        if sys.argv[1] == "servo":
            servo = Servo(20)
            from gpiozero import Servo
            servo_toggle()
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
except:
    print("ERROR: An error occured!")