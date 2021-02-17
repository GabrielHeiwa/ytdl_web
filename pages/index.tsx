import React, { useRef, useState } from "react";
// import styled from "styled-components";
import {
    HomePageContainer,
    HomePageContent,
    GlobalStyle
} from "../styles/index";
import Axios from "axios";

export default function Home() {
    const inputYoutubeVideoURL = useRef<HTMLInputElement>(null),
        selectTypeFormat = useRef<HTMLSelectElement>(null),
        selectTypeQuality = useRef<HTMLSelectElement>(null),
        divProgressBar = useRef<HTMLDivElement>(null);

    const [loading, setLoading] = useState<boolean>(false);
    const [downloadFinish, setDownloadFinish] = useState<boolean>(false);

    async function convertYoutubeVideo() {
        setLoading(current => !current);

        await Axios(`${process.env.BACKEND_URL}/convert`, {
            data: {
                youtubeVideoUrl: inputYoutubeVideoURL.current.value,
                downloadFormat: selectTypeFormat.current.value,
                downloadQuality: selectTypeQuality.current.value,
            },
            method: "POST",
        }).then(res => {
            if (res.status === 200) {
                setDownloadFinish(current => !current);

                const ancor = document.createElement("a");
                ancor.href = res.data;
                ancor.click();

                setLoading(current => !current);
                setTimeout(() => setDownloadFinish(current => !current), 1500);
            };
        });
    };

    return <>
        <GlobalStyle />
        <HomePageContainer>
            <HomePageContent>
                <h2 className="ytdlTitle">Youtube Video Convert</h2>
                <div className="ytdlInputUrl">
                    <input
                        placeholder="Youtube URL"
                        ref={inputYoutubeVideoURL} />
                </div>

                <div className="ytdlInputFormat">
                    <select ref={selectTypeFormat}>
                        <option value="mp3">MP3</option>
                        <option value="mp4">MP4</option>
                    </select>
                </div>

                <div className="ytdlInputQuality">
                    <select ref={selectTypeQuality}>
                        <option value="lowest">Low</option>
                        <option value="highest">High</option>
                    </select>
                </div>

                <div className="ytdlInputConvert">
                    <button
                        onClick={() => convertYoutubeVideo()}>
                        Converter
                </button>
                </div>
                {
                    loading && <div className="ProgressBarContainer">
                        <div
                            ref={divProgressBar}
                            className="progressBar"></div>
                    </div>
                }

                {
                    downloadFinish && <div className="StartCovertText">
                        Your vídeo has been convert.
                            </div>
                }
            </HomePageContent>
        </HomePageContainer>
    </>
};
