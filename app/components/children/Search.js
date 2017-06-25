//* **Search** - queries the NYT API for articles.
//Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.
//Include React
import React from 'react';
import Results from './search/Result';
import Query from './search/Query';
import helpers from '../util/helpers';
//Search component is used to take input from user to search the NYTimes api and show the results
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: {},
            results: []
        }
        this.changeSearchQuery = this.changeSearchQuery.bind(this);
        this.saveArticle = this.saveArticle.bind(this);
        this.removeArticle = this.removeArticle.bind(this);
    }

    changeSearchQuery(searchQuery) {
        console.log(`Search component : ${searchQuery}`);
        console.log(searchQuery);
        this.setState({searchQuery: searchQuery})
    }

    //saves the article in db
    saveArticle(event) {
        var articleIndex = event.target.dataset.articleIndex;
        let {headline:{main:title}, pub_date:date, web_url:url} = this.state.results[articleIndex];
        var article = {
            title ,
            date,
            url
        }

        helpers.saveArticleInDB(article);
        console.log(`article : ${article}`);
        this.removeArticle(articleIndex);
    }

    removeArticle(articleIndex) {
        this.state.results.splice(articleIndex, 1);
        this.setState({results: this.state.results});
        console.log(`Removed the article from results in state : ${this.state.results.length}`);
    }

    // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
    // props or state
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery != this.state.searchQuery) {
            console.log("COmponent updated");
            helpers.searchArticles(this.state.searchQuery).then(function(results) {
                console.log('Search results', results);
                this.setState({results: results})

            }.bind(this));
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Query changeSearchQuery={this.changeSearchQuery}/>
                </div>

                <div className="row">
                    <Results results={this.state.results} saveArticle={this.saveArticle}/>
                </div>
            </div>
        )
    }
}

export default Search;
