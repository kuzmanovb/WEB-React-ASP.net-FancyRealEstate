import React, { Component } from 'react';
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel.js'
import { Search } from './Search/Search.js'
import {Sort} from './Sort/Sort'


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <HeadImageCarousel />
                <Search />
                <Sort />

            </div>

        );
    }
}
