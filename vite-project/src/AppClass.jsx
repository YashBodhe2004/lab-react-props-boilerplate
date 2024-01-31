import React, { Component } from 'react';
import "./App.css";

export default class AppClass extends Component {
  render() {
    const images = this.props.images();

        return(
            <div>
                <h1 id='heading'>Kalvium Gallery (Class)</h1>
                <div id='image-container'>
                    {images.map((e, index)=>(
                        <img key={index} src={e.img} alt="" />
                    ))}
                </div>
            </div>
        )
    }
  }