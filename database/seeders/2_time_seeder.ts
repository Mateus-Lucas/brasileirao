
import Time from '#models/time'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Time.createMany([
      {
        nome: "Fluminense",
        quantJogadores: 27,
        dataCriacao: "1902-05-05",
        estado: "Rio de Janeiro",
        presidenteId: 1
      },
      {
        nome: "Flamengo",
        quantJogadores: 30,
        dataCriacao: "1895-11-17",
        estado: "Rio de Janeiro",
        presidenteId: 2
      },
      {
        nome: "Botafogo",
        quantJogadores: 28,
        dataCriacao: "1904-08-12",
        estado: "Rio de Janeiro",
        presidenteId: 3
      },
      {
        nome: "Vasco da Gama",
        quantJogadores: 29,
        dataCriacao: "1898-08-21",
        estado: "Rio de Janeiro",
        presidenteId: 4
      },
      {
        nome: "Corinthians",
        quantJogadores: 32,
        dataCriacao: "1910-09-01",
        estado: "São Paulo",
        presidenteId: 5
      },
    ]
    )

  }
}