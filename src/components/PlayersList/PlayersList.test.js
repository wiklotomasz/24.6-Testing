import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow } from 'enzyme';

const players = [
    {
        name: 'Konrad',
        score: 5
    },
    {
        name: 'Tomek',
        score: 0
    }
]

it('renders without crashing', () => {
  shallow(<PlayersList players={[]}/>);
});

it('renders correct number of players', () => {
  const playerComponent = shallow(<PlayersList players={players} />);

  const expectedPlayersNumber = playerComponent.find(Player).length;

  expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate when button is clicked', () => {
	const mockedOnScoreUpdate = jest.fn();

	const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);

	const firstPlayer = playerComponent.find(Player).first();

	const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

	onPlayerScoreChange(10);

	expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});


it('should call onPlayerRemove when button is clicked', () => {
  const mockedOnPlayerRemove = jest.fn();
  const removeComponent = shallow(<PlayersList onPlayerRemove={mockedOnPlayerRemove} />);

  const removeButton = removeComponent.find(Player).last();

  const onPlayerRemove = removeButton.prop('onPlayerRemove');

  onPlayerRemove(i);

  expect(mockedOnPlayerRemove).toBeCalledWith(i);
});

