let mySprite = sprites.create(assets.image`ert`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`iop`, SpriteKind.Player)
let mySprite3 = sprites.create(assets.image`999`, SpriteKind.Enemy)
let mySprite4 = sprites.create(assets.image`0000`, SpriteKind.Enemy)
let mySprite7 = sprites.create(img`
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
let mySprite5 = sprites.create(assets.image`jj`, SpriteKind.Enemy)
let mySprite6 = sprites.create(img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level1`)
