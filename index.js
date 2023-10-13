// Add your code here

function submitData(userName, userEmail){

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept : "application/json"
        },
        body: JSON.stringify(
            {
                name: userName,
                email: userEmail
            }
        )
    })
    .then(res => res.json())
    .then(function(data){
        document.querySelector("body").innerHTML = data.id;
        //console.log(data);
    })
    .catch(function(error){
        document.querySelector("body").innerHTML = error.message;
    })
}
//submitData("Simba", "simba@gmail.com");