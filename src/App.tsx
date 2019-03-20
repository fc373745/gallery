import React, { useEffect, useState } from "react";
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
    background-color: #F0F5F5;
    overflow-x: hidden;
  }

  @font-face {
        font-family: Archivo;
        src: url('./fonts/Archivo_Black/ArchivoBlack-Regular.ttf');
    }

`;

const data: Artists = [
    {
        name: "adriansmith",
        title: "Adrian Smith"
    },
    {
        name: "albaballesta",
        title: "Alba Ballesta González"
    },
    {
        name: "alenaaenami",
        title: "Alena Aenami"
    },
    {
        name: "andreasrocha",
        title: "Andreas Rocha"
    },
    {
        name: "angelinebandong",
        title: "Angeline Bandong"
    },
    {
        name: "ateyghailan",
        title: "Atey Ghailan"
    },
    {
        name: "awanqi",
        title: "aw anqi"
    },
    {
        name: "chaninsuasungnern",
        title: "chanin suasungnern"
    },
    {
        name: "chineseletters",
        title: "拯 （雁甲）"
    },
    {
        name: "chingyeh",
        title: "Ching Yeh"
    },
    {
        name: "chunlo",
        title: "Chun LO"
    },
    {
        name: "fernandocorrea",
        title: "Fernando Correa"
    },
    {
        name: "gliulian",
        title: "g liu lian"
    },
    {
        name: "ickyh",
        title: "icky h"
    },
    {
        name: "satoshimatsuura",
        title: "Satoshi Matsuura"
    },
    {
        name: "size",
        title: "三叠色 Size"
    },
    {
        name: "tanzhihui",
        title: "Tan Zhi Hui"
    },
    {
        name: "walterkim",
        title: "Walkter Kim"
    },
    {
        name: "weifeng",
        title: "Wei Feng"
    },
    {
        name: "yliadeillustrations",
        title: "Yliade Illustrations"
    },
    {
        name: "yunling",
        title: "Yun Ling"
    },
    {
        name: "zeenchin",
        title: "Zeen Chin"
    }
];

const App: React.FC = () => {
    let counter = 3;
    const [viewGallery, setViewGallery] = useState<Artists>([]);

    useEffect(() => {
        if (viewGallery.length < 1) {
            let newViewGallery = data.slice(0, 3);
            setViewGallery(newViewGallery);
            window.addEventListener("scroll", () => {
                var d = document.documentElement;
                var offset = d.scrollTop + window.innerHeight;
                var height = d.offsetHeight;

                if (offset === height) {
                    addAnotherThree();
                    console.log("waht");
                }
            });
        }
    });

    const addAnotherThree = () => {
        counter += 3;
        let newViewGallery = data.slice(0, counter);
        setViewGallery(newViewGallery);
    };

    return (
        <Container>
            <Global />
            {viewGallery.map(dat => (
                <Gallery key={dat.name} artist={dat} />
            ))}
        </Container>
    );
};

export default App;
