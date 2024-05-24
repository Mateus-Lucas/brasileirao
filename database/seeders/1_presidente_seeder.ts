import Presidente from '#models/presidente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Presidente.createMany([

      // Palmeiras
      { nome: 'Maurício Galiotte', idade: 54, cpf: '123.456.789-00', timeId: 1 },

      // Flamengo
      { nome: 'Rodolfo Landim', idade: 65, cpf: '234.567.890-11', timeId: 2 },

      // São Paulo
      { nome: 'Julio Casares', idade: 60, cpf: '345.678.901-22', timeId: 3 },

      // Internacional
      { nome: 'Alessandro Barcellos', idade: 48, cpf: '456.789.012-33', timeId: 4 },

      // Atlético-MG
      { nome: 'Sérgio Coelho', idade: 61, cpf: '567.890.123-44', timeId: 5 },

      // Corinthians
      { nome: 'Duilio Monteiro Alves', idade: 47, cpf: '678.901.234-55', timeId: 6 },

      // Fortaleza
      { nome: 'Marcelo Paz', idade: 42, cpf: '789.012.345-66', timeId: 7 },

      // Fluminense
      { nome: 'André Sanches', idade: 58, cpf: '890.123.456-77', timeId: 8 },

      // Botafogo
      { nome: 'Luiz Mello', idade: 51, cpf: '901.234.567-88', timeId: 9 },

      // Cruzeiro
      { nome: 'Sérgio Santos Rodrigues', idade: 44, cpf: '012.345.678-99', timeId: 10 },

      // Grêmio
      { nome: 'Alberto Guerra', idade: 49, cpf: '123.456.789-11', timeId: 11 },

      // Atlético-GO
      { nome: 'Adson Batista', idade: 46, cpf: '234.567.890-22', timeId: 12 },

      // América-MG
      { nome: 'Durcesio Mello', idade: 66, cpf: '345.678.901-33', timeId: 13 },

      // Vasco da Gama
      { nome: 'Ronaldo Nazário', idade: 47, cpf: '456.789.012-44', timeId: 14 },

      // Santos
      { nome: 'Sebastián Beccacece', idade: 42, cpf: '567.890.123-55', timeId: 15 },

      // Cuiabá
      { nome: 'Francisco Novelleto', idade: 67, cpf: '789.012.345-77', timeId: 16 },

      // Bahia
      { nome: 'Anderson Barros', idade: 55, cpf: '890.123.456-88', timeId: 17 },

      // Red Bull Bragantino
      { nome: 'Sandro Forner', idade: 50, cpf: '901.234.567-99', timeId: 18 },

      // Coritiba
      { nome: 'Guilherme Bellintani', idade: 45, cpf: '012.345.678-11', timeId: 19 },

      // Chapecoense
      { nome: 'Fernando da Silva', idade: 48, cpf: '111.222.333-44', timeId: 20 }


    ]);


  }
}