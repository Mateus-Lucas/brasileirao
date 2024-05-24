
import Time from '#models/time'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    return await Time.createMany([
      {
        nome: "Palmeiras",
        quantJogadores: 30,
        dataCriacao: "1914-08-26",
        estado: "São Paulo",
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
        nome: "São Paulo",
        quantJogadores: 28,
        dataCriacao: "1930-01-25",
        estado: "São Paulo",
        presidenteId: 3
      },
      {
        nome: "Internacional",
        quantJogadores: 29,
        dataCriacao: "1909-04-04",
        estado: "Rio Grande do Sul",
        presidenteId: 4
      },
      {
        nome: "Atlético-MG",
        quantJogadores: 32,
        dataCriacao: "1908-03-25",
        estado: "Minas Gerais",
        presidenteId: 5
      },
      {
        nome: "Corinthians",
        quantJogadores: 32,
        dataCriacao: "1910-09-01",
        estado: "São Paulo",
        presidenteId: 6
      },
      {
        nome: "Fortaleza",
        quantJogadores: 27,
        dataCriacao: "1918-10-18",
        estado: "Ceará",
        presidenteId: 7
      },
      {
        nome: "Fluminense",
        quantJogadores: 27,
        dataCriacao: "1902-05-05",
        estado: "Rio de Janeiro",
        presidenteId: 8
      },
      {
        nome: "Botafogo",
        quantJogadores: 28,
        dataCriacao: "1904-08-12",
        estado: "Rio de Janeiro",
        presidenteId: 9
      },
      {
        nome: "Cruzeiro",
        quantJogadores: 31,
        dataCriacao: "1921-01-02",
        estado: "Minas Gerais",
        presidenteId: 10
      },
      {
        nome: "Grêmio",
        quantJogadores: 30,
        dataCriacao: "1903-09-15",
        estado: "Rio Grande do Sul",
        presidenteId: 11
      },
      {
        nome: "Atlético-GO",
        quantJogadores: 26,
        dataCriacao: "1937-04-02",
        estado: "Goiás",
        presidenteId: 12
      },
      {
        nome: "América-MG",
        quantJogadores: 28,
        dataCriacao: "1912-04-30",
        estado: "Minas Gerais",
        presidenteId: 13
      },
      {
        nome: "Vasco da Gama",
        quantJogadores: 29,
        dataCriacao: "1898-08-21",
        estado: "Rio de Janeiro",
        presidenteId: 14
      },
      {
        nome: "Santos",
        quantJogadores: 30,
        dataCriacao: "1912-04-14",
        estado: "São Paulo",
        presidenteId: 15
      },
      {
        nome: "Cuiabá",
        quantJogadores: 27,
        dataCriacao: "2001-12-12",
        estado: "Mato Grosso",
        presidenteId: 16
      },
      {
        nome: "Bahia",
        quantJogadores: 31,
        dataCriacao: "1931-01-01",
        estado: "Bahia",
        presidenteId: 17
      },
      {
        nome: "Red Bull Bragantino",
        quantJogadores: 28,
        dataCriacao: "1928-01-08",
        estado: "São Paulo",
        presidenteId: 18
      },
      {
        nome: "Coritiba",
        quantJogadores: 29,
        dataCriacao: "1909-10-12",
        estado: "Paraná",
        presidenteId: 19
      },
      {
        nome: "Chapecoense",
        quantJogadores: 27,
        dataCriacao: "1973-05-10",
        estado: "Santa Catarina",
        presidenteId: 20
      }
    ]);


  }
}