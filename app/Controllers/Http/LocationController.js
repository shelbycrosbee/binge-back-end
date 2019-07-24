'use strict'

const Location = use('App/Models/Location')

class LocationController {
  async create({request, response}) {
    const { lat, long } = request.all()
    const newLocation = await Location.create({ lat, long });
    response.send([newLocation])
  }

  async destroy({request, response}) {
    const location = await Location.find(request.params.id)
    await location.delete()
    response.send('Location has been removed')
  }

  async update({request, response}) {
    const location = await Location.find(request.params.id)
    const body = request.post()
    location.lat = body.lat
    location.long = body.long
    await location.save()
    response.send('Location updated')
 }

 async index() {
   return await Location
    .query()
    .fetch()
 }
}

module.exports = LocationController
