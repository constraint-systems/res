webpackHotUpdate("static/development/pages/index.js",{

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
    display: 'block',
    userSelect: 'none'
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
      lineNumber: 42
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none'
    },
    onMouseDown: function onMouseDown(e) {
      trigger();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
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
    display: 'block',
    userSelect: 'none'
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
      lineNumber: 96
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
      lineNumber: 97
    },
    __self: this
  }, label), text_label !== undefined ? __jsx("div", {
    style: {
      display: 'flex',
      cursor: 'default',
      userSelect: 'none'
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
      lineNumber: 141
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
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

  function clickSetThreshold(e) {
    var rect = ti_ref.current.getBoundingClientRect();
    console.log(e.clientX);
    var x = e.clientX - rect.left;
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
    if (slider_click_ref.current) {
      clickSetThreshold(e);
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
    if (slider_click_ref.current) {
      slider_click_ref.current = false;
      clickSetThreshold(e);
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

  function handleTouchEnd(e) {
    clearPressGates();
    clearRepeatIntervals();
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    window.addEventListener('touchend', handleTouchEnd, false);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('paste', onPaste, false);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
      window.removeEventListener('touchend', handleTouchEnd, false);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, "Res"), __jsx("link", {
    id: "favicon_link",
    rel: "shortcut icon",
    type: "image/png",
    href: favicon,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp * 2 : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingLeft: sp,
      paddingRight: sp
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
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
      lineNumber: 659
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
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
      lineNumber: 669
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      textAlign: 'center',
      width: '100%',
      position: 'relative'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
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
      cursor: 'crosshair',
      userSelect: 'none'
    },
    onTouchStart: function onTouchStart(e) {
      slider_click_ref.current = true;
      slider_touch_mode.current = true;
      console.log('touch');
      clickSetThreshold(e);
    },
    onTouchEnd: function onTouchEnd(e) {
      setTimeout(function () {
        slider_click_ref.current = false;
        slider_touch_mode.current = false;
      }, 400);
    },
    onMouseDown: function onMouseDown(e) {
      if (!slider_touch_mode) {
        slider_click_ref.current = true;
        clickSetThreshold(e);
      }
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691
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
      lineNumber: 721
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
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730
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
      lineNumber: 739
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 750
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 751
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp,
      paddingRight: sp,
      background: '#efefef'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 752
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 755
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 756
    },
    __self: this
  }, "How it works"), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 758
    },
    __self: this
  }, "Adjusted image size: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 759
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 764
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 765
    },
    __self: this
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 766
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 767
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 768
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 769
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 773
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 780
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 781
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
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
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 805
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 814
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: sp,
      paddingRight: sp
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 823
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 824
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 826
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 827
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3923712137",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWcwQnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLFVBZlAsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsb0RBVG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5cbmxldCBTcGFjZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgd2lkdGg6IHNwIC8gMiB9fSAvPlxuXG5sZXQgQnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnLCB1c2VyU2VsZWN0OiAnbm9uZScgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgUmVwZWF0QnV0dG9uID0gKHtcbiAgbGFiZWwsXG4gIGNsZWFyZXIsXG4gIHRyaWdnZXIsXG4gIHRleHRfbGFiZWwsXG4gIHByZXNzX2dhdGVzLFxuICBjdXN0b21fc3R5bGUsXG59KSA9PiB7XG4gIGxldCByZXBlYXRfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzdGFydF9nYXRlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCB0b3VjaF9tb2RlID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCBidXR0b25fc3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIHdpZHRoOiBzcCxcbiAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH19XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoIXRvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcsIHVzZXJTZWxlY3Q6ICdub25lJyB9fVxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICB9LCAyMDApXG4gICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZVVwPXtlID0+IHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICA8ZGl2Pnt0ZXh0X2xhYmVsfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoJ2Zhdmljb24ucG5nJylcblxuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcnByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHFyZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgcHJlc3NfZ2F0ZXMgPSB1c2VSZWYoZmFsc2UpXG5cbiAgbGV0IGRpbV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJlZHVjZWRfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHN0YXRlX3JlZiA9IHVzZVJlZih7XG4gICAgaW1nOiBudWxsLFxuICAgIHRpbGVzOiBudWxsLFxuICB9KVxuXG4gIGxldCBzbGlkZXJfY2xpY2tfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzbGlkZXJfdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdGlfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHRocmVzaF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgY2xlYXJfcmVmID0gdXNlUmVmKFtdKVxuXG4gIGZ1bmN0aW9uIGxvYWRJbWFnZShzcmMpIHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCByID0gcnJlZi5jdXJyZW50XG4gICAgbGV0IHJ4ID0gci5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHggPSBwLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcnAgPSBycHJlZi5jdXJyZW50XG4gICAgbGV0IHJweCA9IHJwLmdldENvbnRleHQoJzJkJylcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgYWRqX3dpZHRoID0gTWF0aC5taW4oaW1nLndpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCAtIHNwICogMilcbiAgICAgIGxldCBkc3AgPSBzcFxuICAgICAgbGV0IHNuYXB3ID0gTWF0aC5yb3VuZChhZGpfd2lkdGggLyBkc3ApICogZHNwXG4gICAgICBsZXQgc25hcHIgPSBzbmFwdyAvIGltZy53aWR0aFxuICAgICAgbGV0IHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIGRzcCkgKiBkc3BcblxuICAgICAgaW1nLndpZHRoID0gc25hcHdcbiAgICAgIGltZy5oZWlnaHQgPSBzbmFwaFxuXG4gICAgICBzZXRXaWR0aChpbWcud2lkdGgpXG5cbiAgICAgIGMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIGMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgY29scyA9IGltZy53aWR0aCAvIHNwXG4gICAgICBsZXQgcm93cyA9IGltZy5oZWlnaHQgLyBzcFxuICAgICAgbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuICAgICAgLy8gcHJlc2VydmUgZGltZW5zaW9uc1xuICAgICAgbGV0IHRfaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHRfaW1nLndpZHRoID0gYy53aWR0aFxuICAgICAgdF9pbWcuaGVpZ2h0ID0gYy5oZWlnaHRcbiAgICAgIGxldCB0X2ltZ3ggPSB0X2ltZy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0X2ltZ3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG4gICAgICBpbWcgPSB0X2ltZ1xuXG4gICAgICBjeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgci53aWR0aCA9IGNvbHNcbiAgICAgIHIuaGVpZ2h0ID0gcm93c1xuXG4gICAgICByeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCwgMCwgMCwgci53aWR0aCwgci5oZWlnaHQpXG5cbiAgICAgIHAud2lkdGggPSBzcCAqIDhcbiAgICAgIHAuaGVpZ2h0ID0gc3BcblxuICAgICAgcnAud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIHJwLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgLy8gZ2V0IGNvbG9ycyBmcm9tIHJlZHVjZWQgaW1hZ2VcbiAgICAgIGxldCBpbWFnZV9kYXRhID0gcnguZ2V0SW1hZ2VEYXRhKDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KVxuICAgICAgbGV0IGNvbG9ycyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gaW1hZ2VfZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBjb2xvcnMucHVzaChyZ2IpXG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBwYWxldHRlIGRyYXcgcGFsZXR0ZVxuICAgICAgbGV0IHBhbGV0dGUgPSBtZWRDdXQoY29sb3JzKVxuICAgICAgLy8gcGFsZXR0ZSA9IHBhbGV0dGUubWFwKGNvbG9yID0+IGNvbG9yLm1hcChjaGFubmVsID0+IDI1NSAtIGNoYW5uZWwpKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWxldHRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB4LmZpbGxTdHlsZSA9IGZpbGwocGFsZXR0ZVtpXSlcbiAgICAgICAgcHguZmlsbFJlY3QoaSAqIHNwLCAwLCBzcCwgc3ApXG4gICAgICB9XG5cbiAgICAgIC8vIGRyYXcgcGFsZXR0ZSBpbWFnZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZV9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGltYWdlX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IHBhbGV0dGUubWFwKHByZ2IgPT4ge1xuICAgICAgICAgIGxldCBbcjEsIGcxLCBiMV0gPSByZ2JcbiAgICAgICAgICBsZXQgW3IyLCBnMiwgYjJdID0gcHJnYlxuICAgICAgICAgIC8vIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAvLyAgICgocjIgLSByMSkgKiAxKSBeICgyICsgKGcyIC0gZzEpICogMSkgXiAoMiArIChiMiAtIGIxKSAqIDEpIF4gMlxuICAgICAgICAgIC8vIClcbiAgICAgICAgICAvLyB3ZWlnaHRlZCBtYXRjaFxuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgICgocjIgLSByMSkgKiAwLjMpIF5cbiAgICAgICAgICAgICAgKDIgKyAoZzIgLSBnMSkgKiAwLjU5KSBeXG4gICAgICAgICAgICAgICgyICsgKGIyIC0gYjEpICogMC4xMSkgXlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKVxuICAgICAgICBsZXQgbWluX2luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YobWluKVxuICAgICAgICBsZXQgY29sb3IgPSBwYWxldHRlW21pbl9pbmRleF1cbiAgICAgICAgbGV0IHAgPSBpIC8gNFxuICAgICAgICBsZXQgeCA9IHAgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihwIC8gY29scylcbiAgICAgICAgcnB4LmZpbGxTdHlsZSA9IGZpbGwoY29sb3IpXG4gICAgICAgIHJweC5maWxsUmVjdCh4ICogc3AsIHkgKiBzcCwgc3AsIHNwKVxuICAgICAgfVxuXG4gICAgICAvLyBjdXQgdXAgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0LndpZHRoID0gc3BcbiAgICAgICAgdC5oZWlnaHQgPSBzcFxuICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcblxuICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcblxuICAgICAgICB0eC5kcmF3SW1hZ2UoYywgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgMCwgMCwgc3AsIHNwKVxuXG4gICAgICAgIGxldCBjb21wbGV4aXR5ID0gdC50b0RhdGFVUkwoKS5sZW5ndGggLyAoc3AgKiBzcClcblxuICAgICAgICB0aWxlcy5wdXNoKHsgdCwgYzogY29tcGxleGl0eSwgeCwgeSwgaSB9KVxuICAgICAgfVxuXG4gICAgICB0aWxlcyA9IF8uc29ydEJ5KHRpbGVzLCAnYycpLnJldmVyc2UoKVxuXG4gICAgICBsZXQgcSA9IHFyZWYuY3VycmVudFxuICAgICAgcS5pbm5lckhUTUwgPSAnJ1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgYmlnZ2VyLndpZHRoID0gc3AgKiAyXG4gICAgICAgIGJpZ2dlci5oZWlnaHQgPSBzcCAqIDJcbiAgICAgICAgbGV0IGJ4ID0gYmlnZ2VyLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgYnguaW1hZ2VTbW9vdGhpbmdFbmFibGUgPSBmYWxzZVxuICAgICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICAgIGJ4LmRyYXdJbWFnZSh0aWxlLnQsIDAsIDAsIGJpZ2dlci53aWR0aCwgYmlnZ2VyLmhlaWdodClcbiAgICAgICAgbGV0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgLy8gZC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyB0ZXh0LnN0eWxlLm1hcmdpbkxlZnQgPSBzcCAvIDIgKyAncHgnXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gYCR7dGlsZS5jLnRvRml4ZWQoMyl9YFxuICAgICAgICBkLmFwcGVuZENoaWxkKGJpZ2dlcilcbiAgICAgICAgZC5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICBxLmFwcGVuZENoaWxkKGQpXG4gICAgICB9XG5cbiAgICAgIGxldCBzdGF0ZSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgICBzdGF0ZS5pbWcgPSBpbWdcbiAgICAgIHN0YXRlLnRpbGVzID0gdGlsZXNcbiAgICAgIHN0YXRlLmNlbGxzID0gY2VsbHNcbiAgICAgIHN0YXRlLmNvbHMgPSBjb2xzXG4gICAgICBzdGF0ZS5yb3dzID0gcm93c1xuXG4gICAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgICAgdGkud2lkdGggPSBpbWcud2lkdGggLSBzcCAqIDRcbiAgICAgIHRpLmhlaWdodCA9IHNwICogMlxuXG4gICAgICAvLyBmYXZpY29uXG4gICAgICBsZXQgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBmLndpZHRoID0gMzJcbiAgICAgIGYuaGVpZ2h0ID0gMzJcbiAgICAgIGxldCBmeCA9IGYuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdC53aWR0aCA9IDhcbiAgICAgIHQuaGVpZ2h0ID0gOFxuICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIDAsIDAsIDgsIDgpXG4gICAgICBsZXQgZmF2aWNvbl9kYXRhID0gdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYXZpY29uX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gZmF2aWNvbl9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGxldCBkaXN0YW5jZXMgPSBwYWxldHRlLm1hcChwcmdiID0+IHtcbiAgICAgICAgICBsZXQgW3IxLCBnMSwgYjFdID0gcmdiXG4gICAgICAgICAgbGV0IFtyMiwgZzIsIGIyXSA9IHByZ2JcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgICAoKHIyIC0gcjEpICogMC4zKSBeXG4gICAgICAgICAgICAgICgyICsgKGcyIC0gZzEpICogMC41OSkgXlxuICAgICAgICAgICAgICAoMiArIChiMiAtIGIxKSAqIDAuMTEpIF5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcylcbiAgICAgICAgbGV0IG1pbl9pbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbilcbiAgICAgICAgbGV0IGNvbG9yID0gcGFsZXR0ZVttaW5faW5kZXhdXG4gICAgICAgIGxldCBwID0gaSAvIDRcbiAgICAgICAgbGV0IHggPSBwICUgOFxuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IocCAvIDgpXG4gICAgICAgIGZ4LmZpbGxTdHlsZSA9IGZpbGwoY29sb3IpXG4gICAgICAgIGZ4LmZpbGxSZWN0KHggKiA0LCB5ICogNCwgNCwgNClcbiAgICAgIH1cbiAgICAgIHNldEZhdmljb24oZi50b0RhdGFVUkwoKSlcblxuICAgICAgc3RhdGUudGhyZXNob2xkID0gMTIwXG5cbiAgICAgIHJlbmRlcigpXG4gICAgfVxuXG4gICAgaW1nLnNyYyA9IHNyY1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpbWcuc3JjID0gJ3VuY3V0LmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2V4bWFjaGluYS5qcGVnJ1xuICAgIC8vIGltZy5zcmMgPSAnbXJyb2JvdC5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdzdGFsa2VyLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2Fjcm9ueW0uanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnbXJyb2JvdDIuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAndmVpbGFuY2UuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnbWNjYWJlLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2NvbXB1dGUucG5nJ1xuICAgIGxvYWRJbWFnZSgnbXJyb2JvdDIuanBnJylcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gY2xpY2tTZXRUaHJlc2hvbGQoZSkge1xuICAgIGxldCByZWN0ID0gdGlfcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zb2xlLmxvZyhlLmNsaWVudFgpXG4gICAgbGV0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnRcbiAgICBsZXQgcGVyY2VudCA9IHggLyB0aV9yZWYuY3VycmVudC53aWR0aFxuICAgIGxldCB7IGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgbGV0IG5ld190aHJlc2ggPVxuICAgICAgY2VsbHMgLSBNYXRoLm1pbihjZWxscywgTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChwZXJjZW50ICogY2VsbHMpKSlcbiAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBuZXdfdGhyZXNoXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBsZXQgY3ggPSBjcmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBycCA9IHJwcmVmLmN1cnJlbnRcblxuICAgIGxldCB7IGltZywgdGlsZXMsIGNvbHMsIHJvd3MsIGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgY3guZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuXG4gICAgZm9yIChsZXQgaSA9IHRocmVzaG9sZDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgIGxldCB4ID0gdGlsZS54XG4gICAgICBsZXQgeSA9IHRpbGUueVxuICAgICAgY3guZHJhd0ltYWdlKHJwLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwKVxuICAgIH1cblxuICAgIHRocmVzaF9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBjZWxscyAtIHRocmVzaG9sZCArICcvJyArIGNlbGxzXG5cbiAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgIGxldCB0aXggPSB0aS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aXguZmlsbFN0eWxlID0gJyNkZGQnXG4gICAgdGl4LmZpbGxSZWN0KDAsIDAsIHRpLndpZHRoLCBzcCAqIDIpXG5cbiAgICB0aXguZmlsbFN0eWxlID0gJyM5OTknXG4gICAgbGV0IHRtYXJrID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHRpLndpZHRoICogKChjZWxscyAtIHRocmVzaG9sZCkgLyBjZWxscykpKSxcbiAgICAgIHRpLndpZHRoIC0gMlxuICAgIClcbiAgICB0aXguZmlsbFJlY3QodG1hcmsgLSAxLCAwLCAzLCBzcCAqIDIpXG5cbiAgICBsZXQgcSA9IHFyZWYuY3VycmVudFxuICAgIGxldCBub2RlcyA9IHEuY2hpbGROb2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gbm9kZXNbaV1cbiAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICcnXG4gICAgICBpZiAoaSA8IHRocmVzaG9sZCkge1xuICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAndGhyZXNob2xkX21hcmtlcidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGltX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGltZy53aWR0aCArICd4JyArIGltZy5oZWlnaHRcbiAgICByZWR1Y2VkX3JlZi5jdXJyZW50LmlubmVySFRNTCA9XG4gICAgICAnKCcgK1xuICAgICAgaW1nLndpZHRoICtcbiAgICAgICcvJyArXG4gICAgICBzcCArXG4gICAgICAnKXgoJyArXG4gICAgICBpbWcuaGVpZ2h0ICtcbiAgICAgICcvJyArXG4gICAgICBzcCArXG4gICAgICAnKT0nICtcbiAgICAgIGNvbHMgK1xuICAgICAgJ3gnICtcbiAgICAgIHJvd3NcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoa2V5KSB7XG4gICAga2V5QWN0aW9uKGtleSwgbnVsbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcblxuICAgIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKVxuICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwJykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgY3JlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ3Jlcy0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdsJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCAtIDEwXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkICsgMTBcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdMJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoMCwgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkIC0gMSlcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdIJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgKyAxXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICBjbGlja1NldFRocmVzaG9sZChlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyZXIoaWQpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudC5wdXNoKGlkKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJSZXBlYXRJbnRlcnZhbHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGVhcl9yZWYuY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBjbGVhcl9yZWYuY3VycmVudFtpXVxuICAgICAgY2xlYXJJbnRlcnZhbChpdGVtKVxuICAgIH1cbiAgICBjbGVhcl9yZWYuY3VycmVudCA9IFtdXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclByZXNzR2F0ZXMoKSB7XG4gICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICB9XG4gICAgY2xlYXJSZXBlYXRJbnRlcnZhbHMoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXVxuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnXG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICBsb2FkSW1hZ2Uoc3JjKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKVxuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoZSkge1xuICAgIGNsZWFyUHJlc3NHYXRlcygpXG4gICAgY2xlYXJSZXBlYXRJbnRlcnZhbHMoKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCwgZmFsc2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSwgZmFsc2UpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQsIGZhbHNlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZXM8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGlkPVwiZmF2aWNvbl9saW5rXCJcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPXtmYXZpY29ufVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogd2lkdGggIT09IG51bGwgPyAnYmxvY2snIDogJ25vbmUnLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gbnVsbCA/IHdpZHRoICsgc3AgKiAyIDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCB9fT5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIm9cIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJMb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKVwiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdvJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICB0ZXh0X2xhYmVsPVwiU2F2ZSByZXN1bHQgYXMgcG5nXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ3AnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e2NyZWZ9IC8+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIGhlaWdodD17c3AgKiAyM31cbiAgICAgICAgICAgICAgcmVmPXt0aV9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzcCAqIDIsXG4gICAgICAgICAgICAgICAgbGVmdDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdjcm9zc2hhaXInLFxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2gnKVxuICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0sIDQwMClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUpIHtcbiAgICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXBlYXRCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJoXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICBjdXN0b21fc3R5bGU9e3sgaGVpZ2h0OiBzcCAqIDIsIHdpZHRoOiBzcCAqIDIgfX1cbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ2gnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0aHJlc2hfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBzcCAqIDIgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPFJlcGVhdEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImxcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCwgYmFja2dyb3VuZDogJyNlZmVmZWYnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+SG93IGl0IHdvcmtzPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQWRqdXN0ZWQgaW1hZ2Ugc2l6ZTogPHNwYW4gcmVmPXtkaW1fcmVmfT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWw6IHtzcH14e3NwfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5SZWR1Y2VkIGltYWdlPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JyZWZ9IC8+XG4gICAgICAgICAgPGRpdiByZWY9e3JlZHVjZWRfcmVmfT48L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGZyb20gcmVkdWNlZCBpbWFnZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtwcmVmfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBVc2luZyB0aGUgbWVkaWFuIGN1dCBhcHByb2FjaHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zcGluLmF0b21pY29iamVjdC5jb20vMjAxNi8xMi8wNy9waXhlbHMtYW5kLXBhbGV0dGVzLWV4dHJhY3RpbmctY29sb3ItcGFsZXR0ZXMtZnJvbS1pbWFnZXMvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZXhwbGFpbmVkIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGFwcGxpZWQgdG8gcmVkdWNlZCBpbWFnZSBhdCBvcmlnaW5hbCBzaXplPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JwcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWxzIGZyb20gb3JpZ2luYWwgaW1hZ2Ugc29ydGVkIGJ5IGNvbXBsZXhpdHkgKGRhdGEgVVJMXG4gICAgICAgICAgICBzdHJpbmcgbGVuZ3RoIC8gbnVtYmVyIG9mIHBpeGVscykgc2hvd24gaGVyZSBhdCAyeFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cXJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczpcbiAgICAgICAgICAgICAgICAncmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCcgKyBzcCAqIDIgKyAncHgsIDFmcikgKScsXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5HYXA6IHNwIC8gMixcbiAgICAgICAgICAgICAgZ3JpZFJvd0dhcDogc3AgLyA0LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAvLyBtYXhIZWlnaHQ6IHNwICogMjEsXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBJZGVhIGZvciB1c2luZyBjb21wcmVzc2lvbiBhcyBhIHByb3h5IGZvciBjb21wbGV4aXR5eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTU3OTU1Ny9ob3ctdG8tY29tcGFyZS1pbWFnZXMtYW5kLWRldGVybWluZS13aGljaC1oYXMtbW9yZS1jb250ZW50LzQ1NTc5Njg4IzQ1NTc5Njg4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZnJvbSB0aGlzIHN1Z2dlc3Rpb24gYnkgQXJ0aHVyLTEgb24gU3RhY2tPdmVyZmxvd1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogc3AsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29uc3RyYWludC5zeXN0ZW1zXCI+Y29uc3RyYWludC5zeXN0ZW1zPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlZpZXcgc291cmNlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAudGhyZXNob2xkX21hcmtlciBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.db649224c0935ded39bd.hot-update.js.map