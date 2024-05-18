// import type { HttpContext } from '@adonisjs/core/http'

import TimeJogo from "#models/time_jogo";
import { HttpContext } from "@adonisjs/core/http";

export default class TimeJogosController {

    // Paginação de TimeJogos
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await TimeJogo.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await TimeJogo.findOrFail(params.id)
    }

    // Método para criar algum TimeJogos pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only([
            'timesId',
            'jogosId',
        ])
        return await TimeJogo.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const timeJogos = await TimeJogo.findOrFail(params.id)
        const dados = request.only([
            'timesId',
            'jogosId',
        ])

        timeJogos.merge(dados)
        return await timeJogos.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const timeJogos = await TimeJogo.findOrFail(params.id)

        await timeJogos.delete()
        return { msg: 'TimeJogos deletado com sucesso', timeJogos }

    }
}