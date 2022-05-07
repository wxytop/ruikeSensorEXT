// // 在此处添加您的代码
// // 在此处测试；当此软件包作为插件使用时，将不会编译此软件包。
// //% color="#0f80ea" weight=`10` icon="\uf1d1"
// namespace rkSensorExt {
//     export enum playType {
//         //% block="播放"
//         Play = 0x01,
//         //% block="暂停"
//         Pause = 0x02,
//         //% block="下一曲"
//         Last = 0x03,
//         //% block="上一曲"
//         Next = 0x04,
//         //% block="音量+"
//         VolumeUp = 0x05,
//         //% block="音量-"
//         VolumeDn = 0x06,
//         //% block="停止播放"
//         Stop = 0x0E
//     }
//     /**
//     * 枚举：播放模式
//     */
//     export enum playLoop {
//         //% block="全部循环"
//         LOOP_ALL = 0x00,
//         //% block="文件夹循环"
//         LOOP_FOLDER = 0x01,
//         //% block="单曲循环"
//         LOOP_ONE = 0x02,
//         //% block="随机播放"
//         LOOP_RAM = 0x03
//     }
//     export enum equalizer {
//         //% block="普通"
//         Normal = 0x00,
//         //% block="流行"
//         Pop = 0x01,
//         //% block="摇滚+"
//         Rock = 0x02,
//         //% block="爵士"
//         Jazz = 0x03,
//         //% block="古典"
//         Classic = 0x04,
//         //% block="低音"
//         Bass = 0x05
//     }
//     //% blockId=rkSensorExt_MP3Init block="MP3模块初始化RX|%pin1|TX %pin2"
//     //% weight=90
//     //% blockGap=20
//     export function MP3_init(pin1: SerialPin, pin2: SerialPin): void {
//         let item = ""
//         serial.redirect(
//             pin1,
//             pin2,
//             BaudRate.BaudRate9600
//         )
//         item = serial.readString()
//         basic.pause(100)
//     }
//     //% blockId=rkSensorExt_MP3Play block="设置MP3模块播放模式为|%type"
//     //% weight=80
//     //% blockGap=20
//     export function MP3_play(type: playType): void {
//         let buffer = pins.createBuffer(4);
//         buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
//         buffer.setNumber(NumberFormat.UInt8BE, 1, 0x02)
//         buffer.setNumber(NumberFormat.UInt8BE, 2, type)
//         //buffer.setNumber(NumberFormat.UInt8BE, 3, 0x00)
//         buffer.setNumber(NumberFormat.UInt8BE, 3, 0xEF)
//         serial.writeBuffer(buffer)
//         basic.pause(100)
//     }
//     //% weight=70
//     //% vol.min=0 vol.max=30
//     //% blockGap=20
//     //% blockId="MP3_volume_set"
//     //% block="设置MP3音量|%vol"
//     export function MP3_volume_set(vol: number): void {
//         let buffer = pins.createBuffer(5);
//         buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
//         buffer.setNumber(NumberFormat.UInt8BE, 1, 0x03)
//         buffer.setNumber(NumberFormat.UInt8BE, 2, 0x31)
//         buffer.setNumber(NumberFormat.UInt8BE, 3, <number>vol)
//         buffer.setNumber(NumberFormat.UInt8BE, 4, 0xEF)
//         serial.writeBuffer(buffer)
//     }
//     //% weight=60
//     //% num.min=1 num.max=65535
//     //% blockGap=20
//     //% blockId="MP3_assign_song"
//     //% block="MP3播放第 |%num首歌"
//     export function MP3_assign_song(num: number): void {
//         num = num < 1 ? 1 : (num > 65535 ? 65535 : num)
//         let buffer = pins.createBuffer(6);
//         let num_h = (num >> 8) & 0xFF
//         let num_l = num & 0xFF
//         buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
//         buffer.setNumber(NumberFormat.UInt8BE, 1, 0x04)
//         buffer.setNumber(NumberFormat.UInt8BE, 2, 0x41)
//         buffer.setNumber(NumberFormat.UInt8BE, 3, num_h)
//         buffer.setNumber(NumberFormat.UInt8BE, 4, num_l)
//         buffer.setNumber(NumberFormat.UInt8BE, 5, 0xEF)
//         serial.writeBuffer(buffer)
//     }
//     //% blockId=rkSensorExt_MP3LoopMode block="设置MP3 循环模式为|%loopMode"
//     //% weight=50
//     //% blockGap=10
//     export function MP3_loopMode(loopMode: playLoop): void {
//         let buffer = pins.createBuffer(5);
//         buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
//         buffer.setNumber(NumberFormat.UInt8BE, 1, 0x03)
//         buffer.setNumber(NumberFormat.UInt8BE, 2, 0x33)
//         buffer.setNumber(NumberFormat.UInt8BE, 3, loopMode)
//         buffer.setNumber(NumberFormat.UInt8BE, 4, 0xEF)
//         serial.writeBuffer(buffer)
//     }
//     //% weight=40
//     //% blockGap=10
//     //% blockId="MP3_eq_set"
//     //% block="设置MP3播放音效%eq"
//     export function MP3_eq_set(eq: equalizer): void {
//         let buffer = pins.createBuffer(5);
//         buffer.setNumber(NumberFormat.UInt8BE, 0, 0x7E)
//         buffer.setNumber(NumberFormat.UInt8BE, 1, 0x03)
//         buffer.setNumber(NumberFormat.UInt8BE, 2, 0x32)
//         buffer.setNumber(NumberFormat.UInt8BE, 3, eq)
//         buffer.setNumber(NumberFormat.UInt8BE, 4, 0xEF)
//         serial.writeBuffer(buffer)
//     }
// }
