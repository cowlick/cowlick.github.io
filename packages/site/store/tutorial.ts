import Tutorial from "~/model/Tutorial";

export const state = () =>
  ({
    dialog: false
  } as Tutorial);

export const mutations = {
  open: (state: Tutorial) => {
    state.dialog = true;
  },
  close: (state: Tutorial) => {
    state.dialog = false;
  }
};

export const actions = {};
