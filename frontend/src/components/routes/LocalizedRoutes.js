import React from "react";
import {
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import EnglishRoutes from "./localizedRoutes/englishRoutes";
import FrenchRoutes from "./localizedRoutes/frenchRoutes";
import RomanianRoutes from "./localizedRoutes/romanianRoutes";

export const LocalizedRoutes = ({locale}) => {
  return (

        <Switch>
            <Route path="/en">
                <EnglishRoutes locale={locale} />
            </Route>
            <Route path="/fr">
                <FrenchRoutes locale={locale} />
            </Route>
            <Route path="/ro">
                <RomanianRoutes locale={locale} />
            </Route>
            <Route exact path="/" >
              <Redirect to="/en" />
            </Route>
        </Switch>

  );
}