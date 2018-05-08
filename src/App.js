import React, { Component } from 'react';
import AddPlayer from './components/AddPlayer/AddPlayer';
import PlayersList from './components/PlayersList/PlayersList';
import './App.css';

class App extends Component {
  constructor() {
  	super();
e
  	this.state = {
  		players: []
  	}
  }

  onPlayerAdd = (playerName) => {
	  const newPlayer = {
	    name: playerName,
	    score: 0,
	  }
	  this.setState({
	    players: [...this.state.players, newPlayer]
	  })
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
	  this.setState({
	    players: this.state.players.map((player, index) => {
	      if (index === playerIndex) {
	        return { ...player, score: player.score + scoreChange };
	      }
	      return player;
	    })
	  })
	}

  onPlayerRemove = (playerIndex) => {
    this.setState({
      players: this.state.players.filter((index) => index !== playerIndex)
    });
  }

  render() {
    return (
      <div className="App">
      	<AddPlayer onPlayerAdd={this.onPlayerAdd} />
      	<PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} />
      </div>
    );
  }
}

export default App;