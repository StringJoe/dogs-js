let paragraph = document.getElementById("new-excuse")
let category = document.getElementById("category")

async function randomExcuse() {
    try {
        const response = await fetch("https://excuser.herokuapp.com/v1/excuse")
        const data = await response.json()
        paragraph.innerHTML = data[0].excuse
        category.innerHTML = data[0].category
        
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}

$(".excuse-button").click(function(){
    specificExcuse()
})

async function specificExcuse() {
    try {
        const response = await fetch("https://excuser.herokuapp.com/v1/excuse/college")
        const data = await response.json()
        paragraph.innerHTML = data[0].excuse
        category.innerHTML = data[0].category
        
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}

