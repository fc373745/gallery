import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Gallery } from "./components/Gallery";

const GalleryContainer = styled.div`
    display: flex;
    width: 100vw;
    /* max-width: 1200px; */
    padding: 1rem;
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
            <GalleryContainer>
                <Global />
                <Gallery artist={Data[0]} />
            </GalleryContainer>
        );
    }
}

export default App;
