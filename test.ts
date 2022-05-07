// 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
//% color="#0f80ea" weight=`10` icon="\uf1d1"
namespace rkSensorExt {
    export enum playType {
        //% block="播放"
        Play = 0x01,
        //% block="暂停"
        Pause = 0x02,
        //% block="下一曲"
        Last = 0x03,
        //% block="上一曲"
        Next = 0x04,
        //% block="音量+"
        VolumeUp = 0x05,
        //% block="音量-"
        VolumeDn = 0x06,
        //% block="停止播放"
        Stop = 0x0E
    }
    //% blockId=rkSensorExt_MP3Init block="MP3模块初始化RX|%pin1|TX %pin2"
    //% weight=50
    //% blockGap=100
    export function MP3_init(pin1: SerialPin, pin2: SerialPin): void {
        let item = ""
        serial.redirect(
            pin1,
            pin2,
            BaudRate.BaudRate9600
        )
        item = serial.readString()
        basic.pause(100)
    }
    //% blockId=rkSensorExt_MP3Play block="设置MP3模块播放模式为|%type"
    //% weight=50
    //% blockGap=100
    export function MP3_play(type: playType): void {
        let buffer = pins.createBuffer(4);
        buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
        buffer.setNumber(NumberFormat.UInt8BE, 1, 0x02)
        buffer.setNumber(NumberFormat.UInt8BE, 2, type)
        //buffer.setNumber(NumberFormat.UInt8BE, 3, 0x00)
        buffer.setNumber(NumberFormat.UInt8BE, 3, 0xEF)
        serial.writeBuffer(buffer)
        basic.pause(100)
    }
    //% weight=40
    //% vol.min=0 vol.max=30
    //% blockGap=20
    //% blockId="MP3_volume_set"
    //% block="设置MP3音量|%vol"
    export function MP3_volume_set(vol: number): void {
        let buffer = pins.createBuffer(5);
        buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
        buffer.setNumber(NumberFormat.UInt8BE, 1, 0x03)
        buffer.setNumber(NumberFormat.UInt8BE, 2, 0x31)
        buffer.setNumber(NumberFormat.UInt8BE, 3, <number>vol)
        buffer.setNumber(NumberFormat.UInt8BE, 4, 0xEF)
        serial.writeBuffer(buffer)
    }
}
