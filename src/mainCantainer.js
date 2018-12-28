import React, { Component } from 'react';
import { getFeed } from './adapter';

class mainCantainer extends Component {


    render() {
        getFeed(12);
        return (
            <div>
                all the stuff
            </div>
        );
    }
}

export default mainCantainer;