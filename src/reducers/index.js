import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, ADD_MEMORY, RECALL_MEMORY, CLEAR_MEMORY } from './../actions';

export const initialState = {
  total: 101,
  operation: "+",
  memory: 102,
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

// const [state, setState] = useState(action);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload
      });

    case (CLEAR_DISPLAY):
      return ({
        ...state,
        total: 0
      });

    case (ADD_MEMORY):
      return ({
        ...state,
        memory: state.total
      });

    case (RECALL_MEMORY):
      return ({
        ...state,
        total: state.memory
      });

    case (CLEAR_MEMORY):
      return ({
        ...state,
        memory: 0
      });

    default:
      return state;
  }
}

export default reducer;