import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../utils/api'
import { connect } from 'react-redux'
import { add, remove } from '../ducks/cart'

const Search = (props) => (
    <div className="Search">
        {/*select type of search*/}
        <select className="searchtype" onChange={props.updateType}>
            <option value="none"></option>
            <option value="name">Name</option>
            <option value="class">Class</option>
            <option value="ability">Ability</option>
        </select>
        {/*input text for search*/}
        <input 
            className='searchbar' 
            type="text" 
            onChange={props.updateText} 
            value={props.search}/>
        {/*run search*/}
        <button onClick={props.runSearch}>search</button>
    </div>
)

const SearchResults = (props) => (
        <div className="SearchResults">
        {props.results 
        && <div>
            {JSON.stringify(props.results.name)}
            <button onClick={()=>props.add(props.results.name)}>add to cart</button>
        </div>
        }
    </div>
)

export default class Navbar extends Component {
    constructor(){
        super()

        this.state={
            search: '',
            searchResults: null,
            searchType: ''
        }

        this.handleSearch=this.handleSearch.bind(this)
        this.runSearch=this.runSearch.bind(this)
        this.changeSearchType=this.changeSearchType.bind(this)
    }

    //update state with search text
    handleSearch(event){
        this.setState({
            search: event.target.value
        })
    }

    //update state with type of search
    changeSearchType(e){
        this.setState({
            searchType: e.target.value
        })
    }

    //runs search function and sets state to the results
    runSearch(){
        search(this.state.searchType,this.state.search).then(response=>{
            this.setState({
                searchResults: response
            })
        })
    }


    render(){
        const {
            add,
            remove,
            cart
        } = this.props

        return (
            <nav>
                <Link to='/'>home</Link>
                <Search 
                    search={this.state.search}
                    updateText={this.handleSearch}
                    updateType={this.changeSearchType}
                    runSearch={this.runSearch}/>
                <Link to='/browse/electric'>Browse Electric</Link>
                <Link to='/browse/fire'>Browse Fire</Link>
                <Link to='/browse/water'>Browse Water</Link>
                <Link to='/browse/rock'>Browse Rock</Link>
                {/*username -- login/logout*/}
                <SearchResults
                    add={add}
                    remove={remove}
                    results={this.state.searchResults}/>
            </nav>
            
        )
    }
}
