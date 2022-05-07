basic.showIcon(IconNames.Heart)
rkSensorExt.MP3_init(SerialPin.P13, SerialPin.P12)
rkSensorExt.MP3_volume_set(25)
basic.forever(function () {
    rkSensorExt.MP3_play(rkSensorExt.playType.Last)
    basic.pause(2000)
})
