import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faDownload,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faArrowLeft);
library.add(faDownload);
library.add(faPauseCircle);
library.add(faPlayCircle);
library.add(faQuestionCircle);
library.add(faSearch);
