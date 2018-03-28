const baseURL = "https://api.github.com"

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

fetch(`${baseURL}/users/fmels/repos`)
    .then(response => response.json())
    .then(repositories => {
        console.log(repositories)
        let outerDiv = document.getElementById("repo")
        for (let repo of repositories) {

            // console.log(repo.name, repo.description, repo.language)

            let repoElement = embrace.DOMify(`
                <div class="repository">
                    <h1>${repo.name}</h1>
                    <p>Description: ${repo.description}</p>
                    <p>Language: ${repo.language}</p>
                </div>
            `)
            outerDiv.appendChild(repoElement)
            console.log(repoElement)
        }
        
    })
