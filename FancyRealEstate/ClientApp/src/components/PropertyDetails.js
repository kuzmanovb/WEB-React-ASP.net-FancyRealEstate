import React, { useState, useEffect } from 'react'
import { PropertyDetailsImageCarusel } from './HeadImageCarousel/PropertyDetailsImageCarusel'
import { PropertyDetailsInfo } from './PropertyDetailsInfo/PropertyDetailsInfo'
import { RelatedProperties } from './RelatedProperties/RelatedProperties'
import { Footer } from './Footer/Footer'

export const PropertyDetails = (props) => {

    return (
        <div>
            <PropertyDetailsImageCarusel image={props.location.state.data.imageIds} data={props.location.state.data} />
            <PropertyDetailsInfo data={props.location.state.data} />
            <RelatedProperties data={props.location.state.data.typeOfDeal} />
            <Footer />
        </div>


    );
}