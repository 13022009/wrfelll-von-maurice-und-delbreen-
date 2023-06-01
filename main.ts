input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
	
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("Hallo Herr Schmitz Ich und Delbreen wünschen ihnen einen Schönen Tag ")
})
input.onGesture(Gesture.Shake, function () {
    Augenzahl += randint(0, 5 + 1)
    if (Augenzahl == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        Augenzahl = 0
    } else if (Augenzahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        Augenzahl = 0
    } else if (Augenzahl == 6) {
        basic.showLeds(`
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            `)
        Augenzahl = 0
    } else if (Augenzahl == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
        Augenzahl = 0
    } else if (Augenzahl == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        Augenzahl = 0
    } else if (Augenzahl == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
        Augenzahl = 0
    } else {
    	
    }
})
let Augenzahl = 0
basic.showString("Viel Spaß mit dem Wuerfel")
basic.forever(function () {
	
})
