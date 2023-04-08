document.querySelector('#getButton').addEventListener('click', apiRequest)
document.querySelector('#formInput').addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    apiRequest()
  }
});
async function apiRequest() {
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://alien-api.cyclic.app/api/${alienName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeWorld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExamples

        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    } catch(error) {
        console.log(error)
    }
}