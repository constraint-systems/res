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
      lineNumber: 14
    },
    __self: this
  });
};

var Button = function Button(_ref) {
  var label = _ref.label,
      clearer = _ref.clearer,
      trigger = _ref.trigger,
      text_label = _ref.text_label,
      custom_style = _ref.custom_style;
  var repeat_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var start_gate = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(false);
  var touch_repeat_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
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
      lineNumber: 38
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onTouchStart: function onTouchStart(e) {
      start_gate.current = true;
      trigger();
      console.log('touch start');
      setTimeout(function () {
        console.log('repeat check');

        if (start_gate.current) {
          console.log('repeat');
          touch_repeat_ref.current = setInterval(function () {
            trigger();
          }, 200);
        } else {
          console.log('no repeat');
        }
      }, 400); // repeat_ref.current = setInterval(() => {
      //   trigger()
      // }, 400)
      // clearer(repeat_ref.current)
      // trigger()
      // e.preventDefault()
    },
    onTouchEnd: function onTouchEnd(e) {
      // clearInterval(repeat_ref.current)
      console.log('touch end');
      start_gate.current = false;
      clearInterval(touch_repeat_ref.current);
      e.preventDefault();
    } // onMouseDown={e => {
    //   repeat_ref.current = setInterval(() => {
    //     trigger()
    //   }, 200)
    //   clearer(repeat_ref.current)
    //   trigger()
    // }}
    // onMouseUp={e => {
    //   clearInterval(repeat_ref.current)
    // }}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
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
      lineNumber: 84
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
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
  var dim_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var reduced_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({});
  var state_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])({
    img: null,
    tiles: null
  });
  var slider_click_ref = Object(react__WEBPACK_IMPORTED_MODULE_6__["useRef"])(null);
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
      var adj_width = Math.min(img.width, window.innerWidth - sp * 3);
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

  function handleMouseUp(e) {
    if (slider_click_ref.current) {
      slider_click_ref.current = false;
      clickSetThreshold(e);
    }

    for (var i = 0; i < clear_ref.current.length; i++) {
      var item = clear_ref.current[i];
      clearInterval(item);
    }

    clear_ref.current = [];
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
    console.log('global touch end');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false); // window.addEventListener('touchend', handleTouchEnd, false)

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('paste', onPaste, false);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false); // window.removeEventListener('touchend', handleTouchEnd, false)
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
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
      lineNumber: 570
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
      lineNumber: 578
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
      lineNumber: 586
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    text_label: "Load image (or paste or drop)",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('o');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597
    },
    __self: this
  }), __jsx(Button, {
    label: "p",
    text_label: "Save result as png",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('p');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
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
      lineNumber: 611
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
    onMouseDown: function onMouseDown(e) {
      slider_click_ref.current = true;
      clickSetThreshold(e);
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }), __jsx(Button, {
    label: "h",
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
      lineNumber: 635
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
      lineNumber: 643
    },
    __self: this
  }), __jsx(Button, {
    label: "l",
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
      lineNumber: 652
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663
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
      lineNumber: 664
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 667
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668
    },
    __self: this
  }, "How it works"), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }, "Adjusted image size: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677
    },
    __self: this
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3923712137",
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
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696
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
      lineNumber: 700
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
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
      lineNumber: 727
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 735
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 736
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 742
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3923712137",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXd1QnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLFVBZlAsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsb0RBVG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7IGxhYmVsLCBjbGVhcmVyLCB0cmlnZ2VyLCB0ZXh0X2xhYmVsLCBjdXN0b21fc3R5bGUgfSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcbiAgbGV0IHRvdWNoX3JlcGVhdF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgfVxuICBpZiAoY3VzdG9tX3N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBidXR0b25fc3R5bGUgPSBPYmplY3QuYXNzaWduKGJ1dHRvbl9zdHlsZSwgY3VzdG9tX3N0eWxlKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHN0eWxlPXtidXR0b25fc3R5bGV9XG4gICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB7XG4gICAgICAgICAgc3RhcnRfZ2F0ZS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaCBzdGFydCcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVwZWF0IGNoZWNrJylcbiAgICAgICAgICAgIGlmIChzdGFydF9nYXRlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcGVhdCcpXG4gICAgICAgICAgICAgIHRvdWNoX3JlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHJlcGVhdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgNDAwKVxuICAgICAgICAgIC8vIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAvLyAgIHRyaWdnZXIoKVxuICAgICAgICAgIC8vIH0sIDQwMClcbiAgICAgICAgICAvLyBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICAvLyB0cmlnZ2VyKClcbiAgICAgICAgICAvLyBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfX1cbiAgICAgICAgb25Ub3VjaEVuZD17ZSA9PiB7XG4gICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RvdWNoIGVuZCcpXG4gICAgICAgICAgc3RhcnRfZ2F0ZS5jdXJyZW50ID0gZmFsc2VcbiAgICAgICAgICBjbGVhckludGVydmFsKHRvdWNoX3JlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfX1cbiAgICAgICAgLy8gb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAvLyAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLy8gICAgIHRyaWdnZXIoKVxuICAgICAgICAvLyAgIH0sIDIwMClcbiAgICAgICAgLy8gICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgLy8gICB0cmlnZ2VyKClcbiAgICAgICAgLy8gfX1cbiAgICAgICAgLy8gb25Nb3VzZVVwPXtlID0+IHtcbiAgICAgICAgLy8gICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgLy8gfX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9idXR0b24+XG4gICAgICB7dGV4dF9sYWJlbCAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBjdXJzb3I6ICdkZWZhdWx0JywgdXNlclNlbGVjdDogJ25vbmUnIH19XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgICAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgIDxkaXY+e3RleHRfbGFiZWx9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxubGV0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbZmF2aWNvbiwgc2V0RmF2aWNvbl0gPSB1c2VTdGF0ZSgnZmF2aWNvbi5wbmcnKVxuXG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBycmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBycHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBkaW1fcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWR1Y2VkX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBzdGF0ZV9yZWYgPSB1c2VSZWYoe1xuICAgIGltZzogbnVsbCxcbiAgICB0aWxlczogbnVsbCxcbiAgfSlcblxuICBsZXQgc2xpZGVyX2NsaWNrX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCB0aV9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgdGhyZXNoX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBjbGVhcl9yZWYgPSB1c2VSZWYoW10pXG5cbiAgZnVuY3Rpb24gbG9hZEltYWdlKHNyYykge1xuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHIgPSBycmVmLmN1cnJlbnRcbiAgICBsZXQgcnggPSByLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcCA9IHByZWYuY3VycmVudFxuICAgIGxldCBweCA9IHAuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBycCA9IHJwcmVmLmN1cnJlbnRcbiAgICBsZXQgcnB4ID0gcnAuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCBhZGpfd2lkdGggPSBNYXRoLm1pbihpbWcud2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIC0gc3AgKiAzKVxuICAgICAgbGV0IGRzcCA9IHNwXG4gICAgICBsZXQgc25hcHcgPSBNYXRoLnJvdW5kKGFkal93aWR0aCAvIGRzcCkgKiBkc3BcbiAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICBsZXQgc25hcGggPSBNYXRoLnJvdW5kKChpbWcuaGVpZ2h0ICogc25hcHIpIC8gZHNwKSAqIGRzcFxuXG4gICAgICBpbWcud2lkdGggPSBzbmFwd1xuICAgICAgaW1nLmhlaWdodCA9IHNuYXBoXG5cbiAgICAgIHNldFdpZHRoKGltZy53aWR0aClcblxuICAgICAgYy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgYy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG5cbiAgICAgIGxldCBjb2xzID0gaW1nLndpZHRoIC8gc3BcbiAgICAgIGxldCByb3dzID0gaW1nLmhlaWdodCAvIHNwXG4gICAgICBsZXQgY2VsbHMgPSBjb2xzICogcm93c1xuXG4gICAgICAvLyBwcmVzZXJ2ZSBkaW1lbnNpb25zXG4gICAgICBsZXQgdF9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdF9pbWcud2lkdGggPSBjLndpZHRoXG4gICAgICB0X2ltZy5oZWlnaHQgPSBjLmhlaWdodFxuICAgICAgbGV0IHRfaW1neCA9IHRfaW1nLmdldENvbnRleHQoJzJkJylcbiAgICAgIHRfaW1neC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcbiAgICAgIGltZyA9IHRfaW1nXG5cbiAgICAgIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICByLndpZHRoID0gY29sc1xuICAgICAgci5oZWlnaHQgPSByb3dzXG5cbiAgICAgIHJ4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0LCAwLCAwLCByLndpZHRoLCByLmhlaWdodClcblxuICAgICAgcC53aWR0aCA9IHNwICogOFxuICAgICAgcC5oZWlnaHQgPSBzcFxuXG4gICAgICBycC53aWR0aCA9IGltZy53aWR0aFxuICAgICAgcnAuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICAvLyBnZXQgY29sb3JzIGZyb20gcmVkdWNlZCBpbWFnZVxuICAgICAgbGV0IGltYWdlX2RhdGEgPSByeC5nZXRJbWFnZURhdGEoMCwgMCwgci53aWR0aCwgci5oZWlnaHQpXG4gICAgICBsZXQgY29sb3JzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VfZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBpbWFnZV9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGNvbG9ycy5wdXNoKHJnYilcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IHBhbGV0dGUgZHJhdyBwYWxldHRlXG4gICAgICBsZXQgcGFsZXR0ZSA9IG1lZEN1dChjb2xvcnMpXG4gICAgICAvLyBwYWxldHRlID0gcGFsZXR0ZS5tYXAoY29sb3IgPT4gY29sb3IubWFwKGNoYW5uZWwgPT4gMjU1IC0gY2hhbm5lbCkpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbGV0dGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHguZmlsbFN0eWxlID0gZmlsbChwYWxldHRlW2ldKVxuICAgICAgICBweC5maWxsUmVjdChpICogc3AsIDAsIHNwLCBzcClcbiAgICAgIH1cblxuICAgICAgLy8gZHJhdyBwYWxldHRlIGltYWdlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gaW1hZ2VfZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBsZXQgZGlzdGFuY2VzID0gcGFsZXR0ZS5tYXAocHJnYiA9PiB7XG4gICAgICAgICAgbGV0IFtyMSwgZzEsIGIxXSA9IHJnYlxuICAgICAgICAgIGxldCBbcjIsIGcyLCBiMl0gPSBwcmdiXG4gICAgICAgICAgLy8gcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgIC8vICAgKChyMiAtIHIxKSAqIDEpIF4gKDIgKyAoZzIgLSBnMSkgKiAxKSBeICgyICsgKGIyIC0gYjEpICogMSkgXiAyXG4gICAgICAgICAgLy8gKVxuICAgICAgICAgIC8vIHdlaWdodGVkIG1hdGNoXG4gICAgICAgICAgcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgICAgKChyMiAtIHIxKSAqIDAuMykgXlxuICAgICAgICAgICAgICAoMiArIChnMiAtIGcxKSAqIDAuNTkpIF5cbiAgICAgICAgICAgICAgKDIgKyAoYjIgLSBiMSkgKiAwLjExKSBeXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMpXG4gICAgICAgIGxldCBtaW5faW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihtaW4pXG4gICAgICAgIGxldCBjb2xvciA9IHBhbGV0dGVbbWluX2luZGV4XVxuICAgICAgICBsZXQgcCA9IGkgLyA0XG4gICAgICAgIGxldCB4ID0gcCAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHAgLyBjb2xzKVxuICAgICAgICBycHguZmlsbFN0eWxlID0gZmlsbChjb2xvcilcbiAgICAgICAgcnB4LmZpbGxSZWN0KHggKiBzcCwgeSAqIHNwLCBzcCwgc3ApXG4gICAgICB9XG5cbiAgICAgIC8vIGN1dCB1cCBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHQud2lkdGggPSBzcFxuICAgICAgICB0LmhlaWdodCA9IHNwXG4gICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuXG4gICAgICAgIHR4LmRyYXdJbWFnZShjLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCAwLCAwLCBzcCwgc3ApXG5cbiAgICAgICAgbGV0IGNvbXBsZXhpdHkgPSB0LnRvRGF0YVVSTCgpLmxlbmd0aCAvIChzcCAqIHNwKVxuXG4gICAgICAgIHRpbGVzLnB1c2goeyB0LCBjOiBjb21wbGV4aXR5LCB4LCB5LCBpIH0pXG4gICAgICB9XG5cbiAgICAgIHRpbGVzID0gXy5zb3J0QnkodGlsZXMsICdjJykucmV2ZXJzZSgpXG5cbiAgICAgIGxldCBxID0gcXJlZi5jdXJyZW50XG4gICAgICBxLmlubmVySFRNTCA9ICcnXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICBiaWdnZXIud2lkdGggPSBzcCAqIDJcbiAgICAgICAgYmlnZ2VyLmhlaWdodCA9IHNwICogMlxuICAgICAgICBsZXQgYnggPSBiaWdnZXIuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBieC5pbWFnZVNtb290aGluZ0VuYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgICAgYnguZHJhd0ltYWdlKHRpbGUudCwgMCwgMCwgYmlnZ2VyLndpZHRoLCBiaWdnZXIuaGVpZ2h0KVxuICAgICAgICBsZXQgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAvLyBkLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIHRleHQuc3R5bGUubWFyZ2luTGVmdCA9IHNwIC8gMiArICdweCdcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBgJHt0aWxlLmMudG9GaXhlZCgzKX1gXG4gICAgICAgIGQuYXBwZW5kQ2hpbGQoYmlnZ2VyKVxuICAgICAgICBkLmFwcGVuZENoaWxkKHRleHQpXG4gICAgICAgIHEuYXBwZW5kQ2hpbGQoZClcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXRlID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICAgIHN0YXRlLmltZyA9IGltZ1xuICAgICAgc3RhdGUudGlsZXMgPSB0aWxlc1xuICAgICAgc3RhdGUuY2VsbHMgPSBjZWxsc1xuICAgICAgc3RhdGUuY29scyA9IGNvbHNcbiAgICAgIHN0YXRlLnJvd3MgPSByb3dzXG5cbiAgICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgICB0aS53aWR0aCA9IGltZy53aWR0aCAtIHNwICogNFxuICAgICAgdGkuaGVpZ2h0ID0gc3AgKiAyXG5cbiAgICAgIC8vIGZhdmljb25cbiAgICAgIGxldCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIGYud2lkdGggPSAzMlxuICAgICAgZi5oZWlnaHQgPSAzMlxuICAgICAgbGV0IGZ4ID0gZi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0LndpZHRoID0gOFxuICAgICAgdC5oZWlnaHQgPSA4XG4gICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcbiAgICAgIHR4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgMCwgMCwgOCwgOClcbiAgICAgIGxldCBmYXZpY29uX2RhdGEgPSB0eC5nZXRJbWFnZURhdGEoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhdmljb25fZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBmYXZpY29uX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IHBhbGV0dGUubWFwKHByZ2IgPT4ge1xuICAgICAgICAgIGxldCBbcjEsIGcxLCBiMV0gPSByZ2JcbiAgICAgICAgICBsZXQgW3IyLCBnMiwgYjJdID0gcHJnYlxuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgICgocjIgLSByMSkgKiAwLjMpIF5cbiAgICAgICAgICAgICAgKDIgKyAoZzIgLSBnMSkgKiAwLjU5KSBeXG4gICAgICAgICAgICAgICgyICsgKGIyIC0gYjEpICogMC4xMSkgXlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKVxuICAgICAgICBsZXQgbWluX2luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YobWluKVxuICAgICAgICBsZXQgY29sb3IgPSBwYWxldHRlW21pbl9pbmRleF1cbiAgICAgICAgbGV0IHAgPSBpIC8gNFxuICAgICAgICBsZXQgeCA9IHAgJSA4XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihwIC8gOClcbiAgICAgICAgZnguZmlsbFN0eWxlID0gZmlsbChjb2xvcilcbiAgICAgICAgZnguZmlsbFJlY3QoeCAqIDQsIHkgKiA0LCA0LCA0KVxuICAgICAgfVxuICAgICAgc2V0RmF2aWNvbihmLnRvRGF0YVVSTCgpKVxuXG4gICAgICBzdGF0ZS50aHJlc2hvbGQgPSAxMjBcblxuICAgICAgcmVuZGVyKClcbiAgICB9XG5cbiAgICBpbWcuc3JjID0gc3JjXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGltZy5zcmMgPSAndW5jdXQuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnZXhtYWNoaW5hLmpwZWcnXG4gICAgLy8gaW1nLnNyYyA9ICdtcnJvYm90LmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ3N0YWxrZXIuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnYWNyb255bS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdtcnJvYm90Mi5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICd2ZWlsYW5jZS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdtY2NhYmUuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnY29tcHV0ZS5wbmcnXG4gICAgbG9hZEltYWdlKCdtcnJvYm90Mi5qcGcnKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBjbGlja1NldFRocmVzaG9sZChlKSB7XG4gICAgbGV0IHJlY3QgPSB0aV9yZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGxldCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0XG4gICAgbGV0IHBlcmNlbnQgPSB4IC8gdGlfcmVmLmN1cnJlbnQud2lkdGhcbiAgICBsZXQgeyBjZWxscywgdGhyZXNob2xkIH0gPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgIGxldCBuZXdfdGhyZXNoID1cbiAgICAgIGNlbGxzIC0gTWF0aC5taW4oY2VsbHMsIE1hdGgubWF4KDAsIE1hdGgucm91bmQocGVyY2VudCAqIGNlbGxzKSkpXG4gICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gbmV3X3RocmVzaFxuICAgIHJlbmRlcigpXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgbGV0IGN4ID0gY3JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcnAgPSBycHJlZi5jdXJyZW50XG5cbiAgICBsZXQgeyBpbWcsIHRpbGVzLCBjb2xzLCByb3dzLCBjZWxscywgdGhyZXNob2xkIH0gPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodClcblxuICAgIGZvciAobGV0IGkgPSB0aHJlc2hvbGQ7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICBsZXQgeCA9IHRpbGUueFxuICAgICAgbGV0IHkgPSB0aWxlLnlcbiAgICAgIGN4LmRyYXdJbWFnZShycCwgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgeCAqIHNwLCB5ICogc3AsIHNwLCBzcClcbiAgICB9XG5cbiAgICB0aHJlc2hfcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gY2VsbHMgLSB0aHJlc2hvbGQgKyAnLycgKyBjZWxsc1xuXG4gICAgbGV0IHRpID0gdGlfcmVmLmN1cnJlbnRcbiAgICBsZXQgdGl4ID0gdGkuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjZGRkJ1xuICAgIHRpeC5maWxsUmVjdCgwLCAwLCB0aS53aWR0aCwgc3AgKiAyKVxuXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjOTk5J1xuICAgIGxldCB0bWFyayA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0aS53aWR0aCAqICgoY2VsbHMgLSB0aHJlc2hvbGQpIC8gY2VsbHMpKSksXG4gICAgICB0aS53aWR0aCAtIDJcbiAgICApXG4gICAgdGl4LmZpbGxSZWN0KHRtYXJrIC0gMSwgMCwgMywgc3AgKiAyKVxuXG4gICAgbGV0IHEgPSBxcmVmLmN1cnJlbnRcbiAgICBsZXQgbm9kZXMgPSBxLmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldXG4gICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgaWYgKGkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJ3RocmVzaG9sZF9tYXJrZXInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpbV9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBpbWcud2lkdGggKyAneCcgKyBpbWcuaGVpZ2h0XG4gICAgcmVkdWNlZF9yZWYuY3VycmVudC5pbm5lckhUTUwgPVxuICAgICAgJygnICtcbiAgICAgIGltZy53aWR0aCArXG4gICAgICAnLycgK1xuICAgICAgc3AgK1xuICAgICAgJyl4KCcgK1xuICAgICAgaW1nLmhlaWdodCArXG4gICAgICAnLycgK1xuICAgICAgc3AgK1xuICAgICAgJyk9JyArXG4gICAgICBjb2xzICtcbiAgICAgICd4JyArXG4gICAgICByb3dzXG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGtleSkge1xuICAgIGtleUFjdGlvbihrZXksIG51bGwpXG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBldmVudCkge1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBpZiAoa2V5ID09PSAnbycpIHtcbiAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJylcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpIDwgMCkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSlcbiAgICAgICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncCcpIHtcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG5cbiAgICAgIGNyZWYuY3VycmVudC50b0Jsb2IoZnVuY3Rpb24oYmxvYikge1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnZG93bmxvYWQnLFxuICAgICAgICAgICdyZXMtJyArXG4gICAgICAgICAgICBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgIC50b0lTT1N0cmluZygpXG4gICAgICAgICAgICAgIC5zbGljZSgwLCAtNClcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC86L2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXy9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJykgK1xuICAgICAgICAgICAgJ1onICtcbiAgICAgICAgICAgICcucG5nJ1xuICAgICAgICApXG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKVxuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSAnbCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgLSAxMFxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2gnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCArIDEwXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnTCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWF4KDAsIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCAtIDEpXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnSCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkICsgMVxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcmVyKGlkKSB7XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQucHVzaChpZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICBjbGlja1NldFRocmVzaG9sZChlKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFyX3JlZi5jdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGNsZWFyX3JlZi5jdXJyZW50W2ldXG4gICAgICBjbGVhckludGVydmFsKGl0ZW0pXG4gICAgfVxuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gW11cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJvcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF1cbiAgICBsZXQgZmlsZW5hbWUgPSBmaWxlLnBhdGggPyBmaWxlLnBhdGggOiBmaWxlLm5hbWUgPyBmaWxlLm5hbWUgOiAnJ1xuICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgbG9hZEltYWdlKHNyYylcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRHJhZyhlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSdcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGFzdGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsZXQgZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKClcbiAgICAgIGxldCBzcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpXG4gICAgICBsb2FkSW1hZ2Uoc3JjKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZ2xvYmFsIHRvdWNoIGVuZCcpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIG9uUGFzdGUsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKVxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kLCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG4gICAgICAvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCwgZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaWQ9XCJmYXZpY29uX2xpbmtcIlxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9e2Zhdmljb259XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB3aWR0aCAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCAqIDIgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwLCBwYWRkaW5nUmlnaHQ6IHNwIH19PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwib1wiXG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJMb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKVwiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdvJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgICAgdGV4dF9sYWJlbD1cIlNhdmUgcmVzdWx0IGFzIHBuZ1wiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdwJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBoZWlnaHQ9e3NwICogMjN9XG4gICAgICAgICAgICAgIHJlZj17dGlfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHNwICogMixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwiaFwiXG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignaCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RocmVzaF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHNwICogMiArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwibFwiXG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCwgYmFja2dyb3VuZDogJyNlZmVmZWYnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+SG93IGl0IHdvcmtzPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQWRqdXN0ZWQgaW1hZ2Ugc2l6ZTogPHNwYW4gcmVmPXtkaW1fcmVmfT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWw6IHtzcH14e3NwfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5SZWR1Y2VkIGltYWdlPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JyZWZ9IC8+XG4gICAgICAgICAgPGRpdiByZWY9e3JlZHVjZWRfcmVmfT48L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGZyb20gcmVkdWNlZCBpbWFnZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtwcmVmfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBVc2luZyB0aGUgbWVkaWFuIGN1dCBhcHByb2FjaHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zcGluLmF0b21pY29iamVjdC5jb20vMjAxNi8xMi8wNy9waXhlbHMtYW5kLXBhbGV0dGVzLWV4dHJhY3RpbmctY29sb3ItcGFsZXR0ZXMtZnJvbS1pbWFnZXMvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZXhwbGFpbmVkIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGFwcGxpZWQgdG8gcmVkdWNlZCBpbWFnZSBhdCBvcmlnaW5hbCBzaXplPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JwcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWxzIGZyb20gb3JpZ2luYWwgaW1hZ2Ugc29ydGVkIGJ5IGNvbXBsZXhpdHkgKGRhdGEgVVJMXG4gICAgICAgICAgICBzdHJpbmcgbGVuZ3RoIC8gbnVtYmVyIG9mIHBpeGVscykgc2hvd24gaGVyZSBhdCAyeFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cXJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczpcbiAgICAgICAgICAgICAgICAncmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCcgKyBzcCAqIDIgKyAncHgsIDFmcikgKScsXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5HYXA6IHNwIC8gMixcbiAgICAgICAgICAgICAgZ3JpZFJvd0dhcDogc3AgLyA0LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAvLyBtYXhIZWlnaHQ6IHNwICogMjEsXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBJZGVhIGZvciB1c2luZyBjb21wcmVzc2lvbiBhcyBhIHByb3h5IGZvciBjb21wbGV4aXR5eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTU3OTU1Ny9ob3ctdG8tY29tcGFyZS1pbWFnZXMtYW5kLWRldGVybWluZS13aGljaC1oYXMtbW9yZS1jb250ZW50LzQ1NTc5Njg4IzQ1NTc5Njg4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZnJvbSB0aGlzIHN1Z2dlc3Rpb24gYnkgQXJ0aHVyLTEgb24gU3RhY2tPdmVyZmxvd1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogc3AsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29uc3RyYWludC5zeXN0ZW1zXCI+Y29uc3RyYWludC5zeXN0ZW1zPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlZpZXcgc291cmNlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAudGhyZXNob2xkX21hcmtlciBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0c10a705c76fcdb7d58e.hot-update.js.map