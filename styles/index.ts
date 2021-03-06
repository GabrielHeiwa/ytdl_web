import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    };
`;

export const HomePageContainer = styled.div` 
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomePageContent = styled.div`
    width: 70%;
    height: 35%;

    display: grid;
    grid-template-columns: 6fr 1fr 1fr 1fr;
    grid-template-rows: 60% 25% 15%;
    grid-template-areas: 
        "ytdlTitle    ytdlTitle       ytdlTitle        ytdlTitle"
        "ytdlInputUrl ytdlInputFormat ytdlInputQuality ytdlInputConvert"
        "p  p     p      p";
    border-radius: 4px;
    border: 1 solid #d4d4d4;

    h2.ytdlTitle {
        grid-area: ytdlTitle;
    };

    div.ytdlInputUrl {
        grid-area: ytdlInputUrl;

        display: flex;
        align-items: center;
        justify-content: center;

        input {
            width: 95%;
            height: calc(100% - 2px);

            margin: 0;
            padding: 0px;

            border: 1px solid #333;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        };
    };

    div.ytdlInputFormat {
        grid-area: ytdlInputFormat;

        select {
            width: 90%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;    
        
            border: 1px solid #333;
            border-radius: 2px;
        };
    };

    div.ytdlInputQuality {
        grid-area: ytdlInputQuality;

        select {
            width: 90%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;    
        
            border: 1px solid #333;
            border-radius: 2px;
        };
    };

    div.ytdlInputConvert {
        grid-area: ytdlInputConvert;

        button {
            width: 90%;
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: center;    
        
            border: 1px solid #333;
            border-radius: 2px;
        };
    };

    div.ProgressBarContainer {
        grid-area: p;
        
        width: 90%;
        height: 80%;

        display: flex;
        justify-self: center;
        align-self: center;


        div.progressBar {
            background-color: #d3d3d3;
            /* width: 10%; */

            animation: 1s progress-bar-animation infinite;

            @keyframes progress-bar-animation {
                0% {
                    background-position: 0%;
                    width: 0%;
                };
                100% {
                    background-position: 100%;
                    width: 100%;
                };
            };
        };

        
    };

    div.StartCovertText {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;

            width: 15vw;
            height: 5vh;
            bottom: 25px;

            border: 1px solid #333;
            border-radius: 4px;

            animation: 0.3s text-status-download-complete;

            @keyframes text-status-download-complete {
                0% {
                    bottom: 0px;
                };
                100% {
                    bottom: 25px; 
                };
            };
    };
`;