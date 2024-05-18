import Presidente from '#models/presidente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Presidente.createMany([
      { nome: 'Eurico Miranda', idade: 78, cpf: '416.223.470-00' },
      { nome: 'Marcos Assunção', idade: 54, cpf: '275.198.960-83' },
      { nome: 'Craque Neto', idade: 40, cpf: '623.307.850-20' },
      { nome: 'Lenin Correia', idade: 38, cpf: '807.614.320-56' },
      { nome: 'Tuilho', idade: 50, cpf: '529.735.480-02' }
    ])

  }
}