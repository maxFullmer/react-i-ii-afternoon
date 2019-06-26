import React from 'react';
import Entity from './components/Entity.js';
import Slide from './components/Slide.js';
import MetaInfo from './components/MetaInfo.js';
import data from './data.js';

import './App.css';

function App() {
  return (
    <body className="App">
      <header>
        <a className="Home" href="https://github.com/maxFullmer/react-i-ii-afternoon">Home</a>
      </header>
      
      <main className="indexMain">
        <section className="Card">
          <div className="Slide">
            <Slide />
          </div>
            
          <div className="Entity">
            <Entity />
          </div>

          <div className="MetaInfo">
            <MetaInfo />
          </div>

          <div className="ButtonBar">
            <button>Prev</button>

            <div className="BlueButtons">
              <button>Edit</button>
              <button>Delete</button>
              <button>New</button>
            </div>

            <button>Next</button>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
