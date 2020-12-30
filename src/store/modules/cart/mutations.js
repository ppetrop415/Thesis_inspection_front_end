export const ADD_TO_CART = (state, { question, choise, comment }) => {

    // let productInCart = state.cart.find(item => {
    //     return item.question.id === question.id;
    // });

    // if (productInCart) {
    //     productInCart.choise = choise;
    //     return;
    // }

    state.cart.push({
        question,
        choise,
        comment
    })
}