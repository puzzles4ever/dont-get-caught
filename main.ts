namespace SpriteKind {
    export const UI = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.clear()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == Pizza) {
        controller.moveSprite(mySprite, 150, 150)
        sprites.destroy(otherSprite)
        pause(5000)
        controller.moveSprite(mySprite, 30, 30)
    } else {
        controller.moveSprite(mySprite, 100, 100)
        sprites.destroy(otherSprite)
        pause(500)
        controller.moveSprite(mySprite, 30, 30)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (info.score() > info.highScore()) {
        game.setGameOverMessage(true, "Getting better!")
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    } else {
        game.setGameOverMessage(false, "Better luck next time")
        game.gameOver(false)
    }
})
let mySprite3: Sprite = null
let Pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 30, 30)
mySprite.setStayInScreen(true)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . c c c c . . . 
    . . . . . . . c c d d d d c . . 
    . . . . . c c c c c c d d c . . 
    . . . c c c 4 4 4 4 d c c c c c 
    . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
    . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
    f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
    f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
    f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
    . f 4 4 4 4 1 4 4 f 4 4 d f . . 
    . . f 4 4 1 4 c c 4 4 d f . . . 
    . . . f d 4 4 4 4 4 4 c f . . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(30, 30)
mySprite2.follow(mySprite, 20)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    if (info.score() > 50 && !(info.score() > 100)) {
        mySprite2.follow(mySprite, 30)
    } else if (info.score() > 100) {
        mySprite2.follow(mySprite, 50)
    }
})
forever(function () {
    if (randint(0, 100) == 7) {
        mySprite3 = sprites.create(img`
            ..............eeeeeee...........
            ............ee455662e2e.........
            ..........ee45556723e2688.......
            .........e46776677232e777668....
            ........e46745554772227776778...
            .......4448744444777766777678...
            ......4522e7777776777766676668..
            .....4523227766722e666eeeee888..
            ....455232e76672322e4555dddd48..
            ...44567777554623e455ddddddddd4.
            ...e66774554477e455dddd55554dd44
            ..e46777444677e55dd55555d55dddd4
            ..e5668677666e5dd555555555555dde
            .e45544e8776e5d555554555555555de
            .e554eeee66e5d5555d55555dddd54de
            .e55ee44fee5d5d555555d5d5dddddde
            e454eeeefe45d55555555555dd4ddde.
            e5e4eefffe5d55555555d5555dddde..
            e5ee4eeff45d555555555555dddde...
            e5eeeeffe5d55d555d5555d5ddde....
            e5ffefeee5d55545555555ddd4e.....
            e5ffffffe545555555d5d4ddee......
            e54efeff45d55d55555dddde........
            e5eeeffe5dd5555545dddee.........
            e4eeefff5d5555d55ddde...........
            e4efefff5d5d55555d4e............
            .e4efffe5d555555dee.............
            .e54eeee5d545dd4e...............
            ..e554ee5dddddee................
            ...ee5544dddee..................
            .....eeeeeee....................
            ................................
            `, SpriteKind.Food)
        mySprite3.setPosition(randint(0, 160), randint(0, 120))
    }
})
forever(function () {
    if (randint(0, 100) == 7) {
        Pizza = sprites.create(img`
            .............beebbbb............
            ............eebbbb4bb...........
            ............eb344bb4bb..........
            ............e44334bb4bb.........
            ............eb433344b4be........
            ............4eb43344444be.......
            ...........bd4eb43333344bb......
            ..........b455d4443333444bb.....
            ..........4d5555d444333444bb....
            .........4555555dd4b4443444be...
            ........bd5555d555d4bb444444ee..
            ........b55ddd665555bb4b44444ee.
            .......bd5555677655554ebb44444eb
            .......43222558855555d4eeb44b4ee
            ......b422332ddd555222d4eebbb4be
            ......be22232ed55522332db4ebbbbe
            .....bde22222e555e22232edd4bbbbe
            .....b52e222e3555e22222eddd4ebee
            ....bd552eee355552e222e355544eee
            ....665dd5555555552eee355dd4deee
            ...6776555555555555555551554d4ee
            ...4885222555dddd6655551544d4eee
            ..b45522332555dd677611d444ddeee.
            ..4d5222232e55555881d44ddd4eee..
            .bdd5e22222e555115114d54d4ee....
            .b55d2e222e351144d1d55eeee......
            bd5ddd2eee3d444555dd4e..........
            b555115dddd55d544eede...........
            4511d444d5544ee...4de...........
            41d4555d4ee........44...........
            41554eede.......................
            44ee...4e.......................
            `, SpriteKind.Food)
        Pizza.setPosition(randint(0, 160), randint(0, 120))
    }
})
