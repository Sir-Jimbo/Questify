import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.dashboard.loading;

const getFilter = state => state.dashboard.filter;

const getAllCards = state => state.dashboard.cards;

const getError = state => state.dashboard.error;

//Без мемоизации
// const getVisibleContacts = state => {
//     const contacts = getAllContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter),
//     );
// };

//С мемоизацией
const getVisibleCards = createSelector(
    [getAllCards, getFilter],
    (cards, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return cards.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    },
);

const selectors = {
    getLoading,
    getFilter,
    getVisibleCards,
    getAllCards,
    getError
};

export default selectors;