import React from 'react'
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel'
import { PropertyDetailsInfo } from './PropertyDetailsInfo/PropertyDetailsInfo'
import { RelatedProperties } from './RelatedProperties/RelatedProperties'
import { Footer } from './Footer/Footer'

export const PropertyDetails = () => {
    return (
        <div>
            <HeadImageCarousel />
            <PropertyDetailsInfo />
            <RelatedProperties />
            <Footer />
        </div>


    );
}