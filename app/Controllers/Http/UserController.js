'use strict'
const User = use('App/Models/User')

class UserController {
  async index() {
    return await User.all()
  }

  // async login({ request, response, auth }) {
  //   const { email, password } = request.all()
  //   const token = await auth.attempt(email, password)
  //   response.send(token)
  // }

  async create({ request, response, auth }) {
    const { email, password, username } = request.all()
    const newUser = await User.create({ username, email, password });
    // const token = await auth.attempt(email, password)
    // response.send([newUser, token])
    response.send([newUser])
  }

  async destroy({ request, response }) {
    const user = await User.find(request.params.id);
    await user.delet();
    response.send('Account Deleted')
  }

  async update({ request, response }) {
    const user = await User.find(request.params.id);
    const body = request.post();

    user.username = body.username;
    user.password = body.password;

    await user.save();
    response.send('Account Updated')
  }

}

module.exports = UserController
