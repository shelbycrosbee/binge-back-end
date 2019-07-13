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
const User = use('App/Models/User')

Route.post('/login', 'UserController.login')

Route.post('/register', 'UserController.create')

Route.delete('/users/:id','UserController.destroy')

Route.put('/users/:id', 'UserController.update')

Route.get('/', 'UserContoller.index')
