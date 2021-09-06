import logo from './logo.svg';
import Form from './Components/form'
import { Provider} from 'react-redux';
import rootReducer from './Reducers/combineReducer'
import {createStore } from 'redux'
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import blue from "material-ui/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

const Store = createStore(rootReducer);

function App() {

  
  return (
    <Provider store = {Store}>
      <MuiThemeProvider theme = {theme}>
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
      </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
