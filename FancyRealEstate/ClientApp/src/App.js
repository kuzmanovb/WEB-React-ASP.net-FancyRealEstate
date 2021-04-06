import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { HeadImageCarousel } from './components/HeadImageCarousel/HeadImageCarousel'
import { Privacy } from './components/Privacy/Privacy'
import { PropertyDetails } from './components/PropertyDetails'
import {Dashboard} from './components/Dashboard/Dashboard'
import {AddNewProperyForm} from './components/AddNewProperyForm/AddNewProperyForm'
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/headImageCarousel' component={HeadImageCarousel} />
                <Route path='/privacy' component={Privacy} />
                <Route path='/property-details' component={PropertyDetails} />
                <AuthorizeRoute path='/my-properties' component={Dashboard} />
                <AuthorizeRoute path='/dashboard' component={Dashboard} />
                <AuthorizeRoute path='/add-property' component={AddNewProperyForm} />
                <AuthorizeRoute path='/fetch-data' component={FetchData} />
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
            </Layout>
        );
    }
}
