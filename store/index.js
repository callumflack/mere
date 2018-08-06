export function state() {
  return {
    currentPage: "/",
    isMobileNavVisible: false,
    isToggleVisible: false
  };
}

export const mutations = {
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },

  SET_MODAL_VISIBILITY(state, visibility) {
    state.isMobileNavVisible = visibility;
  },

  SET_TOGGLE_VISIBILITY(state, visibility) {
    state.isToggleVisible = visibility;
  }
};
