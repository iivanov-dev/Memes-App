class API {
    constructor(){
        this.baseUrl = 'https://api.imgflip.com';
    }
    getMemes() {
        return fetch(`${this.baseUrl}/get_memes`).then((data)=>data.json());
    }
}

//# sourceMappingURL=Memes App.685db787.js.map
