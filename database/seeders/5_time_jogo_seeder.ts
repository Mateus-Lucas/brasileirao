import TimeJogo from '#models/time_jogo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await TimeJogo.createMany([

      // Flamengo x Botafogo
      { timeId: 2, jogoId: 1 }, // Flamengo
      { timeId: 9, jogoId: 1 }, // Botafogo

      // Vasco x Fluminense
      { timeId: 14, jogoId: 2 }, // Vasco
      { timeId: 8, jogoId: 2 }, // Fluminense

      // Santos x Corinthians
      { timeId: 15, jogoId: 3 }, // Santos
      { timeId: 6, jogoId: 3 }, // Corinthians

      // Palmeiras x São Paulo
      { timeId: 1, jogoId: 4 }, // Palmeiras
      { timeId: 3, jogoId: 4 }, // São Paulo

      // Grêmio x Internacional
      { timeId: 11, jogoId: 5 }, // Grêmio
      { timeId: 4, jogoId: 5 }, // Internacional

      // Atlético Mineiro x Cruzeiro
      { timeId: 5, jogoId: 6 }, // Atlético Mineiro
      { timeId: 10, jogoId: 6 }, // Cruzeiro

      // Bahia x Vitória
      { timeId: 17, jogoId: 7 }, // Bahia
      { timeId: 19, jogoId: 7 }, // Vitória

      // Athletico Paranaense x Coritiba
      { timeId: 20, jogoId: 8 }, // Athletico Paranaense
      { timeId: 19, jogoId: 8 }, // Coritiba

      // Fortaleza x Ceará
      { timeId: 7, jogoId: 9 }, // Fortaleza
      { timeId: 10, jogoId: 9 }, // Cruzeiro

    ])

  }
}