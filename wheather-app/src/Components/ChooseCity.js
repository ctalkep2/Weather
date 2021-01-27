import React from 'react';

import { Regions } from '../styles/LocationName'

function ChooseCity( { regions, regionsId, toggle, changeToggle, setCity } ) {

	function currentCityClick(event) {
		setCity({
			current: event.target.innerHTML, 
			id: event.target.id
		});
		changeToggle({toggle: 'none'});
	}

	return (
		<Regions theme={toggle}>
			{regions.map((city, index) => (
				<div 
					key = {city}
					id = {regionsId[index]}
					onClick = {currentCityClick}
				>{regions[index]}</div>
			))}
		</Regions>
	);

}

export default ChooseCity;