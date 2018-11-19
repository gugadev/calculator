import './styles/index.scss'

document.addEventListener('DOMContentLoaded', init)

function init() {
  const form = document.getElementById('calcForm') as HTMLFormElement
  const buttons = form.querySelectorAll('.buttons > button')
  const input = form.input as HTMLTextAreaElement
  const result = form.result as HTMLInputElement

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i] as HTMLButtonElement
    button.addEventListener('click', onButtonClick)
  }

  form.addEventListener('submit', onSubmit)

  function onButtonClick (e: MouseEvent) {
    const target = e.target as HTMLButtonElement
    const name: string = target.name
    
    const specialButtons: any = ['calc', 'backspace', 'clear']

    if (specialButtons.includes(name)) {
      if (name === 'backspace') {
        clearOne()
      }
      if (name === 'clear') {
        clear()
      }
    } else {
      const value: string = target.textContent
      input.value += value
    }
  }
  
  async function onSubmit(e: Event) {
    e.preventDefault()
    const evaluator = await import(/* webpackChunkName: "math-parser" */ 'expr-eval')
    const parser = new evaluator.Parser()
    const mathResult = parser.evaluate(input.value.replace(/×/g, '*'))
    result.value = mathResult.toString()
  }

  function clear(): void {
    input.value = ''
    result.value = ''
  }

  function clearOne(): void {
    const value = input.value
    const len = value.length
    input.value = value.substring(0, len - 1)
  }
}
