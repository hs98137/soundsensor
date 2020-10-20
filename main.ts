let sound = 0
basic.forever(function () {
    if (sound == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
    sound = 0
    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        sound += 1
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(5000)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        sound += 0
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(3000)
    }
})
