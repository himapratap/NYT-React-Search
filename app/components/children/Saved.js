//* **Saved** - displays the Saved Articles that were searched and stored in the database
import React, {Component} from 'react';

class Saved extends Component {

    render() {
        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading panel-s">
                        <h3 className="panel-title">
                            <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                            Saved</h3>
                    </div>
                    <div className="panel-body" id="wellSection"></div>
                </div>
            </div>
        );
    }

}

export default Saved;
