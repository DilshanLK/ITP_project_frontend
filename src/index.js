import ReactDOM from 'react-dom';
import {BrowserRouter, Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import history from "./routes/history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
