import "bootstrap/dist/css/bootstrap.min.css";

export const TextFields = (props) => {

    /*
        props: 
            field: Field 
     */

    const { field } = props;

    return(
        <>
            <label 
            className = "form-label" > 
                {field.LabelText}
            </label>
            <input 
            className = "form-control form-control-lg"
            type = {field.InputType} 
            onChange = {field.OnChangeInput}
            defaultValue = {field.InputValue}
            />
        </>
    )
}