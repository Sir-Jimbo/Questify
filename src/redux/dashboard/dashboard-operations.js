import axios from 'axios';
import {
    fetchCardsRequest,
    fetchCardsSuccess,
    fetchCardsError,
    addCardRequest,
    addCardSuccess,
    addCardError,
    updateCardRequest,
    updateCardSuccess,
    updateCardError,
    updateCardStatusDoneRequest,
    updateCardStatusDoneSuccess,
    updateCardStatusDoneError,
    deleteCardRequest,
    deleteCardSuccess,
    deleteCardError
} from './dashboard-actions';


const fetchCards = () => async dispatch => {
    dispatch(fetchCardsRequest());
    try {
        const { data } = await axios
            .get('/card')
        dispatch(fetchCardsSuccess(data.cards));
    }
    catch (error) {
        dispatch(fetchCardsError(error));
    }
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

const addCard = ({
    category, difficulty, title, time, challenge
}) =>
    async dispatch => {

        dispatch(addCardRequest());
        try {
            const card = {
                category, difficulty, title, time, challenge
            };
            await axios
                .post('/card', card)
                .then(({ data }) => dispatch(addCardSuccess(data)))
        }
        catch (error) {
            dispatch(addCardError(error));
        }
    };

const updateСard =
    ({ id, category, difficulty, title, time, challenge }) =>
        async dispatch => {
            dispatch(updateCardRequest());

            try {
                const card = { category, difficulty, title, time, challenge };

                dispatch(
                    updateCardSuccess(
                        await axios.patch(`/card/${id}`, card).then(res => res.data),
                    ),
                );

            } catch (error) {
                dispatch(updateCardError(error));
            }
        };

const updateCardStatusDone =
    ({ id, done }) =>
        async dispatch => {
            dispatch(updateCardStatusDoneRequest());
            try {
                const newQuest = await axios
                    .patch(`/card/${id}/done`, { done: true })
                    .then(res => res.data);
                dispatch(updateCardStatusDoneSuccess(newQuest));
            } catch (error) {
                dispatch(updateCardStatusDoneError(error));
            }
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
    updateСard,
    updateCardStatusDone,
    deleteCard
};

export default operations;