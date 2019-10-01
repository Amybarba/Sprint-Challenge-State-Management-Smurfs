import React, { Component } from "react";
import "./App.css";
import SmurfList from './Smurflist';
import SmurfCard from './Smurfs';
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";

const CharCard = styled.div`
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
  /* box-shadow: 2px 3px #352f2f; */
  width: 45%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style-image: url("../src/smurfgirl");
`;





class App extends Component {
  render() {
    return (
      <div className="App">
        <header>SMURFS! 2.0 W/ Redux</header>
        <p>Welcome to your state management version of Smurfs!</p>
        <p>Start inside of your `src/index.js` file!</p>
        <p>Have fun!</p>
           <SmurfCard />
        <div>
        <CharCard>
          <h1>
            <img className="picture" src="../src/smurfgirl.jpeg" alt="smurfgirl"/> 
<SmurfList />

</h1>
  </CharCard>
  </div>
      </div>
    );
  }
}

export default App;
