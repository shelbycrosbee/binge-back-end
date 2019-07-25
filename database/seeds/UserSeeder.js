'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
<<<<<<< HEAD
| Make use of the Factory instance to seed database with dummy data or
=======
| Mdke use of the Factory instance to seed database with dummy data or
>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
<<<<<<< HEAD
const Factory = use('Factory')

// const User = use('App/Models/User')

// const users = [
//   {
//     name: 'a',
//     email: 'a@a.com',
//     password: 'a'
//   },
//   {
//     name: 'b',
//     email: 'b@b.com',
//     password: 'b'
//   },
//   {
//     name: 'c',
//     email: 'c@c.com',
//     password: 'c'
//   }
// ]

class UserSeeder {
  async run () {
    const users = [
      {
        name: 'a',
=======
const Factory = use('Factory');


class UserSeeder {
  async run () {
    const users = 
    [
      {
        username: 'a',
>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
        email: 'a@a.com',
        password: 'a'
      },
      {
<<<<<<< HEAD
        name: 'b',
=======
        username: 'b',
>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
        email: 'b@b.com',
        password: 'b'
      },
      {
<<<<<<< HEAD
        name: 'c',
        email: 'c@c.com',
        password: 'c'
      }
    ]
    const savedUsers = users.map(async user => {
      await Factory.model('App/Models/User').create(user)
    })
    await Promise.all(savedUsers)

=======
        username: 'c',
        email: 'c@c.com',
        password: 'c'
      },
      {
        username: 'd',
        email: 'd@d.com',
        password: 'd'
      }
    ]
    const userList = users.map(async user => {
      await Factory.model('App/Models/User').create(user)
    })
    await Promise.all(userList)
>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
  }
}

module.exports = UserSeeder
