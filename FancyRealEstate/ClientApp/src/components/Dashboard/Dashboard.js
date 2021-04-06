import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './Dashboard.css';
import { DashboardRow } from './DashboardRow/DashboardRow'
import * as propertyService from '../../services/propertyService'


export const Dashboard = (props) => {

    const [realEstateProperties, setrealEstateProperties] = useState([]);

    useEffect(() => {

        propertyService.getByUserId({ "userId": "e104c908-7e48-474c-8acf-cdd5abe92eac" }).then(res => setrealEstateProperties(res))

    }, [])

    useEffect(() => {

        propertyService.getByUserId({ "userId": "e104c908-7e48-474c-8acf-cdd5abe92eac" }).then(res => setrealEstateProperties(res))
        
    }, [realEstateProperties])

    return (
        <div className="mt-5">
            <div className="container">

                <div className="row">
                    <div className="col">
                        <div className="my-property font-weight-bold">My Properties</div>
                        <p className="show-properties">Showing {realEstateProperties.length} Results</p>
                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col">
                        <Link to="add-property"><Button outline color="primary" size="lg">Add Property</Button></Link>
                    </div>
                </div>

                <div className="row bg-light pt-3 pb-3">
                    <div className="col-6 text-center">
                        PROPERTY
                        </div>
                    <div className="col-3 text-center">
                        POSTED ON
                        </div>
                    <div className="col-3 text-center">
                        ACTIONS
                         </div>
                </div>

                {realEstateProperties.map((res) =>

                    <DashboardRow key={res.id} data={res} imageId={res.imageIds[0]} history={props.history}/>
                )}

            </div>
        </div>


    );
}


