const Change = () => {
    const advice = document.querySelector('.advice')
    const id = document.querySelector('.id')
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            id.innerHTML = `${data.slip.id}`
            advice.innerHTML = `<h1>" ${data.slip.advice} "</p>`
        })
}

Change()
const button = document.querySelector('.roll-dice')
button.addEventListener('click', Change)