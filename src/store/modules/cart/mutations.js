export const ADD_TO_CART = (state, { question, choise }) => {

    let questionInCart = state.cart.find(item => {
        return item.question.id === question.id;
    });

    if (questionInCart) {
        questionInCart.choise = choise;
        return;
    }

    state.cart.push({
        question,
        choise,
        
    })
}