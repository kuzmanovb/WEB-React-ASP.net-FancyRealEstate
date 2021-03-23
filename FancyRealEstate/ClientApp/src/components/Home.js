import React, { Component } from 'react';
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel.js'
import { Search } from './Search/Search.js'
import { Sort } from './Sort/Sort'
import { Gallery } from './Gallery/Gallery.js'
import { Footer } from './Footer/Footer.js'


export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <HeadImageCarousel />
                <Search />
                <Sort />
                <Gallery />
                <Footer />

            </div>

        );
    }
}
