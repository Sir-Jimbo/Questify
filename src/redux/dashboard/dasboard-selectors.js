
const getLoading = state => state.dashboard.loading;

const getFilter = state => state.dashboard.filter;

const getAllCards = state => state.dashboard.cards;

const getError = state => state.dashboard.error;

const isEditCard = state => state.dashboard.isEdit;

const isVisibleCard = state => state.dashboard.isVisibleCard;

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
/*
const getVisibleCards = createSelector(
    [getAllCards, getFilter],
    (cards, filter) => {
        const normalizedFilter = filter.toLowerCase();

        return cards.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter),
        );
    },
);
*/
const selectors = {
    getLoading,
    getFilter,
    isVisibleCard,
    getAllCards,
    getError,
    isEditCard
};

export default selectors;