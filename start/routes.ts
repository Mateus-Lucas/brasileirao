/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import JogadoreController from '#controllers/jogadores_controller'
import JogoJogadorController from '#controllers/jogo_jogadores_controller'
import JogosController from '#controllers/jogos_controller'
import PresidentesController from '#controllers/presidentes_controller'
import TimeJogosController from '#controllers/time_jogos_controller'
import TimesController from '#controllers/times_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'Bem-vindo ao Brasileirão',
  }
})

router.resource('/times', TimesController).apiOnly()
router.resource('/jogadores', JogadoreController).apiOnly()
router.resource('/jogos', JogosController).apiOnly()
router.resource('/presidentes', PresidentesController).apiOnly()
router.resource('/jogo_jogadores', JogoJogadorController).apiOnly()
router.resource('/time_jogos', TimeJogosController).apiOnly()
