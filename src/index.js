import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import ScrollTop from './components/ScrollTop';
import { ProductProvider } from './context/shop';
import { RecipesProvider } from './context/recipes';

ReactDOM.render(
  <RecipesProvider>
    <ProductProvider>
      <Router>
        <ScrollTop>
          <App />
        </ScrollTop>
      </Router>
    </ProductProvider>
  </RecipesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
