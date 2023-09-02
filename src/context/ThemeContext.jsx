import { createContext, useEffect, useReducer } from "react";

export const Context = createContext()

const setContextState = (state, action) => {
    switch(action.type){
        case 'CHANGE_MODE': return {...state, mode:action.payload}

        default: state
    }
}

const ThemeContext = ({children}) => {
    const mode = localStorage.getItem('mode')
    const [state, dispatch] = useReducer(setContextState, {mode})

    const changeMode = (value) => {
        dispatch({type:'CHANGE_MODE', payload: value})
    }

  return (
    <Context.Provider value={{...state, changeMode}}>
      {children}
    </Context.Provider>
  )
}

export default ThemeContext
