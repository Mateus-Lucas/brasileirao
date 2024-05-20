import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jogadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45).notNullable()
      table.string('idade').notNullable()
      table.string('cpf', 15).notNullable().unique()
      table.string('posicao').notNullable()
      table.integer('time_id').unsigned().references('id').inTable('times')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}