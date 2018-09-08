import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from "./redux/store";
// import 'semantic-ui-css/semantic.min.css';


ReactDOM.render(<Router>
                    <Provider store={configureStore()}>
                        <App />
                    </Provider>
                </Router>, document.getElementById('root'));
registerServiceWorker();
