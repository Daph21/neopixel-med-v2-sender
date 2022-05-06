radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.soundLevel())
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
