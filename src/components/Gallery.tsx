import * as React from "react";
import styled from "styled-components";

interface Props {
    artist: Artist;
}

const GalleryContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Column = styled.div<{ numDivisions: number }>`
    display: flex;
    flex-direction: column;
    width: ${p => 100 / p.numDivisions}%;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

function importAll(r: any) {
    return r.keys().map(r);
}

export const Gallery: React.FC<Props> = ({ artist }) => {
    const [images, setImages] = React.useState<any>(null);
    const [numDivisions, setNumDivisions] = React.useState<number>(0);
    const [sepImages, setSepImages] = React.useState<string[][] | null>(null);

    const getImages = () => {
        const images = importAll(
            require.context("../images/awanqi", false, /\.(png|jpe?g|svg)$/)
        );
        setImages(images);
    };

    const seperateImages = () => {
        let sepImagesList = [new Array(numDivisions)];

        if (images && numDivisions) {
            images.forEach((image: string, i: number) => {
                if (sepImagesList[i % numDivisions]) {
                    sepImagesList[i % numDivisions].push(image);
                } else {
                    sepImagesList[i % numDivisions] = [image];
                }
            });
        }

        setSepImages(sepImagesList);
    };

    React.useEffect(() => {
        if (!images) {
            window.addEventListener("resize", () => {
                if (window.innerWidth <= 500) {
                    setNumDivisions(1);
                } else if (
                    window.innerWidth > 250 &&
                    window.innerWidth <= 800
                ) {
                    setNumDivisions(2);
                } else if (
                    window.innerWidth > 800 &&
                    window.innerWidth <= 1200
                ) {
                    setNumDivisions(3);
                } else {
                    setNumDivisions(3);
                }
            });
            getImages();
        }
        if (images && !numDivisions) {
            if (window.innerWidth <= 500) {
                setNumDivisions(1);
            } else if (window.innerWidth > 250 && window.innerWidth <= 800) {
                setNumDivisions(2);
            } else if (window.innerWidth > 800 && window.innerWidth <= 1200) {
                setNumDivisions(3);
            } else {
                setNumDivisions(3);
            }
        }
        if (images && numDivisions) {
            seperateImages();
        }
    });

    return (
        <GalleryContainer>
            {sepImages &&
                sepImages.map(images => (
                    <Column numDivisions={numDivisions}>
                        {images.map(image => (
                            <Image src={image} />
                        ))}
                    </Column>
                ))}
        </GalleryContainer>
    );
};
