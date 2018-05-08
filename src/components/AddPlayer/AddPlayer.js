import React from 'react';
import './AddPlayer.css';

const AddPlayer = (props) => {
   let input;

   	const onSubmit = (e) => {
		e.preventDefault();

		props.onPlayerAdd(input.value);		// callback onPlayerAdd() i pobranie wartosci z pola input

		input.value = '';					// wyczysc pole po dodaniu gracza
	}
   return (
       <form className="AddPlayer" onSubmit={onSubmit}>
           <input type="text" className="AddPlayer__input" ref={(node) => input = node} />
           <input type="submit" className="AddPlayer__submit" value="Add" />
       </form>
   )
};

export default AddPlayer;