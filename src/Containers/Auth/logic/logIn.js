import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";


export const logIn = async (user, navigate) => {
    
    //Incomplete data
    if(!user.Email || !user.Password)
        return Swal.fire("Error", "Incomplete data", "error");

    //Invalid Email
    if(!user.isAValidEmail())
        return Swal.fire("Error", "Invalid email", "error");
    
    //Do httpRequest
    const response = await fetch("http://localhost:8000/api/users/auth", {
        method:"post",
        headers:{
            "Content-Type": "application/json",
            "authorization": "hiword"
        },
        body: JSON.stringify({
            email: user.Email,
            password: user.Password
        })
    });

    //Get json response
    const data = await response.json();

    //Something is wrong
    if(response.status >= 400)
        return Swal.fire("Error", data.message, "error");

    localStorage.setItem("authorization", data.access_token);
    localStorage.setItem("subject", data.subject);
    Swal.fire("Success", data.message, "success").then( () => navigate("/books")) ;   
}