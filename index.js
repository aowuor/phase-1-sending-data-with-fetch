// Add your code here
function submitData(nameValue, emailValue){
    
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: nameValue,
            email: emailValue,
        })
    }

    fetch("http://localhost:3000/users", configurationObj)
    .then(response => response.json())
    .then((data) => {
        let p = document.createElement('p');
        p.innerHTML = data.id;
        document.body.appendChild(p)
        console.log(body)
    })
    .catch(error => {
        const errorMsg = document.createElement('p')
        errorMsg.innerHTML = error.message;
        document.body.appendChild(errorMsg)
    
    })
}

submitData("Steve","steve@steve.com")