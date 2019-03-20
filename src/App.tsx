import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Gallery } from "./components/Gallery";

const Container = styled.div`
    width: 100%;
    max-width: 1800px;
    padding: 1rem;
    margin: auto;
`;

const Global = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }

  body{
    font-size: 16px;
  }
`;

const Data: Artists = [
    {
        name: "aw anqi",
        dir: "awanqi"
    }
];

class App extends Component {
    render() {
        return (
            <Container>
                <Global />
                <Gallery artist={Data[0]} />
            </Container>
        );
    }
}

export default App;
