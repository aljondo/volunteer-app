import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from 'views/App'
import ProfileView from 'views/profile/ProfileView'
import HomeView from 'views/home/HomeView'
import SearchView from 'views/search/SearchView'
import LoginView from 'views/login/loginView'
import RegisterView from 'views/register/RegisterView'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={HomeView}/>
        <Route path="profile" component={ProfileView}/>
        <Route path="search" component={SearchView}/>
        <Route path="login" component={LoginView}/>
        <Route path="register" component={RegisterView}/>
    </Route>
)


export default routes;
