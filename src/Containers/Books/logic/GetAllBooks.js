import Swal from "sweetalert2";
import {Book} from "../../../Model/Book";

export const GetAllBooks = async () => {

    //Do a get request
    const response = await fetch("http://localhost:8000/api/books", {
        method: "get",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "authorization": localStorage.getItem("authorization"),
            "subject": localStorage.getItem("subject"),
        }
    });

    //Getting json data
    const data = await response.json();


    //Something is wrong
    if(response.status === 400){
        Swal.fire("Error", "Incomplete data", "error");
        return [];
    }
    if(response.stats === 401){
        Swal.fire("Error", "You're not loged in");
        return [];
    }
       

    return data.map(book => new Book(book.id, book.bookName, book.bookDescription, book.author, book.bookPublisher, book.bookPrice));
}