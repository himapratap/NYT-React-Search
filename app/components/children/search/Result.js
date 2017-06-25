import React, {Component} from 'react';

class Result extends Component {

    constructor(props) {
        super(props);
      //  this.saveArticle = this.saveArticle.bind(this);
    }
 
    render() {
        var resultsLength = this.props.results.length;
        var resultSection;

        if (resultsLength == 0) {
            resultSection = (
                <div className="well">
                    <h4 className="headline">Please search to view the articles..</h4>
                </div>
            );
        } else {
            resultSection = (this.props.results.map((element, x) => {
                return (
                    <div className="well" key={x}>
                        <h4 className="headline">
                            {element.headline.main}
                        </h4>
                        <hr/>
                        <p>{element.lead_paragraph}</p>
                        <a className="btn btn-default button" href={element.web_url} target="_blank">View Article</a>
                        <button className="btn btn-default button" data-article-index={x} onClick={this.props.saveArticle.bind(this)}>Save</button>

                    </div>
                )
            }))
        }

        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading panel-s">
                        <h3 className="panel-title">
                            <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                            Top Articles</h3>

                    </div>
                    <div className="panel-body" id="wellSection">
                        {resultSection}
                    </div>
                </div>
            </div>
        );
    }

}

export default Result;
