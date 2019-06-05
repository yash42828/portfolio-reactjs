import React,{ Component } from 'react';
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from '../assests/Profile.png';
import Title from './Title';
import Jokes from './Jokes'; 
import Header from './Header';
class App extends Component {

    state = { displayBio: false }

    // constructor(){
    //     super();
    //     this.state = { displayBio: false};
    //     // this.readMore = this.readMore.bind(this);
    //     // this.readLess = this.readLess.bind(this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        

    //     console.log('construct',this);
    // }
    // readMore(){
    //     this.setState({displayBio: true});
    //     console.log('readMore',this);
    // }

    // readLess(){
    //     this.setState({displayBio:false});
    // }
    toggleDisplayBio = () => {
        this.setState({displayBio:!this.state.displayBio});
    }
    
    render(){

       
    
        return(
            <div>
                {/* <Header/> */}
                <img src={profile} alt='Profile' className='profile'/>
                <h1>Hello!</h1> 
                <p>My name is Yash.</p>
                <Title/>
                <p>I'm always looking forward to working on meaningful projects.</p>
                <p>My name is Yash.</p>
                <Title/>
                <p>I'm always looking forward to working on meaningful projects.</p>
               
          { 
        this.state.displayBio ?  <div>
        <h1>Hello!</h1>
        <p>My name is Yash. I'm a software engineer</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        <p>My name is Yash. I'm a software engineer</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        <p>My name is Yash. I'm a software engineer</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        <button onClick={this.toggleDisplayBio}>Show Less</button>
    </div>  :
            <div>
                <button onClick={this.toggleDisplayBio}>Read More..</button>
             </div>
             }
             <hr/>
             <Projects/>
             <hr/>
             <SocialProfiles/>
             <hr/>
             <Jokes/>
             </div>

        )
        
         
    }
}

const AppWithHeader = () =>{
    return( 
        <Header Component={ App } />
    )
}

export default App;