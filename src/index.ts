import add from './operations/add'
import substract from './operations/substract'
import multiply from './operations/multiply'
import divide from './operations/divide'
import square from './operations/square'
import './styles/index.scss'

document.addEventListener('DOMContentLoaded', init)

function init() {
  const form = document.getElementById('calcForm') as HTMLFormElement
  const buttons = form.querySelectorAll('.buttons > button')
  const clearBtn = form.clear as HTMLButtonElement
  const backspaceBtn = form.backspace as HTMLButtonElement
  const input = form.input as HTMLTextAreaElement
  // const result: HTMLInputElement = document.getElementById('result')

  console.log(buttons.length)

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i] as HTMLButtonElement
    button.addEventListener('click', onButtonClick)
  }

  form.addEventListener('submit', onSubmit);

  function onButtonClick (e: MouseEvent) {
    const target = e.target as HTMLButtonElement
    const name: string = target.name
    
    const specialButtons: any = ['calc', 'backspace', 'clear']
    const symbolButtons: any = ['divide', 'multiply', 'add', 'substract']
    const isPoint: boolean = name === 'point'

    if (specialButtons.includes(name)) {

    } else if (symbolButtons.includes(name)) {
      
    } else {
      const value: string|number = isPoint ? '.' : parseInt(target.textContent, 10)
      input.value += value
    }
  }
  
  function onSubmit(e: Event): void {
    e.preventDefault()
  }
}