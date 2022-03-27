import "./Header.css";

export const Header = (props) => {
    return(
    <header 
    className="header-container">
        <h2 
        className="title">
            {props.title}
        </h2>
        {props.children}
    </header>)
}