import state from "./catState";
import mutations from "./catMutations";
import getters from "./catGetters";
import actions from "./catActions";

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
