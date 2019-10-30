"use strict"

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Header } from './Header';
import { People } from './People';
import { Searcher } from './Searcher';
import { Creator } from './Creator';
import  * as Store from '../store/AllStores';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfPeople: {
                ppl: [],
                readState: {
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            },
            searchResults: {
                details:[],
                readState:{
                    pending:false,
                    success:false,
                    failure:false
                },
                error: ''
            },
            creationStatus: {
                details:[],
                readState: {
                    pending:false,
                    success:false,
                    failure:false
                },
                error:''
            }
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Switch/>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/All People' render={ (props) => ( <People { ...props } listOfPeople = { this.state.listOfPeople }/> )}/>
                    <Route path='/Searcher' render={ (props) => ( <Searcher { ...props } searchResults = { this.state.searchResults }/> )}/>
                    <Route path='/Creator' render={ (props) => ( <Creator {...props} creationStatus = {this.state.creationStatus} /> )}/>
                <Switch/>
            </div>
        );
    }

    componentDidMount() {
        Store.ForPeople.addChangeListener(this._allPeople.bind(this));
        Store.ForSearcher.addChangeListener(this._searchedFor.bind(this));
        Store.ForCreator.addChangeListener(this._newAccount.bind(this));
    }

    componentWillUnmount() {
        Store.ForPeople.removeChangeListener(this._allPeople.bind(this));
        Store.ForSearcher.removeChangeListener(this._searchedFor.bind(this));
        Store.ForCreator.removeChangeListener(this._newAccount.bind(this));
    }

    _allPeople() {
        this.setState({ listOfPeople: Store.ForPeople.allPpl() });
    }
    
    _searchedFor() {
        this.setState({ searchResults: Store.ForSearcher.getResults() });
    }

    _newAccount() {
        this.setState({ creationStatus: Store.ForCreator.newCreation() })
    }
}