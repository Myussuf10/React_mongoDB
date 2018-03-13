import { FETCH_USER } from '../actions/types'


// As there are 3 cases either user is logged in or not logged in or request is pending (hence null)

export default function (state = null , action) {

switch(action.type){

	case FETCH_USER:
		return action.payload || false;

	default: 
		return state;
}

}