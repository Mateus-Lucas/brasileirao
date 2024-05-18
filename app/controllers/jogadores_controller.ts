// import type { HttpContext } from '@adonisjs/core/http'

import Jogadore from "#models/jogador";
import { HttpContext } from "@adonisjs/core/http";

export default class JogadoreController {

    // Paginação de Jogadores
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Jogadore.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Jogadore.query()
            .where('id', params.id)
            .preload('jogos')
            .preload('times')
            .first()
    }

    // Método para criar algum Jogadore pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'idade', 'cpf', 'posicao'])
        return await Jogadore.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const jogador = await Jogadore.findOrFail(params.id)
        const dados = request.only(['nome', 'idade', 'cpf', 'posicao'])

        jogador.merge(dados)
        return await jogador.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const jogador = await Jogadore.findOrFail(params.id)

        await jogador.delete()
        return { msg: 'Jogador deletado com sucesso', jogador }

    }
}