let button = document.querySelector('.button');
let buttonText = document.querySelector('tick');
// const tickMark = сюда нужно вставить svg картинку, но нормално он не хочет вставлять 
buttonText.innerHTML = "Купить";
button.addEventListener('click', function() {
    if (buttonText.innerHTML !== "Купить") {
        buttonText.innerHTML = "Купить";
    } else if (buttonText.innerHTML === "Купить") {
        buttonText.innerHTML = tickMark;
        this.classList.toggle('button__cirrcle');
    }
});


//в баузере он жалуеться на 4:22 и на 4:12 в этом файле