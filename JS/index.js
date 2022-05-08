// default import
import Controls from './controls.js'
// named import
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

// DOM
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o código mais performático
// SEM ALTERAR suas funcionalidades
// Event-driven = A DOM é uma programação direcionada a eventos
// programação imperativa = dar ordens do passo a passo do que deve ser feito
// callback = quando uma função for passada como argumentopara ser chamada depois

// Modulo de controle, contendo todas as funções para as funcionalidade dos botões de controle
const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})
// Modulo timer, contendo todas as funções para a funcionalidade do timer
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()

Events({ controls, timer, sound })
