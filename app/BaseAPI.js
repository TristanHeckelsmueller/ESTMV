const axios = require('axios');

class BaseApi {

    constructor()
    {
        this.baseURI = 'https://en.wikipedia.org/w/api.php';
        this.pageURI = 'https://en.wikipedia.org/?curid=';
    }

    defineSearchParameters ()
    {
        return "?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";
    }

    async getSearchResult(query)
    {
        this.searchURI = this.baseURI + this.defineSearchParameters() + query.value;

        this.result = await axios.get(this.searchURI);

        return this.result.data.query;
    }

    async getSearchIDs(query)
    {
        this.results = await this.getSearchResult(query);
        this.pageIDs = [];
        this.array = this.results.search;
        for (let i = 0; i < this.array.length; i++)
        {
            this.pageIDs.push(this.array[i].pageid)   ;
        }
        return this.pageIDs;

    }

    async visitSearchResults(query)
    {
        this.pageIDs = await this.getSearchIDs(query);

        this.page = [];
        console.log(this.pageIDs.length)
        for (let i =0; i < this.pageIDs.length; i++)
        {

            this.page.push(await axios.get(this.pageURI + this.pageIDs[i]))
        }

            console.log(this.page)
    }

}


module.exports = BaseApi;