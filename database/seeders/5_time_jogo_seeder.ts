import TimeJogo from '#models/time_jogo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    return await TimeJogo.createMany([

      { timeId: 1, jogoId: 2 },
      { timeId: 1, jogoId: 3 },
  
    ])

  }
}