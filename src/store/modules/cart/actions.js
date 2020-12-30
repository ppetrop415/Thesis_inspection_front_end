export const addQuestionToCart = ({ commit }, { question, choise, comment }) => {
    commit('ADD_TO_CART', { question, choise, comment });

    // Cart.store({
    //     product_id: product.id,
    //     quantity
    // });
}