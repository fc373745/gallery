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
        title: "Adrian Smith",
        maxColumns: 4
    },
    {
        name: "albaballesta",
        title: "Alba Ballesta González",
        maxColumns: 3
    },
    {
        name: "alenaaenami",
        title: "Alena Aenami",
        maxColumns: 1
    },
    {
        name: "andreasrocha",
        title: "Andreas Rocha",
        maxColumns: 1
    },
    {
        name: "angelinebandong",
        title: "Angeline Bandong",
        maxColumns: 4
    },
    {
        name: "ateyghailan",
        title: "Atey Ghailan",
        maxColumns: 4
    },
    {
        name: "awanqi",
        title: "aw anqi",
        maxColumns: 4
    },
    {
        name: "chaninsuasungnern",
        title: "chanin suasungnern",
        maxColumns: 4
    },
    {
        name: "chineseletters",
        title: "拯 （雁甲）",
        maxColumns: 1
    },
    {
        name: "chingyeh",
        title: "Ching Yeh",
        maxColumns: 4
    },
    {
        name: "chunlo",
        title: "Chun Lo",
        maxColumns: 4
    },
    {
        name: "fernandocorrea",
        title: "Fernando Correa",
        maxColumns: 3
    },
    {
        name: "gliulian",
        title: "g liu lian",
        maxColumns: 1
    },
    {
        name: "ickyh",
        title: "icky h",
        maxColumns: 4
    },
    {
        name: "jamesjean",
        title: "James Jean",
        maxColumns: 4
    },
    {
        name: "jinhong",
        title: "Jin Hong",
        maxColumns: 4
    },
    {
        name: "leeyeonggyun",
        title: "Lee Yeong Gyun",
        maxColumns: 4
    },
    {
        name: "micaeladawn",
        title: "Micaela Dawn",
        maxColumns: 4
    },
    {
        name: "nivanhchanthara",
        title: "Nivanh changthara",
        maxColumns: 4
    },
    {
        name: "nkayurova",
        title: "N kayurova",
        maxColumns: 4
    },
    {
        name: "sachinteng",
        title: "Sachin Teng",
        maxColumns: 4
    },
    {
        name: "samuelyoun",
        title: "Samuel Youn",
        maxColumns: 4
    },

    {
        name: "satoshimatsuura",
        title: "Satoshi Matsuura",
        maxColumns: 4
    },
    {
        name: "size",
        title: "三叠色 Size",
        maxColumns: 1
    },
    {
        name: "tanzhihui",
        title: "Tan Zhi Hui",
        maxColumns: 4
    },
    {
        name: "walterkim",
        title: "Walkter Kim",
        maxColumns: 3
    },
    {
        name: "weifeng",
        title: "Wei Feng",
        maxColumns: 4
    },
    {
        name: "yunling",
        title: "Yun Ling",
        maxColumns: 4
    },
    {
        name: "zeenchin",
        title: "Zeen Chin",
        maxColumns: 4
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
