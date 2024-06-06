// import type { HttpContext } from '@adonisjs/core/http'

import Jogo from "#models/jogo";
import { HttpContext } from "@adonisjs/core/http";

export default class JogoController {

    // Paginação de Jogos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Jogo.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Jogo.query()
            .where('id', params.id)
            .preload('times')
            .first()
    }

    // Método para criar algum Jogo pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'data', 'estadio'])
        return await Jogo.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const jogo = await Jogo.findOrFail(params.id)
        const dados = request.only(['nome', 'data', 'estadio'])

        jogo.merge(dados)
        return await jogo.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const jogo = await Jogo.findOrFail(params.id)

        await jogo.delete()
        return { msg: 'Jogo deletado com sucesso', jogo }

    }
}