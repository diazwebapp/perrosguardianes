import { AppActions, State } from "../interfaces/context"

function appReducer(state:State,action:AppActions){
    const {payload,type} = action

    switch (type) {
        case 'swich_menu':
            return{
                ...state,
                menu_state:payload
            }
        default:
            return state;
    }
}
export default appReducer