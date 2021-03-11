import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faSearch, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faPauseCircle);
library.add(faPlayCircle);
library.add(faSearch);
library.add(faQuestionCircle);
