const key = 'token'

function setToken(token){ // guardar
    localStorage.setItem(key, token)
}

function getToken() { // Traer
    return localStorage.getItem(key)
}

function deleteToken() { //hacer una especie de deslogin, que se hará con los guards
    localStorage.removeItem(key)
}

module.exports = {setToken, getToken, deleteToken}