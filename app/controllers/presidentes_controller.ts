// import type { HttpContext } from '@adonisjs/core/http'

import Presidente from "#models/presidente";
import { HttpContext } from "@adonisjs/core/http";

export default class PresidenteController {

    // Paginação de Presidentes
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Presidente.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Presidente.query()
            .where('id', params.id)
            .preload('time')
            .first()
    }

    // Método para criar algum Presidente pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'idade', 'cpf'])
        return await Presidente.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const presidente = await Presidente.findOrFail(params.id)
        const dados = request.only(['nome', 'idade', 'cpf'])

        presidente.merge(dados)
        return await presidente.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const presidente = await Presidente.findOrFail(params.id)

        await presidente.delete()
        return { msg: 'Jogador deletado com sucesso', presidente }

    }
}