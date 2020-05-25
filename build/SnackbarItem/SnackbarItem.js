"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _SnackbarItem = require("./SnackbarItem.util");

var _constants = require("../utils/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var styles = function styles(theme) {
  return (0, _styles.createStyles)(_objectSpread({}, _constants.allClasses.mui, {
    base: _defineProperty({
      fontSize: "0.875rem",
      lineHeight: "1.46429em",
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: theme.typography.fontFamily,
      borderRadius: theme.shape.borderRadius
    }, theme.breakpoints.down("xs"), {
      radius: 0,
      borderRadius: 0,
      boxShadow: theme.shadows[1]
    }),
    lessPadding: {
      paddingLeft: 8 * 2.5
    },
    variantSuccess: {
      backgroundColor: "#43a047" // green

    },
    variantError: {
      backgroundColor: "#d32f2f" // dark red

    },
    variantInfo: {
      backgroundColor: "#2979ff" // nice blue

    },
    variantWarning: {
      backgroundColor: "#ffa000" // amber

    },
    message: {
      display: "flex",
      alignItems: "center"
    },
    wrappedRoot: {
      position: "relative",
      transform: "translateX(0)",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    collapseContainer: _defineProperty({}, theme.breakpoints.down("xs"), {
      padding: 0
    }),
    collapseWrapper: _defineProperty({
      transition: theme.transitions.create(["margin-bottom"], {
        easing: "ease"
      }),
      marginTop: _constants.SNACKBAR_INDENTS.snackbar["default"],
      marginBottom: _constants.SNACKBAR_INDENTS.snackbar["default"]
    }, theme.breakpoints.down("xs"), {
      padding: 0
    }),
    collapseWrapperDense: _defineProperty({
      marginTop: _constants.SNACKBAR_INDENTS.snackbar.dense,
      marginBottom: _constants.SNACKBAR_INDENTS.snackbar.dense
    }, theme.breakpoints.down("xs"), {
      padding: 0,
      marginTop: 0,
      marginBottom: 0
    })
  }));
};

var SnackbarItem = function SnackbarItem(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutProperties(_ref, ["classes"]);

  var timeout = (0, _react.useRef)();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  (0, _react.useEffect)(function () {
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var handleClose = function handleClose(key) {
    return function (event, reason) {
      var cause = reason;

      if (props.snack.onClose) {
        props.snack.onClose(event, cause, key);
      }

      props.onClose(event, cause, key);
    };
  };

  var handleEntered = function handleEntered(key) {
    return function (node, isAppearing) {
      var snack = props.snack;

      if (snack.onEntered) {
        snack.onEntered(node, isAppearing, key);
      }

      props.onEntered(node, isAppearing, key);

      if (snack.requestClose) {
        handleClose(key)(null, _constants.REASONS.MAXSNACK);
      }
    };
  };

  var handleExited = function handleExited(key) {
    return function (node) {
      var onExited = props.onExited,
          singleOnExited = props.snack.onExited;
      if (singleOnExited) singleOnExited(node, key);
      onExited(node, key);
    };
  };

  var handleExitedScreen = function handleExitedScreen() {
    timeout.current = setTimeout(function () {
      setCollapsed(!collapsed);
    }, 125);
  };

  var getUnusedCallbacks = function getUnusedCallbacks() {
    return ["onEnter", "onEntering", "onExit", "onExiting"].reduce(function (acc, cbName) {
      return _objectSpread({}, acc, _defineProperty({}, cbName, function () {
        var snack = props.snack;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (typeof snack[cbName] === "function") {
          snack[cbName].apply(snack, args.concat([snack.key]));
        }

        if (typeof props[cbName] === "function") {
          props[cbName].apply(props, args.concat([snack.key]));
        }
      }));
    }, {});
  };

  var action = props.action,
      content = props.content,
      _props$ContentProps = props.ContentProps,
      ContentProps = _props$ContentProps === void 0 ? {} : _props$ContentProps,
      hideIconVariant = props.hideIconVariant,
      iconVariant = props.iconVariant,
      snack = props.snack,
      dense = props.dense,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Slide["default"] : _props$TransitionComp,
      _props$TransitionProp = props.TransitionProps,
      otherTransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = _objectWithoutProperties(props, ["action", "content", "ContentProps", "hideIconVariant", "iconVariant", "snack", "dense", "TransitionComponent", "TransitionProps"]);

  var contentAction = ContentProps.action,
      className = ContentProps.className,
      otherContentProps = _objectWithoutProperties(ContentProps, ["action", "className"]);

  var key = snack.key,
      persist = snack.persist,
      entered = snack.entered,
      requestClose = snack.requestClose,
      variant = snack.variant,
      singleContent = snack.content,
      singleAction = snack.action,
      _snack$ContentProps = snack.ContentProps,
      singleContentProps = _snack$ContentProps === void 0 ? {} : _snack$ContentProps,
      anchorOrigin = snack.anchorOrigin,
      _snack$TransitionProp = snack.TransitionProps,
      singleTransitionProps = _snack$TransitionProp === void 0 ? {} : _snack$TransitionProp,
      singleSnackProps = _objectWithoutProperties(snack, ["key", "persist", "entered", "requestClose", "variant", "content", "action", "ContentProps", "anchorOrigin", "TransitionProps"]);

  var icon = iconVariant[variant];

  var contentProps = _objectSpread({}, otherContentProps, {}, singleContentProps, {
    action: singleAction || singleContentProps.action || contentAction || action
  });

  var transitionProps = _objectSpread({
    direction: (0, _SnackbarItem.getTransitionDirection)(anchorOrigin)
  }, otherTransitionProps, {}, singleTransitionProps, {
    onExited: handleExitedScreen
  });

  var ariaDescribedby = contentProps["aria-describedby"] || "client-snackbar";
  var finalAction = contentProps.action;

  if (typeof finalAction === "function") {
    finalAction = contentProps.action(key);
  }

  var snackContent = singleContent || content;

  if (snackContent && typeof snackContent === "function") {
    snackContent = snackContent(key, snack.message);
  }

  return _react["default"].createElement(_Collapse["default"], {
    unmountOnExit: true,
    timeout: 175,
    "in": collapsed,
    classes: (0, _SnackbarItem.omitNonCollapseKeys)(classes, dense),
    onExited: handleExited(key)
  }, _react["default"].createElement(_Snackbar["default"], _extends({
    TransitionComponent: TransitionComponent
  }, other, singleSnackProps, {
    open: snack.open,
    anchorOrigin: anchorOrigin,
    TransitionProps: transitionProps,
    classes: (0, _SnackbarItem.omitNonMuiKeys)(classes),
    onClose: handleClose(key),
    onEntered: handleEntered(key)
  }, getUnusedCallbacks()), snackContent || _react["default"].createElement(_SnackbarContent["default"], _extends({
    className: (0, _clsx["default"])(classes.base, classes["variant".concat((0, _constants.capitalise)(variant))], className, !hideIconVariant && icon && classes.lessPadding)
  }, contentProps, {
    "aria-describedby": ariaDescribedby,
    message: _react["default"].createElement("span", {
      id: ariaDescribedby,
      className: classes.message
    }, !hideIconVariant ? icon : null, snack.message),
    action: finalAction
  }))));
};

var _default = (0, _styles.withStyles)(styles)(SnackbarItem);

exports["default"] = _default;