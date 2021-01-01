export const addQuestionToCart = ({ commit }, { question, choise }) => {
    commit('ADD_TO_CART', { question, choise });

    // Cart.store({
    //     product_id: product.id,
    //     quantity
    // });
}