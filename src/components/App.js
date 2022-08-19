import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/index'
import './App.css';
import * as action from '../actions/index'
import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';


function App() {
const [state, dispatch] = useReducer(reducer, initialState)
const { applyNumber, changeOperator } = action

const numberClicked = (number) => {
  dispatch(applyNumber(number))
}

const changeOperation = (operator) => {
  dispatch(changeOperator(operator))
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => numberClicked(1)}/>
              <CalcButton value={2} onClick={() => numberClicked(2)}/>
              <CalcButton value={3} onClick={() => numberClicked(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => numberClicked(4)}/>
              <CalcButton value={5} onClick={() => numberClicked(5)}/>
              <CalcButton value={6} onClick={() => numberClicked(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => numberClicked(7)}/>
              <CalcButton value={8} onClick={() => numberClicked(8)}/>
              <CalcButton value={9} onClick={() => numberClicked(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperation('+')}/>
              <CalcButton value={"*"} onClick={() => changeOperation('*')}/>
              <CalcButton value={"-"} onClick={() => changeOperation('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
