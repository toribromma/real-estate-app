import React, {Component} from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import fetchResultsAction from "../../actions/fetchResults";

class SearchAirbnbListing extends Component {
    constructor() {
        super();
        this.state = {
            selectedState: "AK",
            selectedCity: "",
            selectedZipCode: ""
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        const searchData = {
            state: this.state.selectedState,
            city: this.state.selectedCity,
            zip: this.state.selectedZipCode
        };
        // console.log(searchData)
        this.props.fetchResults(searchData)

        
    };
    

    states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

    render() {
        return(
            <div style={{padding: 5, marginTop: 40, fontFamily: "Balsamiq Sans, cursive"}} className="col s12 m12 center-align">
            <div style={{borderRadius: "0 20px 20px 20px"}} className="card-panel">
                <span className="card-title"><b>Find an Airbnb Listing</b></span>
                <div className="row">
                    <form onSubmit={this.onSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m4">
                        <i className="material-icons prefix">location_city</i>
                        <input id="icon_prefix" name="selectedCity" value={this.state.selectedCity} onChange={this.onChange} type="text" className="validate"/>
                        <label htmlFor="icon_prefix">City</label>
                        </div>
                        <div className="input-field col s12 m4">
                        <select onChange={this.onChange} name="selectedState" value={this.state.selectedState} className="browser-default">
                        <option disabled>Choose your option</option>
                        {this.states.map(function(object, i){
                            return <option key={object} value = {object}>{object}</option>
                        })}
                        </select>
                        </div>
                        <div className="input-field col s12 m4">
                        <input name="selectedZipCode" value={this.state.selectedZipCode} onChange={this.onChange} type="text" className="validate"/>
                        <label>Zip Code (Optional)</label>
                        </div>
                    </div>
                    <div className="col m12 s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

SearchAirbnbListing.propTypes = {

  };

const mapStateToProps = state => ({
    search: state.search,
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchResults: fetchResultsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchAirbnbListing);
