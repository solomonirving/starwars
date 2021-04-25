import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Dimmer, Loader } from 'semantic-ui-react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Starships from './components/Starships';
import Vehicles from './components/Vehicles'


function App() {
const [starships, setStarships] = useState([]);
const [vehicles, setVehicles] = useState([])
const [loading, setLoading] = useState(true);

//STARSHIPS
useEffect(() => {
  async function fetchStarships() {
      let baseUrl = `https://swapi.dev/api/starships/?format=json&page=`;
      let page = 1;
      let ships = [];
      let lastResult = [];
      do {
        try {
          const resp = await fetch(`${baseUrl}${page}`);
          const data = await resp.json();
          lastResult = data;
          data.results.forEach(spaceship => {
            const { name, model, manufacturer, MGLT, max_atmosphering_speed, length }= spaceship;
            ships.push({ name, model, manufacturer, MGLT, max_atmosphering_speed, length });
          });
          page++;
        } catch (err) {
          console.error(`Oops, something is wrong ${err}`);
        }
      } while (lastResult.next !== null);

      setStarships(ships)
  }
  fetchStarships()
  setLoading(false)
}, [])


//VEHICLES
useEffect(() => {
  async function fetchVechicles() {
      let baseUrl = `https://swapi.dev/api/vehicles/?format=json&page=`;
      let page = 1;
      let vehicle = [];
      let lastResult = [];
      do {
        try {
          const resp = await fetch(`${baseUrl}${page}`);
          const data = await resp.json();
          lastResult = data;
          data.results.forEach(auto => {
            const { name, model, manufacturer, vehicle_class, max_atmosphering_speed, length }= auto;
            vehicle.push({ name, model, manufacturer, vehicle_class, max_atmosphering_speed, length });
          });
          page++;
        } catch (err) {
          console.error(`Oops, something is wrong ${err}`);
        }
      } while (lastResult.next !== null);

      setVehicles(vehicle)
  }
  fetchVechicles()
  setLoading(false)
}, [])

return (
    <div className="App">
      <Router>
      <Navbar />
        <Header />
          <Container>  
            {loading ? (
              <Dimmer active inverted>
                 <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/vehicles'>
                <Vehicles data={vehicles} />
              </Route>
              <Route path='/starships'>
                <Starships data={starships} />
              </Route>
            </Switch>
             )} 
          </Container>
      </Router>
    </div>
  );
}

export default App;



