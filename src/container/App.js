import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from './ErrorBoundry';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      robots : [],
      searchfield : ' '
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(user=>this.setState({robots: user}))
  }
  
  onSearchChange = (event) => {
    this.setState({searchfield : event.target.value});
  }
    

  render(){
    const filterrobot = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
    <div className='tc'>
      <h1 className='f2'>ROBOTFRIEND</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterrobot}/>
        </ErrorBoundry>
      </Scroll>
    </div>  
    );
  }
}

export default App;
