//import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class LoginUsuario extends BaseModel {

  public static table="login_usuario"
  @column({ isPrimary: true })
  declare id_usuario?: number

  @column()
  public documento?: string;

  @column()
  public primerApellido?: string;

  @column()
  public segundoApellido?: string;

  @column()
  public primerNombre?: string;

  @column()
  public segundoNombre?: string;

  @column({columnName:'correo'})
  public correo: string=null!;

 
}