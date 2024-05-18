import Jogadore from '#models/jogador';
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Jogadore.createMany([
      { nome: 'Gabriel Barbosa', idade: 27, cpf: '416.223.470-00', posicao: 'Atacante' },
      { nome: 'Dudu', idade: 32, cpf: '275.198.960-83', posicao: 'Atacante' },
      { nome: 'Arrascaeta', idade: 29, cpf: '623.307.850-20', posicao: 'Meia' },
      { nome: 'Everton Ribeiro', idade: 35, cpf: '807.614.320-56', posicao: 'Meia' },
      { nome: 'Filipe Luís', idade: 38, cpf: '529.735.480-02', posicao: 'Lateral' }
    ]);


  }
}