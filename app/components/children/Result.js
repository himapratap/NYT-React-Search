import React, {Component} from 'react';

class Result extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading panel-s">
                        <h3 className="panel-title">
                            <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                            Top Articles</h3>

                    </div>
                    <div className="panel-body" id="wellSection">
                          {this.props.results.map((element, x) => {
                            return (
                                <div className="well" id={element._id}>
                                    <h4 className="headline">
                                         {element.headline.main}
                                    </h4>
                                    <hr/>
                                    <p>{element.lead_paragraph}</p>
                                    <a className="btn btn-default button" href={element.web_url} target="_blank">View Article</a>
                                    <a className="btn btn-default button" href="#">Save</a>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }

}

export default Result;
