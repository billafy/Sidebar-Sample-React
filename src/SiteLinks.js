import React, {useContext} from 'react';
import {AppContext} from './App';

const SiteLinks = () => {
	const {state:{siteLinks}} = useContext(AppContext);

	return (
		<section className='site-links'>
			<ul>
				{siteLinks.map((link) => {
						return (
							<li key={link.id}>{link.title}</li>	
						);
					})}				
			</ul>				
		</section>	
	);
}

export default SiteLinks;