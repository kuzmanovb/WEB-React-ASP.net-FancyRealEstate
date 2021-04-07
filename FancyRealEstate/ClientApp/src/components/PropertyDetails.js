import React,{useState, useEffect} from 'react'
import { HeadImageCarousel } from './HeadImageCarousel/HeadImageCarousel'
import { PropertyDetailsInfo } from './PropertyDetailsInfo/PropertyDetailsInfo'
import { RelatedProperties } from './RelatedProperties/RelatedProperties'
import { Footer } from './Footer/Footer'

export const PropertyDetails = (props) => {

useEffect(() => {
 console.log(props)
}, [props.location?.state !== undefined])

    return (
        <div>
            <HeadImageCarousel />
            <PropertyDetailsInfo data={props}/>
            <RelatedProperties />
            <Footer />
        </div>


    );
}