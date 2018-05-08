import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import App from './App';

const players = [];

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
	const appComponent = shallow(<App />);

	appComponent.setState({ players });

	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

	const playersAfterUpdate = appComponent.state('players');

	expect(players).toEqual(playersAfterUpdate);
});

it('should add new player to the state', () => {
	const appComponent = shallow(<App />);

	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	
	onPlayerAdd('Ania');

	const players = appComponent.state('players');

	expect(players.length).toEqual(1);
	expect(players[0].name).toEqual('Ania');
	expect(players[0].score).toEqual(0);
});

it('should remove the player and update the state', () => {
	const appComponent = shallow(<App />);

	appComponent.setState({ players });

	const onPlayerRemove = appComponent.find(App).prop('onPlayerRemove');

	onPlayerRemove(playerIndex);

	const playersAfterRemoval = appComponent.state('players');

	expect(players).toEqual(playersAfterRemoval);
});