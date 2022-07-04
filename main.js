
document.querySelector('button').addEventListener('click', displaySuggestions)

function displaySuggestions() {
    let interest1 = document.getElementById('interest1').value
    let categories1 = document.getElementById('categories1').value
    /*let interest2 = document.getElementById('interest2').value
    let categories2 = document.getElementById('categories2').value
    let interest3 = document.getElementById('interest3').value
    let categories3 = document.getElementById('categories3').value
    */
    fetch(`https://tastedive.com/api/similar?q=${categories1}:${interest1}`)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
        //document.querySelector('ul').innerText = data.

    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

