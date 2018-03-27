
const baseURL = "https://api.github.com"
function repo(
fetch(`${baseURL}/users/fmels/repos`)
    .then(response => response.json())
    .then(repositories => {
        for (let repo of repositories) {

            const repoPara = document.createElement("p")
            repoPara.innerText = repo.name
            repoDiv.appendChild(repoPara)

        }
    })

