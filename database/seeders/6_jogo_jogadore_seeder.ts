import JogoJogadore from '#models/jogo_jogador'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    return await JogoJogadore.createMany([

      { jogadoresId: 1, jogosId: 2 },
  
    ])

  }
}