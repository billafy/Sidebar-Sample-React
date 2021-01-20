import React, {useContext} from 'react';
import {AppContext} from './App';

const SocialLinks = () => {
	const {state:{socialLinks}} = useContext(AppContext);
	return (
		<section className='social-links'>
			<ul>
				{socialLinks.map((link) => {
						return (
							<li key={link.id}> 
								<a style={{color:link.color}} href={link.source}>{link.icon}</a>
							</li>	
						);
					})}
			</ul>			
		</section>
	);
}

export default SocialLinks;