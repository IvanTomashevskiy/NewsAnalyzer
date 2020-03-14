import { Error } from "./error.js";

class ErrorNothingFound extends Error {
    constructor() {
        this.nothing = this._elements();
    }
    _elements(){
        const createImg = createEl.createElement('img');
        createImg.classList.add('.error__image');
        createImg.src = "../img/error__nothing-found.png";

        const createH3 = createEl.createElement('h3');
        createH3.classList.add('.error__caption');
        createH3.classList.add('.error__caption_h3');
        createH3.innerText = "Ничего не найдено";

        const createP = createEl.createElement('p');
        createP.classList.add('.error__text');
        createP.classList.add('.error__text_block');
        createP.innerText = "К сожалению по вашему запросу ничего не найдено.";

        createEl.appendChild(createImg);
        createEl.appendChild(createH3);
        createEl.appendChild(createP);
    }
}

export { ErrorNothingFound }