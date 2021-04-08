import React, { useState, useEffect } from 'react'
import { ImageFrame } from './ImageFrame/ImageFrame.js'
import { Pagination } from '../Pagination/Pagination.js'

export const Gallery = (props) => {

    const getNumberPage = (number) => {
        props.getData(number)
    };
   

    return (
        <div className="bg-light pt-4 pb-4 mb-5">
            <div className="container">
                <div className="row mb-5">
                    {props.allProperties.map((p) =>

                        <ImageFrame key={p.id} data={p} />

                    )}
                </div>
            </div>
            <Pagination data={props.allProperties} getNumber={getNumberPage} />
        </div>

    );
}