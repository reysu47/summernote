import $ from "jquery";
import ui from "./ui";
import "../base/settings.js";
import "../summernote";

import "../../less/summernote.scss";

$.summernote = $.extend($.summernote, {
  ui: ui
});
