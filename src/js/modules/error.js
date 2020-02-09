class Error {
    constructor(){
        this.created = this._create();
    }
    _create(){
        const createEl = document.createElement('div');
        createEl.classList.add('.error');
    }
    delete(){
        this._container.removeChild(this.created);
    }
};

export { Error };