// import type { HttpContext } from '@adonisjs/core/http'

import JogoJogador from "#models/jogo_jogador";
import { HttpContext } from "@adonisjs/core/http";

export default class JogoJogadorController {

    // Paginação de JogoJogadors
    async index({ request }: HttpContext) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)
        return await JogoJogador.query().paginate(page, perPage)
    }

    // Requisição por id passado por rota(parãmetros)
    async show({ params }: HttpContext) {
        return await JogoJogador.findOrFail(params.id)
    }

    // Método para criar algum JogoJogador pelo Json
    async store({ request }: HttpContext) {
        const dados = request.only(['jogoId', 'jogadorId'])
        return await JogoJogador.create(dados)
    }

    async update({ params, request }: HttpContext) {
        const jogoJogador = await JogoJogador.findOrFail(params.id)
        const dados = request.only(['jogoId', 'jogadorId'])

        jogoJogador.merge(dados)
        return await jogoJogador.save()
    }

    // Deletando pruduto pelo Id do banco de dados
    async destroy({ params }: HttpContext) {
        const jogoJogador = await JogoJogador.findOrFail(params.id)

        await jogoJogador.delete()
        return { msg: 'Jogador deletado com sucesso', jogoJogador }

    }
}