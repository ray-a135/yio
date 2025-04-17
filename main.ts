controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite14 = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . 2 2 4 4 . . . 4 
        4 . . . . . . 2 2 4 2 5 4 4 . 4 
        4 . . . . 2 2 2 2 4 5 5 2 4 . 4 
        4 . . . 2 2 2 2 4 5 5 5 4 2 . 4 
        4 . . 2 . 2 2 4 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 2 5 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 4 5 5 5 5 4 4 2 4 4 
        4 . . 2 2 4 2 5 5 5 5 4 4 2 4 . 
        4 . . 2 2 4 5 5 5 5 5 4 2 2 4 . 
        4 . 2 2 4 2 5 5 5 5 4 . 2 . 4 . 
        4 . 2 2 4 5 5 5 5 5 4 2 2 . 4 . 
        4 . . 2 4 5 5 5 5 5 4 2 . 2 4 4 
        4 . . 2 4 4 4 4 4 4 2 2 2 . . 4 
        4 . . . 2 2 4 4 4 4 . . . . . 4 
        4 . . . . . . . . . 4 4 4 4 4 4 
        `, SpriteKind.Projectile)
    projectile = sprites.createProjectileFromSprite(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . 2 2 4 4 . . . 4 
        4 . . . . . . 2 2 4 2 5 4 4 . 4 
        4 . . . . 2 2 2 2 4 5 5 2 4 . 4 
        4 . . . 2 2 2 2 4 5 5 5 4 2 . 4 
        4 . . 2 . 2 2 4 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 2 5 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 4 5 5 5 5 4 4 2 4 4 
        4 . . 2 2 4 2 5 5 5 5 4 4 2 4 . 
        4 . . 2 2 4 5 5 5 5 5 4 2 2 4 . 
        4 . 2 2 4 2 5 5 5 5 4 . 2 . 4 . 
        4 . 2 2 4 5 5 5 5 5 4 2 2 . 4 . 
        4 . . 2 4 5 5 5 5 5 4 2 . 2 4 4 
        4 . . 2 4 4 4 4 4 4 2 2 2 . . 4 
        4 . . . 2 2 4 4 4 4 . . . . . 4 
        4 . . . . . . . . . 4 4 4 4 4 4 
        `, mySprite2, 50, 50)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 9 8 8 9 f 8 6 9 f 8 8 
        . . . . 9 9 8 9 f 8 6 9 f 8 6 6 
        . . . . 9 8 8 9 8 6 9 f 9 8 6 9 
        . . . . 8 8 9 8 9 6 f f 8 6 9 8 
        . . . 8 8 9 8 6 6 9 f 8 6 f 9 8 
        . . . 8 9 9 6 9 9 f 8 6 f 9 8 9 
        . . 8 8 9 6 9 9 f 8 8 6 9 9 8 9 
        . . 8 9 f 6 9 f f 8 6 9 9 8 9 . 
        . 8 5 f 6 9 f f 8 f 6 9 8 9 . . 
        9 8 f 9 6 9 f 8 f 6 9 8 8 9 . . 
        8 9 f 6 9 f 9 8 f 6 9 8 5 3 . . 
        8 f 6 9 f 8 8 f 6 9 8 5 . . . . 
        9 6 6 f f 8 f 9 6 9 8 . . . . . 
        9 8 f f 8 8 9 6 9 8 8 . . . . . 
        9 8 f 9 8 f 6 6 9 8 . . . . . . 
        f f 9 8 f 9 6 9 9 8 . . . . . . 
        `, mySprite7, 50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite14 = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . 2 2 4 4 . . . 4 
        4 . . . . . . 2 2 4 2 5 4 4 . 4 
        4 . . . . 2 2 2 2 4 5 5 2 4 . 4 
        4 . . . 2 2 2 2 4 5 5 5 4 2 . 4 
        4 . . 2 . 2 2 4 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 2 5 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 4 5 5 5 5 4 4 2 4 4 
        4 . . 2 2 4 2 5 5 5 5 4 4 2 4 . 
        4 . . 2 2 4 5 5 5 5 5 4 2 2 4 . 
        4 . 2 2 4 2 5 5 5 5 4 . 2 . 4 . 
        4 . 2 2 4 5 5 5 5 5 4 2 2 . 4 . 
        4 . . 2 4 5 5 5 5 5 4 2 . 2 4 4 
        4 . . 2 4 4 4 4 4 4 2 2 2 . . 4 
        4 . . . 2 2 4 4 4 4 . . . . . 4 
        4 . . . . . . . . . 4 4 4 4 4 4 
        `, SpriteKind.Projectile)
    mySprite6 = sprites.create(img`
        . . . . . 9 8 8 9 f 8 6 9 f 8 8 
        . . . . 9 9 8 9 f 8 6 9 f 8 6 6 
        . . . . 9 8 8 9 8 6 9 f 9 8 6 9 
        . . . . 8 8 9 8 9 6 f f 8 6 9 8 
        . . . 8 8 9 8 6 6 9 f 8 6 f 9 8 
        . . . 8 9 9 6 9 9 f 8 6 f 9 8 9 
        . . 8 8 9 6 9 9 f 8 8 6 9 9 8 9 
        . . 8 9 f 6 9 f f 8 6 9 9 8 9 . 
        . 8 5 f 6 9 f f 8 f 6 9 8 9 . . 
        9 8 f 9 6 9 f 8 f 6 9 8 8 9 . . 
        8 9 f 6 9 f 9 8 f 6 9 8 5 3 . . 
        8 f 6 9 f 8 8 f 6 9 8 5 . . . . 
        9 6 6 f f 8 f 9 6 9 8 . . . . . 
        9 8 f f 8 8 9 6 9 8 8 . . . . . 
        9 8 f 9 8 f 6 6 9 8 . . . . . . 
        f f 9 8 f 9 6 9 9 8 . . . . . . 
        `, SpriteKind.Projectile)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 9 8 8 9 f 8 6 9 f 8 8 
        . . . . 9 9 8 9 f 8 6 9 f 8 6 6 
        . . . . 9 8 8 9 8 6 9 f 9 8 6 9 
        . . . . 8 8 9 8 9 6 f f 8 6 9 8 
        . . . 8 8 9 8 6 6 9 f 8 6 f 9 8 
        . . . 8 9 9 6 9 9 f 8 6 f 9 8 9 
        . . 8 8 9 6 9 9 f 8 8 6 9 9 8 9 
        . . 8 9 f 6 9 f f 8 6 9 9 8 9 . 
        . 8 5 f 6 9 f f 8 f 6 9 8 9 . . 
        9 8 f 9 6 9 f 8 f 6 9 8 8 9 . . 
        8 9 f 6 9 f 9 8 f 6 9 8 5 3 . . 
        8 f 6 9 f 8 8 f 6 9 8 5 . . . . 
        9 6 6 f f 8 f 9 6 9 8 . . . . . 
        9 8 f f 8 8 9 6 9 8 8 . . . . . 
        9 8 f 9 8 f 6 6 9 8 . . . . . . 
        f f 9 8 f 9 6 9 9 8 . . . . . . 
        `, mySprite, 50, 50)
    projectile = sprites.createProjectileFromSprite(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 . . . . . . . 2 2 4 4 . . . 4 
        4 . . . . . . 2 2 4 2 5 4 4 . 4 
        4 . . . . 2 2 2 2 4 5 5 2 4 . 4 
        4 . . . 2 2 2 2 4 5 5 5 4 2 . 4 
        4 . . 2 . 2 2 4 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 2 5 5 5 5 5 4 2 2 4 
        4 . . 2 2 2 4 5 5 5 5 4 4 2 4 4 
        4 . . 2 2 4 2 5 5 5 5 4 4 2 4 . 
        4 . . 2 2 4 5 5 5 5 5 4 2 2 4 . 
        4 . 2 2 4 2 5 5 5 5 4 . 2 . 4 . 
        4 . 2 2 4 5 5 5 5 5 4 2 2 . 4 . 
        4 . . 2 4 5 5 5 5 5 4 2 . 2 4 4 
        4 . . 2 4 4 4 4 4 4 2 2 2 . . 4 
        4 . . . 2 2 4 4 4 4 . . . . . 4 
        4 . . . . . . . . . 4 4 4 4 4 4 
        `, mySprite11, 50, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    enemylives += -1
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    if (enemylives == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    }
})
let mySprite6: Sprite = null
let projectile: Sprite = null
let mySprite14: Sprite = null
let mySprite7: Sprite = null
let mySprite2: Sprite = null
let mySprite11: Sprite = null
let mySprite: Sprite = null
let enemylives = 0
info.setLife(3)
mp.setPlayerIndicatorsVisible(true)
enemylives = 56
mySprite = sprites.create(assets.image`ert`, SpriteKind.Player)
game.showLongText("", DialogLayout.Bottom)
mySprite11 = sprites.create(assets.image`uio`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`iop`, SpriteKind.Player)
let mySprite13 = sprites.create(assets.image`0000`, SpriteKind.Enemy)
music.play(music.stringPlayable("C D B B G E G C5 ", 120), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(assets.image`9787212rr9r8r8tjdjikjkji0j`)
let mySprite4 = sprites.create(assets.image`999`, SpriteKind.Enemy)
mySprite7 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
controller.player2.moveSprite(mySprite2)
controller.player3.moveSprite(mySprite11)
controller.player4.moveSprite(mySprite7)
let mySprite3 = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
mySprite4.follow(mySprite, 55)
let mySprite12 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
mySprite.setPosition(10, 19)
mySprite2.setPosition(10, 19)
mySprite7.setPosition(10, 19)
mySprite11.setPosition(10, 19)
mySprite12.setPosition(125, 91)
mySprite12.setPosition(125, 91)
mySprite3.setPosition(125, 91)
info.setScore(0)
game.onUpdateInterval(500, function () {
    mySprite4 = sprites.create(assets.image`999`, SpriteKind.Enemy)
    mySprite4.setPosition(randint(0, 160), randint(20, 110))
})
