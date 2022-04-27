const pushIt = document.getElementById('push')
const button = document.getElementById('button1')

    const getRandomUserData = () => {
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
            pushIt.innerHTML = data.results[0].email
        })
    }

   button.addEventListener("click", function() {
    getRandomUserData()
  });