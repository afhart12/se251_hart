/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
let options = document.getElementById("options");
let side = document.querySelector(".sides");
options.addEventListener("click", function (e)
{
    side.classList.toggle("hidden");
});

/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

let fillColor = document.querySelectorAll(".fill");
let outputs = document.querySelectorAll(".output");

for (let i = 0; i < fillColor.length; i++) {
    
    fillColor[i].addEventListener("input", function () {
        player[i].fill = this.value;
        pad[i].fill = this.value;
        outputs[i].textContent = this.value;
    });
}

for (i = 0; i < fillColor.length; i++)
{
    player[i].fill = fillColor[i];
}

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
