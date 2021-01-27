import React from 'react';
import { settings } from '../settings';

import { RegionWrapper, Region } from '../styles/LocationName'

function LocationName( { region, getToggle, toggleSet } ) {  
  
  function modalFrameCitys(event) {

	  getToggle.toggle === 'none' 
	  	? toggleSet({toggle: 'flex'}) 
	  	: toggleSet({toggle: 'none'})

	}

	return (
		<RegionWrapper onClick={modalFrameCitys}>
			<img src={settings.icons_url + "location-icon.png"} alt="location-icon" />
			<Region>{region.current}</Region>
		</RegionWrapper>
	);
}

export default LocationName;