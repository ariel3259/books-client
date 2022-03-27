export const BodyContainer = (props) => {

    return(
        <div 
        className = {props.style}>
            {props.children}
        </div>
    )
}