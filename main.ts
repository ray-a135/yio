let mySprite = sprites.create(assets.image`ert`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`iop`, SpriteKind.Player)
let mySprite3 = sprites.create(assets.image`999`, SpriteKind.Enemy)
let mySprite4 = sprites.create(assets.image`0000`, SpriteKind.Enemy)
let mySprite5 = sprites.create(assets.image`jj`, SpriteKind.Player)
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
