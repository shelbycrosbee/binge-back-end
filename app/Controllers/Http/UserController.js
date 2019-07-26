'use strict'

const User = use('App/Models/User')

class UserController {
  async create({request, response, auth}) {
    const { email, password, username } = request.all()
    const newUser = await User.create({ username, email, password });
    const token = await auth.attempt(email, password)
    response.send({user: newUser, token: token.token})
  }

  async login({request, response, auth}) {
    const {email, password } = request.all()
    const token = await auth.attempt(email, password);
    const user = await User.query().where('email', '=', email).fetch()
    response.send({user: user.rows[0], token: token.token})
    // response.send([user, token])
  }

  async destroy({request, response}) {
    const user = await User.find(request.params.id)
    await user.delete()
    response.send('User has been deleted')
  }

  async update({request, response}) {
    const user = await User.find(request.params.id)
    const body = request.post()
    // console.log(body)
    user.username = body.username
    user.password = body.password
    await user.save()
    response.send('User updated')
 }
}

module.exports = UserController
