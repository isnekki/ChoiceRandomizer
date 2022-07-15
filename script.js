const textarea = document.querySelector('textarea')

const randomizeChoices = (e) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    const choicesContainer = document.querySelector('.choicesContainer')

    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.lastChild)
    }

    const choices = e.target.value.split(',')
    choices.forEach(choice => {
        if (choice.length === 0) return
        const choiceDiv = document.createElement('div')
        choiceDiv.classList.add('choice')
        
        const choiceText = document.createElement('p')
        choiceText.textContent = choice
        choiceDiv.appendChild(choiceText)

        choicesContainer.appendChild(choiceDiv)
    })

    const choiceLength = choicesContainer.childNodes.length

    const shuffleInterval = setInterval(() => {
        if (choiceLength === 0) return

        const currentlyActive = document.querySelector('.active')
        if (currentlyActive !== null) {
            currentlyActive.classList.remove('active')
        }

        const randomIndex = Math.floor(Math.random() * choiceLength)
        choicesContainer.childNodes.item(randomIndex).classList.add('active')
    }, 100)

    setTimeout(() => {
        clearInterval(shuffleInterval)
        const choice = document.querySelector('.active')
        if (choice === null) return
        const finalChoice = document.querySelector('.finalChoice')
        finalChoice.textContent = choice.textContent
    }, 3000)
}

textarea.addEventListener('keypress', randomizeChoices)