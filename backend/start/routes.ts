/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'
import allyConfig from 'Config/ally'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.get('/:provider/redirect', async ({ ally, auth, response, params }) => {
  if (await auth.check()) {
    return response.notAcceptable()
  }

  return response.send({ redirectUrl: await ally.use(params.provider).stateless().redirectUrl() })
})

Route.get('/:provider/callback', async ({ ally, auth, response, params }) => {

  const googleAuth = ally.use('google')

  /**
   * Managing error states here
   */

  const googleUser = await googleAuth.user()

  /**
   * Find the user by email or create
   * a new one
   */
  if (googleUser.email) {
    console.log(googleUser.token)
    const user = await User.firstOrCreate({
      email: googleUser.email,
    }, {
      name: googleUser.name,
    })
  
    const oat = await auth.use('api').login(user)

    return response.ok(oat.toJSON())
  }
  

})

Route.get('/authcheck', async ({ auth }) => { 
  // const user = await ally.use
  await auth.use('api').authenticate()
  return {'authenticated' : auth.use('api').user! }
})