import {contentIndexResult} from '../modules/Dom';

export class Utilities {
    destroyer() {
        localStorage.clear();
        while (contentIndexResult.firstChild) {
            contentIndexResult.firstChild.remove();
        }
    }
}