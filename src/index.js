import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Jokes from './components/Jokes';
import createBrowserHistory from 'history/createBrowserHistory';
import {Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import MusicMaster from './assests/projects/MusicMaster';
// import * as serviceWorker from './serviceWorker';
// import Search from './projects/musicMaster/component/Search';
const history = createBrowserHistory();


ReactDOM.render(
   <Router history = {history}>
       <Switch>
<Route exact={true} path='/' render={() => <Header><App/></Header> }/>
            <Route path='/jokes' render={() => <Header><Jokes/></Header> }/>
            <Route path='/Music' render={() => <Header><MusicMaster/></Header> }/>
       </Switch>
   </Router>, 
   document.getElementById('root')
   );




// setTimeout(() => {
//     console.log('Hello');
// },2000);
// console.log('Hii');
// console.log('Hiiiiii');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
