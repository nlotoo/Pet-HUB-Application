
import './errorStyle.css'
const ErrorBar = (data) => {

    if (data.errorMessages) {
        if (Array.isArray(data.errorMessages)) {
            let errors = data.errorMessages.map((x, i) => <p className="p-errors" key={x + i}>{x}</p>)
            return <div className="alert alert-danger div-errors-class" role="alert"> {errors}</div>
        } else {
            return <div className="alert alert-danger div-errors-class" role="alert"> {data.errorMessages}</div>
        }
    }

}

export default ErrorBar