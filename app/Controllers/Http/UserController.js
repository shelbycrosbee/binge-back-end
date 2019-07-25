'use strict'
<<<<<<< HEAD

const User = use('App/Models/User')

class UserController {
<<<<<<< HEAD
  async create({request, response}) {
=======
const User = use('App/Models/User')

class UserController {
  async index() {
    return await User.all()
  }

  async login({ request, response, auth }) {
    const { email, password } = request.all()
    // const token = await auth.attempt(email, password)
    // response.send(token)
    response.send(' ')
  }

  async create({ request, response, auth }) {
>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
=======
  async create({request, response, auth}) {
>>>>>>> master
    const { email, password, username } = request.all()
    const newUser = await User.create({ username, email, password });
    const token = await auth.attempt(email, password)
    response.send([newUser, token])
  }

<<<<<<< HEAD
  async login({request, response, auth}) {
    const {email, password} = request.all()
    const token = await auth.attempt(email, password)
    response.send([token])
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
=======
  async destroy({ request, response }) {
    const user = await User.find(request.params.id);
    await user.delete();
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

>>>>>>> 9919d57ced3719821181aaabf435b5581878e768
}

module.exports = UserController
