import React, {Component} from 'react';
import Entity from './components/Entity.js';
import Slide from './components/Slide.js';
import MetaInfo from './components/MetaInfo.js';
import data from './data.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentID: 1,
      totalID: data.length,
      fullName: data.map((element) => element.name.first + ' ' + element.name.last),
      from: data.map((element) => element.city + ', ' + element.country),
      empolyer: data.map((element) => element.employer),
      jobTitle: data.map((element) => element.title),
      favoriteMovies: data.map((element) => element.favoriteMovies)
    }
  }

  next() {
    if (this.state.currentID !== this.state.totalID) {
      return this.setState({
      currentID: this.state.currentID + 1
      })    
    }
  }

  previous() {
    if (this.state.currentID !== 1) {
      return this.setState({
      currentID: this.state.currentID - 1
      })    
    }
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <header>
          <a className="Home" href="https://github.com/maxFullmer/react-i-ii-afternoon">Home</a>
        </header>
        
        <main className="indexMain">
          <section className="Card">
            <div className="Slide">
              <Slide currentID={this.state.currentID} totalID={this.state.totalID}/>
            </div>
              
            <div className="Entity">
              <Entity currentID={this.state.currentID} fullName={this.state.fullName}/>
            </div>

            <div className="MetaInfo">
              <MetaInfo currentID={this.state.currentID} 
              from={this.state.from}
              employer={this.state.empolyer}
              jobTitle={this.state.jobTitle}
              favoriteMovies={this.state.favoriteMovies}/>
            </div>

            <div className="ButtonBar">
              <button onClick={() => this.previous()}>{"<"} Previous</button>

              <div className="BlueButtons">
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
              </div>

              <button onClick={() => this.next()}>Next {">"}</button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
