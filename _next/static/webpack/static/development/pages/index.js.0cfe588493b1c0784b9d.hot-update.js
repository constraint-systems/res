webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "/home/grant/s/cs/res/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



 // super pixel

var sp = 16;

function fill(rgb) {
  return 'rgb(' + rgb.join(',') + ')';
}

var Line = function Line() {
  return __jsx("div", {
    style: {
      height: sp,
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  });
};

var Space = function Space() {
  return __jsx("div", {
    style: {
      width: sp / 2
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  });
};

var Button = function Button(_ref) {
  var label = _ref.label,
      clearer = _ref.clearer,
      trigger = _ref.trigger,
      text_label = _ref.text_label,
      press_gates = _ref.press_gates,
      custom_style = _ref.custom_style;
  var button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block'
  };

  if (custom_style !== undefined) {
    button_style = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(button_style, custom_style);
  }

  return __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, text_label)) : null);
};

var RepeatButton = function RepeatButton(_ref2) {
  var label = _ref2.label,
      clearer = _ref2.clearer,
      trigger = _ref2.trigger,
      text_label = _ref2.text_label,
      press_gates = _ref2.press_gates,
      custom_style = _ref2.custom_style;
  var repeat_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var start_gate = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var button_style = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: 'none',
    padding: 0,
    margin: 0,
    width: sp,
    background: 'black',
    color: 'white',
    display: 'block'
  };

  if (custom_style !== undefined) {
    button_style = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(button_style, custom_style);
  }

  return __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onTouchStart: function onTouchStart(e) {
      touch_mode.current = true;
      press_gates.current = true;
      trigger();
      setTimeout(function () {
        if (press_gates.current) {
          repeat_ref.current = setInterval(function () {
            trigger();
          }, 100);
          clearer(repeat_ref.current);
        }
      }, 400);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        touch_mode.current = false;
      }, 400);
      e.preventDefault();
    },
    onMouseDown: function onMouseDown(e) {
      if (!touch_mode.current) {
        press_gates.current = true;
        trigger();
        setTimeout(function () {
          if (press_gates.current) {
            repeat_ref.current = setInterval(function () {
              trigger();
            }, 100);
            clearer(repeat_ref.current);
          }
        }, 400);
      }
    },
    onMouseUp: function onMouseUp(e) {
      if (!touch_mode.current) {
        clearInterval(repeat_ref.current);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default'
    },
    onMouseDown: function onMouseDown(e) {
      repeat_ref.current = setInterval(function () {
        trigger();
      }, 200);
      clearer(repeat_ref.current);
      trigger();
    },
    onMouseUp: function onMouseUp(e) {
      clearInterval(repeat_ref.current);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, text_label)) : null);
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('favicon.png'),
      favicon = _useState2[0],
      setFavicon = _useState2[1];

  var cref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var rref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var rpref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var qref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var press_gates = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var dim_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var reduced_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({});
  var state_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({
    img: null,
    tiles: null
  });
  var slider_click_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var slider_touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var ti_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var thresh_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var clear_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);

  function loadImage(src) {
    var c = cref.current;
    var cx = c.getContext('2d');
    var r = rref.current;
    var rx = r.getContext('2d');
    var p = pref.current;
    var px = p.getContext('2d');
    var rp = rpref.current;
    var rpx = rp.getContext('2d');
    var img = document.createElement('img');

    img.onload = function () {
      var adj_width = Math.min(img.width, window.innerWidth - sp * 2);
      var dsp = sp;
      var snapw = Math.round(adj_width / dsp) * dsp;
      var snapr = snapw / img.width;
      var snaph = Math.round(img.height * snapr / dsp) * dsp;
      img.width = snapw;
      img.height = snaph;
      setWidth(img.width);
      c.width = img.width;
      c.height = img.height;
      var cols = img.width / sp;
      var rows = img.height / sp;
      var cells = cols * rows; // preserve dimensions

      var t_img = document.createElement('canvas');
      t_img.width = c.width;
      t_img.height = c.height;
      var t_imgx = t_img.getContext('2d');
      t_imgx.drawImage(img, 0, 0, c.width, c.height);
      img = t_img;
      cx.drawImage(img, 0, 0, c.width, c.height);
      r.width = cols;
      r.height = rows;
      rx.drawImage(img, 0, 0, c.width, c.height, 0, 0, r.width, r.height);
      p.width = sp * 8;
      p.height = sp;
      rp.width = img.width;
      rp.height = img.height; // get colors from reduced image

      var image_data = rx.getImageData(0, 0, r.width, r.height);
      var colors = [];

      var _loop = function _loop(i) {
        var rgb = [0, 1, 2].map(function (offset) {
          return image_data.data[i + offset];
        });
        colors.push(rgb);
      };

      for (var i = 0; i < image_data.data.length; i += 4) {
        _loop(i);
      } // get palette draw palette


      var palette = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["medCut"])(colors); // palette = palette.map(color => color.map(channel => 255 - channel))

      for (var _i = 0; _i < palette.length; _i++) {
        px.fillStyle = fill(palette[_i]);
        px.fillRect(_i * sp, 0, sp, sp);
      } // draw palette image


      var _loop2 = function _loop2(_i2) {
        var rgb = [0, 1, 2].map(function (offset) {
          return image_data.data[_i2 + offset];
        });
        var distances = palette.map(function (prgb) {
          var _rgb = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(rgb, 3),
              r1 = _rgb[0],
              g1 = _rgb[1],
              b1 = _rgb[2];

          var _prgb = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prgb, 3),
              r2 = _prgb[0],
              g2 = _prgb[1],
              b2 = _prgb[2]; // return Math.abs(
          //   ((r2 - r1) * 1) ^ (2 + (g2 - g1) * 1) ^ (2 + (b2 - b1) * 1) ^ 2
          // )
          // weighted match


          return Math.abs((r2 - r1) * 0.3 ^ 2 + (g2 - g1) * 0.59 ^ 2 + (b2 - b1) * 0.11 ^ 2);
        });
        var min = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(distances));
        var min_index = distances.indexOf(min);
        var color = palette[min_index];
        var p = _i2 / 4;
        var x = p % cols;
        var y = Math.floor(p / cols);
        rpx.fillStyle = fill(color);
        rpx.fillRect(x * sp, y * sp, sp, sp);
      };

      for (var _i2 = 0; _i2 < image_data.data.length; _i2 += 4) {
        _loop2(_i2);
      } // cut up original image


      var tiles = [];

      for (var _i3 = 0; _i3 < cells; _i3++) {
        var _t = document.createElement('canvas');

        _t.width = sp;
        _t.height = sp;

        var _tx = _t.getContext('2d');

        var x = _i3 % cols;
        var y = Math.floor(_i3 / cols);

        _tx.drawImage(c, x * sp, y * sp, sp, sp, 0, 0, sp, sp);

        var complexity = _t.toDataURL().length / (sp * sp);
        tiles.push({
          t: _t,
          c: complexity,
          x: x,
          y: y,
          i: _i3
        });
      }

      tiles = lodash__WEBPACK_IMPORTED_MODULE_8__["sortBy"](tiles, 'c').reverse();
      var q = qref.current;
      q.innerHTML = '';

      for (var _i4 = 0; _i4 < tiles.length; _i4++) {
        var bigger = document.createElement('canvas');
        bigger.width = sp * 2;
        bigger.height = sp * 2;
        var bx = bigger.getContext('2d');
        bx.imageSmoothingEnable = false;
        var tile = tiles[_i4];
        bx.drawImage(tile.t, 0, 0, bigger.width, bigger.height);
        var d = document.createElement('div'); // d.style.display = 'flex'
        // d.style.alignItems = 'center'

        var text = document.createElement('div'); // text.style.marginLeft = sp / 2 + 'px'

        text.innerHTML = "".concat(tile.c.toFixed(3));
        d.appendChild(bigger);
        d.appendChild(text);
        q.appendChild(d);
      }

      var state = state_ref.current;
      state.img = img;
      state.tiles = tiles;
      state.cells = cells;
      state.cols = cols;
      state.rows = rows;
      var ti = ti_ref.current;
      ti.width = img.width - sp * 4;
      ti.height = sp * 2; // favicon

      var f = document.createElement('canvas');
      f.width = 32;
      f.height = 32;
      var fx = f.getContext('2d');
      var t = document.createElement('canvas');
      t.width = 8;
      t.height = 8;
      var tx = t.getContext('2d');
      tx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 8, 8);
      var favicon_data = tx.getImageData(0, 0, t.width, t.height);

      var _loop3 = function _loop3(_i5) {
        var rgb = [0, 1, 2].map(function (offset) {
          return favicon_data.data[_i5 + offset];
        });
        var distances = palette.map(function (prgb) {
          var _rgb2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(rgb, 3),
              r1 = _rgb2[0],
              g1 = _rgb2[1],
              b1 = _rgb2[2];

          var _prgb2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prgb, 3),
              r2 = _prgb2[0],
              g2 = _prgb2[1],
              b2 = _prgb2[2];

          return Math.abs((r2 - r1) * 0.3 ^ 2 + (g2 - g1) * 0.59 ^ 2 + (b2 - b1) * 0.11 ^ 2);
        });
        var min = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(distances));
        var min_index = distances.indexOf(min);
        var color = palette[min_index];
        var p = _i5 / 4;
        var x = p % 8;
        var y = Math.floor(p / 8);
        fx.fillStyle = fill(color);
        fx.fillRect(x * 4, y * 4, 4, 4);
      };

      for (var _i5 = 0; _i5 < favicon_data.data.length; _i5 += 4) {
        _loop3(_i5);
      }

      setFavicon(f.toDataURL());
      state.threshold = 120;
      render();
    };

    img.src = src;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    // img.src = 'uncut.jpg'
    // img.src = 'exmachina.jpeg'
    // img.src = 'mrrobot.jpg'
    // img.src = 'stalker.jpg'
    // img.src = 'acronym.jpg'
    // img.src = 'mrrobot2.jpg'
    // img.src = 'veilance.jpg'
    // img.src = 'mccabe.jpg'
    // img.src = 'compute.png'
    loadImage('mrrobot2.jpg');
  }, []);

  function clickSetThreshold(x) {
    var rect = ti_ref.current.getBoundingClientRect();
    x = x - rect.left;
    var percent = x / ti_ref.current.width;
    var _state_ref$current = state_ref.current,
        cells = _state_ref$current.cells,
        threshold = _state_ref$current.threshold;
    var new_thresh = cells - Math.min(cells, Math.max(0, Math.round(percent * cells)));
    state_ref.current.threshold = new_thresh;
    render();
  }

  function render() {
    var cx = cref.current.getContext('2d');
    var rp = rpref.current;
    var _state_ref$current2 = state_ref.current,
        img = _state_ref$current2.img,
        tiles = _state_ref$current2.tiles,
        cols = _state_ref$current2.cols,
        rows = _state_ref$current2.rows,
        cells = _state_ref$current2.cells,
        threshold = _state_ref$current2.threshold;
    cx.drawImage(img, 0, 0, img.width, img.height);

    for (var i = threshold; i < cells; i++) {
      var tile = tiles[i];
      var x = tile.x;
      var y = tile.y;
      cx.drawImage(rp, x * sp, y * sp, sp, sp, x * sp, y * sp, sp, sp);
    }

    thresh_ref.current.innerHTML = cells - threshold + '/' + cells;
    var ti = ti_ref.current;
    var tix = ti.getContext('2d');
    tix.fillStyle = '#ddd';
    tix.fillRect(0, 0, ti.width, sp * 2);
    tix.fillStyle = '#999';
    var tmark = Math.min(Math.max(1, Math.round(ti.width * ((cells - threshold) / cells))), ti.width - 2);
    tix.fillRect(tmark - 1, 0, 3, sp * 2);
    var q = qref.current;
    var nodes = q.childNodes;

    for (var _i6 = 0; _i6 < nodes.length; _i6++) {
      var node = nodes[_i6];
      nodes[_i6].className = '';

      if (_i6 < threshold) {
        nodes[_i6].className = 'threshold_marker';
      } else {
        nodes[_i6].className = '';
      }
    }

    dim_ref.current.innerHTML = img.width + 'x' + img.height;
    reduced_ref.current.innerHTML = '(' + img.width + '/' + sp + ')x(' + img.height + '/' + sp + ')=' + cols + 'x' + rows;
  }

  function _trigger(key) {
    keyAction(key, null);
  }

  function keyAction(key, event) {
    var km = km_ref.current;

    if (key === 'o') {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            loadImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      input.addEventListener('change', handleChange);
    } else if (key === 'p') {
      var link = document.createElement('a');
      cref.current.toBlob(function (blob) {
        link.setAttribute('download', 'res-' + new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, '') + 'Z' + '.png');
        link.setAttribute('href', URL.createObjectURL(blob));
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    }

    if (key === 'l') {
      state_ref.current.threshold = Math.max(0, state_ref.current.threshold - 10);
      render();
    } else if (key === 'h') {
      state_ref.current.threshold = Math.min(state_ref.current.cells, state_ref.current.threshold + 10);
      render();
    } else if (key === 'L') {
      state_ref.current.threshold = Math.max(0, state_ref.current.threshold - 1);
      render();
    } else if (key === 'H') {
      state_ref.current.threshold = Math.min(state_ref.current.cells, state_ref.current.threshold + 1);
      render();
    }
  }

  function downHandler(e) {
    km_ref.current[e.key] = true;
    keyAction(e.key, e);
  }

  function upHandler(e) {
    km_ref.current[e.key] = false;
  }

  function handleMouseMove(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.clientX);
      }
    }
  }

  function clearer(id) {
    clear_ref.current.push(id);
  }

  function clearRepeatIntervals() {
    for (var i = 0; i < clear_ref.current.length; i++) {
      var item = clear_ref.current[i];
      clearInterval(item);
    }

    clear_ref.current = [];
  }

  function clearPressGates() {
    press_gates.current = false;
  }

  function handleMouseUp(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        slider_click_ref.current = false;
        clickSetThreshold(e.clientX);
      }
    }

    clearRepeatIntervals();
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    loadImage(src);
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(e.clipboardData.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        loadImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function handleTouchMove(e) {
    if (slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.changedTouches[0].clientX);
        e.preventDefault();
      }
    }
  }

  function handleTouchEnd(e) {
    // touch end doesn't seem to have client x
    clearPressGates();
    clearRepeatIntervals();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('paste', onPaste);
    window.addEventListener('dragover', onDrag);
    window.addEventListener('drop', onDrop);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false
    });
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag);
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652
    },
    __self: this
  }, "Res"), __jsx("link", {
    id: "favicon_link",
    rel: "shortcut icon",
    type: "image/png",
    href: favicon,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp * 2 : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: sp,
      paddingRight: sp
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    press_gates: press_gates,
    text_label: "Load image (or paste or drop)",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('o');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }), __jsx(Button, {
    label: "p",
    press_gates: press_gates,
    text_label: "Save result as png",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('p');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      textAlign: 'center',
      width: '100%',
      position: 'relative'
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
    },
    __self: this
  }, __jsx("canvas", {
    height: sp * 23,
    ref: ti_ref,
    style: {
      position: 'absolute',
      height: sp * 2,
      left: sp * 2,
      top: 0,
      cursor: 'crosshair'
    },
    onTouchStart: function onTouchStart(e) {
      slider_click_ref.current = true;
      slider_touch_mode.current = true;
      clickSetThreshold(e.changedTouches[0].clientX);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        slider_click_ref.current = false;
        slider_touch_mode.current = false;
      }, 400);
    },
    onMouseDown: function onMouseDown(e) {
      if (!slider_touch_mode.current) {
        slider_click_ref.current = true;
        clickSetThreshold(e.clientX);
      }
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704
    },
    __self: this
  }), __jsx(RepeatButton, {
    label: "h",
    press_gates: press_gates,
    custom_style: {
      height: sp * 2,
      width: sp * 2
    },
    clearer: clearer,
    trigger: function trigger() {
      _trigger('h');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 732
    },
    __self: this
  }), __jsx("div", {
    ref: thresh_ref,
    style: {
      flexGrow: 1,
      position: 'relative',
      pointerEvents: 'none',
      lineHeight: sp * 2 + 'px'
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 741
    },
    __self: this
  }), __jsx(RepeatButton, {
    label: "l",
    press_gates: press_gates,
    custom_style: {
      height: sp * 2,
      width: sp * 2
    },
    clearer: clearer,
    trigger: function trigger() {
      _trigger('l');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp,
      paddingRight: sp,
      background: '#efefef'
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 763
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }, "How it works"), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }, "Adjusted image size: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 772
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776
    },
    __self: this
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }, "Superpixels from original image sorted by complexity (data URL string length / number of pixels) shown here at 2x"), __jsx("div", {
    ref: qref,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat( auto-fit, minmax(' + sp * 2 + 'px, 1fr) )',
      gridColumnGap: sp / 2,
      gridRowGap: sp / 4,
      textAlign: 'center',
      // maxHeight: sp * 21,
      overflowY: 'auto',
      fontSize: 9,
      lineHeight: '12px'
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 816
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 825
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: sp,
      paddingRight: sp
    },
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 834
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 835
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 837
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1990392591",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 838
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1990392591",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTIwQnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLEFBR0MsVUFsQlIsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsR0FlQSxpREF4Qm9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5cbmxldCBTcGFjZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgd2lkdGg6IHNwIC8gMiB9fSAvPlxuXG5sZXQgQnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbiAgaWYgKGN1c3RvbV9zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnV0dG9uX3N0eWxlID0gT2JqZWN0LmFzc2lnbihidXR0b25fc3R5bGUsIGN1c3RvbV9zdHlsZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17YnV0dG9uX3N0eWxlfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgUmVwZWF0QnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCByZXBlYXRfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzdGFydF9nYXRlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCB0b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH1cbiAgaWYgKGN1c3RvbV9zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYnV0dG9uX3N0eWxlID0gT2JqZWN0LmFzc2lnbihidXR0b25fc3R5bGUsIGN1c3RvbV9zdHlsZSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17YnV0dG9uX3N0eWxlfVxuICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4ge1xuICAgICAgICAgIHRvdWNoX21vZGUuY3VycmVudCA9IHRydWVcbiAgICAgICAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXNzX2dhdGVzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgfX1cbiAgICAgICAgb25Ub3VjaEVuZD17ZSA9PiB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHByZXNzX2dhdGVzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgICB9LCAxMDApXG4gICAgICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgaWYgKCF0b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7dGV4dF9sYWJlbCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjdXJzb3I6ICdkZWZhdWx0JyB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZVVwPXtlID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICA8ZGl2Pnt0ZXh0X2xhYmVsfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoJ2Zhdmljb24ucG5nJylcblxuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcnByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHFyZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgcHJlc3NfZ2F0ZXMgPSB1c2VSZWYoZmFsc2UpXG5cbiAgbGV0IGRpbV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJlZHVjZWRfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHN0YXRlX3JlZiA9IHVzZVJlZih7XG4gICAgaW1nOiBudWxsLFxuICAgIHRpbGVzOiBudWxsLFxuICB9KVxuXG4gIGxldCBzbGlkZXJfY2xpY2tfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzbGlkZXJfdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdGlfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHRocmVzaF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgY2xlYXJfcmVmID0gdXNlUmVmKFtdKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCByID0gcnJlZi5jdXJyZW50XG4gICAgbGV0IHJ4ID0gci5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHggPSBwLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcnAgPSBycHJlZi5jdXJyZW50XG4gICAgbGV0IHJweCA9IHJwLmdldENvbnRleHQoJzJkJylcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgYWRqX3dpZHRoID0gTWF0aC5taW4oaW1nLndpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCAtIHNwICogMilcbiAgICAgIGxldCBkc3AgPSBzcFxuICAgICAgbGV0IHNuYXB3ID0gTWF0aC5yb3VuZChhZGpfd2lkdGggLyBkc3ApICogZHNwXG4gICAgICBsZXQgc25hcHIgPSBzbmFwdyAvIGltZy53aWR0aFxuICAgICAgbGV0IHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIGRzcCkgKiBkc3BcblxuICAgICAgaW1nLndpZHRoID0gc25hcHdcbiAgICAgIGltZy5oZWlnaHQgPSBzbmFwaFxuXG4gICAgICBzZXRXaWR0aChpbWcud2lkdGgpXG5cbiAgICAgIGMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIGMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgY29scyA9IGltZy53aWR0aCAvIHNwXG4gICAgICBsZXQgcm93cyA9IGltZy5oZWlnaHQgLyBzcFxuICAgICAgbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuICAgICAgLy8gcHJlc2VydmUgZGltZW5zaW9uc1xuICAgICAgbGV0IHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHRfaW1nLndpZHRoID0gYy53aWR0aFxuICAgICAgdF9pbWcuaGVpZ2h0ID0gYy5oZWlnaHRcbiAgICAgIGxldCB0X2ltZ3ggPSB0X2ltZy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0X2ltZ3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG4gICAgICBpbWcgPSB0X2ltZ1xuXG4gICAgICBjeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgci53aWR0aCA9IGNvbHNcbiAgICAgIHIuaGVpZ2h0ID0gcm93c1xuXG4gICAgICByeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCwgMCwgMCwgci53aWR0aCwgci5oZWlnaHQpXG5cbiAgICAgIHAud2lkdGggPSBzcCAqIDhcbiAgICAgIHAuaGVpZ2h0ID0gc3BcblxuICAgICAgcnAud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIHJwLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgLy8gZ2V0IGNvbG9ycyBmcm9tIHJlZHVjZWQgaW1hZ2VcbiAgICAgIGxldCBpbWFnZV9kYXRhID0gcnguZ2V0SW1hZ2VEYXRhKDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KVxuICAgICAgbGV0IGNvbG9ycyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gaW1hZ2VfZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBjb2xvcnMucHVzaChyZ2IpXG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBwYWxldHRlIGRyYXcgcGFsZXR0ZVxuICAgICAgbGV0IHBhbGV0dGUgPSBtZWRDdXQoY29sb3JzKVxuICAgICAgLy8gcGFsZXR0ZSA9IHBhbGV0dGUubWFwKGNvbG9yID0+IGNvbG9yLm1hcChjaGFubmVsID0+IDI1NSAtIGNoYW5uZWwpKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWxldHRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB4LmZpbGxTdHlsZSA9IGZpbGwocGFsZXR0ZVtpXSlcbiAgICAgICAgcHguZmlsbFJlY3QoaSAqIHNwLCAwLCBzcCwgc3ApXG4gICAgICB9XG5cbiAgICAgIC8vIGRyYXcgcGFsZXR0ZSBpbWFnZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZV9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGltYWdlX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IHBhbGV0dGUubWFwKHByZ2IgPT4ge1xuICAgICAgICAgIGxldCBbcjEsIGcxLCBiMV0gPSByZ2JcbiAgICAgICAgICBsZXQgW3IyLCBnMiwgYjJdID0gcHJnYlxuICAgICAgICAgIC8vIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAvLyAgICgocjIgLSByMSkgKiAxKSBeICgyICsgKGcyIC0gZzEpICogMSkgXiAoMiArIChiMiAtIGIxKSAqIDEpIF4gMlxuICAgICAgICAgIC8vIClcbiAgICAgICAgICAvLyB3ZWlnaHRlZCBtYXRjaFxuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgICgocjIgLSByMSkgKiAwLjMpIF5cbiAgICAgICAgICAgICAgKDIgKyAoZzIgLSBnMSkgKiAwLjU5KSBeXG4gICAgICAgICAgICAgICgyICsgKGIyIC0gYjEpICogMC4xMSkgXlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKVxuICAgICAgICBsZXQgbWluX2luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YobWluKVxuICAgICAgICBsZXQgY29sb3IgPSBwYWxldHRlW21pbl9pbmRleF1cbiAgICAgICAgbGV0IHAgPSBpIC8gNFxuICAgICAgICBsZXQgeCA9IHAgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihwIC8gY29scylcbiAgICAgICAgcnB4LmZpbGxTdHlsZSA9IGZpbGwoY29sb3IpXG4gICAgICAgIHJweC5maWxsUmVjdCh4ICogc3AsIHkgKiBzcCwgc3AsIHNwKVxuICAgICAgfVxuXG4gICAgICAvLyBjdXQgdXAgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0LndpZHRoID0gc3BcbiAgICAgICAgdC5oZWlnaHQgPSBzcFxuICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcblxuICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcblxuICAgICAgICB0eC5kcmF3SW1hZ2UoYywgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgMCwgMCwgc3AsIHNwKVxuXG4gICAgICAgIGxldCBjb21wbGV4aXR5ID0gdC50b0RhdGFVUkwoKS5sZW5ndGggLyAoc3AgKiBzcClcblxuICAgICAgICB0aWxlcy5wdXNoKHsgdCwgYzogY29tcGxleGl0eSwgeCwgeSwgaSB9KVxuICAgICAgfVxuXG4gICAgICB0aWxlcyA9IF8uc29ydEJ5KHRpbGVzLCAnYycpLnJldmVyc2UoKVxuXG4gICAgICBsZXQgcSA9IHFyZWYuY3VycmVudFxuICAgICAgcS5pbm5lckhUTUwgPSAnJ1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgYmlnZ2VyLndpZHRoID0gc3AgKiAyXG4gICAgICAgIGJpZ2dlci5oZWlnaHQgPSBzcCAqIDJcbiAgICAgICAgbGV0IGJ4ID0gYmlnZ2VyLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgYnguaW1hZ2VTbW9vdGhpbmdFbmFibGUgPSBmYWxzZVxuICAgICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICAgIGJ4LmRyYXdJbWFnZSh0aWxlLnQsIDAsIDAsIGJpZ2dlci53aWR0aCwgYmlnZ2VyLmhlaWdodClcbiAgICAgICAgbGV0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgLy8gZC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyB0ZXh0LnN0eWxlLm1hcmdpbkxlZnQgPSBzcCAvIDIgKyAncHgnXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gYCR7dGlsZS5jLnRvRml4ZWQoMyl9YFxuICAgICAgICBkLmFwcGVuZENoaWxkKGJpZ2dlcilcbiAgICAgICAgZC5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICBxLmFwcGVuZENoaWxkKGQpXG4gICAgICB9XG5cbiAgICAgIGxldCBzdGF0ZSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgICBzdGF0ZS5pbWcgPSBpbWdcbiAgICAgIHN0YXRlLnRpbGVzID0gdGlsZXNcbiAgICAgIHN0YXRlLmNlbGxzID0gY2VsbHNcbiAgICAgIHN0YXRlLmNvbHMgPSBjb2xzXG4gICAgICBzdGF0ZS5yb3dzID0gcm93c1xuXG4gICAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgICAgdGkud2lkdGggPSBpbWcud2lkdGggLSBzcCAqIDRcbiAgICAgIHRpLmhlaWdodCA9IHNwICogMlxuXG4gICAgICAvLyBmYXZpY29uXG4gICAgICBsZXQgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBmLndpZHRoID0gMzJcbiAgICAgIGYuaGVpZ2h0ID0gMzJcbiAgICAgIGxldCBmeCA9IGYuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdC53aWR0aCA9IDhcbiAgICAgIHQuaGVpZ2h0ID0gOFxuICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIDAsIDAsIDgsIDgpXG4gICAgICBsZXQgZmF2aWNvbl9kYXRhID0gdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYXZpY29uX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gZmF2aWNvbl9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGxldCBkaXN0YW5jZXMgPSBwYWxldHRlLm1hcChwcmdiID0+IHtcbiAgICAgICAgICBsZXQgW3IxLCBnMSwgYjFdID0gcmdiXG4gICAgICAgICAgbGV0IFtyMiwgZzIsIGIyXSA9IHByZ2JcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgICAoKHIyIC0gcjEpICogMC4zKSBeXG4gICAgICAgICAgICAgICgyICsgKGcyIC0gZzEpICogMC41OSkgXlxuICAgICAgICAgICAgICAoMiArIChiMiAtIGIxKSAqIDAuMTEpIF5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcylcbiAgICAgICAgbGV0IG1pbl9pbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbilcbiAgICAgICAgbGV0IGNvbG9yID0gcGFsZXR0ZVttaW5faW5kZXhdXG4gICAgICAgIGxldCBwID0gaSAvIDRcbiAgICAgICAgbGV0IHggPSBwICUgOFxuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IocCAvIDgpXG4gICAgICAgIGZ4LmZpbGxTdHlsZSA9IGZpbGwoY29sb3IpXG4gICAgICAgIGZ4LmZpbGxSZWN0KHggKiA0LCB5ICogNCwgNCwgNClcbiAgICAgIH1cbiAgICAgIHNldEZhdmljb24oZi50b0RhdGFVUkwoKSlcblxuICAgICAgc3RhdGUudGhyZXNob2xkID0gMTIwXG5cbiAgICAgIHJlbmRlcigpXG4gICAgfVxuXG4gICAgaW1nLnNyYyA9IHNyY1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpbWcuc3JjID0gJ3VuY3V0LmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2V4bWFjaGluYS5qcGVnJ1xuICAgIC8vIGltZy5zcmMgPSAnbXJyb2JvdC5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdzdGFsa2VyLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2Fjcm9ueW0uanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnbXJyb2JvdDIuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAndmVpbGFuY2UuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnbWNjYWJlLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2NvbXB1dGUucG5nJ1xuICAgIGxvYWRJbWFnZSgnbXJyb2JvdDIuanBnJylcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gY2xpY2tTZXRUaHJlc2hvbGQoeCkge1xuICAgIGxldCByZWN0ID0gdGlfcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB4ID0geCAtIHJlY3QubGVmdFxuICAgIGxldCBwZXJjZW50ID0geCAvIHRpX3JlZi5jdXJyZW50LndpZHRoXG4gICAgbGV0IHsgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICBsZXQgbmV3X3RocmVzaCA9XG4gICAgICBjZWxscyAtIE1hdGgubWluKGNlbGxzLCBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHBlcmNlbnQgKiBjZWxscykpKVxuICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IG5ld190aHJlc2hcbiAgICByZW5kZXIoKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGxldCBjeCA9IGNyZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHJwID0gcnByZWYuY3VycmVudFxuXG4gICAgbGV0IHsgaW1nLCB0aWxlcywgY29scywgcm93cywgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICBjeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpXG5cbiAgICBmb3IgKGxldCBpID0gdGhyZXNob2xkOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgbGV0IHRpbGUgPSB0aWxlc1tpXVxuICAgICAgbGV0IHggPSB0aWxlLnhcbiAgICAgIGxldCB5ID0gdGlsZS55XG4gICAgICBjeC5kcmF3SW1hZ2UocnAsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3ApXG4gICAgfVxuXG4gICAgdGhyZXNoX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGNlbGxzIC0gdGhyZXNob2xkICsgJy8nICsgY2VsbHNcblxuICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgbGV0IHRpeCA9IHRpLmdldENvbnRleHQoJzJkJylcblxuICAgIHRpeC5maWxsU3R5bGUgPSAnI2RkZCdcbiAgICB0aXguZmlsbFJlY3QoMCwgMCwgdGkud2lkdGgsIHNwICogMilcblxuICAgIHRpeC5maWxsU3R5bGUgPSAnIzk5OSdcbiAgICBsZXQgdG1hcmsgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KDEsIE1hdGgucm91bmQodGkud2lkdGggKiAoKGNlbGxzIC0gdGhyZXNob2xkKSAvIGNlbGxzKSkpLFxuICAgICAgdGkud2lkdGggLSAyXG4gICAgKVxuICAgIHRpeC5maWxsUmVjdCh0bWFyayAtIDEsIDAsIDMsIHNwICogMilcblxuICAgIGxldCBxID0gcXJlZi5jdXJyZW50XG4gICAgbGV0IG5vZGVzID0gcS5jaGlsZE5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBub2Rlc1tpXVxuICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJydcbiAgICAgIGlmIChpIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICd0aHJlc2hvbGRfbWFya2VyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaW1fcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gaW1nLndpZHRoICsgJ3gnICsgaW1nLmhlaWdodFxuICAgIHJlZHVjZWRfcmVmLmN1cnJlbnQuaW5uZXJIVE1MID1cbiAgICAgICcoJyArXG4gICAgICBpbWcud2lkdGggK1xuICAgICAgJy8nICtcbiAgICAgIHNwICtcbiAgICAgICcpeCgnICtcbiAgICAgIGltZy5oZWlnaHQgK1xuICAgICAgJy8nICtcbiAgICAgIHNwICtcbiAgICAgICcpPScgK1xuICAgICAgY29scyArXG4gICAgICAneCcgK1xuICAgICAgcm93c1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihrZXkpIHtcbiAgICBrZXlBY3Rpb24oa2V5LCBudWxsKVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZXZlbnQpIHtcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuXG4gICAgaWYgKGtleSA9PT0gJ28nKSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZmlsZScpXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5maWxlcykge1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGl0ZW0pXG4gICAgICAgICAgbG9hZEltYWdlKHNyYylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICAgIH1cbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZUNoYW5nZSlcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3AnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICBjcmVmLmN1cnJlbnQudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAncmVzLScgK1xuICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAnLnBuZydcbiAgICAgICAgKVxuXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2wnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heChcbiAgICAgICAgMCxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkIC0gMTBcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdoJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgKyAxMFxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0wnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heCgwLCBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgLSAxKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0gnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCArIDFcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJlcihpZCkge1xuICAgIGNsZWFyX3JlZi5jdXJyZW50LnB1c2goaWQpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclJlcGVhdEludGVydmFscygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFyX3JlZi5jdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGNsZWFyX3JlZi5jdXJyZW50W2ldXG4gICAgICBjbGVhckludGVydmFsKGl0ZW0pXG4gICAgfVxuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUHJlc3NHYXRlcygpIHtcbiAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgbG9hZEltYWdlKHNyYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgLy8gdG91Y2ggZW5kIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGNsaWVudCB4XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaWQ9XCJmYXZpY29uX2xpbmtcIlxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9e2Zhdmljb259XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB3aWR0aCAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCAqIDIgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwLCBwYWRkaW5nUmlnaHQ6IHNwIH19PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwib1wiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgdGV4dF9sYWJlbD1cIkxvYWQgaW1hZ2UgKG9yIHBhc3RlIG9yIGRyb3ApXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ28nKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cInBcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJTYXZlIHJlc3VsdCBhcyBwbmdcIlxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcigncCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17Y3JlZn0gLz5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgaGVpZ2h0PXtzcCAqIDIzfVxuICAgICAgICAgICAgICByZWY9e3RpX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNwICogMixcbiAgICAgICAgICAgICAgICBsZWZ0OiBzcCAqIDIsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2Nyb3NzaGFpcicsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRvdWNoRW5kPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICBzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2xpZW50WClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlcGVhdEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImhcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignaCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RocmVzaF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHNwICogMiArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8UmVwZWF0QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwibFwiXG4gICAgICAgICAgICAgIHByZXNzX2dhdGVzPXtwcmVzc19nYXRlc31cbiAgICAgICAgICAgICAgY3VzdG9tX3N0eWxlPXt7IGhlaWdodDogc3AgKiAyLCB3aWR0aDogc3AgKiAyIH19XG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdsJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwLCBwYWRkaW5nUmlnaHQ6IHNwLCBiYWNrZ3JvdW5kOiAnI2VmZWZlZicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5Ib3cgaXQgd29ya3M8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBBZGp1c3RlZCBpbWFnZSBzaXplOiA8c3BhbiByZWY9e2RpbV9yZWZ9Pjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU3VwZXJwaXhlbDoge3NwfXh7c3B9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlJlZHVjZWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17cnJlZn0gLz5cbiAgICAgICAgICA8ZGl2IHJlZj17cmVkdWNlZF9yZWZ9PjwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj44LWNvbG9yIHBhbGV0dGUgZnJvbSByZWR1Y2VkIGltYWdlPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3ByZWZ9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFVzaW5nIHRoZSBtZWRpYW4gY3V0IGFwcHJvYWNoeycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NwaW4uYXRvbWljb2JqZWN0LmNvbS8yMDE2LzEyLzA3L3BpeGVscy1hbmQtcGFsZXR0ZXMtZXh0cmFjdGluZy1jb2xvci1wYWxldHRlcy1mcm9tLWltYWdlcy9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBleHBsYWluZWQgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj44LWNvbG9yIHBhbGV0dGUgYXBwbGllZCB0byByZWR1Y2VkIGltYWdlIGF0IG9yaWdpbmFsIHNpemU8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17cnByZWZ9IC8+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU3VwZXJwaXhlbHMgZnJvbSBvcmlnaW5hbCBpbWFnZSBzb3J0ZWQgYnkgY29tcGxleGl0eSAoZGF0YSBVUkxcbiAgICAgICAgICAgIHN0cmluZyBsZW5ndGggLyBudW1iZXIgb2YgcGl4ZWxzKSBzaG93biBoZXJlIGF0IDJ4XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtxcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOlxuICAgICAgICAgICAgICAgICdyZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoJyArIHNwICogMiArICdweCwgMWZyKSApJyxcbiAgICAgICAgICAgICAgZ3JpZENvbHVtbkdhcDogc3AgLyAyLFxuICAgICAgICAgICAgICBncmlkUm93R2FwOiBzcCAvIDQsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIC8vIG1heEhlaWdodDogc3AgKiAyMSxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIElkZWEgZm9yIHVzaW5nIGNvbXByZXNzaW9uIGFzIGEgcHJveHkgZm9yIGNvbXBsZXhpdHl7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1NTc5NTU3L2hvdy10by1jb21wYXJlLWltYWdlcy1hbmQtZGV0ZXJtaW5lLXdoaWNoLWhhcy1tb3JlLWNvbnRlbnQvNDU1Nzk2ODgjNDU1Nzk2ODhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBmcm9tIHRoaXMgc3VnZ2VzdGlvbiBieSBBcnRodXItMSBvbiBTdGFja092ZXJmbG93XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBzcCxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogc3AsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb25zdHJhaW50LnN5c3RlbXNcIj5jb25zdHJhaW50LnN5c3RlbXM8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VmlldyBzb3VyY2U8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIC50aHJlc2hvbGRfbWFya2VyIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0cfe588493b1c0784b9d.hot-update.js.map