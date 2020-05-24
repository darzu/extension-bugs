// Add your code here

namespace foobar {
    //% block="foo $txt || as $fg on $bg"
    //% blockId="foo_create"
    //% blockSetVariable="textSprite"
    //% expandableArgumentMode="toggle"
    //% bg.defl=0
    //% bg.shadow="colorindexpicker"
    //% fg.defl=1
    //% fg.shadow="colorindexpicker"
    //% txt.defl="foo"
    //% group="Create"
    //% weight=100
    export function foo(
        txt: string = "foo",
        bg: number = 0,
        fg: number = 1): number {
        return 3
    }
}