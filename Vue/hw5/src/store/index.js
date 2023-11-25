import { createStore } from "vuex";

import BlogModule from "./modules/BlogModule";
import ProjectDetailsModule from "./modules/ProjectDetailsModule";
import ProjectModule from "./modules/ProjectModule";

export default createStore({
  modules: {
    ProjectDetailsModule,
    BlogModule,
    ProjectModule,
  },
});
