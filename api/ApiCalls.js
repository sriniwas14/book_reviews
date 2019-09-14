import axios from 'axios';

class ApiCalls {
    constructor() {
        this.API_KEY = "l7vEc9Qcq0YUkTTc24GoxXpyADUMtX9d"
    }

    async fetchUrl(url) {
        let x = await axios.get(url); 
        console.log(x)
        return x;
    }

    searchBooks = (query) => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+query)
    }

    bestSellers = (catName) => {
        return axios.get("https://api.nytimes.com/svc/books/v3/lists/current/"+catName+".json?api-key="+this.API_KEY)
    }
    
}

const api = new ApiCalls();
export default api;