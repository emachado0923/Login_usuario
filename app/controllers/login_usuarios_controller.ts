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
        const body=request.body();
        const eldocumento:LoginUsuario=await LoginUsuario.query().where('documento',params.documento);
        eldocumento.documento=body.documento;
        return eldocumento.save();
    }
}