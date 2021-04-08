import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './Dashboard.css';
import { DashboardRow } from './DashboardRow/DashboardRow'
import * as propertyService from '../../services/propertyService'
import authService from '../api-authorization/AuthorizeService'


export const Dashboard = (props) => {

    const [realEstateProperties, setRealEstateProperties] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");

    useEffect(() => {

        authService.getUser().then(res => setUser(res))
        authService.getAccessToken().then(res => setToken(res))
        if (user.sub !== undefined) {
            propertyService.getByUserId({ "userId": user.sub, "sortByDateAscending": true }).then(res => setRealEstateProperties(res))
        }

    }, [])

    useEffect(() => {

        if (user.sub !== undefined) {
            propertyService.getByUserId({ "userId": user.sub, "sortByDateAscending": true }).then(res => setRealEstateProperties(res))
        }

    }, [user, token ])


    const removeDeleteItem = (id) => {

        setRealEstateProperties(oldState => oldState.filter(r => r.id !== id))
    };


    return (
        <div className="mt-5 mb-5">
            <div className="container">

                <div className="row">
                    <div className="col">
                        <div className="my-property font-weight-bold">My Properties</div>
                        <p className="show-properties">Showing {realEstateProperties.length} Results</p>
                    </div>
                    <div className="col-6">
                    </div>
                    <div className="col">
                        <Link to={{ pathname: "add-property", state: { "userId": user.sub, "token": token } }} >
                            <Button outline color="primary" size="lg">Add Property</Button>
                        </Link>
                    </div>
                </div>

                <div className="row bg-light mt-3 mb-3">
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

                    <DashboardRow key={res.id} data={res} token={token} userId={user.sub} history={props.history} checkDelete={removeDeleteItem} />
                )}

            </div>
        </div>
    );
}



