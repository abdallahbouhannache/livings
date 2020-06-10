import State from "./prodState";
import Mutations from "./prodMutations";
import Getters from "./prodGetters";
import Actions from "./prodActions";

export const User {
  namespaced: true,
  State,
  Mutations,
  Getters,
  Actions,
};
