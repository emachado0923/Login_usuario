/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
//import UsuariosController from '#controllers/usuarios_controller'
import LoginUsuariosController from '#controllers/login_usuarios_controller'



router.get('/', async () => {
  return {
    hello: 'world',
  }
})
//router.get("/usuarios", "UsuariosController.show")
router.get("/login", [LoginUsuariosController, "index"]);

