import Swal from "sweetalert2";

export const DeleteABook = async (id, refreshBooks) => {

    //Incomplete data
    if(!id)
        return Swal.fire("Error", "Incomplete data", "error");

    //Do a request
    const response = await fetch("http://localhost:8000/api/books", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("authorization"),
            "subject": localStorage.getItem("subject"),
            "id": id
        }
    });

    //Getting json data
    const data = await response.json();

    if(response.status >= 400)
        return Swal.fire("Error", data.message, "error");

    Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        showConfirmButton: false,
        timer: 1200
    });

    await refreshBooks();
}