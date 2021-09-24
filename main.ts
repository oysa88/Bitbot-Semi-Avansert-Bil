radio.onReceivedValue(function (name, value) {
    if (name == "O") {
        OnOff = value
    }
    if (name == "A") {
        Knapp_A = value
    }
    if (name == "B") {
        Knapp_B = value
    }
    if (name == "P") {
        Pitch = value * -22.7
    }
})
let Pitch = 0
let Knapp_B = 0
let Knapp_A = 0
let OnOff = 0
radio.setGroup(1)
bitbot.ledRainbow()
basic.forever(function () {
    if (OnOff == 1) {
        if (Knapp_A == 1) {
            bitbot.motor(BBMotor.Right, Pitch)
            bitbot.motor(BBMotor.Left, Pitch * -1)
        } else if (Knapp_B == 1) {
            bitbot.motor(BBMotor.Left, Pitch)
            bitbot.motor(BBMotor.Right, Pitch * -1)
        } else {
            bitbot.motor(BBMotor.Both, Pitch)
        }
    } else {
        bitbot.motor(BBMotor.Both, 0)
    }
})
