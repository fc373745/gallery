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
  }
`;

const data: Artists = [
    {
        name: "walterkim",
        dir: "../images/awanqi"
    },
    {
        name: "adriansmith",
        dir: ""
    },
    {
        name: "alexisrives",
        dir: ""
    },
    {
        name: "nkayurova",
        dir: ""
    },
    {
        name: "sachinteng",
        dir: ""
    },
    {
        name: "samuelyoun",
        dir: ""
    },
    {
        name: "zeenchin",
        dir: ""
    },
    {
        name: "satoshimatsuura",
        dir: ""
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
