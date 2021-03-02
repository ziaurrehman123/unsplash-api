import { createEvent } from '@testing-library/react';
import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props){
        super(props);
        this.imageRef= React.createRef();
    }
    componentDidMount(){
        console.log(this.imageRef); 
        // console.log(this.imageRef.current.clientHeight)
    }
    render() {
        const {description, urls}= this.props.image;
        return (
            <div>
                <img 
                src={urls.regular}
                alt={description}
                 />
            </div>
        )
    }
}
