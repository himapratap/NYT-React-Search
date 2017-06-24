//* **Search** - queries the NYT API for articles.
//Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.
//Include React
import React from 'react';
import Results from './Result';
import Query from './Query';
import helpers from '../util/helpers';
//Query component is used to take input from user to search the NYTimes api
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: {},
            results: []
        }
        this.changeSearchQuery = this.changeSearchQuery.bind(this);
    }

    changeSearchQuery(searchQuery) {
        console.log(`Search component : ${searchQuery}`);
        console.log(searchQuery);
        this.setState({searchQuery: searchQuery})
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
                     <Results results={this.state.results}/>
                </div>
            </div>
        )
    }
}

export default Search;
