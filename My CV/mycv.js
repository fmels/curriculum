const baseURL = "https://api.github.com"

// this is the helper function for the API
const embrace = (function() {
    function DOMify(htmlString) {
      const template = document.createElement("template")
      template.innerHTML = htmlString
  
      return template.content.firstElementChild
    }
  
    return {
      DOMify: DOMify
    }
  })()

//   This part loads the API thingy
fetch(`${baseURL}/users/fmels/repos`)
    .then(response => response.json())
    .then(repositories => {
        console.log(repositories)
        let outerDiv = document.getElementById("repo")
        for (let repo of repositories) {

            // console.log(repo.name, repo.description, repo.language)

            let repoElement = embrace.DOMify(`
                <div class="repository">
                <hr>
                    <dd><a href="https://github.com/fmels">Name: </a>${repo.name}</dd>
                    <dd>Description: ${repo.description}</dd>
                    <dd>Language: ${repo.language}</dd>
                    <dd>Size: ${repo.size}</dd>
                </div>
            `)
            outerDiv.appendChild(repoElement)
            console.log(repoElement)
            let stripe = embrace.DOMify(`
            <hr>
            `)
        }
        
    })

    // const quoteArray = [
    //     ['Wisdom is the mother of knowledge'],
    //     ['Experience this, sucker'],
    //     ['Knowledge is power'],
    //     ['Wisdom is the mother of experience']

    // function rotateQuote(){
    //     for(i=0; i=quoteArray.length; i++){
    //         Math.floor(Math.random(i))
    //     }
    // 