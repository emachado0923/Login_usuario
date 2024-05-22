import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class LoginUsuario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

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

  @column()
  public correo?: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}