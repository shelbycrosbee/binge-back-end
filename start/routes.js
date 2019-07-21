'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Users = use('App/Models/User')
const Database = use('Database')

Route.on('/').render('welcome')

Route.post('/register', 'UserController.create')

Route.post('/login', 'UserController.login')

Route.resource('users', 'UserController').middleware(['bingeAuth'])

Route.resource('location', 'LocationController').middleware(['bingeAuth'])
