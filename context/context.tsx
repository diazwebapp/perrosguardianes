import {createContext, Dispatch, useReducer} from 'react'
import { AppActions, State } from '../interfaces/context'
import appReducer from './app_reducer'

export const initialApp:State={
    menu_state:false
}

const GlobalAppContext = createContext<{app:State;app_dispatch:Dispatch<AppActions>}>({app:initialApp,app_dispatch:()=>{}})

export const App_provider =({children}:any)=>{
  const [app,app_dispatch] = useReducer(appReducer,initialApp)
  
  return <GlobalAppContext.Provider value={{
      app,app_dispatch
  }} >
      {children}
  </GlobalAppContext.Provider>
}

export default GlobalAppContext