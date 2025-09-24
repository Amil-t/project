let Count = 0
loops.everyInterval(2000, function () {
    basic.showNumber(input.runningTime())
    datalogger.log(datalogger.createCV("1", input.runningTime()))
    Count += 1
})
basic.forever(function () {
    if (Count >= 10 && input.lightLevel() < 25) {
    	
    } else if (input.lightLevel() < 25) {
        Count += 1
    } else {
        Count = 0
    }
})
