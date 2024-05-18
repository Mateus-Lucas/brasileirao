import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm'
import Jogadore from './jogador.js'
import type { BelongsTo, HasMany, ManyToMany } from '@adonisjs/lucid/types/relations'
import Jogo from './jogo.js'
import Presidente from './presidente.js'

export default class Time extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare quantJogadores: number

  @column()
  declare dataCriacao: Date

  @column()
  declare estado: string

  @column()
  declare jogadoresId: number

  @column()
  declare presidentesId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Jogadore)
  declare jogadores: HasMany<typeof Jogadore>

  @belongsTo(()=>Presidente)
  declare presidentes: BelongsTo<typeof Presidente>

  @manyToMany(()=>Jogo, {
    pivotTable: 'time_jogos',
  })
  declare jogos: ManyToMany<typeof Jogo>
}