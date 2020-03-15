import "../styles/pages/index.css";
import {
    buttonSearch,
    buttonMoreContainer,
    buttonMore,
    input,
    contentInput
} from '../js/modules/Dom';

import {UserRequest} from './modules/userReq';

import {Utilities} from '../js/modules/utilities';
import {DateCalc} from '../js/modules/Date';

import {NewsAPI} from '../js/modules/api/NewsApi';
import {Storage} from '../js/modules/storage';

import {Cards} from './modules/cards';

let query;

const userRequest = new UserRequest;
const utilities = new Utilities;
const dateCalc = () => new DateCalc;

const dateForApi = dateCalc().getDateForApi();
const newsApi = new NewsAPI(dateForApi);

const storage = new Storage;
const cards = new Cards;
import Validate from './modules/validate'



const validate = new Validate (contentInput);



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
    
                    cards.newsEmpty();
                } else {
                    
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

