export class Book{

    #id;
    #bookName;
    #bookDescription;
    #bookAuthor;
    #bookPublisher;
    #bookPrice;

    constructor(_id, _bookName, _bookDescription, _bookAuthor, _bookPublisher, _bookPrice){
        this.#id = _id;    
        this.#bookName = _bookName;
        this.#bookDescription = _bookDescription;
        this.#bookAuthor = _bookAuthor;
        this.#bookPublisher = _bookPublisher;
        this.#bookPrice = _bookPrice;
    }

    //getter and setter of bookName
    get BookName(){
        return this.#bookName;
    }

    set BookName(_bookName){
        this.#bookName = _bookName;
    }

    //getter and setter of bookDescription
    get BookDescription(){
        return this.#bookDescription;
    }

    set BookDescription(_bookDescription){
        this.#bookDescription = _bookDescription;
    }

    //getter and setter of bookAuthor
    get BookAuthor(){
        return this.#bookAuthor;
    }

    set BookAuthor(_bookAuthor){
        this.#bookAuthor = _bookAuthor;
    }

    //getter and setter of bookPublisher
    get BookPublisher(){
        return this.#bookPublisher;
    }

    set BookPublisher(_bookPublisher){
        this.#bookPublisher = _bookPublisher;
    }

    //getter and setter of bookPrice
    get BookPrice(){
        return this.#bookPrice;
    }

    set BookPrice(_bookPrice){
        this.#bookPrice = _bookPrice;
    }

    //getter and setter of id
    get Id(){
        return this.#id;
    }

    set Id(_id){
        this.#id = _id;
    }

    isEmpty(){
        return !this.#bookName || !this.#bookDescription || !this.#bookPublisher || !this.#bookPrice;
    }
}