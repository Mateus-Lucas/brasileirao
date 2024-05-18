import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'times'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.string('quant_jogadores').notNullable()
      table.date('data_criacao').notNullable()
      table.string('estado').notNullable()
      table.integer('jogadores_id').unsigned().references('id').inTable('jogadores')
      table.integer('presidentes_id').unsigned().references('id').inTable('presidentes')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}