import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import FirstPage from '../../first/firstPage';
import MainPage from '../../main/mainPage';
import SecondPage from '../../second/secondPage';

export default function EnglishRoutes({locale}) {
    return (
        <Switch>
            <Route exact path="/en">
                <MainPage locale={locale} />
            </Route>
            <Route exact path="/en/first">
                <FirstPage />
            </Route>
            <Route exact path="/en/second">
                <SecondPage />
            </Route>
        </Switch>
    )
}