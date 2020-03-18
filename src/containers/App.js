import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import {robots} from './robots';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
class App extends Component {

constructor(){
	super()
this.state={

      robots:[],
       searchfield:'',
}

}

componentDidMount(){

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>this.setState({robots:users}))
}



onsearchchange=(event)=>{
  this.setState({searchfield:event.target.value})
}


render(){
   const filterRobots=this.state.robots.filter(robots=>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  })

 if(this.state.robots.length===0){
  return <h1>Loading</h1>
 }
 else{
    return(
        <div className='tc'>
       <h1 className='f1'> RoboFriends </h1>
          <SearchBox searchchange={this.onsearchchange}/>
          <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots}/>
            </ErrorBoundary>
          </Scroll>
         </div>
);

 }


 

}

}



export default App;
