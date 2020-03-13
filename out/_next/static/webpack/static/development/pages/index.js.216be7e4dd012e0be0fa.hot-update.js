webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./utils.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/grant/s/cs/res/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



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
      trigger = _ref.trigger;
  var repeat_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  return __jsx("button", {
    style: {
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
    },
    onMouseDown: function onMouseDown(e) {
      repeat_ref.current = setInterval(function () {
        console.log('repeat');
      }, 300);
      clearer(repeat_ref.current);
    },
    onMouseUp: function onMouseUp(e) {
      clearInterval(repeat_ref.current);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, label);
};

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('favicon.png'),
      favicon = _useState2[0],
      setFavicon = _useState2[1];

  var cref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var rref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var pref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var rpref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var qref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var dim_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var reduced_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var km_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({});
  var state_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])({
    img: null,
    tiles: null
  });
  var slider_click_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var ti_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var thresh_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  var clear_ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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
      var dsp = sp;
      var snapw = Math.round(img.width / dsp) * dsp;
      var snapr = snapw / img.width;
      var snaph = Math.round(img.height * snapr / dsp) * dsp;
      img.width = snapw;
      img.height = snaph;
      setWidth(img.width);
      c.width = img.width;
      c.height = img.height;
      var cols = img.width / sp;
      var rows = img.height / sp;
      var cells = cols * rows;
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


      var palette = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["medCut"])(colors); // palette = palette.map(color => color.map(channel => 255 - channel))

      for (var _i = 0; _i < palette.length; _i++) {
        px.fillStyle = fill(palette[_i]);
        px.fillRect(_i * sp, 0, sp, sp);
      } // draw palette image


      var _loop2 = function _loop2(_i2) {
        var rgb = [0, 1, 2].map(function (offset) {
          return image_data.data[_i2 + offset];
        });
        var distances = palette.map(function (prgb) {
          var _rgb = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rgb, 3),
              r1 = _rgb[0],
              g1 = _rgb[1],
              b1 = _rgb[2];

          var _prgb = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prgb, 3),
              r2 = _prgb[0],
              g2 = _prgb[1],
              b2 = _prgb[2]; // return Math.abs(
          //   ((r2 - r1) * 1) ^ (2 + (g2 - g1) * 1) ^ (2 + (b2 - b1) * 1) ^ 2
          // )
          // weighted match


          return Math.abs((r2 - r1) * 0.3 ^ 2 + (g2 - g1) * 0.59 ^ 2 + (b2 - b1) * 0.11 ^ 2);
        });
        var min = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(distances));
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

      tiles = lodash__WEBPACK_IMPORTED_MODULE_6__["sortBy"](tiles, 'c').reverse();
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
      state.rows = rows; // favicon

      var ti = ti_ref.current;
      ti.width = img.width - sp * 2;
      ti.height = sp;
      var tix = ti.getContext('2d');
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
          var _rgb2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(rgb, 3),
              r1 = _rgb2[0],
              g1 = _rgb2[1],
              b1 = _rgb2[2];

          var _prgb2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prgb, 3),
              r2 = _prgb2[0],
              g2 = _prgb2[1],
              b2 = _prgb2[2];

          return Math.abs((r2 - r1) * 0.3 ^ 2 + (g2 - g1) * 0.59 ^ 2 + (b2 - b1) * 0.11 ^ 2);
        });
        var min = Math.min.apply(Math, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(distances));
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
    }; // img.src = 'uncut.jpg'
    // img.src = 'exmachina.jpeg'
    // img.src = 'mrrobot.jpg'
    // img.src = 'stalker.jpg'


    img.src = 'acronym.jpg'; // img.src = 'mrrobot2.jpg'
    // img.src = 'veilance.jpg'
    // img.src = 'mccabe.jpg'
    // img.src = 'compute.png'
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
    tix.fillRect(0, 0, ti.width, ti.height);
    tix.fillStyle = '#999';
    var tmark = Math.min(Math.max(1, Math.round(ti.width * ((cells - threshold) / cells))), ti.width - 2);
    tix.fillRect(tmark - 1, 0, 3, ti.height);
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
    reduced_ref.current.innerHTML = '(' + img.width + '/' + sp + ')x(' + img.height + '/' + sp + ')=' + rows + 'x' + cols;
  }

  function _trigger(key) {
    keyAction(key, null);
  }

  function keyAction(key, event) {
    var km = km_ref.current;

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

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  return __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
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
      lineNumber: 407
    },
    __self: this
  })), __jsx("div", {
    style: {
      width: width !== null ? width + sp * 2 : 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
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
      lineNumber: 422
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, "load image (or paste or drop)"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx(Button, {
    label: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, "save result as png"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
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
      lineNumber: 443
    },
    __self: this
  }, __jsx("canvas", {
    height: sp,
    ref: ti_ref,
    style: {
      position: 'absolute',
      height: sp,
      left: sp,
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
      lineNumber: 451
    },
    __self: this
  }), __jsx(Button, {
    label: "h",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }), __jsx("div", {
    ref: thresh_ref,
    style: {
      flexGrow: 1,
      position: 'relative',
      pointerEvents: 'none'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }), __jsx(Button, {
    label: "l",
    clearer: clearer,
    trigger: function trigger() {
      _trigger('l');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
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
      lineNumber: 481
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  }, "How it works"), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, "Image: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
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
      lineNumber: 517
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543
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
      lineNumber: 544
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3923712137",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlqQnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLFVBZlAsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsb0RBVG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7IGxhYmVsLCB0cmlnZ2VyIH0pID0+IHtcbiAgbGV0IHJlcGVhdF9yZWYgPSB1c2VSZWYobnVsbClcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgd2lkdGg6IHNwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH19XG4gICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmVwZWF0JylcbiAgICAgICAgfSwgMzAwKVxuICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgIH19XG4gICAgICBvbk1vdXNlVXA9e2UgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgIH19XG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApXG59XG5cbmxldCBIb21lID0gKCkgPT4ge1xuICBsZXQgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZShudWxsKVxuICBsZXQgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoJ2Zhdmljb24ucG5nJylcblxuICBsZXQgY3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcnJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcnByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHFyZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgZGltX3JlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcmVkdWNlZF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQga21fcmVmID0gdXNlUmVmKHt9KVxuICBsZXQgc3RhdGVfcmVmID0gdXNlUmVmKHtcbiAgICBpbWc6IG51bGwsXG4gICAgdGlsZXM6IG51bGwsXG4gIH0pXG5cbiAgbGV0IHNsaWRlcl9jbGlja19yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgdGlfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHRocmVzaF9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgY2xlYXJfcmVmID0gdXNlUmVmKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGMgPSBjcmVmLmN1cnJlbnRcbiAgICBsZXQgY3ggPSBjLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgciA9IHJyZWYuY3VycmVudFxuICAgIGxldCByeCA9IHIuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBwID0gcHJlZi5jdXJyZW50XG4gICAgbGV0IHB4ID0gcC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHJwID0gcnByZWYuY3VycmVudFxuICAgIGxldCBycHggPSBycC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgbGV0IGRzcCA9IHNwXG4gICAgICBsZXQgc25hcHcgPSBNYXRoLnJvdW5kKGltZy53aWR0aCAvIGRzcCkgKiBkc3BcbiAgICAgIGxldCBzbmFwciA9IHNuYXB3IC8gaW1nLndpZHRoXG4gICAgICBsZXQgc25hcGggPSBNYXRoLnJvdW5kKChpbWcuaGVpZ2h0ICogc25hcHIpIC8gZHNwKSAqIGRzcFxuXG4gICAgICBpbWcud2lkdGggPSBzbmFwd1xuICAgICAgaW1nLmhlaWdodCA9IHNuYXBoXG5cbiAgICAgIHNldFdpZHRoKGltZy53aWR0aClcblxuICAgICAgYy53aWR0aCA9IGltZy53aWR0aFxuICAgICAgYy5oZWlnaHQgPSBpbWcuaGVpZ2h0XG5cbiAgICAgIGxldCBjb2xzID0gaW1nLndpZHRoIC8gc3BcbiAgICAgIGxldCByb3dzID0gaW1nLmhlaWdodCAvIHNwXG4gICAgICBsZXQgY2VsbHMgPSBjb2xzICogcm93c1xuXG4gICAgICBjeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblxuICAgICAgci53aWR0aCA9IGNvbHNcbiAgICAgIHIuaGVpZ2h0ID0gcm93c1xuXG4gICAgICByeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCwgMCwgMCwgci53aWR0aCwgci5oZWlnaHQpXG5cbiAgICAgIHAud2lkdGggPSBzcCAqIDhcbiAgICAgIHAuaGVpZ2h0ID0gc3BcblxuICAgICAgcnAud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIHJwLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgLy8gZ2V0IGNvbG9ycyBmcm9tIHJlZHVjZWQgaW1hZ2VcbiAgICAgIGxldCBpbWFnZV9kYXRhID0gcnguZ2V0SW1hZ2VEYXRhKDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KVxuICAgICAgbGV0IGNvbG9ycyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gaW1hZ2VfZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBjb2xvcnMucHVzaChyZ2IpXG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBwYWxldHRlIGRyYXcgcGFsZXR0ZVxuICAgICAgbGV0IHBhbGV0dGUgPSBtZWRDdXQoY29sb3JzKVxuICAgICAgLy8gcGFsZXR0ZSA9IHBhbGV0dGUubWFwKGNvbG9yID0+IGNvbG9yLm1hcChjaGFubmVsID0+IDI1NSAtIGNoYW5uZWwpKVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYWxldHRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHB4LmZpbGxTdHlsZSA9IGZpbGwocGFsZXR0ZVtpXSlcbiAgICAgICAgcHguZmlsbFJlY3QoaSAqIHNwLCAwLCBzcCwgc3ApXG4gICAgICB9XG5cbiAgICAgIC8vIGRyYXcgcGFsZXR0ZSBpbWFnZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZV9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGltYWdlX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IHBhbGV0dGUubWFwKHByZ2IgPT4ge1xuICAgICAgICAgIGxldCBbcjEsIGcxLCBiMV0gPSByZ2JcbiAgICAgICAgICBsZXQgW3IyLCBnMiwgYjJdID0gcHJnYlxuICAgICAgICAgIC8vIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAvLyAgICgocjIgLSByMSkgKiAxKSBeICgyICsgKGcyIC0gZzEpICogMSkgXiAoMiArIChiMiAtIGIxKSAqIDEpIF4gMlxuICAgICAgICAgIC8vIClcbiAgICAgICAgICAvLyB3ZWlnaHRlZCBtYXRjaFxuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgICgocjIgLSByMSkgKiAwLjMpIF5cbiAgICAgICAgICAgICAgKDIgKyAoZzIgLSBnMSkgKiAwLjU5KSBeXG4gICAgICAgICAgICAgICgyICsgKGIyIC0gYjEpICogMC4xMSkgXlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKVxuICAgICAgICBsZXQgbWluX2luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YobWluKVxuICAgICAgICBsZXQgY29sb3IgPSBwYWxldHRlW21pbl9pbmRleF1cbiAgICAgICAgbGV0IHAgPSBpIC8gNFxuICAgICAgICBsZXQgeCA9IHAgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihwIC8gY29scylcbiAgICAgICAgcnB4LmZpbGxTdHlsZSA9IGZpbGwoY29sb3IpXG4gICAgICAgIHJweC5maWxsUmVjdCh4ICogc3AsIHkgKiBzcCwgc3AsIHNwKVxuICAgICAgfVxuXG4gICAgICAvLyBjdXQgdXAgb3JpZ2luYWwgaW1hZ2VcbiAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICB0LndpZHRoID0gc3BcbiAgICAgICAgdC5oZWlnaHQgPSBzcFxuICAgICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcblxuICAgICAgICBsZXQgeCA9IGkgJSBjb2xzXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihpIC8gY29scylcblxuICAgICAgICB0eC5kcmF3SW1hZ2UoYywgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgMCwgMCwgc3AsIHNwKVxuXG4gICAgICAgIGxldCBjb21wbGV4aXR5ID0gdC50b0RhdGFVUkwoKS5sZW5ndGggLyAoc3AgKiBzcClcblxuICAgICAgICB0aWxlcy5wdXNoKHsgdCwgYzogY29tcGxleGl0eSwgeCwgeSwgaSB9KVxuICAgICAgfVxuXG4gICAgICB0aWxlcyA9IF8uc29ydEJ5KHRpbGVzLCAnYycpLnJldmVyc2UoKVxuXG4gICAgICBsZXQgcSA9IHFyZWYuY3VycmVudFxuICAgICAgcS5pbm5lckhUTUwgPSAnJ1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYmlnZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgYmlnZ2VyLndpZHRoID0gc3AgKiAyXG4gICAgICAgIGJpZ2dlci5oZWlnaHQgPSBzcCAqIDJcbiAgICAgICAgbGV0IGJ4ID0gYmlnZ2VyLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgYnguaW1hZ2VTbW9vdGhpbmdFbmFibGUgPSBmYWxzZVxuICAgICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICAgIGJ4LmRyYXdJbWFnZSh0aWxlLnQsIDAsIDAsIGJpZ2dlci53aWR0aCwgYmlnZ2VyLmhlaWdodClcbiAgICAgICAgbGV0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyBkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICAgICAgLy8gZC5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAvLyB0ZXh0LnN0eWxlLm1hcmdpbkxlZnQgPSBzcCAvIDIgKyAncHgnXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gYCR7dGlsZS5jLnRvRml4ZWQoMyl9YFxuICAgICAgICBkLmFwcGVuZENoaWxkKGJpZ2dlcilcbiAgICAgICAgZC5hcHBlbmRDaGlsZCh0ZXh0KVxuICAgICAgICBxLmFwcGVuZENoaWxkKGQpXG4gICAgICB9XG5cbiAgICAgIGxldCBzdGF0ZSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgICBzdGF0ZS5pbWcgPSBpbWdcbiAgICAgIHN0YXRlLnRpbGVzID0gdGlsZXNcbiAgICAgIHN0YXRlLmNlbGxzID0gY2VsbHNcbiAgICAgIHN0YXRlLmNvbHMgPSBjb2xzXG4gICAgICBzdGF0ZS5yb3dzID0gcm93c1xuXG4gICAgICAvLyBmYXZpY29uXG4gICAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgICAgdGkud2lkdGggPSBpbWcud2lkdGggLSBzcCAqIDJcbiAgICAgIHRpLmhlaWdodCA9IHNwXG4gICAgICBsZXQgdGl4ID0gdGkuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgbGV0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgZi53aWR0aCA9IDMyXG4gICAgICBmLmhlaWdodCA9IDMyXG4gICAgICBsZXQgZnggPSBmLmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIHQud2lkdGggPSA4XG4gICAgICB0LmhlaWdodCA9IDhcbiAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCAwLCAwLCA4LCA4KVxuICAgICAgbGV0IGZhdmljb25fZGF0YSA9IHR4LmdldEltYWdlRGF0YSgwLCAwLCB0LndpZHRoLCB0LmhlaWdodClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmF2aWNvbl9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGZhdmljb25fZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBsZXQgZGlzdGFuY2VzID0gcGFsZXR0ZS5tYXAocHJnYiA9PiB7XG4gICAgICAgICAgbGV0IFtyMSwgZzEsIGIxXSA9IHJnYlxuICAgICAgICAgIGxldCBbcjIsIGcyLCBiMl0gPSBwcmdiXG4gICAgICAgICAgcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgICAgKChyMiAtIHIxKSAqIDAuMykgXlxuICAgICAgICAgICAgICAoMiArIChnMiAtIGcxKSAqIDAuNTkpIF5cbiAgICAgICAgICAgICAgKDIgKyAoYjIgLSBiMSkgKiAwLjExKSBeXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMpXG4gICAgICAgIGxldCBtaW5faW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihtaW4pXG4gICAgICAgIGxldCBjb2xvciA9IHBhbGV0dGVbbWluX2luZGV4XVxuICAgICAgICBsZXQgcCA9IGkgLyA0XG4gICAgICAgIGxldCB4ID0gcCAlIDhcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHAgLyA4KVxuICAgICAgICBmeC5maWxsU3R5bGUgPSBmaWxsKGNvbG9yKVxuICAgICAgICBmeC5maWxsUmVjdCh4ICogNCwgeSAqIDQsIDQsIDQpXG4gICAgICB9XG4gICAgICBzZXRGYXZpY29uKGYudG9EYXRhVVJMKCkpXG5cbiAgICAgIHN0YXRlLnRocmVzaG9sZCA9IDEyMFxuXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgICAvLyBpbWcuc3JjID0gJ3VuY3V0LmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2V4bWFjaGluYS5qcGVnJ1xuICAgIC8vIGltZy5zcmMgPSAnbXJyb2JvdC5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdzdGFsa2VyLmpwZydcbiAgICBpbWcuc3JjID0gJ2Fjcm9ueW0uanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnbXJyb2JvdDIuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAndmVpbGFuY2UuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnbWNjYWJlLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ2NvbXB1dGUucG5nJ1xuICB9LCBbXSlcblxuICBmdW5jdGlvbiBjbGlja1NldFRocmVzaG9sZChlKSB7XG4gICAgbGV0IHJlY3QgPSB0aV9yZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGxldCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0XG4gICAgbGV0IHBlcmNlbnQgPSB4IC8gdGlfcmVmLmN1cnJlbnQud2lkdGhcbiAgICBsZXQgeyBjZWxscywgdGhyZXNob2xkIH0gPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgIGxldCBuZXdfdGhyZXNoID1cbiAgICAgIGNlbGxzIC0gTWF0aC5taW4oY2VsbHMsIE1hdGgubWF4KDAsIE1hdGgucm91bmQocGVyY2VudCAqIGNlbGxzKSkpXG4gICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gbmV3X3RocmVzaFxuICAgIHJlbmRlcigpXG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgbGV0IGN4ID0gY3JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcnAgPSBycHJlZi5jdXJyZW50XG5cbiAgICBsZXQgeyBpbWcsIHRpbGVzLCBjb2xzLCByb3dzLCBjZWxscywgdGhyZXNob2xkIH0gPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodClcblxuICAgIGZvciAobGV0IGkgPSB0aHJlc2hvbGQ7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICBsZXQgdGlsZSA9IHRpbGVzW2ldXG4gICAgICBsZXQgeCA9IHRpbGUueFxuICAgICAgbGV0IHkgPSB0aWxlLnlcbiAgICAgIGN4LmRyYXdJbWFnZShycCwgeCAqIHNwLCB5ICogc3AsIHNwLCBzcCwgeCAqIHNwLCB5ICogc3AsIHNwLCBzcClcbiAgICB9XG5cbiAgICB0aHJlc2hfcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gY2VsbHMgLSB0aHJlc2hvbGQgKyAnLycgKyBjZWxsc1xuXG4gICAgbGV0IHRpID0gdGlfcmVmLmN1cnJlbnRcbiAgICBsZXQgdGl4ID0gdGkuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjZGRkJ1xuICAgIHRpeC5maWxsUmVjdCgwLCAwLCB0aS53aWR0aCwgdGkuaGVpZ2h0KVxuXG4gICAgdGl4LmZpbGxTdHlsZSA9ICcjOTk5J1xuICAgIGxldCB0bWFyayA9IE1hdGgubWluKFxuICAgICAgTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0aS53aWR0aCAqICgoY2VsbHMgLSB0aHJlc2hvbGQpIC8gY2VsbHMpKSksXG4gICAgICB0aS53aWR0aCAtIDJcbiAgICApXG4gICAgdGl4LmZpbGxSZWN0KHRtYXJrIC0gMSwgMCwgMywgdGkuaGVpZ2h0KVxuXG4gICAgbGV0IHEgPSBxcmVmLmN1cnJlbnRcbiAgICBsZXQgbm9kZXMgPSBxLmNoaWxkTm9kZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IG5vZGVzW2ldXG4gICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgaWYgKGkgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJ3RocmVzaG9sZF9tYXJrZXInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpbV9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBpbWcud2lkdGggKyAneCcgKyBpbWcuaGVpZ2h0XG4gICAgcmVkdWNlZF9yZWYuY3VycmVudC5pbm5lckhUTUwgPVxuICAgICAgJygnICtcbiAgICAgIGltZy53aWR0aCArXG4gICAgICAnLycgK1xuICAgICAgc3AgK1xuICAgICAgJyl4KCcgK1xuICAgICAgaW1nLmhlaWdodCArXG4gICAgICAnLycgK1xuICAgICAgc3AgK1xuICAgICAgJyk9JyArXG4gICAgICByb3dzICtcbiAgICAgICd4JyArXG4gICAgICBjb2xzXG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyKGtleSkge1xuICAgIGtleUFjdGlvbihrZXksIG51bGwpXG4gIH1cblxuICBmdW5jdGlvbiBrZXlBY3Rpb24oa2V5LCBldmVudCkge1xuICAgIGxldCBrbSA9IGttX3JlZi5jdXJyZW50XG5cbiAgICBpZiAoa2V5ID09PSAnbCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgLSAxMFxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2gnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCArIDEwXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnTCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWF4KDAsIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCAtIDEpXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnSCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkICsgMVxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkb3duSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gdHJ1ZVxuICAgIGtleUFjdGlvbihlLmtleSwgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwSGFuZGxlcihlKSB7XG4gICAga21fcmVmLmN1cnJlbnRbZS5rZXldID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcmVyKGlkKSB7XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQucHVzaChpZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IGZhbHNlXG4gICAgICBjbGlja1NldFRocmVzaG9sZChlKVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsZWFyX3JlZi5jdXJyZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaXRlbSA9IGNsZWFyX3JlZi5jdXJyZW50W2ldXG4gICAgICBjbGVhckludGVydmFsKGl0ZW0pXG4gICAgfVxuICAgIGNsZWFyX3JlZi5jdXJyZW50ID0gW11cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cEhhbmRsZXIpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZXM8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGlkPVwiZmF2aWNvbl9saW5rXCJcbiAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBocmVmPXtmYXZpY29ufVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHdpZHRoICE9PSBudWxsID8gd2lkdGggKyBzcCAqIDIgOiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IHNwLCBwYWRkaW5nUmlnaHQ6IHNwIH19PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIm9cIiAvPlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgICAgPGRpdj5sb2FkIGltYWdlIChvciBwYXN0ZSBvciBkcm9wKTwvZGl2PlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwicFwiIC8+XG4gICAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgICA8ZGl2PnNhdmUgcmVzdWx0IGFzIHBuZzwvZGl2PlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17Y3JlZn0gLz5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgaGVpZ2h0PXtzcH1cbiAgICAgICAgICAgICAgcmVmPXt0aV9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzcCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBzcCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnY3Jvc3NoYWlyJyxcbiAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiaFwiIC8+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHJlZj17dGhyZXNoX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwibFwiIGNsZWFyZXI9e2NsZWFyZXJ9IHRyaWdnZXI9eygpID0+IHt0cmlnZ2VyKCdsJyl9fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCwgYmFja2dyb3VuZDogJyNlZmVmZWYnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+SG93IGl0IHdvcmtzPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSW1hZ2U6IDxzcGFuIHJlZj17ZGltX3JlZn0+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTdXBlcnBpeGVsOiB7c3B9eHtzcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+UmVkdWNlZCBpbWFnZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtycmVmfSAvPlxuICAgICAgICAgIDxkaXYgcmVmPXtyZWR1Y2VkX3JlZn0+PC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PjgtY29sb3IgcGFsZXR0ZSBmcm9tIHJlZHVjZWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17cHJlZn0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVXNpbmcgdGhlIG1lZGlhbiBjdXQgYXBwcm9hY2h7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3Bpbi5hdG9taWNvYmplY3QuY29tLzIwMTYvMTIvMDcvcGl4ZWxzLWFuZC1wYWxldHRlcy1leHRyYWN0aW5nLWNvbG9yLXBhbGV0dGVzLWZyb20taW1hZ2VzL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGV4cGxhaW5lZCBoZXJlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PjgtY29sb3IgcGFsZXR0ZSBhcHBsaWVkIHRvIHJlZHVjZWQgaW1hZ2UgYXQgb3JpZ2luYWwgc2l6ZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtycHJlZn0gLz5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTdXBlcnBpeGVscyBmcm9tIG9yaWdpbmFsIGltYWdlIHNvcnRlZCBieSBjb21wbGV4aXR5IChkYXRhIFVSTFxuICAgICAgICAgICAgc3RyaW5nIGxlbmd0aCAvIG51bWJlciBvZiBwaXhlbHMpIHNob3duIGhlcmUgYXQgMnhcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3FyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6XG4gICAgICAgICAgICAgICAgJ3JlcGVhdCggYXV0by1maXQsIG1pbm1heCgnICsgc3AgKiAyICsgJ3B4LCAxZnIpICknLFxuICAgICAgICAgICAgICBncmlkQ29sdW1uR2FwOiBzcCAvIDIsXG4gICAgICAgICAgICAgIGdyaWRSb3dHYXA6IHNwIC8gNCxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgLy8gbWF4SGVpZ2h0OiBzcCAqIDIxLFxuICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSWRlYSBmb3IgdXNpbmcgY29tcHJlc3Npb24gYXMgYSBwcm94eSBmb3IgY29tcGxleGl0eXsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDU1Nzk1NTcvaG93LXRvLWNvbXBhcmUtaW1hZ2VzLWFuZC1kZXRlcm1pbmUtd2hpY2gtaGFzLW1vcmUtY29udGVudC80NTU3OTY4OCM0NTU3OTY4OFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZyb20gdGhpcyBzdWdnZXN0aW9uIGJ5IEFydGh1ci0xIG9uIFN0YWNrT3ZlcmZsb3dcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHNwLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvbnN0cmFpbnQuc3lzdGVtc1wiPmNvbnN0cmFpbnQuc3lzdGVtczwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5WaWV3IHNvdXJjZTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRocmVzaG9sZF9tYXJrZXIgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.216be7e4dd012e0be0fa.hot-update.js.map