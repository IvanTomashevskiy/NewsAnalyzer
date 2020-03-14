import {
    XSS_WARNING,
    SPACES_DELETE_REG
} from './consts';

import {input} from './Dom';

export class UserRequest{

    validation() {

        
        if ((input.checkValidity()) && (input.value.trim() !== '')) {
            if (this._xssProtect() !== '') {
                return this._xssProtect();
            } else this._updateInput('Нужно ввести ключевое слово');
        } else this._updateInput('Нужно ввести ключевое слово');
    }
    _xssProtect() {
        const xssTests = input.value.trim().split('');
        xssTests.forEach((item, index) => {
            if (XSS_WARNING.includes(item)) {
                xssTests[index] = ' ';
            }
        });
        return xssTests.join('').replace(SPACES_DELETE_REG, ' ').trim();
    }

    _updateInput(str) {
        input.value = '';
        input.setAttribute('placeholder', str);
        input.classList.add('placeholder-style');
    }
}