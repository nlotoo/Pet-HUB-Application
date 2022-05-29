

const loginStorageCheker = () => {

    if (window.localStorage.getItem('User Token')) {
        return true
    } else {
        return false
    }

}



module.exports = {
    loginStorageCheker
}