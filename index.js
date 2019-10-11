// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
      };
       
      // method: "POST" is missing from the object below
    let configObj = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
       
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          let p = document.createElement('p');
          p.innerHTML = object.id;

          body = document.querySelector('body')
           body.appendChild(p);
        })
        .catch(function(error) {
          let p = document.createElement('p');
          p.innerHTML = error.message;

          document.querySelector('body').appendChild(p);
        })
}