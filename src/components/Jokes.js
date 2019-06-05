import React, {Component} from 'react';
import Header from './Header';

class Jokes extends Component{
    state = {joke: {}, jokes:[]};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        // .then(json => console.log('json',json));
        .then(json => this.setState({ joke: json}))
        .catch(error => alert(error.message));
    }

    fetchJokes = () =>{
        console.log('Hi');
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes: json}))
        .catch(error => alert(error.message));
    }

    render(){
        const {setup, punchline} = this.state.joke;
        return(
            <div>
                {/* <Header/> */}
                <h2>Highlighted Jokes </h2>
                <p>{setup} <em> { punchline } </em> </p>

                <hr/>
                <h3>Want ten new Jokes!</h3>
                <button onClick={this.fetchJokes}>Click me!</button>
                {
                    this.state.jokes.map(jokes => {
                        const{ id, setup, punchline} = jokes;

                        return <p key={id}>{setup} <em> {punchline} </em> </p>
                    })
                }

                {/* {this.state.jokes.map(joke => (<Jokes key={joke.id} joke={joke} />))} */}
            </div>
        )
    }
}
export default Jokes;