// import type { HttpContext } from '@adonisjs/core/http'

import Jogador from "#models/jogador";
import { HttpContext } from "@adonisjs/core/http";

export default class JogadorController {

    // Paginação de Jogadores
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Jogador.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Jogador.query()
            .where('id', params.id)
            .preload('jogos')
            .preload('times')
            .first()
    }

    // Método para criar algum Jogador pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'idade', 'cpf', 'posicao'])
        return await Jogador.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const jogador = await Jogador.findOrFail(params.id)
        const dados = request.only(['nome', 'idade', 'cpf', 'posicao'])

        jogador.merge(dados)
        return await jogador.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const jogador = await Jogador.findOrFail(params.id)

        await jogador.delete()
        return { msg: 'Jogador deletado com sucesso', jogador }

    }
}