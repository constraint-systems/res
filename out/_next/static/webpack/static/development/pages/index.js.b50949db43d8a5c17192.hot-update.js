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
      clearer = _ref.clearer,
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
        trigger();
      }, 100);
      clearer(repeat_ref.current);
      trigger();
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
      lineNumber: 405
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
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
      lineNumber: 408
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
      lineNumber: 416
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
      lineNumber: 423
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "load image (or paste or drop)"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, __jsx(Button, {
    label: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, "save result as png"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
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
      lineNumber: 444
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
      lineNumber: 452
    },
    __self: this
  }), __jsx(Button, {
    label: "h",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
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
      lineNumber: 469
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
      lineNumber: 477
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
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
      lineNumber: 488
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492
    },
    __self: this
  }, "How it works"), __jsx(Line, {
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
  }, "Image: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501
    },
    __self: this
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
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
      lineNumber: 524
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
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
      lineNumber: 551
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3923712137",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdqQnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLFVBZlAsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsb0RBVG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7IGxhYmVsLCBjbGVhcmVyLCB0cmlnZ2VyIH0pID0+IHtcbiAgbGV0IHJlcGVhdF9yZWYgPSB1c2VSZWYobnVsbClcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgd2lkdGg6IHNwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH19XG4gICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgIHJlcGVhdF9yZWYuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgfSwgMTAwKVxuICAgICAgICBjbGVhcmVyKHJlcGVhdF9yZWYuY3VycmVudClcbiAgICAgICAgdHJpZ2dlcigpXG4gICAgICB9fVxuICAgICAgb25Nb3VzZVVwPXtlID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChyZXBlYXRfcmVmLmN1cnJlbnQpXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5sZXQgSG9tZSA9ICgpID0+IHtcbiAgbGV0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgbGV0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKCdmYXZpY29uLnBuZycpXG5cbiAgbGV0IGNyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJyZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHByZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBxcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGRpbV9yZWYgPSB1c2VSZWYobnVsbClcbiAgbGV0IHJlZHVjZWRfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGttX3JlZiA9IHVzZVJlZih7fSlcbiAgbGV0IHN0YXRlX3JlZiA9IHVzZVJlZih7XG4gICAgaW1nOiBudWxsLFxuICAgIHRpbGVzOiBudWxsLFxuICB9KVxuXG4gIGxldCBzbGlkZXJfY2xpY2tfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IHRpX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCB0aHJlc2hfcmVmID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGNsZWFyX3JlZiA9IHVzZVJlZihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjID0gY3JlZi5jdXJyZW50XG4gICAgbGV0IGN4ID0gYy5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHIgPSBycmVmLmN1cnJlbnRcbiAgICBsZXQgcnggPSByLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcCA9IHByZWYuY3VycmVudFxuICAgIGxldCBweCA9IHAuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBycCA9IHJwcmVmLmN1cnJlbnRcbiAgICBsZXQgcnB4ID0gcnAuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxldCBkc3AgPSBzcFxuICAgICAgbGV0IHNuYXB3ID0gTWF0aC5yb3VuZChpbWcud2lkdGggLyBkc3ApICogZHNwXG4gICAgICBsZXQgc25hcHIgPSBzbmFwdyAvIGltZy53aWR0aFxuICAgICAgbGV0IHNuYXBoID0gTWF0aC5yb3VuZCgoaW1nLmhlaWdodCAqIHNuYXByKSAvIGRzcCkgKiBkc3BcblxuICAgICAgaW1nLndpZHRoID0gc25hcHdcbiAgICAgIGltZy5oZWlnaHQgPSBzbmFwaFxuXG4gICAgICBzZXRXaWR0aChpbWcud2lkdGgpXG5cbiAgICAgIGMud2lkdGggPSBpbWcud2lkdGhcbiAgICAgIGMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBsZXQgY29scyA9IGltZy53aWR0aCAvIHNwXG4gICAgICBsZXQgcm93cyA9IGltZy5oZWlnaHQgLyBzcFxuICAgICAgbGV0IGNlbGxzID0gY29scyAqIHJvd3NcblxuICAgICAgY3guZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpXG5cbiAgICAgIHIud2lkdGggPSBjb2xzXG4gICAgICByLmhlaWdodCA9IHJvd3NcblxuICAgICAgcnguZHJhd0ltYWdlKGltZywgMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQsIDAsIDAsIHIud2lkdGgsIHIuaGVpZ2h0KVxuXG4gICAgICBwLndpZHRoID0gc3AgKiA4XG4gICAgICBwLmhlaWdodCA9IHNwXG5cbiAgICAgIHJwLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBycC5oZWlnaHQgPSBpbWcuaGVpZ2h0XG5cbiAgICAgIC8vIGdldCBjb2xvcnMgZnJvbSByZWR1Y2VkIGltYWdlXG4gICAgICBsZXQgaW1hZ2VfZGF0YSA9IHJ4LmdldEltYWdlRGF0YSgwLCAwLCByLndpZHRoLCByLmhlaWdodClcbiAgICAgIGxldCBjb2xvcnMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZV9kYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgbGV0IHJnYiA9IFswLCAxLCAyXS5tYXAob2Zmc2V0ID0+IGltYWdlX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgY29sb3JzLnB1c2gocmdiKVxuICAgICAgfVxuXG4gICAgICAvLyBnZXQgcGFsZXR0ZSBkcmF3IHBhbGV0dGVcbiAgICAgIGxldCBwYWxldHRlID0gbWVkQ3V0KGNvbG9ycylcbiAgICAgIC8vIHBhbGV0dGUgPSBwYWxldHRlLm1hcChjb2xvciA9PiBjb2xvci5tYXAoY2hhbm5lbCA9PiAyNTUgLSBjaGFubmVsKSlcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFsZXR0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBweC5maWxsU3R5bGUgPSBmaWxsKHBhbGV0dGVbaV0pXG4gICAgICAgIHB4LmZpbGxSZWN0KGkgKiBzcCwgMCwgc3AsIHNwKVxuICAgICAgfVxuXG4gICAgICAvLyBkcmF3IHBhbGV0dGUgaW1hZ2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VfZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBpbWFnZV9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGxldCBkaXN0YW5jZXMgPSBwYWxldHRlLm1hcChwcmdiID0+IHtcbiAgICAgICAgICBsZXQgW3IxLCBnMSwgYjFdID0gcmdiXG4gICAgICAgICAgbGV0IFtyMiwgZzIsIGIyXSA9IHByZ2JcbiAgICAgICAgICAvLyByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgLy8gICAoKHIyIC0gcjEpICogMSkgXiAoMiArIChnMiAtIGcxKSAqIDEpIF4gKDIgKyAoYjIgLSBiMSkgKiAxKSBeIDJcbiAgICAgICAgICAvLyApXG4gICAgICAgICAgLy8gd2VpZ2h0ZWQgbWF0Y2hcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgICAoKHIyIC0gcjEpICogMC4zKSBeXG4gICAgICAgICAgICAgICgyICsgKGcyIC0gZzEpICogMC41OSkgXlxuICAgICAgICAgICAgICAoMiArIChiMiAtIGIxKSAqIDAuMTEpIF5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcylcbiAgICAgICAgbGV0IG1pbl9pbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbilcbiAgICAgICAgbGV0IGNvbG9yID0gcGFsZXR0ZVttaW5faW5kZXhdXG4gICAgICAgIGxldCBwID0gaSAvIDRcbiAgICAgICAgbGV0IHggPSBwICUgY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IocCAvIGNvbHMpXG4gICAgICAgIHJweC5maWxsU3R5bGUgPSBmaWxsKGNvbG9yKVxuICAgICAgICBycHguZmlsbFJlY3QoeCAqIHNwLCB5ICogc3AsIHNwLCBzcClcbiAgICAgIH1cblxuICAgICAgLy8gY3V0IHVwIG9yaWdpbmFsIGltYWdlXG4gICAgICBsZXQgdGlsZXMgPSBbXVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgICAgdC53aWR0aCA9IHNwXG4gICAgICAgIHQuaGVpZ2h0ID0gc3BcbiAgICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICAgICAgbGV0IHggPSBpICUgY29sc1xuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoaSAvIGNvbHMpXG5cbiAgICAgICAgdHguZHJhd0ltYWdlKGMsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIDAsIDAsIHNwLCBzcClcblxuICAgICAgICBsZXQgY29tcGxleGl0eSA9IHQudG9EYXRhVVJMKCkubGVuZ3RoIC8gKHNwICogc3ApXG5cbiAgICAgICAgdGlsZXMucHVzaCh7IHQsIGM6IGNvbXBsZXhpdHksIHgsIHksIGkgfSlcbiAgICAgIH1cblxuICAgICAgdGlsZXMgPSBfLnNvcnRCeSh0aWxlcywgJ2MnKS5yZXZlcnNlKClcblxuICAgICAgbGV0IHEgPSBxcmVmLmN1cnJlbnRcbiAgICAgIHEuaW5uZXJIVE1MID0gJydcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJpZ2dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIGJpZ2dlci53aWR0aCA9IHNwICogMlxuICAgICAgICBiaWdnZXIuaGVpZ2h0ID0gc3AgKiAyXG4gICAgICAgIGxldCBieCA9IGJpZ2dlci5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGJ4LmltYWdlU21vb3RoaW5nRW5hYmxlID0gZmFsc2VcbiAgICAgICAgbGV0IHRpbGUgPSB0aWxlc1tpXVxuICAgICAgICBieC5kcmF3SW1hZ2UodGlsZS50LCAwLCAwLCBiaWdnZXIud2lkdGgsIGJpZ2dlci5oZWlnaHQpXG4gICAgICAgIGxldCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgIC8vIGQuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgLy8gdGV4dC5zdHlsZS5tYXJnaW5MZWZ0ID0gc3AgLyAyICsgJ3B4J1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGAke3RpbGUuYy50b0ZpeGVkKDMpfWBcbiAgICAgICAgZC5hcHBlbmRDaGlsZChiaWdnZXIpXG4gICAgICAgIGQuYXBwZW5kQ2hpbGQodGV4dClcbiAgICAgICAgcS5hcHBlbmRDaGlsZChkKVxuICAgICAgfVxuXG4gICAgICBsZXQgc3RhdGUgPSBzdGF0ZV9yZWYuY3VycmVudFxuICAgICAgc3RhdGUuaW1nID0gaW1nXG4gICAgICBzdGF0ZS50aWxlcyA9IHRpbGVzXG4gICAgICBzdGF0ZS5jZWxscyA9IGNlbGxzXG4gICAgICBzdGF0ZS5jb2xzID0gY29sc1xuICAgICAgc3RhdGUucm93cyA9IHJvd3NcblxuICAgICAgLy8gZmF2aWNvblxuICAgICAgbGV0IHRpID0gdGlfcmVmLmN1cnJlbnRcbiAgICAgIHRpLndpZHRoID0gaW1nLndpZHRoIC0gc3AgKiAyXG4gICAgICB0aS5oZWlnaHQgPSBzcFxuICAgICAgbGV0IHRpeCA9IHRpLmdldENvbnRleHQoJzJkJylcbiAgICAgIGxldCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICAgIGYud2lkdGggPSAzMlxuICAgICAgZi5oZWlnaHQgPSAzMlxuICAgICAgbGV0IGZ4ID0gZi5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICB0LndpZHRoID0gOFxuICAgICAgdC5oZWlnaHQgPSA4XG4gICAgICBsZXQgdHggPSB0LmdldENvbnRleHQoJzJkJylcbiAgICAgIHR4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgMCwgMCwgOCwgOClcbiAgICAgIGxldCBmYXZpY29uX2RhdGEgPSB0eC5nZXRJbWFnZURhdGEoMCwgMCwgdC53aWR0aCwgdC5oZWlnaHQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZhdmljb25fZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBmYXZpY29uX2RhdGEuZGF0YVtpICsgb2Zmc2V0XSlcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IHBhbGV0dGUubWFwKHByZ2IgPT4ge1xuICAgICAgICAgIGxldCBbcjEsIGcxLCBiMV0gPSByZ2JcbiAgICAgICAgICBsZXQgW3IyLCBnMiwgYjJdID0gcHJnYlxuICAgICAgICAgIHJldHVybiBNYXRoLmFicyhcbiAgICAgICAgICAgICgocjIgLSByMSkgKiAwLjMpIF5cbiAgICAgICAgICAgICAgKDIgKyAoZzIgLSBnMSkgKiAwLjU5KSBeXG4gICAgICAgICAgICAgICgyICsgKGIyIC0gYjEpICogMC4xMSkgXlxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICBsZXQgbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzKVxuICAgICAgICBsZXQgbWluX2luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YobWluKVxuICAgICAgICBsZXQgY29sb3IgPSBwYWxldHRlW21pbl9pbmRleF1cbiAgICAgICAgbGV0IHAgPSBpIC8gNFxuICAgICAgICBsZXQgeCA9IHAgJSA4XG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihwIC8gOClcbiAgICAgICAgZnguZmlsbFN0eWxlID0gZmlsbChjb2xvcilcbiAgICAgICAgZnguZmlsbFJlY3QoeCAqIDQsIHkgKiA0LCA0LCA0KVxuICAgICAgfVxuICAgICAgc2V0RmF2aWNvbihmLnRvRGF0YVVSTCgpKVxuXG4gICAgICBzdGF0ZS50aHJlc2hvbGQgPSAxMjBcblxuICAgICAgcmVuZGVyKClcbiAgICB9XG4gICAgLy8gaW1nLnNyYyA9ICd1bmN1dC5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdleG1hY2hpbmEuanBlZydcbiAgICAvLyBpbWcuc3JjID0gJ21ycm9ib3QuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnc3RhbGtlci5qcGcnXG4gICAgaW1nLnNyYyA9ICdhY3JvbnltLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ21ycm9ib3QyLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ3ZlaWxhbmNlLmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ21jY2FiZS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdjb21wdXRlLnBuZydcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gY2xpY2tTZXRUaHJlc2hvbGQoZSkge1xuICAgIGxldCByZWN0ID0gdGlfcmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBsZXQgeCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdFxuICAgIGxldCBwZXJjZW50ID0geCAvIHRpX3JlZi5jdXJyZW50LndpZHRoXG4gICAgbGV0IHsgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICBsZXQgbmV3X3RocmVzaCA9XG4gICAgICBjZWxscyAtIE1hdGgubWluKGNlbGxzLCBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHBlcmNlbnQgKiBjZWxscykpKVxuICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IG5ld190aHJlc2hcbiAgICByZW5kZXIoKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGxldCBjeCA9IGNyZWYuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHJwID0gcnByZWYuY3VycmVudFxuXG4gICAgbGV0IHsgaW1nLCB0aWxlcywgY29scywgcm93cywgY2VsbHMsIHRocmVzaG9sZCB9ID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICBjeC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQpXG5cbiAgICBmb3IgKGxldCBpID0gdGhyZXNob2xkOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgbGV0IHRpbGUgPSB0aWxlc1tpXVxuICAgICAgbGV0IHggPSB0aWxlLnhcbiAgICAgIGxldCB5ID0gdGlsZS55XG4gICAgICBjeC5kcmF3SW1hZ2UocnAsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3AsIHggKiBzcCwgeSAqIHNwLCBzcCwgc3ApXG4gICAgfVxuXG4gICAgdGhyZXNoX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGNlbGxzIC0gdGhyZXNob2xkICsgJy8nICsgY2VsbHNcblxuICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgbGV0IHRpeCA9IHRpLmdldENvbnRleHQoJzJkJylcblxuICAgIHRpeC5maWxsU3R5bGUgPSAnI2RkZCdcbiAgICB0aXguZmlsbFJlY3QoMCwgMCwgdGkud2lkdGgsIHRpLmhlaWdodClcblxuICAgIHRpeC5maWxsU3R5bGUgPSAnIzk5OSdcbiAgICBsZXQgdG1hcmsgPSBNYXRoLm1pbihcbiAgICAgIE1hdGgubWF4KDEsIE1hdGgucm91bmQodGkud2lkdGggKiAoKGNlbGxzIC0gdGhyZXNob2xkKSAvIGNlbGxzKSkpLFxuICAgICAgdGkud2lkdGggLSAyXG4gICAgKVxuICAgIHRpeC5maWxsUmVjdCh0bWFyayAtIDEsIDAsIDMsIHRpLmhlaWdodClcblxuICAgIGxldCBxID0gcXJlZi5jdXJyZW50XG4gICAgbGV0IG5vZGVzID0gcS5jaGlsZE5vZGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5vZGUgPSBub2Rlc1tpXVxuICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJydcbiAgICAgIGlmIChpIDwgdGhyZXNob2xkKSB7XG4gICAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICd0aHJlc2hvbGRfbWFya2VyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaW1fcmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gaW1nLndpZHRoICsgJ3gnICsgaW1nLmhlaWdodFxuICAgIHJlZHVjZWRfcmVmLmN1cnJlbnQuaW5uZXJIVE1MID1cbiAgICAgICcoJyArXG4gICAgICBpbWcud2lkdGggK1xuICAgICAgJy8nICtcbiAgICAgIHNwICtcbiAgICAgICcpeCgnICtcbiAgICAgIGltZy5oZWlnaHQgK1xuICAgICAgJy8nICtcbiAgICAgIHNwICtcbiAgICAgICcpPScgK1xuICAgICAgcm93cyArXG4gICAgICAneCcgK1xuICAgICAgY29sc1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlcihrZXkpIHtcbiAgICBrZXlBY3Rpb24oa2V5LCBudWxsKVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGtleSwgZXZlbnQpIHtcbiAgICBsZXQga20gPSBrbV9yZWYuY3VycmVudFxuXG4gICAgaWYgKGtleSA9PT0gJ2wnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heChcbiAgICAgICAgMCxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkIC0gMTBcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdoJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgKyAxMFxuICAgICAgKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0wnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1heCgwLCBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgLSAxKVxuICAgICAgcmVuZGVyKClcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0gnKSB7XG4gICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBNYXRoLm1pbihcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQuY2VsbHMsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCArIDFcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZG93bkhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IHRydWVcbiAgICBrZXlBY3Rpb24oZS5rZXksIGUpXG4gIH1cblxuICBmdW5jdGlvbiB1cEhhbmRsZXIoZSkge1xuICAgIGttX3JlZi5jdXJyZW50W2Uua2V5XSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZSkge1xuICAgIGlmIChzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQpIHtcbiAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJlcihpZCkge1xuICAgIGNsZWFyX3JlZi5jdXJyZW50LnB1c2goaWQpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICBzbGlkZXJfY2xpY2tfcmVmLmN1cnJlbnQgPSBmYWxzZVxuICAgICAgY2xpY2tTZXRUaHJlc2hvbGQoZSlcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGVhcl9yZWYuY3VycmVudC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGl0ZW0gPSBjbGVhcl9yZWYuY3VycmVudFtpXVxuICAgICAgY2xlYXJJbnRlcnZhbChpdGVtKVxuICAgIH1cbiAgICBjbGVhcl9yZWYuY3VycmVudCA9IFtdXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG93bkhhbmRsZXIpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBoYW5kbGVNb3VzZVVwKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBIYW5kbGVyKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZU1vdXNlTW92ZSlcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVzPC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBpZD1cImZhdmljb25fbGlua1wiXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgaHJlZj17ZmF2aWNvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiB3aWR0aCAhPT0gbnVsbCA/IHdpZHRoICsgc3AgKiAyIDogJ2F1dG8nLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCB9fT5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJvXCIgLz5cbiAgICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICAgIDxkaXY+bG9hZCBpbWFnZSAob3IgcGFzdGUgb3IgZHJvcCk8L2Rpdj5cbiAgICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cInBcIiAvPlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgICAgPGRpdj5zYXZlIHJlc3VsdCBhcyBwbmc8L2Rpdj5cbiAgICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e2NyZWZ9IC8+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIGhlaWdodD17c3B9XG4gICAgICAgICAgICAgIHJlZj17dGlfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc3AsXG4gICAgICAgICAgICAgICAgbGVmdDogc3AsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ2Nyb3NzaGFpcicsXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cImhcIiAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByZWY9e3RocmVzaF9yZWZ9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBsYWJlbD1cImxcIlxuICAgICAgICAgICAgICBjbGVhcmVyPXtjbGVhcmVyfVxuICAgICAgICAgICAgICB0cmlnZ2VyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcignbCcpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBzcCwgcGFkZGluZ1JpZ2h0OiBzcCwgYmFja2dyb3VuZDogJyNlZmVmZWYnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+SG93IGl0IHdvcmtzPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSW1hZ2U6IDxzcGFuIHJlZj17ZGltX3JlZn0+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTdXBlcnBpeGVsOiB7c3B9eHtzcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+UmVkdWNlZCBpbWFnZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtycmVmfSAvPlxuICAgICAgICAgIDxkaXYgcmVmPXtyZWR1Y2VkX3JlZn0+PC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PjgtY29sb3IgcGFsZXR0ZSBmcm9tIHJlZHVjZWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17cHJlZn0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgVXNpbmcgdGhlIG1lZGlhbiBjdXQgYXBwcm9hY2h7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3Bpbi5hdG9taWNvYmplY3QuY29tLzIwMTYvMTIvMDcvcGl4ZWxzLWFuZC1wYWxldHRlcy1leHRyYWN0aW5nLWNvbG9yLXBhbGV0dGVzLWZyb20taW1hZ2VzL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGV4cGxhaW5lZCBoZXJlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PjgtY29sb3IgcGFsZXR0ZSBhcHBsaWVkIHRvIHJlZHVjZWQgaW1hZ2UgYXQgb3JpZ2luYWwgc2l6ZTwvZGl2PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtycHJlZn0gLz5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBTdXBlcnBpeGVscyBmcm9tIG9yaWdpbmFsIGltYWdlIHNvcnRlZCBieSBjb21wbGV4aXR5IChkYXRhIFVSTFxuICAgICAgICAgICAgc3RyaW5nIGxlbmd0aCAvIG51bWJlciBvZiBwaXhlbHMpIHNob3duIGhlcmUgYXQgMnhcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3FyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6XG4gICAgICAgICAgICAgICAgJ3JlcGVhdCggYXV0by1maXQsIG1pbm1heCgnICsgc3AgKiAyICsgJ3B4LCAxZnIpICknLFxuICAgICAgICAgICAgICBncmlkQ29sdW1uR2FwOiBzcCAvIDIsXG4gICAgICAgICAgICAgIGdyaWRSb3dHYXA6IHNwIC8gNCxcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgLy8gbWF4SGVpZ2h0OiBzcCAqIDIxLFxuICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgICAgZm9udFNpemU6IDksXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSWRlYSBmb3IgdXNpbmcgY29tcHJlc3Npb24gYXMgYSBwcm94eSBmb3IgY29tcGxleGl0eXsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDU1Nzk1NTcvaG93LXRvLWNvbXBhcmUtaW1hZ2VzLWFuZC1kZXRlcm1pbmUtd2hpY2gtaGFzLW1vcmUtY29udGVudC80NTU3OTY4OCM0NTU3OTY4OFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGZyb20gdGhpcyBzdWdnZXN0aW9uIGJ5IEFydGh1ci0xIG9uIFN0YWNrT3ZlcmZsb3dcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHNwLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBzcCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2NvbnN0cmFpbnQuc3lzdGVtc1wiPmNvbnN0cmFpbnQuc3lzdGVtczwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5WaWV3IHNvdXJjZTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvZm9udHMvSUJNUGxleE1vbm8tUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLUl0YWxpYy53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgbW9ub3NwYWNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRocmVzaG9sZF9tYXJrZXIgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmJiO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.b50949db43d8a5c17192.hot-update.js.map