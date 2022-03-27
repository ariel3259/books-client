import Swal from "sweetalert2"

export const SaveABook = async (book, refreshBook) => {
 
    //Incomplete data
    if(book.isEmpty())
        return Swal.fire("Error", "incomplete data", "error");

    //Do a request
    const response = await fetch("http://localhost:8000/api/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("authorization"),
            "subject": localStorage.getItem("subject")
        },
        body: JSON.stringify({
            bookName: book.BookName,
            bookDescription: book.BookDescription,
            bookPublisher: book.BookPublisher,
            bookPrice: book.BookPrice
        })
    });

    //Getting json data
    const data = await response.json();

    if(response.status >= 400)
        return Swal.fire("Error", data.message, "error");

    Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        timer: 1200,
        showConfirmButton: false
    });
    
    await refreshBook();
}