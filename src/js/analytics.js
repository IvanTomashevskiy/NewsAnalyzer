import "../styles/pages/analytics.css";
import {DateCalc} from '../js/modules/Date';
import {Storage} from '../js/modules/storage';
import {Captions} from './modules/captions';
import {Gistogram} from './modules/gistogram';

const dateCalc = () => new DateCalc;
const storage = new Storage;
        
const captions = new Captions(storage.load());
const gistorgam = new Gistogram(dateCalc(), storage.load());

captions.loadingCaptions();
gistorgam.loadingGistogram();
