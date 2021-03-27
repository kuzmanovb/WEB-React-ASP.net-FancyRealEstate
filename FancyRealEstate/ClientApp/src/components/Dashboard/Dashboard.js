import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import './Dashboard.css';
import {DashboardRow} from './DashboardRow/DashboardRow'


export class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <div className="mt-5">
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <div className="my-property font-weight-bold">My Properties</div>
                            <p className="show-properties">Showing 5 Results</p>
                        </div>
                        <div className="col-6">
                        </div>
                        <div className="col">
                        <Link to="add-property"><Button outline color="primary" size="lg">Add Property</Button>{' '}</Link>
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

                    

                    <DashboardRow city="Sofia" address="jk.Ilinden bl.52" postOn="12.06.2020" price="120 000 lv."/>
                    <DashboardRow city="Sofia" address="jk.Ilinden bl.52" postOn="12.06.2020" price="120 000 lv."/>
                    <DashboardRow city="Sofia" address="jk.Ilinden bl.52" postOn="12.06.2020" price="120 000 lv."/>
                    <DashboardRow city="Sofia" address="jk.Ilinden bl.52" postOn="12.06.2020" price="120 000 lv."/>
                    <DashboardRow city="Sofia" address="jk.Ilinden bl.52" postOn="12.06.2020" price="120 000 lv."/>
                    


                </div>
            </div>


        );
    }
}


