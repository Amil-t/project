time = 0
Count = 0

def on_button_pressed_a():
    global time, Count
    time = 0
    Count = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("Hello!")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_every_interval():
    global time, Count
    time += 2
    if time < 60:
        datalogger.log(datalogger.create_cv("0", time),
            datalogger.create_cv("1", input.light_level()))
        if input.light_level() < 25:
            Count += 2
loops.every_interval(2000, on_every_interval)

def on_forever():
    global Count
    if Count >= 10 and input.light_level() < 25:
        basic.show_icon(IconNames.NO)
    elif input.light_level() < 25:
        basic.show_icon(IconNames.SAD)
    else:
        if Count < 10:
            Count = 0
            basic.show_icon(IconNames.YES)
basic.forever(on_forever)
