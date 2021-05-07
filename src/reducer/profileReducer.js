import {
  EDIT_JOB_DES,
  TURN_OFF_MODAL,
  TURN_ON_MODAL,
} from "../constants";

let initialState = {
  user: {
    roleId: 2,
  },
  modal: {
    show: false,
    typeForm: EDIT_JOB_DES,
  },
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_MODAL:
      const newModal = { ...state.modal };
      newModal.show = true;
      newModal.typeForm = action.payload;
      state.modal = newModal;
      return { ...state };
    case TURN_OFF_MODAL:
      state.modal.show = false;
      state.modal = { ...state.modal };
      return { ...state };

    default:
      return { ...state };
  }
};
