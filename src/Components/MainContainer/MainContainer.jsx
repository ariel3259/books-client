import "./MainContainer.css";

export const MainContainer = (props) => {

    return(
        <div 
        className="main-container">
            {props.children}
        </div>
    )
}