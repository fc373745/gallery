import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArtstation,
    faInstagram,
    faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled from "styled-components";

library.add(faTwitterSquare, faArtstation, faInstagram);
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
        switch (artist.name) {
            case "walterkim": {
                const images = importAll(
                    require.context(
                        "../images/walterkim",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "adriansmith": {
                const images = importAll(
                    require.context(
                        "../images/adriansmith",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "albaballesta": {
                const images = importAll(
                    require.context(
                        "../images/albaballesta",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "alenaaenami": {
                const images = importAll(
                    require.context(
                        "../images/alenaaenami",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "alexisrives": {
                const images = importAll(
                    require.context(
                        "../images/alexisrives",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "andreasrocha": {
                const images = importAll(
                    require.context(
                        "../images/andreasrocha",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "angelinebandong": {
                const images = importAll(
                    require.context(
                        "../images/angelinebandong",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "ateyghailan": {
                const images = importAll(
                    require.context(
                        "../images/ateyghailan",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "awanqi": {
                const images = importAll(
                    require.context(
                        "../images/awanqi",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "chaninsuasungnern": {
                const images = importAll(
                    require.context(
                        "../images/chaninsuasungnern",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "chineseletters": {
                const images = importAll(
                    require.context(
                        "../images/chineseletters",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "fernandocorrea": {
                const images = importAll(
                    require.context(
                        "../images/fernandocorrea",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "chingyeh": {
                const images = importAll(
                    require.context(
                        "../images/chingyeh",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "gliulian": {
                const images = importAll(
                    require.context(
                        "../images/gliulian",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "ickyh": {
                const images = importAll(
                    require.context(
                        "../images/ickyh",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "jamesjean": {
                const images = importAll(
                    require.context(
                        "../images/jamesjean",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "jinhong": {
                const images = importAll(
                    require.context(
                        "../images/jinhong",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "leeyeonggyun": {
                const images = importAll(
                    require.context(
                        "../images/leeyeonggyun",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "micaeladawn": {
                const images = importAll(
                    require.context(
                        "../images/micaeladawn",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "nivanhchanthara": {
                const images = importAll(
                    require.context(
                        "../images/nivanhchanthara",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "nkayurova": {
                const images = importAll(
                    require.context(
                        "../images/nkayurova",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "sachinteng": {
                const images = importAll(
                    require.context(
                        "../images/sachinteng",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "samuelyoun": {
                const images = importAll(
                    require.context(
                        "../images/samuelyoun",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "satoshimatsuura": {
                const images = importAll(
                    require.context(
                        "../images/satoshimatsuura",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "size": {
                const images = importAll(
                    require.context(
                        "../images/size",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "tanzhihui": {
                const images = importAll(
                    require.context(
                        "../images/tanzhihui",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "chunlo": {
                const images = importAll(
                    require.context(
                        "../images/chunlo",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "weifeng": {
                const images = importAll(
                    require.context(
                        "../images/weifeng",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "yunling": {
                const images = importAll(
                    require.context(
                        "../images/yunling",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            case "zeenchin": {
                const images = importAll(
                    require.context(
                        "../images/zeenchin",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                );
                setImages(images);
                break;
            }
            default:
                return;
        }
    };

    const seperateImages = () => {
        let sepImagesList = new Array(numDivisions);

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
                    window.innerWidth <= 800 &&
                    artist.maxColumns >= 2
                ) {
                    setNumDivisions(2);
                } else if (
                    window.innerWidth > 800 &&
                    window.innerWidth <= 1200 &&
                    artist.maxColumns >= 3
                ) {
                    setNumDivisions(3);
                } else {
                    setNumDivisions(artist.maxColumns);
                }
            });
            getImages();
        }
        if (images && !numDivisions) {
            if (window.innerWidth <= 500) {
                setNumDivisions(1);
            } else if (
                window.innerWidth > 250 &&
                window.innerWidth <= 800 &&
                artist.maxColumns > 2
            ) {
                setNumDivisions(2);
            } else if (
                window.innerWidth > 800 &&
                window.innerWidth <= 1200 &&
                artist.maxColumns > 3
            ) {
                setNumDivisions(3);
            } else {
                setNumDivisions(artist.maxColumns);
            }
        }
        if (images && numDivisions) {
            seperateImages();
        }
    }, [images, numDivisions]);

    const Title = styled.div`
        margin-top: 2rem;
        box-sizing: border-box;
        padding: 1rem;
        width: 100%;
        background-color: #30323d;
        font-size: 3.2rem;
        font-family: Archivo;
        color: #f0f5f5;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    const Links = styled.div`
        display: flex;
        align-items: center;
    `;
    const Link = styled.a`
        padding-right: 2rem;
        font-size: 2.5rem;
        color: #f0f5f5;

        &:hover {
            color: #94b8b8;
            transition-duration: 250ms;
        }
    `;

    return (
        <>
            <Title>
                {artist.title}
                <Links>
                    {artist.artstation && (
                        <Link href={artist.artstation} target="_blank">
                            <FontAwesomeIcon icon={["fab", "artstation"]} />
                        </Link>
                    )}
                    {artist.insta && (
                        <Link href={artist.insta} target="_blank">
                            <FontAwesomeIcon icon={["fab", "instagram"]} />
                        </Link>
                    )}
                    {artist.twitter && (
                        <Link href={artist.twitter} target="_blank">
                            <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                        </Link>
                    )}
                </Links>
            </Title>
            <GalleryContainer>
                {sepImages &&
                    sepImages.map((images, i) => (
                        <Column key={i} numDivisions={numDivisions}>
                            {images.map((image, i) => (
                                <Image key={i} src={image} alt={image} />
                            ))}
                        </Column>
                    ))}
            </GalleryContainer>
        </>
    );
};
