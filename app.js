// Global Variables
const billInput = document.getElementById('bill-total')
const numberOfPeople = document.getElementById('number-of-people')
const tipButtons = document.querySelectorAll('.tip-button')
const tipTotalDisplay = document.querySelector('.tip-span')
const totalPerPersonDisplay = document.querySelector('.total-span')
const errorSpan = document.querySelector('span')
const resetButton = document.querySelector('.reset')
const customInput = document.getElementById('custom-tip')

let billTotal = 0
let totalPerPerson = 0

// Event Listeners //--------------------------------------------------------------------------------------------------------
tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (numberOfPeople.value > 0){
            billTotal = button.value * billInput.value
            totalPerPerson = billTotal / numberOfPeople.value

        tipAmount()
        } 
        // Create Error Outline and message
        if (numberOfPeople.value <= 0) {
            numberOfPeople.classList.add('number-of-people-error')
            errorSpan.classList.remove('hide')
        }
        else if (numberOfPeople.value > 0) {
            numberOfPeople.classList.remove('number-of-people-error')
            errorSpan.classList.add('hide')
        }
    })
})

// Reset Button 
resetButton.addEventListener('click', reset)

// Custom Input
customInput.addEventListener('keypress', customButton)

// Functions //---------------------------------------------------------------------------------------------------------------
function tipAmount() {
    tipTotalDisplay.textContent = '$' + Math.min(billTotal * 100 / 100).toFixed(2)
    totalPerPersonDisplay.textContent = '$' + Math.min(totalPerPerson * 100 / 100).toFixed(2)
}

function reset() {
    billInput.value = ''
    numberOfPeople.value = ''
    tipTotalDisplay.textContent = '$0.00'
    totalPerPersonDisplay.textContent = '$0.00'
    customInput.value = 'Custom'
}

function customButton(e) {
    if (e.key === 'Enter') {
        billTotal = customInput.value * billInput.value / 100
        totalPerPerson = billTotal / numberOfPeople.value
        tipTotalDisplay.textContent = '$' + Math.min(billTotal * 100 / 100).toFixed(2)
        totalPerPersonDisplay.textContent = '$' + Math.min(totalPerPerson * 100 / 100).toFixed(2)
    }
}

