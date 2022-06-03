
import './errorStyle.css'
const ErrorBar = (data) => {

    console.log(data)


    // console.log(data.errorMessages.forEach(element => {
    //     console.log(element)
    // }))

    if (data.errorMessages) {
        let errors = data.errorMessages.map((x, i) => <p className="p-errors" key={x + i}>{x}</p>)
        return <div className="alert alert-danger div-errors-class" role="alert"> {errors}</div>

    }




}

export default ErrorBar