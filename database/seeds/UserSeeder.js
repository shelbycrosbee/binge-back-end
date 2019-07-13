'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Mdke use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');


class UserSeeder {
  async run () {
    const users = 
    [
      {
        username: 'a',
        email: 'a@a.com',
        password: 'a'
      },
      {
        username: 'b',
        email: 'b@b.com',
        password: 'b'
      },
      {
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
  }
}

module.exports = UserSeeder
