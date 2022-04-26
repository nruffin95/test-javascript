
   const getRandomActivity = () => {
        fetch("https://www.boredapi.com/api/activity")
        .then((data) => data.json())
        .then((data) => console.log(data));
    };

    const getRandomUserData = (gender) => {
        fetch(`https://randomuser.me/api/?gender=${gender}`)
        .then((data) => data.json())
        .then((data) => console.log(data));
    };

    document.querySelector("button").addEventListener('click', () => {
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const para = document.createElement("p");
        
        document.body.appendChild(para);


        getRandomUserData(gender)
        getRandomActivity()

    })

