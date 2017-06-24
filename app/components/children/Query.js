import React, {Component} from 'react';

class Query extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            startYear: "",
            endYear: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;
        console.log(target.name);
        console.log(target.value);

        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Query target" + event.target);
        this.props.changeSearchQuery(this.state);
        this.setState({});
    }

    render() {
        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading panel-s">
                        <h3 className="panel-title">
                            <i className="fa  fa-list-alt"></i>
                            Search Parameters</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="search">Search Term:</label>
                                <input type="text" className="form-control" name="search" id="search" value={this.state.search} onChange={this.handleInputChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="startYear">Start Year:</label>
//min="1900" max="2017"
                                <input type="number" className="form-control"   name="startYear" value={this.state.startYear} onChange={this.handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="endYear">End Year:</label>
                                <input type="number" className="form-control"  name="endYear" value={this.state.endYear} onChange={this.handleInputChange}/>
                            </div>

                            <button type="submit" className="btn btn-default " id="searchButton">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                Search</button>
                            <button type="submit" className="btn btn-default " id="clearButton">
                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                Clear</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Query;
