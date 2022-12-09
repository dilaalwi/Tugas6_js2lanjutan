import fetch from "node-fetch";
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result);
        })
        .catch(function(error)  {
            console.log(Error(error));
        });


