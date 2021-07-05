import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import FirstPage from '../../first/firstPage';
import MainPage from '../../main/mainPage';
import SecondPage from '../../second/secondPage';

export default function RomanianRoutes({locale}) {
    return (
        <Switch>
            <Route exact path="/ro">
                <MainPage locale={locale} />
            </Route>
            <Route exact path="/ro/prima">
                <FirstPage />
            </Route>
            <Route exact path="/ro/secunda">
                <SecondPage />
            </Route>
        </Switch>
    )
}