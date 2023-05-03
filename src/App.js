import React from 'react';
import { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, {initialState} from './reducers';
import { applyNumber, changeOperation, clearDisplay, addMemory, recallMemory, clearMemory } from './actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    // Tiklanan sayiyi integer tipine cevirip applyNumber fonksiyonuna gonderiyoruz.
    // Cunku stiring olarak gonderirsek toplama islemi yerine birlestirme islemi yapar.
    // Mesela 10 + '5' = '105' olur cunku ikinci sayi string
    dispatch(applyNumber(parseInt(e.target.value)));
  }

  function handleOperator(e) {
    // Tiklanan operatoru changeOperation fonksiyonuna gonderiyoruz.
    dispatch(changeOperation(e.target.value));
  }

  function handleClear() {
    // Clear tusuna basildiginda clearDisplay fonksiyonunu cagiriyoruz.
    dispatch(clearDisplay());
  }

  function handleMemory(e) {
    // Memory tuslarina basildiginda ilgili fonksiyonlari cagiriyoruz.
    switch (e.target.value) {
      case 'M+':
        dispatch(addMemory());
        break;
      case 'MR':
        dispatch(recallMemory());
        break;
      case 'MC':
        dispatch(clearMemory());
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemory}/>
              <CalcButton value={"MR"} onClick={handleMemory}/>
              <CalcButton value={"MC"} onClick={handleMemory}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={1} />
              <CalcButton onClick={handleClick} value={2} />
              <CalcButton onClick={handleClick} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={4} />
              <CalcButton onClick={handleClick} value={5} />
              <CalcButton onClick={handleClick} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleClick} value={7} />
              <CalcButton onClick={handleClick} value={8} />
              <CalcButton onClick={handleClick} value={9} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={handleOperator}/>
              <CalcButton value={"*"} onClick={handleOperator}/>
              <CalcButton value={"-"} onClick={handleOperator}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
