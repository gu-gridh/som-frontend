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

export function icons() {
  library.add(
    faArrowLeft,
    faDownload,
    faPauseCircle,
    faPlayCircle,
    faQuestionCircle,
    faSearch
  );
}

export { FontAwesomeIcon };
