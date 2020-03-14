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
  var file_input = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var slider_click_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var slider_touch_mode = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var ti_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var thresh_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var clear_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])([]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(null),
      debug = _useState3[0],
      setDebug = _useState3[1];

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
      var adj_width = Math.min(img.width, Math.floor(window.innerWidth - sp * 2));
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
        var files = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            console.log(item);
            files += item.name + '.' + item.type;

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

        setDebug(files);
        this.removeEventListener('change', handleChange);
      };

      var input = file_input.current;
      input.addEventListener('change', handleChange);
      input.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
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
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
    },
    __self: this
  }, "Res"), __jsx("link", {
    id: "favicon_link",
    rel: "shortcut icon",
    type: "image/png",
    href: favicon,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: width !== null ? 'block' : 'none',
      width: width !== null ? width + sp * 2 : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, debug !== null ? __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }, debug) : null, __jsx("input", {
    type: "file",
    ref: file_input,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp,
      paddingRight: sp
    },
    className: "jsx-3475079363" + " " + "no-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
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
      lineNumber: 688
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697
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
      lineNumber: 698
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      textAlign: 'center',
      width: '100%',
      position: 'relative'
    },
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712
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
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720
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
      lineNumber: 748
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
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 757
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
      lineNumber: 766
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 778
    },
    __self: this
  }), __jsx("div", {
    style: {
      paddingLeft: sp,
      paddingRight: sp,
      background: '#efefef'
    },
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 779
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 782
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783
    },
    __self: this
  }, "How it works"), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 785
    },
    __self: this
  }, "Adjusted image size: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 786
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 791
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 792
    },
    __self: this
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 795
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 796
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 797
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 800
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 807
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 808
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 809
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 810
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811
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
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 815
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 830
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 832
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 839
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 841
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingLeft: sp,
      paddingRight: sp
    },
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 842
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 850
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 851
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 853
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3475079363",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 854
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 857
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3475079363",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.no-select{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTIxQnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLEFBR0MsQUFHQSxVQXJCUixJQVVYLEFBR0EsRUFHQSxHQWZrQyxFQVp1QixBQUtELENBYXhELDRCQUxpQixlQUNFLGlCQUNuQixHQWVBLEFBR0EsaURBM0JvQixFQUxwQixnQkFNQSIsImZpbGUiOiIvaG9tZS9ncmFudC9zL2NzL3Jlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1lZEN1dCB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXG5cbi8vIHN1cGVyIHBpeGVsXG5sZXQgc3AgPSAxNlxuXG5mdW5jdGlvbiBmaWxsKHJnYikge1xuICByZXR1cm4gJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJ1xufVxuXG5sZXQgTGluZSA9ICgpID0+IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBzcCwgd2lkdGg6ICcxMDAlJyB9fSAvPlxuXG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgIDxkaXY+e3RleHRfbGFiZWx9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IFJlcGVhdEJ1dHRvbiA9ICh7XG4gIGxhYmVsLFxuICBjbGVhcmVyLFxuICB0cmlnZ2VyLFxuICB0ZXh0X2xhYmVsLFxuICBwcmVzc19nYXRlcyxcbiAgY3VzdG9tX3N0eWxlLFxufSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9XG4gIGlmIChjdXN0b21fc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGJ1dHRvbl9zdHlsZSA9IE9iamVjdC5hc3NpZ24oYnV0dG9uX3N0eWxlLCBjdXN0b21fc3R5bGUpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e2J1dHRvbl9zdHlsZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHtcbiAgICAgICAgICB0b3VjaF9tb2RlLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgIH19XG4gICAgICAgIG9uVG91Y2hFbmQ9e2UgPT4ge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdG91Y2hfbW9kZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICBpZiAoIXRvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgICAgICAgcHJlc3NfZ2F0ZXMuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChwcmVzc19nYXRlcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgIGlmICghdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3RleHRfbGFiZWwgIT09IHVuZGVmaW5lZCA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOiAnZGVmYXVsdCcgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgSG9tZSA9ICgpID0+IHtcbiAgbGV0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKCdmYXZpY29uLnBuZycpXG5cbiAgbGV0IGNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBxcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHByZXNzX2dhdGVzID0gdXNlUmVmKGZhbHNlKVxuXG4gIGxldCBkaW1fcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWR1Y2VkX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBzdGF0ZV9yZWYgPSB1c2VSZWYoe1xuICAgIGltZzogbnVsbCxcbiAgICB0aWxlczogbnVsbCxcbiAgfSlcblxuICBsZXQgZmlsZV9pbnB1dCA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBzbGlkZXJfY2xpY2tfcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBzbGlkZXJfdG91Y2hfbW9kZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgdGlfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHRocmVzaF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgY2xlYXJfcmVmID0gdXNlUmVmKFtdKVxuXG4gIGxldCBbZGVidWcsIHNldERlYnVnXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgZnVuY3Rpb24gbG9hZEltYWdlKHNyYykge1xuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHIgPSBycmVmLmN1cnJlbnRcbiAgICBsZXQgcnggPSByLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcCA9IHByZWYuY3VycmVudFxuICAgIGxldCBweCA9IHAuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBycCA9IHJwcmVmLmN1cnJlbnRcbiAgICBsZXQgcnB4ID0gcnAuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCBhZGpfd2lkdGggPSBNYXRoLm1pbihcbiAgICAgICAgaW1nLndpZHRoLFxuICAgICAgICBNYXRoLmZsb29yKHdpbmRvdy5pbm5lcldpZHRoIC0gc3AgKiAyKVxuICAgICAgKVxuICAgICAgbGV0IGRzcCA9IHNwXG4gICAgICBsZXQgc25hcHcgPSBNYXRoLnJvdW5kKGFkal93aWR0aCAvIGRzcCkgKiBkc3BcbiAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICBsZXQgc25hcGggPSBNYXRoLnJvdW5kKChpbWcuaGVpZ2h0ICogc25hcHIpIC8gZHNwKSAqIGRzcFxuXG4gICAgICBpbWcud2lkdGggPSBzbmFwd1xuICAgICAgaW1nLmhlaWdodCA9IHNuYXBoXG5cbiAgICAgIHNldFdpZHRoKGltZy53aWR0aClcblxuICAgICAgYy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgYy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG5cbiAgICAgIGxldCBjb2xzID0gaW1nLndpZHRoIC8gc3BcbiAgICAgIGxldCByb3dzID0gaW1nLmhlaWdodCAvIHNwXG4gICAgICBsZXQgY2VsbHMgPSBjb2xzICogcm93c1xuXG4gICAgICAvLyBwcmVzZXJ2ZSBkaW1lbnNpb25zXG4gICAgICBsZXQgdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdF9pbWcud2lkdGggPSBjLndpZHRoXG4gICAgICB0X2ltZy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IHRfaW1neCA9IHRfaW1nLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRfaW1neC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIGltZyA9IHRfaW1nXG5cbiAgICAgIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICByLndpZHRoID0gY29sc1xuICAgICAgci5oZWlnaHQgPSByb3dzXG5cbiAgICAgIHJ4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0LCAwLCAwLCByLndpZHRoLCByLmhlaWdodClcblxuICAgICAgcC53aWR0aCA9IHNwICogOFxuICAgICAgcC5oZWlnaHQgPSBzcFxuXG4gICAgICBycC53aWR0aCA9IGltZy53aWR0aFxuICAgICAgcnAuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICAvLyBnZXQgY29sb3JzIGZyb20gcmVkdWNlZCBpbWFnZVxuICAgICAgbGV0IGltYWdlX2RhdGEgPSByeC5nZXRJbWFnZURhdGEoMCwgMCwgci53aWR0aCwgci5oZWlnaHQpXG4gICAgICBsZXQgY29sb3JzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VfZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBpbWFnZV9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGNvbG9ycy5wdXNoKHJnYilcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IHBhbGV0dGUgZHJhdyBwYWxldHRlXG4gICAgICBsZXQgcGFsZXR0ZSA9IG1lZEN1dChjb2xvcnMpXG4gICAgICAvLyBwYWxldHRlID0gcGFsZXR0ZS5tYXAoY29sb3IgPT4gY29sb3IubWFwKGNoYW5uZWwgPT4gMjU1IC0gY2hhbm5lbCkpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbGV0dGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHguZmlsbFN0eWxlID0gZmlsbChwYWxldHRlW2ldKVxuICAgICAgICBweC5maWxsUmVjdChpICogc3AsIDAsIHNwLCBzcClcbiAgICAgIH1cblxuICAgICAgLy8gZHJhdyBwYWxldHRlIGltYWdlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gaW1hZ2VfZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBsZXQgZGlzdGFuY2VzID0gcGFsZXR0ZS5tYXAocHJnYiA9PiB7XG4gICAgICAgICAgbGV0IFtyMSwgZzEsIGIxXSA9IHJnYlxuICAgICAgICAgIGxldCBbcjIsIGcyLCBiMl0gPSBwcmdiXG4gICAgICAgICAgLy8gcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgIC8vICAgKChyMiAtIHIxKSAqIDEpIF4gKDIgKyAoZzIgLSBnMSkgKiAxKSBeICgyICsgKGIyIC0gYjEpICogMSkgXiAyXG4gICAgICAgICAgLy8gKVxuICAgICAgICAgIC8vIHdlaWdodGVkIG1hdGNoXG4gICAgICAgICAgcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgICAgKChyMiAtIHIxKSAqIDAuMykgXlxuICAgICAgICAgICAgICAoMiArIChnMiAtIGcxKSAqIDAuNTkpIF5cbiAgICAgICAgICAgICAgKDIgKyAoYjIgLSBiMSkgKiAwLjExKSBeXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMpXG4gICAgICAgIGxldCBtaW5faW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihtaW4pXG4gICAgICAgIGxldCBjb2xvciA9IHBhbGV0dGVbbWluX2luZGV4XVxuICAgICAgICBsZXQgcCA9IGkgLyA0XG4gICAgICAgIGxldCB4ID0gcCAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHAgLyBjb2xzKVxuICAgICAgICBycHguZmlsbFN0eWxlID0gZmlsbChjb2xvcilcbiAgICAgICAgcnB4LmZpbGxSZWN0KHggKiBzcCwgeSAqIHNwLCBzcCwgc3ApXG4gICAgICB9XG5cbiAgICAgIC8vIGN1dCB1cCBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHQud2lkdGggPSBzcFxuICAgICAgICB0LmhlaWdodCA9IHNwXG4gICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuXG4gICAgICAgIHR4LmRyYXdJbWFnZShjLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCAwLCAwLCBzcCwgc3ApXG5cbiAgICAgICAgbGV0IGNvbXBsZXhpdHkgPSB0LnRvRGF0YVVSTCgpLmxlbmd0aCAvIChzcCAqIHNwKVxuXG4gICAgICAgIHRpbGVzLnB1c2goeyB0LCBjOiBjb21wbGV4aXR5LCB4LCB5LCBpIH0pXG4gICAgICB9XG5cbiAgICAgIHRpbGVzID0gXy5zb3J0QnkodGlsZXMsICdjJykucmV2ZXJzZSgpXG5cbiAgICAgIGxldCBxID0gcXJlZi5jdXJyZW50XG4gICAgICBxLmlubmVySFRNTCA9ICcnXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICBiaWdnZXIud2lkdGggPSBzcCAqIDJcbiAgICAgICAgYmlnZ2VyLmhlaWdodCA9IHNwICogMlxuICAgICAgICBsZXQgYnggPSBiaWdnZXIuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBieC5pbWFnZVNtb290aGluZ0VuYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgICAgYnguZHJhd0ltYWdlKHRpbGUudCwgMCwgMCwgYmlnZ2VyLndpZHRoLCBiaWdnZXIuaGVpZ2h0KVxuICAgICAgICBsZXQgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAvLyBkLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIHRleHQuc3R5bGUubWFyZ2luTGVmdCA9IHNwIC8gMiArICdweCdcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBgJHt0aWxlLmMudG9GaXhlZCgzKX1gXG4gICAgICAgIGQuYXBwZW5kQ2hpbGQoYmlnZ2VyKVxuICAgICAgICBkLmFwcGVuZENoaWxkKHRleHQpXG4gICAgICAgIHEuYXBwZW5kQ2hpbGQoZClcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXRlID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICAgIHN0YXRlLmltZyA9IGltZ1xuICAgICAgc3RhdGUudGlsZXMgPSB0aWxlc1xuICAgICAgc3RhdGUuY2VsbHMgPSBjZWxsc1xuICAgICAgc3RhdGUuY29scyA9IGNvbHNcbiAgICAgIHN0YXRlLnJvd3MgPSByb3dzXG5cbiAgICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgICB0aS53aWR0aCA9IGltZy53aWR0aCAtIHNwICogNFxuICAgICAgdGkuaGVpZ2h0ID0gc3AgKiAyXG5cbiAgICAgIC8vIGZhdmljb25cbiAgICAgIGxldCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIGYud2lkdGggPSAzMlxuICAgICAgZi5oZWlnaHQgPSAzMlxuICAgICAgbGV0IGZ4ID0gZi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0LndpZHRoID0gOFxuICAgICAgdC5oZWlnaHQgPSA4XG4gICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcbiAgICAgIHR4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgMCwgMCwgOCwgOClcbiAgICAgIGxldCBmYXZpY29uX2RhdGEgPSB0eC5nZXRJbWFnZURhdGEoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhdmljb25fZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBmYXZpY29uX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IHBhbGV0dGUubWFwKHByZ2IgPT4ge1xuICAgICAgICAgIGxldCBbcjEsIGcxLCBiMV0gPSByZ2JcbiAgICAgICAgICBsZXQgW3IyLCBnMiwgYjJdID0gcHJnYlxuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgICgocjIgLSByMSkgKiAwLjMpIF5cbiAgICAgICAgICAgICAgKDIgKyAoZzIgLSBnMSkgKiAwLjU5KSBeXG4gICAgICAgICAgICAgICgyICsgKGIyIC0gYjEpICogMC4xMSkgXlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKVxuICAgICAgICBsZXQgbWluX2luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YobWluKVxuICAgICAgICBsZXQgY29sb3IgPSBwYWxldHRlW21pbl9pbmRleF1cbiAgICAgICAgbGV0IHAgPSBpIC8gNFxuICAgICAgICBsZXQgeCA9IHAgJSA4XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihwIC8gOClcbiAgICAgICAgZnguZmlsbFN0eWxlID0gZmlsbChjb2xvcilcbiAgICAgICAgZnguZmlsbFJlY3QoeCAqIDQsIHkgKiA0LCA0LCA0KVxuICAgICAgfVxuICAgICAgc2V0RmF2aWNvbihmLnRvRGF0YVVSTCgpKVxuXG4gICAgICBzdGF0ZS50aHJlc2hvbGQgPSAxMjBcblxuICAgICAgcmVuZGVyKClcbiAgICB9XG5cbiAgICBpbWcuc3JjID0gc3JjXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGltZy5zcmMgPSAndW5jdXQuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnZXhtYWNoaW5hLmpwZWcnXG4gICAgLy8gaW1nLnNyYyA9ICdtcnJvYm90LmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ3N0YWxrZXIuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnYWNyb255bS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdtcnJvYm90Mi5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICd2ZWlsYW5jZS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdtY2NhYmUuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnY29tcHV0ZS5wbmcnXG4gICAgbG9hZEltYWdlKCdtcnJvYm90Mi5qcGcnKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBjbGlja1NldFRocmVzaG9sZCh4KSB7XG4gICAgbGV0IHJlY3QgPSB0aV9yZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHggPSB4IC0gcmVjdC5sZWZ0XG4gICAgbGV0IHBlcmNlbnQgPSB4IC8gdGlfcmVmLmN1cnJlbnQud2lkdGhcbiAgICBsZXQgeyBjZWxscywgdGhyZXNob2xkIH0gPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgIGxldCBuZXdfdGhyZXNoID1cbiAgICAgIGNlbGxzIC0gTWF0aC5taW4oY2VsbHMsIE1hdGgubWF4KDAsIE1hdGgucm91bmQocGVyY2VudCAqIGNlbGxzKSkpXG4gICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gbmV3X3RocmVzaFxuICAgIHJlbmRlcigpXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgbGV0IGN4ID0gY3JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcnAgPSBycHJlZi5jdXJyZW50XG5cbiAgICBsZXQgeyBpbWcsIHRpbGVzLCBjb2xzLCByb3dzLCBjZWxscywgdGhyZXNob2xkIH0gPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodClcblxuICAgIGZvciAobGV0IGkgPSB0aHJlc2hvbGQ7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICBsZXQgeCA9IHRpbGUueFxuICAgICAgbGV0IHkgPSB0aWxlLnlcbiAgICAgIGN4LmRyYXdJbWFnZShycCwgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgeCAqIHNwLCB5ICogc3AsIHNwLCBzcClcbiAgICB9XG5cbiAgICB0aHJlc2hfcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gY2VsbHMgLSB0aHJlc2hvbGQgKyAnLycgKyBjZWxsc1xuXG4gICAgbGV0IHRpID0gdGlfcmVmLmN1cnJlbnRcbiAgICBsZXQgdGl4ID0gdGkuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjZGRkJ1xuICAgIHRpeC5maWxsUmVjdCgwLCAwLCB0aS53aWR0aCwgc3AgKiAyKVxuXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjOTk5J1xuICAgIGxldCB0bWFyayA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0aS53aWR0aCAqICgoY2VsbHMgLSB0aHJlc2hvbGQpIC8gY2VsbHMpKSksXG4gICAgICB0aS53aWR0aCAtIDJcbiAgICApXG4gICAgdGl4LmZpbGxSZWN0KHRtYXJrIC0gMSwgMCwgMywgc3AgKiAyKVxuXG4gICAgbGV0IHEgPSBxcmVmLmN1cnJlbnRcbiAgICBsZXQgbm9kZXMgPSBxLmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldXG4gICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgaWYgKGkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJ3RocmVzaG9sZF9tYXJrZXInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpbV9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBpbWcud2lkdGggKyAneCcgKyBpbWcuaGVpZ2h0XG4gICAgcmVkdWNlZF9yZWYuY3VycmVudC5pbm5lckhUTUwgPVxuICAgICAgJygnICtcbiAgICAgIGltZy53aWR0aCArXG4gICAgICAnLycgK1xuICAgICAgc3AgK1xuICAgICAgJyl4KCcgK1xuICAgICAgaW1nLmhlaWdodCArXG4gICAgICAnLycgK1xuICAgICAgc3AgK1xuICAgICAgJyk9JyArXG4gICAgICBjb2xzICtcbiAgICAgICd4JyArXG4gICAgICByb3dzXG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGtleSkge1xuICAgIGtleUFjdGlvbihrZXksIG51bGwpXG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBldmVudCkge1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGZpbGVfaW5wdXQuY3VycmVudFxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgbGV0IGZpbGVzID0gJydcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgICAgICBmaWxlcyArPSBpdGVtLm5hbWUgKyAnLicgKyBpdGVtLnR5cGVcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKVxuICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgIH1cbiAgICAgICAgc2V0RGVidWcoZmlsZXMpXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuXG4gICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3AnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuXG4gICAgICBjcmVmLmN1cnJlbnQudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2Rvd25sb2FkJyxcbiAgICAgICAgICAncmVzLScgK1xuICAgICAgICAgICAgbmV3IERhdGUoKVxuICAgICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgLTQpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC8tL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC4vZywgJycpICtcbiAgICAgICAgICAgICdaJyArXG4gICAgICAgICAgICAnLnBuZydcbiAgICAgICAgKVxuXG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgbGluay5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2wnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heChcbiAgICAgICAgMCxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkIC0gMTBcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdoJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgKyAxMFxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0wnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heCgwLCBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgLSAxKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0gnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCArIDFcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJlcihpZCkge1xuICAgIGNsZWFyX3JlZi5jdXJyZW50LnB1c2goaWQpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclJlcGVhdEludGVydmFscygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFyX3JlZi5jdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGNsZWFyX3JlZi5jdXJyZW50W2ldXG4gICAgICBjbGVhckludGVydmFsKGl0ZW0pXG4gICAgfVxuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyUHJlc3NHYXRlcygpIHtcbiAgICBwcmVzc19nYXRlcy5jdXJyZW50ID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmICghc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCkge1xuICAgICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICB9XG4gICAgfVxuICAgIGNsZWFyUmVwZWF0SW50ZXJ2YWxzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgbG9hZEltYWdlKHNyYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl90b3VjaF9tb2RlLmN1cnJlbnQpIHtcbiAgICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgLy8gdG91Y2ggZW5kIGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGNsaWVudCB4XG4gICAgY2xlYXJQcmVzc0dhdGVzKClcbiAgICBjbGVhclJlcGVhdEludGVydmFscygpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaWQ9XCJmYXZpY29uX2xpbmtcIlxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9e2Zhdmljb259XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB3aWR0aCAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCAqIDIgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtkZWJ1ZyAhPT0gbnVsbCA/IDxkaXY+e2RlYnVnfTwvZGl2PiA6IG51bGx9XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIHJlZj17ZmlsZV9pbnB1dH0gLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXNlbGVjdFwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwLCBwYWRkaW5nUmlnaHQ6IHNwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cIm9cIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJMb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKVwiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdvJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICB0ZXh0X2xhYmVsPVwiU2F2ZSByZXN1bHQgYXMgcG5nXCJcbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ3AnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e2NyZWZ9IC8+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIGhlaWdodD17c3AgKiAyM31cbiAgICAgICAgICAgICAgcmVmPXt0aV9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzcCAqIDIsXG4gICAgICAgICAgICAgICAgbGVmdDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdjcm9zc2hhaXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WClcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Ub3VjaEVuZD17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgc2xpZGVyX3RvdWNoX21vZGUuY3VycmVudCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgNDAwKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZXJfdG91Y2hfbW9kZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICBjbGlja1NldFRocmVzaG9sZChlLmNsaWVudFgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXBlYXRCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJoXCJcbiAgICAgICAgICAgICAgcHJlc3NfZ2F0ZXM9e3ByZXNzX2dhdGVzfVxuICAgICAgICAgICAgICBjdXN0b21fc3R5bGU9e3sgaGVpZ2h0OiBzcCAqIDIsIHdpZHRoOiBzcCAqIDIgfX1cbiAgICAgICAgICAgICAgY2xlYXJlcj17Y2xlYXJlcn1cbiAgICAgICAgICAgICAgdHJpZ2dlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIoJ2gnKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0aHJlc2hfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBzcCAqIDIgKyAncHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPFJlcGVhdEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImxcIlxuICAgICAgICAgICAgICBwcmVzc19nYXRlcz17cHJlc3NfZ2F0ZXN9XG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCwgYmFja2dyb3VuZDogJyNlZmVmZWYnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+SG93IGl0IHdvcmtzPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQWRqdXN0ZWQgaW1hZ2Ugc2l6ZTogPHNwYW4gcmVmPXtkaW1fcmVmfT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWw6IHtzcH14e3NwfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5SZWR1Y2VkIGltYWdlPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JyZWZ9IC8+XG4gICAgICAgICAgPGRpdiByZWY9e3JlZHVjZWRfcmVmfT48L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGZyb20gcmVkdWNlZCBpbWFnZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtwcmVmfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBVc2luZyB0aGUgbWVkaWFuIGN1dCBhcHByb2FjaHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zcGluLmF0b21pY29iamVjdC5jb20vMjAxNi8xMi8wNy9waXhlbHMtYW5kLXBhbGV0dGVzLWV4dHJhY3RpbmctY29sb3ItcGFsZXR0ZXMtZnJvbS1pbWFnZXMvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZXhwbGFpbmVkIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGFwcGxpZWQgdG8gcmVkdWNlZCBpbWFnZSBhdCBvcmlnaW5hbCBzaXplPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JwcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWxzIGZyb20gb3JpZ2luYWwgaW1hZ2Ugc29ydGVkIGJ5IGNvbXBsZXhpdHkgKGRhdGEgVVJMXG4gICAgICAgICAgICBzdHJpbmcgbGVuZ3RoIC8gbnVtYmVyIG9mIHBpeGVscykgc2hvd24gaGVyZSBhdCAyeFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cXJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczpcbiAgICAgICAgICAgICAgICAncmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCcgKyBzcCAqIDIgKyAncHgsIDFmcikgKScsXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5HYXA6IHNwIC8gMixcbiAgICAgICAgICAgICAgZ3JpZFJvd0dhcDogc3AgLyA0LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAvLyBtYXhIZWlnaHQ6IHNwICogMjEsXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBJZGVhIGZvciB1c2luZyBjb21wcmVzc2lvbiBhcyBhIHByb3h5IGZvciBjb21wbGV4aXR5eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTU3OTU1Ny9ob3ctdG8tY29tcGFyZS1pbWFnZXMtYW5kLWRldGVybWluZS13aGljaC1oYXMtbW9yZS1jb250ZW50LzQ1NTc5Njg4IzQ1NTc5Njg4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZnJvbSB0aGlzIHN1Z2dlc3Rpb24gYnkgQXJ0aHVyLTEgb24gU3RhY2tPdmVyZmxvd1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogc3AsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29uc3RyYWludC5zeXN0ZW1zXCI+Y29uc3RyYWludC5zeXN0ZW1zPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlZpZXcgc291cmNlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAudGhyZXNob2xkX21hcmtlciBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubm8tc2VsZWN0IHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2c0f2d81b5c8dbaef8a8.hot-update.js.map