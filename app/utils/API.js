const getUrl = 'https://api.github.com';
const postUrl = '';

export const apiGet = (user) => {
  return new Promise( (resolve, reject)=> {
    fetch(`${getUrl}/user/${user}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
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