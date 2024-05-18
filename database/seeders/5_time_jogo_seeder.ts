import TimeJogo from '#models/time_jogo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    return await TimeJogo.createMany([

      { timesId: 1, jogosId: 2 },
  
    ])

  }
}