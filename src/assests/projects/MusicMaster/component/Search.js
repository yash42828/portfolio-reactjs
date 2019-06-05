import React, {Component} from 'react';

export default class Track extends Component{

    state = { artistQuery:'' };

    updateArtistQuery = event => {
        // console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value});
    }

    handleKeyPress = event => {
        if (event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () =>{
        this.props.searchArtist(this.state.artistQuery);
    }

    render(){
        return(
            <div>
                <input
            onChange={this.updateArtistQuery} 
            onKeyPress={this.handleKeyPress}
            placeholder="Search for an Artist"
            />
            <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}