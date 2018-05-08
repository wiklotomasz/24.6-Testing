import Player from './Player';
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
  shallow(<Player />);
});

it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();
  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
	const playerScorePassed = 5;
	const scoreComponent = shallow(<Player score={playerScorePassed} />);

	const playerScoreRendered = scoreComponent.find('.Player__score').text();
	const convertedNumber = Number(playerScoreRendered);

	expect(convertedNumber).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').first();

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const minusButton = playerComponent.find('.Player__button').last();

  minusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove when button is clicked', () => {
  const mockedOnPlayerRemove = jest.fn();
  const removeComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove}/>);

  const removeButton = removeComponent.find('.Player__button_del');

  removeButton.simulate('click');

  expect(mockedOnPlayerRemove).toEqual('');
});