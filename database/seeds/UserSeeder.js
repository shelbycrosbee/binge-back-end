'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
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
        email: 'a@a.com',
        password: 'a'
      },
      {
        name: 'b',
        email: 'b@b.com',
        password: 'b'
      },
      {
        name: 'c',
        email: 'c@c.com',
        password: 'c'
      }
    ]
    const savedUsers = users.map(async user => {
      await Factory.model('App/Models/User').create(user)
    })
    await Promise.all(savedUsers)

  }
}

module.exports = UserSeeder
