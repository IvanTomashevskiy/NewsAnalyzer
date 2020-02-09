import { Error } from "./error.js";

class ErrorApi extends Error {
    constructor() {
        this.nothing = this._elements();
    }
    _elements(){
        const createImg = createEl.createElement('img');
        createImg.classList.add('.error__image');
        createImg.src = "../img/error__sad.png";

        const createH3 = createEl.createElement('h3');
        createH3.classList.add('.error__caption');
        createH3.classList.add('.error__caption_h3');
        createH3.innerText = "Api не отвечает";

        const createP = createEl.createElement('p');
        createP.classList.add('.error__text');
        createP.classList.add('.error__text_block');
        createP.innerText = "К сожалению Api не отвечает, попробуйте позднее.";

        createEl.appendChild(createImg);
        createEl.appendChild(createH3);
        createEl.appendChild(createP);
    }
}

export { ErrorApi}