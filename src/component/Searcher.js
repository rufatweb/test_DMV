import React from 'react';
import { ActionsForSearcher } from '../action/AllActions';
import PropTypes from 'prop-types';
import { SearchedFor } from './SearchedFor';

export class Searcher extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputValues:{
                firstname: '',
                lastname: ''
            },
            searchResults: {
                details:[],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error:''
            }
        }
    }

    render() {
        let content = ""
        
        if(this.props.searchResults.readState.success) {
            if(this.props.searchResults.details.length === 0) {
                content = "No matching users";
            }
            else {
                content =  <SearchedFor {...this.props} enteredValues={this.state.inputValues} searchResults={this.props.searchResults}/>
            }
        
        }


        const display = (
            <div className='card'>
                <div className='card-header'>
                    <div className="input-group input-group-lg mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="firstNameLabel">First Name</span>
                        </div>
                        <input type="text" onChange={ this.firstNameFieldChange.bind(this) } className="form-control" placeholder='enter first name here' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="lastNameLabel">Last Name</span>
                        </div>
                        <input type="text" onChange={ this.lastNameFieldChange.bind(this) } className="form-control" placeholder='enter last name here' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-warning btn-sm btn-block btn-outline-primary" 
                        onClick={ this.sendSearch.bind(this) }
                    >Search
                    </button>                
                </div>
                <div className="card-body">
                    { content }
                </div>
            </div>
        )

        return (
            <div>
                { display }
            </div>
        )
    }

    sendSearch(){
        ActionsForSearcher.finder(this.state.inputValues)
    }

    firstNameFieldChange(e) {
        this.state.inputValues.firstname = capitalize(e.target.value.toLowerCase())
    }

    lastNameFieldChange(e){
        this.state.inputValues.lastname = capitalize(e.target.value.toLowerCase())
    }
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

Searcher.defaultProps = {
    searchResults: {
        details:[],
        readState:{
            pending:false,
            success:false,
            failure:false
        },
        error: ''
    }
}
Searcher.propTypes = {
    searchResults: PropTypes.object.isRequired
}