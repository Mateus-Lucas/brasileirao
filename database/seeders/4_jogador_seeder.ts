import Jogadore from '#models/jogador';
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Jogadore.createMany([

        // Jogadores do Flamengo (timeId: 2)
        { nome: 'Gabriel Barbosa', idade: 27, cpf: '416.223.470-00', posicao: 'Atacante', timeId: 2 },
        { nome: 'Dudu', idade: 32, cpf: '275.198.960-83', posicao: 'Atacante', timeId: 2 },
        { nome: 'Arrascaeta', idade: 29, cpf: '623.307.850-20', posicao: 'Meia', timeId: 2 },
        { nome: 'Everton Ribeiro', idade: 35, cpf: '807.614.320-56', posicao: 'Meia', timeId: 2 },
        { nome: 'Filipe Luís', idade: 38, cpf: '529.735.480-02', posicao: 'Lateral', timeId: 2 },
      
        // Jogadores do São Paulo (timeId: 3)
        { nome: 'Daniel Alves', idade: 38, cpf: '123.456.789-00', posicao: 'Lateral', timeId: 3 },
        { nome: 'Rigoni', idade: 28, cpf: '234.567.890-11', posicao: 'Atacante', timeId: 3 },
        { nome: 'Luciano', idade: 28, cpf: '345.678.901-22', posicao: 'Atacante', timeId: 3 },
        { nome: 'Igor Gomes', idade: 22, cpf: '456.789.012-33', posicao: 'Meia', timeId: 3 },
        { nome: 'Tiago Volpi', idade: 31, cpf: '567.890.123-44', posicao: 'Goleiro', timeId: 3 },

    ]);


  }
}