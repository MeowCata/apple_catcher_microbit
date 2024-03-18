input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
let apple: game.LedSprite = null
let player: game.LedSprite = null
serial.redirectToUSB()
player = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    serial.writeLine("" + (game.score()))
    apple = game.createSprite(randint(0, 4), 0)
    basic.pause(300)
    while (apple.get(LedSpriteProperty.Y) < 4) {
        apple.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (player.isTouching(apple)) {
        game.addScore(1)
        apple.delete()
    } else {
        game.gameOver()
    }
})
