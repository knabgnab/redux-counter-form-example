// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

 
//App.js

import './App.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import List from './pages/List';
import CouterPage from './pages/CouterPage';
import ItemTable from './pages/ItemTable';

function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/counter" component={CouterPage}/>
      <Route path="/items" component={ItemTable}/>
      <Route path="/item/insert" component={ItemTable}/>
     
    </BrowserRouter>
  );
}

export default AppRouter;