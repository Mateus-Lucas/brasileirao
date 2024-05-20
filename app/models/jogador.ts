import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Time from './time.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Jogo from './jogo.js'

export default class Jogadore extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare idade: number

  @column()
  declare cpf: string

  @column()
  declare posicao: string

  @column()
  declare timeId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Time)
  declare times: BelongsTo<typeof Time>

  @manyToMany(()=>Jogo, {
    pivotTable: 'jogo_jogadores',
  })
  declare jogos: ManyToMany<typeof Jogo>
}