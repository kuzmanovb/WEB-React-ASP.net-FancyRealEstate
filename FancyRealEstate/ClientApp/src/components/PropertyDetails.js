import React from 'react'
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel'
import { PropertyDetailsInfo } from './PropertyDetailsInfo/PropertyDetailsInfo'
import { Footer } from './Footer/Footer'

export const PropertyDetails = () => {
    return (
        <div>
            <HeadImageCarousel />
            <PropertyDetailsInfo />
            <Footer />
        </div>


    );
}