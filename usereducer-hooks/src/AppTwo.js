import React from 'react';
import { useReducer } from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

export const AppContext = React.createContext()

const initialState = 0;

const reducer = (state, action) => {
  switch(action){
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default : return state;
  }

}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <div>
        <div>Count: {count}</div>
        <AppContext.Provider value={{counterDispatch: dispatch}}>
          <ComponentA/>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
