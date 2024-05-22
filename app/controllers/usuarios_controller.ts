import Usuario from '#models/usuario'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {

    public async index({ request }: HttpContext) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        let usuarios: Usuario[] = await Usuario.query().paginate(page, perPage);
        return usuarios;
    }



    public async show({ params }: HttpContext) {
        return Usuario.findOrFail(params.id)
    }
}