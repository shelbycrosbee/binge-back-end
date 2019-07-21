'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class BingeAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    // call next to advance the request
    try {
      return await auth.getUser()
    } catch (error) {
      response.send('Missing or invalid jwt token')
    }
    await next()
  }
}

module.exports = BingeAuth
