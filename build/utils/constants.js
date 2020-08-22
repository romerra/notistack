"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REASONS = exports.omitContainerKeys = exports.originKeyExtractor = exports.capitalise = exports.SNACKBAR_INDENTS = exports.MESSAGES = exports.allClasses = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var allClasses = {
  mui: {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
  },
  container: {
    containerAnchorOriginTopCenter: {},
    containerAnchorOriginBottomCenter: {},
    containerAnchorOriginTopRight: {},
    containerAnchorOriginBottomRight: {},
    containerAnchorOriginTopLeft: {},
    containerAnchorOriginBottomLeft: {}
  }
};
exports.allClasses = allClasses;
var MESSAGES = {
  NO_PERSIST_ALL: "WARNING - notistack: Reached maxSnack while all enqueued snackbars have 'persist' flag. Notistack will dismiss the oldest snackbar anyway to allow other ones in the queue to be presented."
};
exports.MESSAGES = MESSAGES;
var SNACKBAR_INDENTS = {
  view: {
    "default": 30,
    dense: 54
  },
  snackbar: {
    "default": 6,
    dense: 0
  }
};
exports.SNACKBAR_INDENTS = SNACKBAR_INDENTS;

var capitalise = function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

exports.capitalise = capitalise;

var originKeyExtractor = function originKeyExtractor(anchor) {
  return "".concat(capitalise(anchor.vertical)).concat(capitalise(anchor.horizontal));
};
/**
 * Omit SnackbarContainer class keys that are not needed for SnackbarItem
 */


exports.originKeyExtractor = originKeyExtractor;

var omitContainerKeys = function omitContainerKeys() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (// @ts-ignore
    Object.keys(classes).filter(function (key) {
      return !allClasses.container[key];
    }).reduce(function (obj, key) {
      return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, classes[key]));
    }, {})
  );
};

exports.omitContainerKeys = omitContainerKeys;
var REASONS = {
  CLICKAWAY: "clickaway",
  MAXSNACK: "maxsnack",
  INSTRUCTED: "instructed"
};
exports.REASONS = REASONS;