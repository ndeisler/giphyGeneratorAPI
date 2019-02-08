import React from "react"


import styled from "styled-components";

const Gif = styled.li`
    list-style-type: none;
    padding: 10px;
    margin: 0;
    float: left;
`;

const GifImg = styled.img`
    width: 260px;
    height: 200px;
    border: solid 2px grey;
`;

const GifBackground = styled.ul`
    list-style-type: none;
    width: 90vw;
    margin: auto;
    padding: 0;
    background: black;
    
`;
// const All = styled.div`
//     background: black;
// `;



const FormResults = ({ gifs }) => {
    const resultsFormated = gifs.map((element, index) => 
        <Gif key={index}>
            <div className="imgDiv">
            <a href={gifs[index].bitly_gif_url} target="_blank"><GifImg src={gifs[index].images.original.url}/></a>
            </div>
        </Gif>
    )

    return (
        
        <GifBackground>
            {resultsFormated}
        </GifBackground>
        
    )

}
export default FormResults