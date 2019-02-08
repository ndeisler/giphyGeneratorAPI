import React, { Component } from "react";

import { Form } from "./Form";

import styled from "styled-components";

const Main = styled.div`
    margin: 0;
    padding-top: 0;
    background: black;
`;



export default class GiphyApp extends Component {
      render() {
          return (
              <Main className="main">
                {/* <div className="mainDiv"> */}
                    <h2>Random Gifs</h2>
                    
                    <Form />
                    

                {/* </div> */}
              
              </Main>
              
          )
      }
}

