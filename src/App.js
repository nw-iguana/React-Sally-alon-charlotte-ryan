import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';



const info = {
  email: 'sally@test.com',
  emailLink: 'mailto:sally@test.com',
  phone: '123-456-7890'
}

function App(props) {

    return (
      <div className="App">
        <Header info={info}/>

        <main>
          <section className="education">
            <h2>Education</h2>
            <h3>University of North Florida</h3>
            <p>Class of 2019</p>
            <p>Bachelor of Arts: Event Planning, Minor in Underwater Basket Weaving</p>
          </section>
          <section className="employment">
            <h2>Employment</h2>
            <h3>Sandwich Wrangler | Fyre Festival</h3>
            <ul>
              <li>Toasted Bread</li>
              <li>Put cheese on bread</li>
            </ul>

            <h3>Dinosaur Handler | Jurassic World</h3>
            <ul>
              <li>Fed Velociraptors</li>
              <li>Made sure they didn't escape</li>
              <li>Oops</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }


export default App;