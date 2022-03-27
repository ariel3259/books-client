import Swal from "sweetalert2";

export const ModifyABook = async (book, refreshBooks) => {

    //Invalid data
    if(book.isEmpty() || !book.Id)
        return Swal.fire("Error", "Incomplete data", "error");

    //Do a request
    const response = await fetch("http://localhost:8000/api/books",{
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("authorization"),
            "subject": localStorage.getItem("subject")
        },
        body: JSON.stringify({
            id: book.Id,
            bookName: book.BookName,
            bookDescription: book.BookDescription,
            bookPublisher: book.BookPublisher,
            bookPrice: book.BookPrice
        })
    });

    //Getting json data
    const data = await response.json();

    //Something is wrong
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