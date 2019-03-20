import * as React from "react";
import styled from "styled-components";

interface Props {
    artist: Artist;
}

const GalleryContainer = styled.div`
    /* width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 0; */
    display: flex;
`;

const ImageContainer = styled.div`
    flex: auto;
    width: 500px;
    margin: 0.5vw;
`;

// const Image = styled.img`
//     width: 100%;
//     height: auto;
// `;

const Title = styled.div`
    width: 100%;
    background-color: blue;
    height: 5rem;
    font-size: 2rem;
`;

function importAll(r: any) {
    return r.keys().map(r);
}

const Images = styled.div``;

export const Gallery: React.FC<Props> = ({ artist }) => {
    const [images, setImages] = React.useState<any>(null);

    const getImages = () => {
        const images = importAll(
            require.context("../images/awanqi", false, /\.(png|jpe?g|svg)$/)
        );
        setImages(images);
    };

    React.useEffect(() => {
        if (!images) {
            getImages();
        }
    });

    return (
        <GalleryContainer>
            <Images>
                {images &&
                    images.map((image: any) => (
                        <ImageContainer>
                            <img
                                style={{ height: "auto", width: "100%" }}
                                src={image}
                            />
                        </ImageContainer>
                    ))}
            </Images>
        </GalleryContainer>
    );
};
