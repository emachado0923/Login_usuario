import type { HttpContext } from '@adonisjs/core/http'

import LoginUsuario from "#models/login_usuario";

export default class LoginUsuariosController {
    public async index({ request }: HttpContext) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        let usuarios: LoginUsuario[] = await LoginUsuario.query().paginate(page, perPage);
        return usuarios;
    }



    public async show({ params }: HttpContext) {
        return LoginUsuario.query().where('documento',params.documento)
    }

    

    public async update({params,request,response}:HttpContext){

        const toUpdate = await LoginUsuario.findBy('documento',params.documento);
        const body=request.all();
        console.log(body,toUpdate)
    if (!toUpdate) return null;
    

    toUpdate.fill({
      ...toUpdate.$attributes,
      
      correo: body.correo
    });

    await toUpdate.save();
    
       
    }
}