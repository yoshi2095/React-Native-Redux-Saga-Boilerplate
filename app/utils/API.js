const getUrl = 'https://api.github.com';
const postUrl = '';

export const apiGet = (user) => {
  console.log("entered the api get function");
  return new Promise( (resolve, reject)=> {
    fetch(`${getUrl}/users/${user}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
            console.log("the response genrated is:", response);
            let result = response.json();
            console.log("result is:", result);
            resolve(result);
      }).catch(err => {
            reject(err);
        })
  })
};

export const apiPost = (url, data) => {
    return new Promise( (resolve, reject) => {
        fetch(`${postUrl}${data}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            })
    })
};