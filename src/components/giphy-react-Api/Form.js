import React, { Component } from "react";
import FormResults from "./FormResults";




export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs : []
        } 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let search = this.refs.name.value;

        const key = "4KQIVdEiHiQhUpPHEL4yUCb7W1awPOD8";
        const URL = "http://api.giphy.com/v1/gifs/search";

        fetch(`${URL}?q=${search}&api_key=${key}&limit=72`).then(response => {
                console.log(response);
                return response.json();
            }).then(data => {
                let gifs = data.data;
                // console.log(gifs);
                this.setState({gifs});
                console.log(this.state.gifs);
            })
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref="name"></input>
                        <button type="submit">Get your Gif on!</button>

                        
                        
                
                    </form>
                    <FormResults gifs={this.state.gifs}/>
                    
                </div>


            </div>
        );
    }
}
