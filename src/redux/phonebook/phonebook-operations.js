import axios from 'axios';
import {
    fetchCardsRequest,
    fetchCardsSuccess,
    fetchCardsError,
    addCardRequest,
    addCardSuccess,
    addCardError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from './phonebook-actions';


const fetchCards = () => dispatch => {
    dispatch(fetchCardsRequest());

    axios
        .get('/card')
        .then(({ data }) => dispatch(fetchCardsSuccess(data)))
        .catch(error => dispatch(fetchCardsError(error)));
};

// Option with async/await, try/catch

// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());

//     try {
//         const { data } = await axios.get('/contacts');

//         dispatch(fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactSuccess(error.message));
//     }
// }

const addCard = (name, number) => dispatch => {
    const card = {
        name,
        number,
    };

    dispatch(addCardRequest());

    axios
        .post('/card', card)
        .then(({ data }) => dispatch(addCardSuccess(data)))
        .catch(error => dispatch(addCardError(error.message)));
};

const deleteContact = (contactId) => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));
};

const operations = {
    fetchCards,
    addCard,
    deleteContact
};

export default operations;