// import type { HttpContext } from '@adonisjs/core/http'

import Time from "#models/time";
import { HttpContext } from "@adonisjs/core/http";

export default class TimeController {

    // Paginação de Time
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await Time.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await Time.query()
            .where('id', params.id)
            .preload('jogadores')
            .preload('presidente')
            .preload('jogos')
            .first()
    }

    // Método para criar algum Time pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only([
            'nome',
            'quantJogadores',
            'dataCriacao',
            'estado',
            'presidentesId'
        ])
        return await Time.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const time = await Time.findOrFail(params.id)
        const dados = request.only([
            'nome',
            'quantJogadores',
            'dataCriacao',
            'estado',
            'presidentesId'
        ])

        time.merge(dados)
        return await time.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const time = await Time.findOrFail(params.id)

        await time.delete()
        return { msg: 'Time deletado com sucesso', time }

    }
}