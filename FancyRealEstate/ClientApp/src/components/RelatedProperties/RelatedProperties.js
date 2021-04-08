/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import { ImageFrame } from '../Gallery/ImageFrame/ImageFrame'
import * as propertyService from '../../services/propertyService'

export const RelatedProperties = (props) => {

    const [properties, setProperties] = useState([])

    useEffect(() => {

        propertyService.getAll({ "deal": props.data }).then(res => setProperties(res.splice(0, 3)))
        
    }, [properties.length < 1])

    return (
        <div className="bg-light mt-5">
            <div className="container">

                <div className="row">
                    <div className="col-12">
                        <div className="site-section-title mb-5 mt-5">
                            <h2>Related Properties</h2>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">

                    {properties?.map((p) =>

                        <ImageFrame key={p.id} data={p}/>

                    )}
                </div>


            </div>
        </div>



    );
}