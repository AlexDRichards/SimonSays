# Notes
* 1/24 - built the backbone html and css
# 1/25 -

## Parts of Program
* need Simon to flash a specific number of colors and those colors need to get stored somewhere to be checked against user
input.
* square tiles need to be clickable so that the color value of the square is stored somewhere to be checked against simon's sequence.
* A round counter that indicates the given round.
* A high score field that lists the top three scores in the form of pattern sequence lengths
* A start button to initiate the round
* A countdown that displays in box before round begins (3...2...1); 1 second intervals.
* A quit button that logs the current score to the score tracking list


## Getting the Colors
* create an array with the four colors as string elements.
* To select a random color, generate a random number between 0 and 1 less than then total number of colors
* Use the number as a selector to pick a color and store it in another data structure
* pick as many colors as permitted by the round counter + 2 (round 1: 3colors; ; 2: 4colors; 3: 5colors ...)


## Displaying the colors
* simon iterates through the selected colors
* each color lasts for 1 second before next color
* the simon box displays each color
* 
