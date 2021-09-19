let nameInput = document.querySelector(".name-input")
let btn = document.querySelector(".submit-btn")
let name = document.querySelector(".name")
let gender = document.querySelector(".gender")
let probability = document.querySelector(".probability")
let count = document.querySelector(".count")
let msgTxt = document.querySelector(".msg-txt")

let getGender = async () => {
    try {
        let inputTxt = nameInput.value.trim()
        let response = await fetch(`https://api.genderize.io?name=${inputTxt}`)
        let data = await response.json()
        if(data.gender === null || data.gender === undefined) {
            msgTxt.innerHTML = "<h2>Oops! Please enter a valid name...</h2>"
            msgTxt.style.color = "red"
        }
        else {
            name.innerHTML = `<h3>Name: ${data.name}</h1>`
            gender.innerHTML = `<h3>Gender: ${data.gender}</h1>`
            probability.innerHTML = `<h3>Probability: ${data.probability}</h1>`
            count.innerHTML = `<h3>Count: ${data.count}</h1>`
            msgTxt.innerHTML = "<h4>Hope I detected the gender correctly...</h4>"
            msgTxt.style.color = "green"
        }
    } catch (error) {
        console.log(`${error}`)
    }
}

btn.addEventListener("click", getGender)