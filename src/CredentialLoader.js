export const getCredential = (filename, credentialName, callback) => {
    return new Promise((resolve, reject) => {
        fetch("../credentials/" + filename
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                resolve(myJson[credentialName]);
            })
            .catch((e) => {
                console.log("Error reading credential: " + filename + " " + credentialName);
                reject(e);
            })
    })

}