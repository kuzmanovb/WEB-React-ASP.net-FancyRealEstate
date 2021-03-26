/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {ImageFrame} from '../Gallery/ImageFrame/ImageFrame'

export const RelatedProperties = () => {
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
                    <ImageFrame />
                    <ImageFrame />
                    <ImageFrame />

                </div>


            </div>
        </div>



    );
}