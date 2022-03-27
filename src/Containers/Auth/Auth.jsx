import { MainContainer } from "../../Components/MainContainer/MainContainer"
import { BodyContainer } from "../../Components/BodyContainer/BodyContainer"
import "./Auth.css";
import { TextFields } from "../../Components/TextFields/TextFields";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logIn } from "./logic/logIn";
import { Field } from "../../Model/Field";
import { User } from "../../Model/User";
import { actionChangeEmail, actionChangePassword, initialState } from "../../Actions/UsersActions";
import UsersReducers from "../../Reducers/UsersReducers";

export const Auth = () => {

    //States
    const [user, dispatch] = useReducer(UsersReducers, initialState);
    const navigate = useNavigate();
    
    //Hooks
    const onChangeEmail = (e) => dispatch(actionChangeEmail(e.target.value));
    const onChangePassword = (e) => dispatch(actionChangePassword(e.target.value));
    const onClickLogIn = async () => await logIn(new User("", "", "", user.email, user.password), navigate);

    //Fields for inputs
    const emailField = new Field("Email", "email", onChangeEmail, user.email);
    const passwordField = new Field("Password", "password", onChangePassword, user.password);

    return(
        <MainContainer>
            <BodyContainer 
            style="auth-body-container">
                <h2>Auth</h2>
                <TextFields 
                field={emailField} />
                <TextFields
                field={passwordField} />
                <button 
                className="btn btn-primary btn-lg m-4"
                onClick={onClickLogIn}>
                    Log in
                </button>
                <Link 
                className="btn btn-secondary btn-lg ms-4 " 
                to="/register">
                    Register
                </Link>
            </BodyContainer>
        </MainContainer>
    )
}