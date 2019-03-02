import React from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import Header from './../components/Header';
import NotFoundPage from './../components/NotFoundpage';
import HelpExpensePage from './../components/HelpExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path = "/" component={ExpenseDashboardPage} exact={true} />
    <Route path="/create" component={AddExpensePage} />
    <Route path="/edit/:id" component={EditExpensePage} />
    <Route path="/help" component={HelpExpensePage} />
    <Route component={NotFoundPage}  />
    </Switch>
    </div>
    </BrowserRouter> 
);

export default AppRouter;