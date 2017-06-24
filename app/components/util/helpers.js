import axios from 'axios';

const searchKey = "2c24b581b73c4223ad99a961cfaad9db";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + searchKey;

function setQueryUrl(searchQuery) {
    var startYear = searchQuery.startYear + '0101';
    var endYear = searchQuery.endYear + '0101';
    url += "&q=" + searchQuery.search + '&begin_date=' + startYear + '&end_date=' + endYear + '&page=1';
    console.log(url);
}

const helpers = {

    searchArticles(searchQuery) {
        console.log('Searching for articles');
        console.log(searchQuery);
        setQueryUrl(searchQuery);
        return axios.get(url).then(function(apiData) {
            console.log(apiData);
            var articles = apiData.data.response.docs;
            console.log(`response is: `);
            console.log(articles);
            return articles;
        });

    }

}

export default helpers;