export function state() {
  return {
    currentPage: "/",
    isNewsletterFormVisible: true,
    isMobileNavVisible: false,
    isToggleVisible: false,
    isCartVisible: false,
    checkout: null
  };
}

export const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },

  SET_NEWSLETTERFORM_VISIBILITY(state, visibility) {
    state.isNewsletterFormVisible = visibility;
  },

  SET_MOBILENAV_VISIBILITY(state, visibility) {
    state.isMobileNavVisible = visibility;
  },

  SET_TOGGLE_VISIBILITY(state, visibility) {
    state.isToggleVisible = visibility;
  },

  SET_CART_VISIBILITY(state, visibility) {
    state.isCartVisible = visibility;
  },

  SET_CHECKOUT(state, checkout) {
    state.checkout = checkout;
  }
};
