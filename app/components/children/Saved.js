//* **Saved** - displays the Saved Articles that were searched and stored in the database
import React, {Component} from 'react';
import helpers from '../util/helpers'
class Saved extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      console.log(this.props);
      var resultsLength = this.props.savedArticles.length;
      var resultSection;

      if (resultsLength == 0) {
          resultSection = (
              <div className="well">
                  <h4 className="headline">You have no saved articles</h4>
              </div>
          );
      } else {
          resultSection = (this.props.savedArticles.map((element, x) => {
              return (
                  <div className="well" key={x}>
                      <h4 className="headline">
                          {element.title}
                      </h4>
                      <hr/>
                      <a className="btn btn-default button" href={element.url} target="_blank">View Article</a>
                      <button className="btn btn-default button" data-article-index={x} onClick={this.props.deleteArticle.bind(this)}>Delete</button>

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
                            Saved</h3>
                    </div>
                    <div className="panel-body" id="wellSection">{resultSection}</div>
                </div>
            </div>
        );
    }

}

export default Saved;
