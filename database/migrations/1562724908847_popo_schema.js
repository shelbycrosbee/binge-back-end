'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PopoSchema extends Schema {
  up () {
    this.create('popos', (table) => {
      table.increments()
      table.timestamps()
      table.string("lat")
      table.string("long")
      table.integer("user_id").unsigned()
      table.foreign("user_id").references("id").inTable("users")

    })
  }

  down () {
    this.drop('popos')
  }
}

module.exports = PopoSchema
