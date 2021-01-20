import React, {useReducer} from "react";
import Sidebar from './Sidebar';
import {reducer} from './reducer';
import {SiFacebook, SiTwitter, SiInstagram} from 'react-icons/si';

const defaultStates = {
	showSidebar : false,
	siteLinks : [{id:1,title:'Home'},{id:2,title:'Tutorials'},{id:3,title:'Contests'},{id:4,title:'Source Codes'},{id:5,title:'About'}],
	socialLinks : [{id:1,icon:<SiFacebook/>,source:'https://www.facebook.com/LiverpoolFC/',color:'rgb(23,96,161)'},
	{id:2,icon:<SiTwitter/>,source:'https://twitter.com/LFC',color:'rgb(63,165,218)'},
	{id:3,icon:<SiInstagram/>,source:'https://www.instagram.com/liverpoolfc/',color:'rgb(190,45,113)'}
	]
};

export const AppContext = React.createContext();

const App = () => {
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const toggleSidebar = () => {
		dispatch({type:'TOGGLE_SIDEBAR'});
	}

	return (
		<AppContext.Provider value={{state,toggleSidebar}}>
			<Sidebar/>
		</AppContext.Provider>	
	);	
}

export default App;