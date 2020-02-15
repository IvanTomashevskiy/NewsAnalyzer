import "../styles/pages/index.css";
import {
    buttonSearch,
    buttonMoreContainer,
    buttonMore
} from '../js/modules/Dom';

import {UserRequest} from '../styles/blocks/search/userReq';

import {Utilities} from '../js/modules/utilities';
import {DateCalc} from '../js/modules/Date';

import {NewsAPI} from '../js/modules/api/NewsApi';
import {Storage} from '../js/modules/storage';

import {Cards} from '../styles/blocks/results/cards';

let query;

const userRequest = new UserRequest;
const utilities = new Utilities;
const dateCalc = () => new DateCalc;

const dateForApi = dateCalc().getDateForApi();
const newsApi = new NewsAPI(dateForApi);

const storage = new Storage;
const cards = new Cards;

const newsLoad = () => {
    if (storage.checkLocalstorage()) {
        cards.newsVisible();
    if (storage.load().length > 3) {
        cards.blockVisible(buttonMoreContainer, 'flex');
    } else {
        cards.blockVisible(buttonMoreContainer, 'none');
    }
    cards.createCardsBlock(storage.load(), dateCalc());
    }
}

if (storage.checkLocalstorage()) {
    cards.starter();
    newsLoad();
}

buttonMore.addEventListener('click', () => cards.showMore(storage.load(), dateCalc()));

buttonSearch.addEventListener('click', () => { 
    query = userRequest.validation();

    if (!!query) { 
        utilities.destroyer();
        cards.starter();
        newsApi.sendRequest(query)
            .then(data => {
                if (data.length === 0) {
    
                    // если искомых новостей не найдено
                    // отрисовывается пустой блок, с соответствующим
                    // сообщением
                    cards.newsEmpty();
                } else {
                    
                    // если данные получены, сохраняется запрос и сами данные
                    // в localStorage, а также, происходит отрисовка и загрузка
                    // информации
                    storage.textQuery(query);
                    storage.save(data);
                    newsLoad();
                }
            })
            .catch(() => {
                cards.newsError();
            });
    }
    
});