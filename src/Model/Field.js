export class Field{
    #labelText;
    #inputType;
    #onChangeInput;
    #inputValue;

    constructor(_labelText, _inputType, _onChangeInput, _inputValue ){
        this.#labelText = _labelText;
        this.#inputType = _inputType;
        this.#onChangeInput = _onChangeInput;
        this.#inputValue = _inputValue;
    }

    //setters and getters labelText
    set LabelText(_labelText){
        this.#labelText = _labelText;
    }

    get LabelText(){
        return this.#labelText;
    }

    //setters and getters InputType
    set InputType(_inputType){
        this.#inputType = _inputType;
    }

    get InputType(){
        return this.#inputType;
    }

    //setters and getters onChangeInput
    set OnChangeInput(_onChangeInput){
        this.#onChangeInput = _onChangeInput;
    }

    get OnChangeInput(){
        return this.#onChangeInput;
    }

    //setters and getters inputValue
    set InputValue(_inputValue){
        this.#inputValue = _inputValue;
    } 

    get InputValue(){
        return this.#inputValue;
    }
}
