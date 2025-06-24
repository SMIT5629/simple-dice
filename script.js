function rollDice() {
    const result = document.getElementById("result");
    const image = document.getElementById("image");

    const random = Math.floor(Math.random() * 6) + 1;
    result.innerHTML = `Dice Roll: ${random}`;
    image.src = `dice_image/${random}.png`; 
}
