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
      lineNumber: 37
    },
    __self: this
  }, __jsx("button", {
    style: button_style,
    onTouchStart: function onTouchStart(e) {
      start_gate.current = true;
      console.log('touch start');
      setTimeout(function () {
        console.log('repeat check');

        if (start_gate.current) {
          console.log('repeat');
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
    ontouchEnd: function ontouchEnd(e) {
      // clearInterval(repeat_ref.current)
      console.log('touch end');
      start_gate.current = false;
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
      lineNumber: 38
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
      lineNumber: 78
    },
    __self: this
  }, __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
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

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    window.addEventListener('touchend', function () {
      console.log('global touch end');
    }, false);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('paste', onPaste, false);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
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
      lineNumber: 561
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
      lineNumber: 569
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
      lineNumber: 577
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
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
      lineNumber: 580
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
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
      lineNumber: 589
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
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
      lineNumber: 602
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
      lineNumber: 610
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
      lineNumber: 626
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
      lineNumber: 634
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
      lineNumber: 643
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654
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
      lineNumber: 655
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659
    },
    __self: this
  }, "How it works"), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }, "Adjusted image size: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
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
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687
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
      lineNumber: 691
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717
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
      lineNumber: 718
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 729
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 730
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3923712137",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQSt0QnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLFVBZlAsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsb0RBVG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7IGxhYmVsLCBjbGVhcmVyLCB0cmlnZ2VyLCB0ZXh0X2xhYmVsLCBjdXN0b21fc3R5bGUgfSkgPT4ge1xuICBsZXQgcmVwZWF0X3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgc3RhcnRfZ2F0ZSA9IHVzZVJlZihmYWxzZSlcblxuICBsZXQgYnV0dG9uX3N0eWxlID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICB3aWR0aDogc3AsXG4gICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgfVxuICBpZiAoY3VzdG9tX3N0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBidXR0b25fc3R5bGUgPSBPYmplY3QuYXNzaWduKGJ1dHRvbl9zdHlsZSwgY3VzdG9tX3N0eWxlKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHN0eWxlPXtidXR0b25fc3R5bGV9XG4gICAgICAgIG9uVG91Y2hTdGFydD17ZSA9PiB7XG4gICAgICAgICAgc3RhcnRfZ2F0ZS5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaCBzdGFydCcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVwZWF0IGNoZWNrJylcbiAgICAgICAgICAgIGlmIChzdGFydF9nYXRlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcGVhdCcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gcmVwZWF0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCA0MDApXG4gICAgICAgICAgLy8gcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIC8vICAgdHJpZ2dlcigpXG4gICAgICAgICAgLy8gfSwgNDAwKVxuICAgICAgICAgIC8vIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAgIC8vIHRyaWdnZXIoKVxuICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9fVxuICAgICAgICBvbnRvdWNoRW5kPXtlID0+IHtcbiAgICAgICAgICAvLyBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICBjb25zb2xlLmxvZygndG91Y2ggZW5kJylcbiAgICAgICAgICBzdGFydF9nYXRlLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9fVxuICAgICAgICAvLyBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgIC8vICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdHJpZ2dlcigpXG4gICAgICAgIC8vICAgfSwgMjAwKVxuICAgICAgICAvLyAgIGNsZWFyZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAvLyAgIHRyaWdnZXIoKVxuICAgICAgICAvLyB9fVxuICAgICAgICAvLyBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICAvLyAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgICAvLyB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHt0ZXh0X2xhYmVsICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGN1cnNvcjogJ2RlZmF1bHQnLCB1c2VyU2VsZWN0OiAnbm9uZScgfX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICByZXBlYXRfcmVmLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICAgICAgfSwgMjAwKVxuICAgICAgICAgICAgY2xlYXJlcihyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgPGRpdj57dGV4dF9sYWJlbH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5sZXQgSG9tZSA9ICgpID0+IHtcbiAgbGV0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKCdmYXZpY29uLnBuZycpXG5cbiAgbGV0IGNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBxcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGRpbV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJlZHVjZWRfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHN0YXRlX3JlZiA9IHVzZVJlZih7XG4gICAgaW1nOiBudWxsLFxuICAgIHRpbGVzOiBudWxsLFxuICB9KVxuXG4gIGxldCBzbGlkZXJfY2xpY2tfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHRpX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCB0aHJlc2hfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGNsZWFyX3JlZiA9IHVzZVJlZihbXSlcblxuICBmdW5jdGlvbiBsb2FkSW1hZ2Uoc3JjKSB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBsZXQgY3ggPSBjLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgciA9IHJyZWYuY3VycmVudFxuICAgIGxldCByeCA9IHIuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBwID0gcHJlZi5jdXJyZW50XG4gICAgbGV0IHB4ID0gcC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHJwID0gcnByZWYuY3VycmVudFxuICAgIGxldCBycHggPSBycC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IGFkal93aWR0aCA9IE1hdGgubWluKGltZy53aWR0aCwgd2luZG93LmlubmVyV2lkdGggLSBzcCAqIDMpXG4gICAgICBsZXQgZHNwID0gc3BcbiAgICAgIGxldCBzbmFwdyA9IE1hdGgucm91bmQoYWRqX3dpZHRoIC8gZHNwKSAqIGRzcFxuICAgICAgbGV0IHNuYXByID0gc25hcHcgLyBpbWcud2lkdGhcbiAgICAgIGxldCBzbmFwaCA9IE1hdGgucm91bmQoKGltZy5oZWlnaHQgKiBzbmFwcikgLyBkc3ApICogZHNwXG5cbiAgICAgIGltZy53aWR0aCA9IHNuYXB3XG4gICAgICBpbWcuaGVpZ2h0ID0gc25hcGhcblxuICAgICAgc2V0V2lkdGgoaW1nLndpZHRoKVxuXG4gICAgICBjLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgbGV0IGNvbHMgPSBpbWcud2lkdGggLyBzcFxuICAgICAgbGV0IHJvd3MgPSBpbWcuaGVpZ2h0IC8gc3BcbiAgICAgIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbiAgICAgIC8vIHByZXNlcnZlIGRpbWVuc2lvbnNcbiAgICAgIGxldCB0X2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0X2ltZy53aWR0aCA9IGMud2lkdGhcbiAgICAgIHRfaW1nLmhlaWdodCA9IGMuaGVpZ2h0XG4gICAgICBsZXQgdF9pbWd4ID0gdF9pbWcuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdF9pbWd4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuICAgICAgaW1nID0gdF9pbWdcblxuICAgICAgY3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIHIud2lkdGggPSBjb2xzXG4gICAgICByLmhlaWdodCA9IHJvd3NcblxuICAgICAgcnguZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQsIDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KVxuXG4gICAgICBwLndpZHRoID0gc3AgKiA4XG4gICAgICBwLmhlaWdodCA9IHNwXG5cbiAgICAgIHJwLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBycC5oZWlnaHQgPSBpbWcuaGVpZ2h0XG5cbiAgICAgIC8vIGdldCBjb2xvcnMgZnJvbSByZWR1Y2VkIGltYWdlXG4gICAgICBsZXQgaW1hZ2VfZGF0YSA9IHJ4LmdldEltYWdlRGF0YSgwLCAwLCByLndpZHRoLCByLmhlaWdodClcbiAgICAgIGxldCBjb2xvcnMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZV9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGltYWdlX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgY29sb3JzLnB1c2gocmdiKVxuICAgICAgfVxuXG4gICAgICAvLyBnZXQgcGFsZXR0ZSBkcmF3IHBhbGV0dGVcbiAgICAgIGxldCBwYWxldHRlID0gbWVkQ3V0KGNvbG9ycylcbiAgICAgIC8vIHBhbGV0dGUgPSBwYWxldHRlLm1hcChjb2xvciA9PiBjb2xvci5tYXAoY2hhbm5lbCA9PiAyNTUgLSBjaGFubmVsKSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFsZXR0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBweC5maWxsU3R5bGUgPSBmaWxsKHBhbGV0dGVbaV0pXG4gICAgICAgIHB4LmZpbGxSZWN0KGkgKiBzcCwgMCwgc3AsIHNwKVxuICAgICAgfVxuXG4gICAgICAvLyBkcmF3IHBhbGV0dGUgaW1hZ2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VfZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBpbWFnZV9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGxldCBkaXN0YW5jZXMgPSBwYWxldHRlLm1hcChwcmdiID0+IHtcbiAgICAgICAgICBsZXQgW3IxLCBnMSwgYjFdID0gcmdiXG4gICAgICAgICAgbGV0IFtyMiwgZzIsIGIyXSA9IHByZ2JcbiAgICAgICAgICAvLyByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgLy8gICAoKHIyIC0gcjEpICogMSkgXiAoMiArIChnMiAtIGcxKSAqIDEpIF4gKDIgKyAoYjIgLSBiMSkgKiAxKSBeIDJcbiAgICAgICAgICAvLyApXG4gICAgICAgICAgLy8gd2VpZ2h0ZWQgbWF0Y2hcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgICAoKHIyIC0gcjEpICogMC4zKSBeXG4gICAgICAgICAgICAgICgyICsgKGcyIC0gZzEpICogMC41OSkgXlxuICAgICAgICAgICAgICAoMiArIChiMiAtIGIxKSAqIDAuMTEpIF5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcylcbiAgICAgICAgbGV0IG1pbl9pbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbilcbiAgICAgICAgbGV0IGNvbG9yID0gcGFsZXR0ZVttaW5faW5kZXhdXG4gICAgICAgIGxldCBwID0gaSAvIDRcbiAgICAgICAgbGV0IHggPSBwICUgY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IocCAvIGNvbHMpXG4gICAgICAgIHJweC5maWxsU3R5bGUgPSBmaWxsKGNvbG9yKVxuICAgICAgICBycHguZmlsbFJlY3QoeCAqIHNwLCB5ICogc3AsIHNwLCBzcClcbiAgICAgIH1cblxuICAgICAgLy8gY3V0IHVwIG9yaWdpbmFsIGltYWdlXG4gICAgICBsZXQgdGlsZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgdC53aWR0aCA9IHNwXG4gICAgICAgIHQuaGVpZ2h0ID0gc3BcbiAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgbGV0IHggPSBpICUgY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG5cbiAgICAgICAgdHguZHJhd0ltYWdlKGMsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIDAsIDAsIHNwLCBzcClcblxuICAgICAgICBsZXQgY29tcGxleGl0eSA9IHQudG9EYXRhVVJMKCkubGVuZ3RoIC8gKHNwICogc3ApXG5cbiAgICAgICAgdGlsZXMucHVzaCh7IHQsIGM6IGNvbXBsZXhpdHksIHgsIHksIGkgfSlcbiAgICAgIH1cblxuICAgICAgdGlsZXMgPSBfLnNvcnRCeSh0aWxlcywgJ2MnKS5yZXZlcnNlKClcblxuICAgICAgbGV0IHEgPSBxcmVmLmN1cnJlbnRcbiAgICAgIHEuaW5uZXJIVE1MID0gJydcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIGJpZ2dlci53aWR0aCA9IHNwICogMlxuICAgICAgICBiaWdnZXIuaGVpZ2h0ID0gc3AgKiAyXG4gICAgICAgIGxldCBieCA9IGJpZ2dlci5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGJ4LmltYWdlU21vb3RoaW5nRW5hYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IHRpbGUgPSB0aWxlc1tpXVxuICAgICAgICBieC5kcmF3SW1hZ2UodGlsZS50LCAwLCAwLCBiaWdnZXIud2lkdGgsIGJpZ2dlci5oZWlnaHQpXG4gICAgICAgIGxldCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgIC8vIGQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gdGV4dC5zdHlsZS5tYXJnaW5MZWZ0ID0gc3AgLyAyICsgJ3B4J1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGAke3RpbGUuYy50b0ZpeGVkKDMpfWBcbiAgICAgICAgZC5hcHBlbmRDaGlsZChiaWdnZXIpXG4gICAgICAgIGQuYXBwZW5kQ2hpbGQodGV4dClcbiAgICAgICAgcS5hcHBlbmRDaGlsZChkKVxuICAgICAgfVxuXG4gICAgICBsZXQgc3RhdGUgPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgICAgc3RhdGUuaW1nID0gaW1nXG4gICAgICBzdGF0ZS50aWxlcyA9IHRpbGVzXG4gICAgICBzdGF0ZS5jZWxscyA9IGNlbGxzXG4gICAgICBzdGF0ZS5jb2xzID0gY29sc1xuICAgICAgc3RhdGUucm93cyA9IHJvd3NcblxuICAgICAgbGV0IHRpID0gdGlfcmVmLmN1cnJlbnRcbiAgICAgIHRpLndpZHRoID0gaW1nLndpZHRoIC0gc3AgKiA0XG4gICAgICB0aS5oZWlnaHQgPSBzcCAqIDJcblxuICAgICAgLy8gZmF2aWNvblxuICAgICAgbGV0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgZi53aWR0aCA9IDMyXG4gICAgICBmLmhlaWdodCA9IDMyXG4gICAgICBsZXQgZnggPSBmLmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHQud2lkdGggPSA4XG4gICAgICB0LmhlaWdodCA9IDhcbiAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCAwLCAwLCA4LCA4KVxuICAgICAgbGV0IGZhdmljb25fZGF0YSA9IHR4LmdldEltYWdlRGF0YSgwLCAwLCB0LndpZHRoLCB0LmhlaWdodClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmF2aWNvbl9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGZhdmljb25fZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBsZXQgZGlzdGFuY2VzID0gcGFsZXR0ZS5tYXAocHJnYiA9PiB7XG4gICAgICAgICAgbGV0IFtyMSwgZzEsIGIxXSA9IHJnYlxuICAgICAgICAgIGxldCBbcjIsIGcyLCBiMl0gPSBwcmdiXG4gICAgICAgICAgcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgICAgKChyMiAtIHIxKSAqIDAuMykgXlxuICAgICAgICAgICAgICAoMiArIChnMiAtIGcxKSAqIDAuNTkpIF5cbiAgICAgICAgICAgICAgKDIgKyAoYjIgLSBiMSkgKiAwLjExKSBeXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMpXG4gICAgICAgIGxldCBtaW5faW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihtaW4pXG4gICAgICAgIGxldCBjb2xvciA9IHBhbGV0dGVbbWluX2luZGV4XVxuICAgICAgICBsZXQgcCA9IGkgLyA0XG4gICAgICAgIGxldCB4ID0gcCAlIDhcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHAgLyA4KVxuICAgICAgICBmeC5maWxsU3R5bGUgPSBmaWxsKGNvbG9yKVxuICAgICAgICBmeC5maWxsUmVjdCh4ICogNCwgeSAqIDQsIDQsIDQpXG4gICAgICB9XG4gICAgICBzZXRGYXZpY29uKGYudG9EYXRhVVJMKCkpXG5cbiAgICAgIHN0YXRlLnRocmVzaG9sZCA9IDEyMFxuXG4gICAgICByZW5kZXIoKVxuICAgIH1cblxuICAgIGltZy5zcmMgPSBzcmNcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaW1nLnNyYyA9ICd1bmN1dC5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdleG1hY2hpbmEuanBlZydcbiAgICAvLyBpbWcuc3JjID0gJ21ycm9ib3QuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnc3RhbGtlci5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdhY3JvbnltLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ21ycm9ib3QyLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ3ZlaWxhbmNlLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ21jY2FiZS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdjb21wdXRlLnBuZydcbiAgICBsb2FkSW1hZ2UoJ21ycm9ib3QyLmpwZycpXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGNsaWNrU2V0VGhyZXNob2xkKGUpIHtcbiAgICBsZXQgcmVjdCA9IHRpX3JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgbGV0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnRcbiAgICBsZXQgcGVyY2VudCA9IHggLyB0aV9yZWYuY3VycmVudC53aWR0aFxuICAgIGxldCB7IGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgbGV0IG5ld190aHJlc2ggPVxuICAgICAgY2VsbHMgLSBNYXRoLm1pbihjZWxscywgTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChwZXJjZW50ICogY2VsbHMpKSlcbiAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBuZXdfdGhyZXNoXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBsZXQgY3ggPSBjcmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBycCA9IHJwcmVmLmN1cnJlbnRcblxuICAgIGxldCB7IGltZywgdGlsZXMsIGNvbHMsIHJvd3MsIGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgY3guZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuXG4gICAgZm9yIChsZXQgaSA9IHRocmVzaG9sZDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgIGxldCB4ID0gdGlsZS54XG4gICAgICBsZXQgeSA9IHRpbGUueVxuICAgICAgY3guZHJhd0ltYWdlKHJwLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwKVxuICAgIH1cblxuICAgIHRocmVzaF9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBjZWxscyAtIHRocmVzaG9sZCArICcvJyArIGNlbGxzXG5cbiAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgIGxldCB0aXggPSB0aS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aXguZmlsbFN0eWxlID0gJyNkZGQnXG4gICAgdGl4LmZpbGxSZWN0KDAsIDAsIHRpLndpZHRoLCBzcCAqIDIpXG5cbiAgICB0aXguZmlsbFN0eWxlID0gJyM5OTknXG4gICAgbGV0IHRtYXJrID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHRpLndpZHRoICogKChjZWxscyAtIHRocmVzaG9sZCkgLyBjZWxscykpKSxcbiAgICAgIHRpLndpZHRoIC0gMlxuICAgIClcbiAgICB0aXguZmlsbFJlY3QodG1hcmsgLSAxLCAwLCAzLCBzcCAqIDIpXG5cbiAgICBsZXQgcSA9IHFyZWYuY3VycmVudFxuICAgIGxldCBub2RlcyA9IHEuY2hpbGROb2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gbm9kZXNbaV1cbiAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICcnXG4gICAgICBpZiAoaSA8IHRocmVzaG9sZCkge1xuICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAndGhyZXNob2xkX21hcmtlcidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGltX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGltZy53aWR0aCArICd4JyArIGltZy5oZWlnaHRcbiAgICByZWR1Y2VkX3JlZi5jdXJyZW50LmlubmVySFRNTCA9XG4gICAgICAnKCcgK1xuICAgICAgaW1nLndpZHRoICtcbiAgICAgICcvJyArXG4gICAgICBzcCArXG4gICAgICAnKXgoJyArXG4gICAgICBpbWcuaGVpZ2h0ICtcbiAgICAgICcvJyArXG4gICAgICBzcCArXG4gICAgICAnKT0nICtcbiAgICAgIGNvbHMgK1xuICAgICAgJ3gnICtcbiAgICAgIHJvd3NcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoa2V5KSB7XG4gICAga2V5QWN0aW9uKGtleSwgbnVsbClcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcblxuICAgIGlmIChrZXkgPT09ICdvJykge1xuICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKVxuICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpdGVtKVxuICAgICAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgICB9XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdwJykge1xuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICAgICAgY3JlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgJ3Jlcy0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgICAucmVwbGFjZSgvLS9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UoLzovZywgJycpXG4gICAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgICAucmVwbGFjZSgvXFwuL2csICcnKSArXG4gICAgICAgICAgICAnWicgK1xuICAgICAgICAgICAgJy5wbmcnXG4gICAgICAgIClcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpXG4gICAgICAgIGxpbmsuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICBuZXcgTW91c2VFdmVudChgY2xpY2tgLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXc6IHdpbmRvdyxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChrZXkgPT09ICdsJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCAtIDEwXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkICsgMTBcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdMJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoMCwgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkIC0gMSlcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdIJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgKyAxXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICBjbGlja1NldFRocmVzaG9sZChlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyZXIoaWQpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudC5wdXNoKGlkKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VVcChlKSB7XG4gICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUpXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJfcmVmLmN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gY2xlYXJfcmVmLmN1cnJlbnRbaV1cbiAgICAgIGNsZWFySW50ZXJ2YWwoaXRlbSlcbiAgICB9XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgZnVuY3Rpb24gb25Ecm9wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgbGV0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXVxuICAgIGxldCBmaWxlbmFtZSA9IGZpbGUucGF0aCA/IGZpbGUucGF0aCA6IGZpbGUubmFtZSA/IGZpbGUubmFtZSA6ICcnXG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICBsb2FkSW1hZ2Uoc3JjKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EcmFnKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5J1xuICB9XG5cbiAgZnVuY3Rpb24gb25QYXN0ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBlLmNsaXBib2FyZERhdGEuaXRlbXMpIHtcbiAgICAgIGlmIChpdGVtLnR5cGUuaW5kZXhPZignaW1hZ2UnKSA8IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGxldCBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKVxuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSlcbiAgICAgIGxvYWRJbWFnZShzcmMpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKT0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWwgdG91Y2ggZW5kJylcbiAgICB9LCBmYWxzZSlcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIG9uRHJhZywgZmFsc2UpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIG9uRHJvcCwgZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaWQ9XCJmYXZpY29uX2xpbmtcIlxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9e2Zhdmljb259XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiB3aWR0aCAhPT0gbnVsbCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCAqIDIgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwLCBwYWRkaW5nUmlnaHQ6IHNwIH19PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwib1wiXG4gICAgICAgICAgICAgIHRleHRfbGFiZWw9XCJMb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKVwiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdvJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGFiZWw9XCJwXCJcbiAgICAgICAgICAgICAgdGV4dF9sYWJlbD1cIlNhdmUgcmVzdWx0IGFzIHBuZ1wiXG4gICAgICAgICAgICAgIGNsZWFyZXI9e2NsZWFyZXJ9XG4gICAgICAgICAgICAgIHRyaWdnZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyKCdwJylcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBoZWlnaHQ9e3NwICogMjN9XG4gICAgICAgICAgICAgIHJlZj17dGlfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc3AgKiAyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHNwICogMixcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwiaFwiXG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignaCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RocmVzaF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHNwICogMiArICdweCcsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGxhYmVsPVwibFwiXG4gICAgICAgICAgICAgIGN1c3RvbV9zdHlsZT17eyBoZWlnaHQ6IHNwICogMiwgd2lkdGg6IHNwICogMiB9fVxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCwgYmFja2dyb3VuZDogJyNlZmVmZWYnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+SG93IGl0IHdvcmtzPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgQWRqdXN0ZWQgaW1hZ2Ugc2l6ZTogPHNwYW4gcmVmPXtkaW1fcmVmfT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWw6IHtzcH14e3NwfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5SZWR1Y2VkIGltYWdlPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JyZWZ9IC8+XG4gICAgICAgICAgPGRpdiByZWY9e3JlZHVjZWRfcmVmfT48L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGZyb20gcmVkdWNlZCBpbWFnZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtwcmVmfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBVc2luZyB0aGUgbWVkaWFuIGN1dCBhcHByb2FjaHsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zcGluLmF0b21pY29iamVjdC5jb20vMjAxNi8xMi8wNy9waXhlbHMtYW5kLXBhbGV0dGVzLWV4dHJhY3RpbmctY29sb3ItcGFsZXR0ZXMtZnJvbS1pbWFnZXMvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZXhwbGFpbmVkIGhlcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+OC1jb2xvciBwYWxldHRlIGFwcGxpZWQgdG8gcmVkdWNlZCBpbWFnZSBhdCBvcmlnaW5hbCBzaXplPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3JwcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFN1cGVycGl4ZWxzIGZyb20gb3JpZ2luYWwgaW1hZ2Ugc29ydGVkIGJ5IGNvbXBsZXhpdHkgKGRhdGEgVVJMXG4gICAgICAgICAgICBzdHJpbmcgbGVuZ3RoIC8gbnVtYmVyIG9mIHBpeGVscykgc2hvd24gaGVyZSBhdCAyeFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17cXJlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczpcbiAgICAgICAgICAgICAgICAncmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCcgKyBzcCAqIDIgKyAncHgsIDFmcikgKScsXG4gICAgICAgICAgICAgIGdyaWRDb2x1bW5HYXA6IHNwIC8gMixcbiAgICAgICAgICAgICAgZ3JpZFJvd0dhcDogc3AgLyA0LFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAvLyBtYXhIZWlnaHQ6IHNwICogMjEsXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICAgICAgICBmb250U2l6ZTogOSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBJZGVhIGZvciB1c2luZyBjb21wcmVzc2lvbiBhcyBhIHByb3h5IGZvciBjb21wbGV4aXR5eycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTU3OTU1Ny9ob3ctdG8tY29tcGFyZS1pbWFnZXMtYW5kLWRldGVybWluZS13aGljaC1oYXMtbW9yZS1jb250ZW50LzQ1NTc5Njg4IzQ1NTc5Njg4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZnJvbSB0aGlzIHN1Z2dlc3Rpb24gYnkgQXJ0aHVyLTEgb24gU3RhY2tPdmVyZmxvd1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBwYWRkaW5nTGVmdDogc3AsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHNwLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY29uc3RyYWludC5zeXN0ZW1zXCI+Y29uc3RyYWludC5zeXN0ZW1zPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlZpZXcgc291cmNlPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nLCBtb25vc3BhY2U7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgICAudGhyZXNob2xkX21hcmtlciBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNiYmI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXX0= */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0aceceba07de564f9474.hot-update.js.map