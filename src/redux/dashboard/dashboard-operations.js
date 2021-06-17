import axios from 'axios';
import {
    fetchCardsRequest,
    fetchCardsSuccess,
    fetchCardsError,
    addCardRequest,
    addCardSuccess,
    addCardError,
    deleteCardRequest,
    deleteCardSuccess,
    deleteCardError
} from './dashboard-actions';


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

const addCard = (
    title,
    difficulty,
    category,
    date,
    time,
    type
) => dispatch => {
    const card = {
        title,
        difficulty,
        category,
        date,
        time,
        type
    };

    dispatch(addCardRequest());

    axios
        .post('/card', card)
        .then(({ data }) => dispatch(addCardSuccess(data)))
        .catch(error => dispatch(addCardError(error.message)));
};

const deleteCard = (cardId) => dispatch => {
    dispatch(deleteCardRequest());

    axios
        .delete(`/card/${cardId}`)
        .then(() => dispatch(deleteCardSuccess(cardId)))
        .catch(error => dispatch(deleteCardError(error.message)));
};

const operations = {
    fetchCards,
    addCard,
    deleteCard
};

export default operations;