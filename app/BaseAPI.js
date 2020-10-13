const axios = require('axios');

class BaseApi {

    constructor()
    {
        this.baseURI = 'https://en.wikipedia.org/w/api.php?';
        this.searchURI = this.baseURI + "action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";
        this.pageURI = this.baseURI + "action=query&prop=revisions&rvslots=*&rvprop=content&format=json&pageids=";

    }

    async getSearchResult(query)
    {
        this.searchURI = this.searchURI + query.value;

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

    async getPageContent(query)
    {

        this.pageIDs = await this.getSearchIDs(query);

        this.page = [];
        for (let i = 0; i < 1; i++)
        {


            console.log(this.pageURI + this.pageIDs[i]);

            this.pageContent = await axios.get(this.pageURI + this.pageIDs[i]);
            this.pageObject = Object.values(this.pageContent.data.query);

            // console.log(this.pageObject.pageIDs[i])



        }


        return this.page;
    }

}


module.exports = BaseApi;