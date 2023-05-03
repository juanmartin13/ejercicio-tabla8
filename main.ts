let variable8 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable8 = 8
    basic.showNumber(variable8)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable8)
})
