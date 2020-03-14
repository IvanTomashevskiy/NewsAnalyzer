import {GIT_HUB_URL} from '../consts';

export class GitHubApi {
    getCommites() { 
        return fetch(GIT_HUB_URL)
            .then(result => {
                if (result.ok) {
                    return result.json(); 
                }
            })
            .then(data => {
                return data;
            })
    }
}