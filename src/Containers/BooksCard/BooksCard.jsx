import { useState, useReducer, useEffect } from "react"
import { ModalImp } from "../../Components/ModalImp/ModalImp";
import "./BooksCard.css"
import { Field } from "../../Model/Field";
import { TextFields } from "../../Components/TextFields/TextFields";
import { ModifyABook } from "./logic/ModifyABook";
import { DeleteABook } from "./logic/DeleteABook";
import { Book } from "../../Model/Book";
import { 
    initialState,
    actionChangeName,
    actionChangeDescription,
    actionChangePublisher,
    actionChangePrice
 } from "../../Actions/BooksActions";
import { BooksReducers } from "../../Reducers/BooksReducers";

export const BooksCard = (props) => {

    /*
        props:
            book: Book
            refreshBooks: async void function
    */
    const { book, refreshBooks } = props;

    //States
    const [show, setShow] = useState(false);
    const [bookState, dispatch] = useReducer(BooksReducers, initialState);

    
    //Hooks
    useEffect(() => {
        dispatch(actionChangeName(book.BookName));
        dispatch(actionChangeDescription(book.BookDescription)); 
        dispatch(actionChangePublisher(book.BookPublisher));
        dispatch(actionChangePrice(book.BookPrice));
    }, [dispatch]);

    const onChangeShow = () => setShow(!show);
    const onChangeName = (e) => dispatch(actionChangeName(e.target.value));
    const onChangeDescription = (e) => dispatch(actionChangeDescription(e.target.value));
    const onChangePublisher = (e) => dispatch(actionChangePublisher(e.target.value));
    const onChangePrice = (e) => dispatch(actionChangePrice(e.target.value));
    const onClickModify = async () => {
        await ModifyABook(new Book(book.Id, bookState.name, bookState.description, null, bookState.publisher, bookState.price), refreshBooks);
        onChangeShow();
    }
    const onClickDelete = async () => {
        await DeleteABook(book.Id, refreshBooks);
        onChangeShow();
    }

    //Fields for inputs
    const nameField = new Field("Name", "text", onChangeName, book.BookName);
    const descriptionField = new Field("Description", "text", onChangeDescription, book.BookDescription);
    const publisherField = new Field("Publisher", "text", onChangePublisher, book.BookPublisher);
    const priceField = new Field("Price", "number", onChangePrice, book.BookPrice);

    //Body and Footer modal
    const bodyModal = 
    <>
        <TextFields 
        field={nameField}/>
        
        <TextFields 
        field={descriptionField}/>
        
        <TextFields 
        field={publisherField}/>
        
        <TextFields 
        field={priceField}/>
    </>;

    const footerModal = 
    <>
        <div
        className="btn-group">
            	<button
                className="btn btn-success"
                onClick={onClickModify}>
                    Modify
                </button>
                <button
                className="btn btn-danger"
                onClick={onClickDelete}>
                    Delete
                </button>
        </div>
    </>;

    return(
        <>
        <div 
        className="books-card"
        onClick={onChangeShow}>
           {book.BookName}
        </div>

        <ModalImp
        title="Book"
        body={bodyModal}
        footer={footerModal}
        HandleClose={onChangeShow}
        show={show} />
        </>
    )
}