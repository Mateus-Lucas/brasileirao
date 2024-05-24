import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Time from './time.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Jogo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare data: Date

  @column()
  declare estadio: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(()=>Time, {
    pivotTable: 'time_jogos'
  })
  declare times: ManyToMany<typeof Time>
}