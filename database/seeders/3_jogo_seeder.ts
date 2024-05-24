import Jogo from '#models/jogo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Jogo.createMany([

      { nome: "Flamengo x Botafogo", data: "2024-05-03", estadio: "Maracanã" },
      { nome: "Vasco x Fluminense", data: "2024-05-10", estadio: "São Januário" },
      { nome: "Santos x Corinthians", data: "2024-05-17", estadio: "Vila Belmiro" },
      { nome: "Palmeiras x São Paulo", data: "2024-05-24", estadio: "Allianz Parque" },
      { nome: "Grêmio x Internacional", data: "2024-05-31", estadio: "Arena do Grêmio" },
      { nome: "Atlético Mineiro x Cruzeiro", data: "2024-06-07", estadio: "Mineirão" },
      { nome: "Bahia x Vitória", data: "2024-06-14", estadio: "Arena Fonte Nova" },
      { nome: "Athletico Paranaense x Coritiba", data: "2024-06-21", estadio: "Arena da Baixada" },
      { nome: "Fortaleza x Ceará", data: "2024-06-28", estadio: "Castelão" },
      { nome: "Sport x Náutico", data: "2024-07-05", estadio: "Ilha do Retiro" }

    ])

  }
}