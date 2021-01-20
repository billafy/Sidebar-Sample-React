import React, {useState, useEffect, useContext} from 'react';
import {AppContext} from './App';
import './sidebar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import SiteLinks from './SiteLinks';
import SocialLinks from './SocialLinks';

const Sidebar = () => {
	const {state:{showSidebar},toggleSidebar} = useContext(AppContext);
	const [screenHeight,setScreenHeight] = useState(window.innerHeight);

	useEffect(() => {
		window.addEventListener('resize',()=>setScreenHeight(window.innerHeight));
		return () => {
			window.removeEventListener('resize',()=>setScreenHeight(window.innerHeight));
		}
	});

	return (
		<>
			<div className='sidebar'>
				{showSidebar?
					<div style={{height:screenHeight}}className='sidebar-full'>
						<div className='title'>
							<h1>CodeKing</h1>
							<button onClick={toggleSidebar}><GiHamburgerMenu/></button>
						</div>
						<SiteLinks/>
						<SocialLinks/>
					</div>
							: 
					<div className='sidebar-btn'> 
						<button onClick={toggleSidebar}><GiHamburgerMenu/></button>
					</div>
				}
			</div>
		</>	
	);
}

export default Sidebar;