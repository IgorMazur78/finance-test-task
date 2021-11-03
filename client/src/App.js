import React from 'react';
import './App.css';
import AllTickers from './component/allTickers/AllTickers';
import useTicker from './component/allTickers/useTickers';

function App() {
  useTicker();
  return (
    <div className="App">
      <AllTickers />
    </div>
  );
}

export default App;
