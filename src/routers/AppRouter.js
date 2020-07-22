import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import ListingPage from '../ListingPage';
import Header from '../Header';
// import DetailPage from '../components/DetailPage';
// import ReviewPage from '../components/ReviewPage';
// import NotFoundPage from '../components/NotFoundPage';

const AppRouter =(props) =>(
    
    <BrowserRouter >

        <div>
            <Header/>
            <Switch>
                <Route path='/' component={App} exact={true}/>
                <Route path='/listing' component={ListingPage} />
                {/* <Route path='/detail/:id' component={DetailPage} />
                <Route path='/review/:id' component={ReviewPage} />
                <Route component={NotFoundPage} />  */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
