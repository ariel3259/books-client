import { MainContainer } from "../../Components/MainContainer/MainContainer";
import { BodyContainer } from "../../Components/BodyContainer/BodyContainer";
import "./Register.css";
import { useReducer } from "react";
import { TextFields } from "../../Components/TextFields/TextFields";
import { Link } from "react-router-dom";
import { register } from "./logic/register";
import { useNavigate } from "react-router-dom";
import { Field } from "../../Model/Field";
import { User } from "../../Model/User";
import UsersReducers from "../../Reducers/UsersReducers";
import { 
    initialState,
    actionChangeName,
    actionChangeLastName,
    actionChangeDni,
    actionChangeEmail,
    actionChangePassword
 } from "../../Actions/UsersActions";

export const Register = () => {

    //States
    const [user, dispatch] = useReducer(UsersReducers, initialState);
    const navigate = useNavigate();

    //on changes
    const onChangeName = (e) => dispatch(actionChangeName(e.target.value));
    const onChangeLastName = (e) => dispatch(actionChangeLastName(e.taget.value));
    const onChangeDni = (e) => dispatch(actionChangeDni(e.target.value));
    const onChangeEmail = (e) => dispatch(actionChangeEmail(e.target.value));
    const onChangePassword = (e) => dispatch(actionChangePassword(e.target.value));
    const onClickRegister = async () => await register(new User(user.name, user.lastName, user.dni, user.email, user.password), navigate);

    //Fields for inputs
    const nameField = new Field("Name", "text", onChangeName, user.name);
    const lastNameField = new Field("Last name", "text", onChangeLastName, user.lastName);
    const dniField = new Field("Dni", "text", onChangeDni, user.dni);
    const emailField = new Field("Email", "email", onChangeEmail, user.email);
    const passwordField = new Field("Password", "password", onChangePassword, user.password);

    return(
        <MainContainer>
            <BodyContainer
            style="register-body-container">
                <h2>Register</h2>

                {/* name input */ }
                <TextFields 
                field={nameField}/>

                {/* last name input */}
                <TextFields 
                field={lastNameField}/>

                {/* dni input */}
                <TextFields 
                field={dniField}/>

                {/* email input */}
                <TextFields 
                field={emailField}/>

                {/* password input */}
                <TextFields 
                field={passwordField}/>

                <button
                className="btn btn-primary m-4 btn-lg"
                onClick = {onClickRegister}>
                    Create Account
                </button>
                
                <Link
                to="/"
                className="btn btn-secondary btn-lg ms-4">
                    Cancel
                </Link>

            </BodyContainer>
        </MainContainer>
    )
}