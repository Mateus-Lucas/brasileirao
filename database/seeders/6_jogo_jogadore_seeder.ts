import JogoJogadore from '#models/jogo_jogador'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    return await JogoJogadore.createMany([

      { jogadoreId: 1, jogoId: 2 },
      { jogadoreId: 2, jogoId: 2 },
      { jogadoreId: 2, jogoId: 1 }
  
    ])

  }
}