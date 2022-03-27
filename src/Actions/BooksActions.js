export const initialState = {
    name: "",
    description: "",
    publisher: "",
    price: 0
};

export const BOOKS_TYPES = {
    CHANGE_NAME: "CHANGE_NAME",
    CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
    CHANGE_PUBLISHER: "CHANGE_PUBLISHER",
    CHANGE_PRICE: "CHANGE_PRICE"
};

export const actionChangeName = (name) => ({
    type: BOOKS_TYPES.CHANGE_NAME,
    payload: name
});

export const actionChangeDescription = (description) => ({
    type: BOOKS_TYPES.CHANGE_DESCRIPTION,
    payload: description
});

export const actionChangePublisher = (publisher) => ({
    type: BOOKS_TYPES.CHANGE_PUBLISHER,
    payload: publisher
});

export const actionChangePrice = (price) => ({
    type: BOOKS_TYPES.CHANGE_PRICE,
    payload: price
});