let time = 0
let Count = 0
input.onButtonPressed(Button.A, function () {
    time = 0
    Count = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
loops.everyInterval(2000, function () {
    time += 2
    if (time < 60) {
        datalogger.log(
        datalogger.createCV("0", time),
        datalogger.createCV("1", input.lightLevel())
        )
        if (input.lightLevel() < 25) {
            Count += 2
        }
    }
})
basic.forever(function () {
    if (Count >= 10 && input.lightLevel() < 25) {
        basic.showIcon(IconNames.No)
    } else if (input.lightLevel() < 25) {
        basic.showIcon(IconNames.Sad)
    } else if (Count < 10) {
        Count = 0
        basic.showIcon(IconNames.Yes)
    }
})
