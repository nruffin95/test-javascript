const pushIt = document.getElementById('push')
const getIt = document.getElementById('get')
const gender = document.getElementById('gender')
const activity = document.getElementById('activity')
const button = document.getElementById('button1')

    const getRandomUserData = () => {
        fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            pushIt.innerHTML = data.results[0].name.first
            getIt.innerHTML = data.results[0].dob.age
            gender.innerHTML = data.results[0].email
        })
    }

    const getRandomActivity = () => {
        fetch(`https://www.boredapi.com/api/activity/`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            activity.innerHTML = data.activity
        })
    }

   button.addEventListener("click", function() {
    getRandomUserData()
    getRandomActivity()
  });

