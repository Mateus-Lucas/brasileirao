
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
        jogadoresId: 1,
        presidentesId: 1
      },
      {
        nome: "Flamengo",
        quantJogadores: 30,
        dataCriacao: "1895-11-17",
        estado: "Rio de Janeiro",
        jogadoresId: 2,
        presidentesId: 2
      },
      {
        nome: "Botafogo",
        quantJogadores: 28,
        dataCriacao: "1904-08-12",
        estado: "Rio de Janeiro",
        jogadoresId: 3,
        presidentesId: 3
      },
      {
        nome: "Vasco da Gama",
        quantJogadores: 29,
        dataCriacao: "1898-08-21",
        estado: "Rio de Janeiro",
        jogadoresId: 4,
        presidentesId: 4
      },
      {
        nome: "Corinthians",
        quantJogadores: 32,
        dataCriacao: "1910-09-01",
        estado: "São Paulo",
        jogadoresId: 5,
        presidentesId: 5
      },
      {
        nome: "Palmeiras",
        quantJogadores: 31,
        dataCriacao: "1914-08-26",
        estado: "São Paulo",
        jogadoresId: 4,
        presidentesId: 5
      },
      {
        nome: "São Paulo",
        quantJogadores: 29,
        dataCriacao: "1930-01-25",
        estado: "São Paulo",
        jogadoresId: 3,
        presidentesId: 2
      },
      {
        nome: "Santos",
        quantJogadores: 28,
        dataCriacao: "1912-04-14",
        estado: "São Paulo",
        jogadoresId: 2,
        presidentesId: 4
      },
      {
        nome: "Grêmio",
        quantJogadores: 30,
        dataCriacao: "1903-09-15",
        estado: "Rio Grande do Sul",
        jogadoresId: 3,
        presidentesId: 2
      },
      {
        nome: "Internacional",
        quantJogadores: 30,
        dataCriacao: "1909-04-04",
        estado: "Rio Grande do Sul",
        jogadoresId: 4,
        presidentesId: 2
      }
    ]
    )

  }
}