import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routesList'
import RouteValidator from './RouteValidator'
import NotFoundComponent from 'layouts/404/index'

const CustomRoutes = () => {
  return (
    <>
      <Switch>
        {
          routes.map((route) => (
            <Route
              path={route.path}
              key={route.id}
              exact
              render={() => <RouteValidator route={route} />}
            />
          ))
          }
        <Route component={NotFoundComponent} />
      </Switch>
    </>
  )
}

export default CustomRoutes
