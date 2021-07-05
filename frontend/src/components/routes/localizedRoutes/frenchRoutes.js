import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import FirstPage from '../../first/firstPage';
import MainPage from '../../main/mainPage';
import SecondPage from '../../second/secondPage';

export default function FrenchRoutes({locale}) {
    return (
        <Switch>
            <Route exact path="/fr">
                <MainPage locale={locale} />
            </Route>
            <Route exact path="/fr/premiere">
                <FirstPage />
            </Route>
            <Route exact path="/fr/derniere">
                <SecondPage />
            </Route>
        </Switch>
    )
}