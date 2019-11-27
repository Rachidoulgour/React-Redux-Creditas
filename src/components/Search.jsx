import React from 'react'
import './Search.css'


class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
        }
    }
    handleKeyPress=(event)=>{
        if(event.key==='Enter'){
           
            this.setState({query: event.target.value})
            console.log(event.target.value)
        
    }
    }

    render(){
        return(
            <div>
                <input type="text" className="searchBar" onKeyPress={this.handleKeyPress} placeholder="Search a product"/>
                <button>Search</button>
            </div>
        )
    }
}
export default Search;