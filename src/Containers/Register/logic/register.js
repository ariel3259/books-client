import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css";

export const register = async (user , navigate) => {

    //Incomplete data
    if(user.isEmpty())
        return Swal.fire("Error", "Incomplete data", "error");

    //Invalid Email
    if(!user.isAValidEmail())
        return Swal.fire("Error", "Invalid Email", "error")

    //Do request
    const response = await fetch("http://localhost:8000/api/users/register", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: user.getName(),
            lastName: user.getLastName(),
            dni: user.getDni(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    });

    //Getting json data
    const data = await response.json();

    //Some response error
    if(response.status >= 400)
        return Swal.fire("Error", data.message, "error");

    Swal.fire("Congratulations", data.message, "success").then( () => navigate("/"));
}