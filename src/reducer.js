export const reducer = (state,action) => {
	if(action.type==='TOGGLE_SIDEBAR') {
		if(state.showSidebar)
			return {...state,showSidebar:false};
		else
			return {...state,showSidebar:true};
	}
}