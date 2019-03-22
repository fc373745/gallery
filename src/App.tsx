import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Gallery } from "./components/Gallery";

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    max-width: 1500px;
    padding: 1rem 2rem;
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
        maxColumns: 4,
        artstation: "https://www.artstation.com/adrian-smith"
    },
    {
        name: "albaballesta",
        title: "Alba Ballesta González",
        maxColumns: 3,
        artstation: "https://www.artstation.com/albabg",
        insta: "https://www.instagram.com/albabbgg/?hl=en"
    },
    {
        name: "alenaaenami",
        title: "Alena Aenami",
        maxColumns: 1,
        insta: "https://www.instagram.com/aenami.art/?hl=en",
        artstation: "https://www.artstation.com/aenamiart"
    },
    {
        name: "andreasrocha",
        title: "Andreas Rocha",
        maxColumns: 1,
        artstation: "https://www.artstation.com/andreasrocha"
    },
    {
        name: "angelinebandong",
        title: "Angeline Bandong",
        maxColumns: 4,
        twitter: "https://twitter.com/TheAntleredWolf",
        artstation: "https://www.artstation.com/theantleredwolf/profile",
        insta: "https://www.instagram.com/theantleredwolf/"
    },
    {
        name: "ateyghailan",
        title: "Atey Ghailan",
        maxColumns: 4,
        artstation: "https://www.artstation.com/snatti",
        insta: "https://www.instagram.com/snatti89/?hl=en"
    },
    {
        name: "awanqi",
        title: "aw anqi",
        maxColumns: 4,
        artstation: "https://www.artstation.com/awanqi",
        twitter: "https://twitter.com/awanqi?lang=en",
        insta: "https://www.instagram.com/aw.anqi/"
    },
    {
        name: "chaninsuasungnern",
        title: "chanin suasungnern",
        maxColumns: 4,
        insta: "https://www.instagram.com/chaninnincha/?hl=en",
        artstation: "https://www.artstation.com/chanins"
    },
    {
        name: "chineseletters",
        title: "xx zheng",
        maxColumns: 1,
        artstation: "https://www.artstation.com/xxzheng"
    },
    {
        name: "chingyeh",
        title: "Ching Yeh",
        maxColumns: 4,
        artstation: "https://www.artstation.com/chingyeh",
        insta: "https://www.instagram.com/chingyeh005/"
    },
    {
        name: "chunlo",
        title: "Chun Lo",
        maxColumns: 4,
        artstation: "https://twitter.com/belgeist",
        insta: "https://www.instagram.com/chingyeh005/"
    },
    {
        name: "fernandocorrea",
        title: "Fernando Correa",
        maxColumns: 3,
        artstation: "https://www.artstation.com/fernandocorrea/"
    },
    {
        name: "gliulian",
        title: "g liu lian",
        maxColumns: 1,
        artstation: "https://www.artstation.com/gliulian/profile"
    },
    {
        name: "ickyh",
        title: "icky h",
        maxColumns: 4,
        artstation: "https://www.artstation.com/icky",
        insta: "https://www.instagram.com/icky.h/"
    },
    {
        name: "jamesjean",
        title: "James Jean",
        maxColumns: 4,
        insta: "https://www.instagram.com/jamesjeanart/?hl=en",
        twitter: "https://twitter.com/JamesJeanArt"
    },
    {
        name: "jinhong",
        title: "Jin Hong",
        maxColumns: 4,
        artstation: "https://www.artstation.com/jinhong",
        insta: "https://www.instagram.com/bznong_jinhong/",
        twitter: "https://twitter.com/bznong"
    },
    {
        name: "leeyeonggyun",
        title: "Lee Yeong Gyun",
        maxColumns: 4,
        artstation: "https://www.artstation.com/obokhan",
        twitter: "https://twitter.com/OBOKHAN1"
    },
    {
        name: "micaeladawn",
        title: "Micaela Dawn",
        maxColumns: 4,
        artstation: "https://www.artstation.com/micaeladawn",
        twitter: "https://twitter.com/DawnMicaela"
    },
    {
        name: "nivanhchanthara",
        title: "Nivanh changthara",
        maxColumns: 4,
        artstation: "https://www.artstation.com/nivanhchanthara"
    },
    {
        name: "nkayurova",
        title: "N kayurova",
        maxColumns: 4,
        insta: "https://www.instagram.com/n_kayurova",
        artstation: "https://www.artstation.com/santella"
    },
    {
        name: "sachinteng",
        title: "Sachin Teng",
        maxColumns: 4,
        insta: "https://www.instagram.com/SachinTeng/",
        twitter: "https://twitter.com/SachinTeng"
    },
    {
        name: "samuelyoun",
        title: "Samuel Youn",
        maxColumns: 4,
        insta: "https://www.instagram.com/samuelyounart/?hl=en",
        twitter: "https://twitter.com/samuelyounart?lang=en"
    },

    {
        name: "satoshimatsuura",
        title: "Satoshi Matsuura",
        maxColumns: 4,
        artstation: "https://www.artstation.com/hiziripro",
        twitter: "https://twitter.com/hiziri_pro"
    },
    {
        name: "size",
        title: "size80",
        maxColumns: 1,
        artstation: "https://www.artstation.com/size80"
    },
    {
        name: "tanzhihui",
        title: "Tan Zhi Hui",
        maxColumns: 4,
        artstation: "https://www.artstation.com/kudaman",
        insta: "https://www.instagram.com/Kudaman_89/",
        twitter: "https://twitter.com/Kudaman_89"
    },
    {
        name: "walterkim",
        title: "Walkter Kim",
        maxColumns: 3,
        artstation: "https://www.artstation.com/wksnap",
        insta: "https://www.instagram.com/walterkim213/?hl=en"
    },
    {
        name: "weifeng",
        title: "Wei Feng",
        maxColumns: 4,
        artstation: "https://www.artstation.com/fengweic12"
    },
    {
        name: "yunling",
        title: "Yun Ling",
        maxColumns: 4,
        artstation: "https://www.artstation.com/yunling904",
        insta: "https://www.instagram.com/lingy000/"
    },
    {
        name: "zeenchin",
        title: "Zeen Chin",
        maxColumns: 4,
        artstation: "https://www.artstation.com/zeen",
        insta: "https://www.instagram.com/zeenchin/"
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
