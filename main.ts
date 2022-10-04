input.onButtonPressed(Button.A, function () {
    if (heads && tails) {
        player2 += 1
        basic.showNumber(player2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (heads) {
        player1 += 1
        basic.showNumber(player1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (tails) {
        player1 += 1
        basic.showNumber(player1)
    }
})
let player1 = 0
let player2 = 0
let heads = 0
let tails = 0
tails = 0
heads = 0
player2 = 0
player1 = 0
