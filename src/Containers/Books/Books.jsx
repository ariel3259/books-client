import { useState, useEffect, useReducer } from "react";
import { MainContainer } from "../../Components/MainContainer/MainContainer";
import { BodyContainer } from "../../Components/BodyContainer/BodyContainer";
import { Header } from "../../Components/Header/Header";
import "./Books.css";
import { BooksCard } from "../BooksCard/BooksCard";
import { GetAllBooks } from "./logic/getAllBooks";
import { useNavigate } from "react-router-dom";
import { Field } from "../../Model/Field";
import { ModalImp } from "../../Components/ModalImp/ModalImp";
import { TextFields } from "../../Components/TextFields/TextFields";
import {SaveABook} from "./logic/SaveABook";
import { Book } from "../../Model/Book";
import { 
    initialState,
    actionChangeName,
    actionChangeDescription,
    actionChangePublisher,
    actionChangePrice
 } from "../../Actions/BooksActions";
import { BooksReducers } from "../../Reducers/BooksReducers";

export const Books = () => {

    //State
    const [show, setShow] = useState(false);
    const [books, setBooks] = useState([]);
    const [book, dispatch] = useReducer(BooksReducers, initialState);
    const navigate = useNavigate();

    //Hook
    const onGetBooks = async () => setBooks(await GetAllBooks());
    const onChangeBookName = (e) => dispatch(actionChangeName(e.target.value));
    const onChangeBookDescription = (e) => dispatch(actionChangeDescription(e.target.value));
    const onChangeBookPublisher = (e) => dispatch(actionChangePublisher(e.target.value));
    const onChangeBookPrice = (e) => dispatch(actionChangePrice(e.target.value));
    const onChangeShow = () => setShow(!show);
    const onClickLogOut = () => {
        localStorage.removeItem("authorization");
        localStorage.removeItem("subject");
        navigate("/");
    }
    const onClickSaveBook = async () => {
        await SaveABook(new Book(null, book.name, book.description, null, book.publisher, book.price), onGetBooks);
        onChangeShow();
    };
    
    useEffect(() => {
        (async () => await onGetBooks())();
    }, [setBooks]) 

    //Turn books array to BooksCard components array
    const listBooksCard = books.map(book => <BooksCard book={book} refreshBooks={onGetBooks} key={book.Id}/>);

    //Fields for inputs
    const bookNameField = new Field("Name", "text", onChangeBookName, book.name);
    const bookDescriptionField = new Field("Description", "text", onChangeBookDescription, book.description);
    const bookPublisherField = new Field("Publisher", "text", onChangeBookPublisher, book.publisher);
    const bookPriceField = new Field("Price", "number", onChangeBookPrice, book.price);
    
    //Body of modal
    const bodyModal = 
    <>
        {/*bookName input*/}
        <TextFields 
        field={bookNameField}/>

        {/*bookDescription input*/}
        <TextFields 
        field={bookDescriptionField}/>
        
        {/*bookPublisher input*/ }
        <TextFields 
        field={bookPublisherField}/>
        
        {/*bookPrice input*/}
        <TextFields 
        field={bookPriceField}/>
    </>;

    //Footer of modal
    const footerModal =
    <>
        <button 
        className="btn btn-primary btn-lg"
        onClick={onClickSaveBook}>
            Save
        </button>
    </>

    return(
        <MainContainer>
            <Header 
            title="Books" />
            <button
            className="btn-log-out"
            onClick={onClickLogOut}>
                    Log out
            </button>
            <button
            className="btn-plus"
            onClick={onChangeShow}>
                +
            </button>
            <BodyContainer 
            style="books-body-container">
                {listBooksCard}
            </BodyContainer>
            <ModalImp 
            title="AddBook"
            show={show} 
            HandleClose={onChangeShow}
            body={bodyModal}
            footer={footerModal}/>
        </MainContainer>
    )
}