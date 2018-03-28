
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

// const namesElement = document.getElementById('names');
// const nameInput = document.getElementById('name');
// const namesList = [
//     [Dutch: native],
//     [English: fluent],
//     [German: fluent],
//     [Russian: adequate],
//     [French: adequate],
//     [Polish: elementary],
//     [Spanish: elementary]
// ];

// document.getElementById('enter').addEventListener('click', function() {
//     const newName = nameInput.value.trim();
//     // Only add when we have a value.
//     if (newName) {
//       namesList.push(newName);
//       for (var i = 0, n; n = namesList[i]; i++) {
//           var liElement = document.createElement('li');
//           liElement.innerText = n;
//       }
//       namesElement.appendChild(liElement);
//     }
//     // Let's blank out the input ready for the next
//     nameInput.value = '';
//     // ...and focus it!
//     nameInput.focus();
// });
