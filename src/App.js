import React from 'react';
import './App.css';
import Form from './components/Form';
import Caption from './components/Caption';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='form-and-banner-wrapper'>
          <div className='form-block'>
            <Form/>
          </div>

          <div className='banner-block'>
            <Caption />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
