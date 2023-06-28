let mano = 0
input.onGesture(Gesture.Shake, function () {
    mano = randint(1, 3)
    if (mano == 1) {
        basic.showIcon(IconNames.Square)
        music.play(music.stringPlayable("G C5 F B G D A C ", 120), music.PlaybackMode.UntilDone)
    } else if (mano == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . . . .
            `)
        music.play(music.stringPlayable("C G E A F B G C5 ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
