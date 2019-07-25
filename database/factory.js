'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

<<<<<<< HEAD
// const User = use('App/Models/User')

Factory.blueprint('App/Models/User', (faker, i, data) => {
  return {
    username: data.name,
=======
Factory.blueprint('App/Models/User', (data) => {
  return {
    username: data.username,
>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
    email: data.email,
    password: data.password
  }
})
