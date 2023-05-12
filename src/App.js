import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { players } from './minion'

class App extends React.Component {
  constructor() {
    super();
    this.state={
      players: players,
      searchfield:''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filterPlayers = this.state.players.filter(player => {
      return player.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>Minionpedia</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
        <CardList players={filterPlayers}/>
      </div>
    );
  }
  
}

export default App;
