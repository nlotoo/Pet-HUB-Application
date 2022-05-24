import './errorBar.css'

const ErrorBar = (errorData) => {

    console.log(errorData)
    if (errorData.data.errorArr) {
        let errors = errorData.data.errorArr.map((x, i) => <p key={x + i}>{x}</p>)
        return <div className="p-error-bar alert alert-danger">{errors}</div>
    } else if (errorData.data.message) {
        return <div className="p-error-bar-two alert alert-danger">{errorData.data.message}</div>
    } else if (errorData.data.username) {
        return <div className="p-error-bar-two alert alert-success">You create sucessful user: {errorData.data.username}</div>
    }


}


export default ErrorBar