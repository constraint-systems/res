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
      console.log('down');
      repeat_ref.current = setInterval(function () {
        console.log('repeat');
      }, 300);
      trigger(repeat_ref.current);
    },
    onMouseUp: function onMouseUp(e) {
      console.log('up');
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

  function trigger(id) {
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
      lineNumber: 402
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
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
      lineNumber: 405
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
      lineNumber: 413
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
      lineNumber: 420
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, __jsx(Button, {
    label: "o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, "load image (or paste or drop)"), __jsx(Space, {
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
  })), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx(Button, {
    label: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, "save result as png"), __jsx(Space, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }), __jsx("canvas", {
    ref: cref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
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
      lineNumber: 441
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
      lineNumber: 449
    },
    __self: this
  }), __jsx(Button, {
    label: "h",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
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
      lineNumber: 466
    },
    __self: this
  }), __jsx(Button, {
    label: "l",
    trigger: trigger,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
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
      lineNumber: 479
    },
    __self: this
  }, __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  }, "How it works"), __jsx(Line, {
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
  }, "Image: ", __jsx("span", {
    ref: dim_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }, "Superpixel: ", sp, "x", sp), __jsx(Line, {
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
  }, "Reduced image"), __jsx("canvas", {
    ref: rref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }), __jsx("div", {
    ref: reduced_ref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, "8-color palette from reduced image"), __jsx("canvas", {
    ref: pref,
    className: "jsx-3923712137",
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
  }, "Using the median cut approach", ' ', __jsx("a", {
    href: "https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/",
    target: "_blank",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500
    },
    __self: this
  }, "explained here")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "8-color palette applied to reduced image at original size"), __jsx("canvas", {
    ref: rpref,
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509
    },
    __self: this
  }), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
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
      lineNumber: 515
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, "Idea for using compression as a proxy for complexity", ' ', __jsx("a", {
    target: "_blank",
    href: "https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, "from this suggestion by Arthur-1 on StackOverflow")), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  })), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
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
      lineNumber: 542
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, __jsx("a", {
    href: "https://constraint.systems",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, "constraint.systems")), __jsx("div", {
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3923712137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "View source"))), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3923712137",
    __self: this
  }, "@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}html,body{padding:0;margin:0;font-family:'custom',monospace;font-size:12px;line-height:16px;}*{box-sizing:border-box;}canvas{display:block;}a{color:inherit;}.threshold_marker div{background:#bbb;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStpQnlCLEFBR2dDLEFBS0EsQUFPWCxBQU9ZLEFBR1IsQUFHQSxBQUdFLFVBZlAsSUFVWCxBQUdBLEVBR0EsR0Fma0MsRUFadUIsQUFLRCxDQWF4RCw0QkFMaUIsZUFDRSxpQkFDbkIsb0RBVG9CLEVBTHBCLGdCQU1BIiwiZmlsZSI6Ii9ob21lL2dyYW50L3MvY3MvcmVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWVkQ3V0IH0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCdcblxuLy8gc3VwZXIgcGl4ZWxcbmxldCBzcCA9IDE2XG5cbmZ1bmN0aW9uIGZpbGwocmdiKSB7XG4gIHJldHVybiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknXG59XG5cbmxldCBMaW5lID0gKCkgPT4gPGRpdiBzdHlsZT17eyBoZWlnaHQ6IHNwLCB3aWR0aDogJzEwMCUnIH19IC8+XG5sZXQgU3BhY2UgPSAoKSA9PiA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBzcCAvIDIgfX0gLz5cblxubGV0IEJ1dHRvbiA9ICh7IGxhYmVsLCB0cmlnZ2VyIH0pID0+IHtcbiAgbGV0IHJlcGVhdF9yZWYgPSB1c2VSZWYobnVsbClcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgd2lkdGg6IHNwLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIH19XG4gICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkb3duJylcbiAgICAgICAgcmVwZWF0X3JlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXBlYXQnKVxuICAgICAgICB9LCAzMDApXG4gICAgICAgIHRyaWdnZXIocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgfX1cbiAgICAgIG9uTW91c2VVcD17ZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cCcpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocmVwZWF0X3JlZi5jdXJyZW50KVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9idXR0b24+XG4gIClcbn1cblxubGV0IEhvbWUgPSAoKSA9PiB7XG4gIGxldCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIGxldCBbZmF2aWNvbiwgc2V0RmF2aWNvbl0gPSB1c2VTdGF0ZSgnZmF2aWNvbi5wbmcnKVxuXG4gIGxldCBjcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBycmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBwcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCBycHJlZiA9IHVzZVJlZihudWxsKVxuICBsZXQgcXJlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBkaW1fcmVmID0gdXNlUmVmKG51bGwpXG4gIGxldCByZWR1Y2VkX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBrbV9yZWYgPSB1c2VSZWYoe30pXG4gIGxldCBzdGF0ZV9yZWYgPSB1c2VSZWYoe1xuICAgIGltZzogbnVsbCxcbiAgICB0aWxlczogbnVsbCxcbiAgfSlcblxuICBsZXQgc2xpZGVyX2NsaWNrX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCB0aV9yZWYgPSB1c2VSZWYobnVsbClcblxuICBsZXQgdGhyZXNoX3JlZiA9IHVzZVJlZihudWxsKVxuXG4gIGxldCBjbGVhcl9yZWYgPSB1c2VSZWYoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYyA9IGNyZWYuY3VycmVudFxuICAgIGxldCBjeCA9IGMuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCByID0gcnJlZi5jdXJyZW50XG4gICAgbGV0IHJ4ID0gci5nZXRDb250ZXh0KCcyZCcpXG4gICAgbGV0IHAgPSBwcmVmLmN1cnJlbnRcbiAgICBsZXQgcHggPSBwLmdldENvbnRleHQoJzJkJylcbiAgICBsZXQgcnAgPSBycHJlZi5jdXJyZW50XG4gICAgbGV0IHJweCA9IHJwLmdldENvbnRleHQoJzJkJylcblxuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBsZXQgZHNwID0gc3BcbiAgICAgIGxldCBzbmFwdyA9IE1hdGgucm91bmQoaW1nLndpZHRoIC8gZHNwKSAqIGRzcFxuICAgICAgbGV0IHNuYXByID0gc25hcHcgLyBpbWcud2lkdGhcbiAgICAgIGxldCBzbmFwaCA9IE1hdGgucm91bmQoKGltZy5oZWlnaHQgKiBzbmFwcikgLyBkc3ApICogZHNwXG5cbiAgICAgIGltZy53aWR0aCA9IHNuYXB3XG4gICAgICBpbWcuaGVpZ2h0ID0gc25hcGhcblxuICAgICAgc2V0V2lkdGgoaW1nLndpZHRoKVxuXG4gICAgICBjLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjLmhlaWdodCA9IGltZy5oZWlnaHRcblxuICAgICAgbGV0IGNvbHMgPSBpbWcud2lkdGggLyBzcFxuICAgICAgbGV0IHJvd3MgPSBpbWcuaGVpZ2h0IC8gc3BcbiAgICAgIGxldCBjZWxscyA9IGNvbHMgKiByb3dzXG5cbiAgICAgIGN4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KVxuXG4gICAgICByLndpZHRoID0gY29sc1xuICAgICAgci5oZWlnaHQgPSByb3dzXG5cbiAgICAgIHJ4LmRyYXdJbWFnZShpbWcsIDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0LCAwLCAwLCByLndpZHRoLCByLmhlaWdodClcblxuICAgICAgcC53aWR0aCA9IHNwICogOFxuICAgICAgcC5oZWlnaHQgPSBzcFxuXG4gICAgICBycC53aWR0aCA9IGltZy53aWR0aFxuICAgICAgcnAuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICAvLyBnZXQgY29sb3JzIGZyb20gcmVkdWNlZCBpbWFnZVxuICAgICAgbGV0IGltYWdlX2RhdGEgPSByeC5nZXRJbWFnZURhdGEoMCwgMCwgci53aWR0aCwgci5oZWlnaHQpXG4gICAgICBsZXQgY29sb3JzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VfZGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIGxldCByZ2IgPSBbMCwgMSwgMl0ubWFwKG9mZnNldCA9PiBpbWFnZV9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGNvbG9ycy5wdXNoKHJnYilcbiAgICAgIH1cblxuICAgICAgLy8gZ2V0IHBhbGV0dGUgZHJhdyBwYWxldHRlXG4gICAgICBsZXQgcGFsZXR0ZSA9IG1lZEN1dChjb2xvcnMpXG4gICAgICAvLyBwYWxldHRlID0gcGFsZXR0ZS5tYXAoY29sb3IgPT4gY29sb3IubWFwKGNoYW5uZWwgPT4gMjU1IC0gY2hhbm5lbCkpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbGV0dGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHguZmlsbFN0eWxlID0gZmlsbChwYWxldHRlW2ldKVxuICAgICAgICBweC5maWxsUmVjdChpICogc3AsIDAsIHNwLCBzcClcbiAgICAgIH1cblxuICAgICAgLy8gZHJhdyBwYWxldHRlIGltYWdlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gaW1hZ2VfZGF0YS5kYXRhW2kgKyBvZmZzZXRdKVxuICAgICAgICBsZXQgZGlzdGFuY2VzID0gcGFsZXR0ZS5tYXAocHJnYiA9PiB7XG4gICAgICAgICAgbGV0IFtyMSwgZzEsIGIxXSA9IHJnYlxuICAgICAgICAgIGxldCBbcjIsIGcyLCBiMl0gPSBwcmdiXG4gICAgICAgICAgLy8gcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgIC8vICAgKChyMiAtIHIxKSAqIDEpIF4gKDIgKyAoZzIgLSBnMSkgKiAxKSBeICgyICsgKGIyIC0gYjEpICogMSkgXiAyXG4gICAgICAgICAgLy8gKVxuICAgICAgICAgIC8vIHdlaWdodGVkIG1hdGNoXG4gICAgICAgICAgcmV0dXJuIE1hdGguYWJzKFxuICAgICAgICAgICAgKChyMiAtIHIxKSAqIDAuMykgXlxuICAgICAgICAgICAgICAoMiArIChnMiAtIGcxKSAqIDAuNTkpIF5cbiAgICAgICAgICAgICAgKDIgKyAoYjIgLSBiMSkgKiAwLjExKSBeXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMpXG4gICAgICAgIGxldCBtaW5faW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihtaW4pXG4gICAgICAgIGxldCBjb2xvciA9IHBhbGV0dGVbbWluX2luZGV4XVxuICAgICAgICBsZXQgcCA9IGkgLyA0XG4gICAgICAgIGxldCB4ID0gcCAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKHAgLyBjb2xzKVxuICAgICAgICBycHguZmlsbFN0eWxlID0gZmlsbChjb2xvcilcbiAgICAgICAgcnB4LmZpbGxSZWN0KHggKiBzcCwgeSAqIHNwLCBzcCwgc3ApXG4gICAgICB9XG5cbiAgICAgIC8vIGN1dCB1cCBvcmlnaW5hbCBpbWFnZVxuICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICBsZXQgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgIHQud2lkdGggPSBzcFxuICAgICAgICB0LmhlaWdodCA9IHNwXG4gICAgICAgIGxldCB0eCA9IHQuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgICAgIGxldCB4ID0gaSAlIGNvbHNcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGkgLyBjb2xzKVxuXG4gICAgICAgIHR4LmRyYXdJbWFnZShjLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCAwLCAwLCBzcCwgc3ApXG5cbiAgICAgICAgbGV0IGNvbXBsZXhpdHkgPSB0LnRvRGF0YVVSTCgpLmxlbmd0aCAvIChzcCAqIHNwKVxuXG4gICAgICAgIHRpbGVzLnB1c2goeyB0LCBjOiBjb21wbGV4aXR5LCB4LCB5LCBpIH0pXG4gICAgICB9XG5cbiAgICAgIHRpbGVzID0gXy5zb3J0QnkodGlsZXMsICdjJykucmV2ZXJzZSgpXG5cbiAgICAgIGxldCBxID0gcXJlZi5jdXJyZW50XG4gICAgICBxLmlubmVySFRNTCA9ICcnXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiaWdnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICBiaWdnZXIud2lkdGggPSBzcCAqIDJcbiAgICAgICAgYmlnZ2VyLmhlaWdodCA9IHNwICogMlxuICAgICAgICBsZXQgYnggPSBiaWdnZXIuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBieC5pbWFnZVNtb290aGluZ0VuYWJsZSA9IGZhbHNlXG4gICAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgICAgYnguZHJhd0ltYWdlKHRpbGUudCwgMCwgMCwgYmlnZ2VyLndpZHRoLCBiaWdnZXIuaGVpZ2h0KVxuICAgICAgICBsZXQgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICAgICAgICAvLyBkLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xuICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIHRleHQuc3R5bGUubWFyZ2luTGVmdCA9IHNwIC8gMiArICdweCdcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBgJHt0aWxlLmMudG9GaXhlZCgzKX1gXG4gICAgICAgIGQuYXBwZW5kQ2hpbGQoYmlnZ2VyKVxuICAgICAgICBkLmFwcGVuZENoaWxkKHRleHQpXG4gICAgICAgIHEuYXBwZW5kQ2hpbGQoZClcbiAgICAgIH1cblxuICAgICAgbGV0IHN0YXRlID0gc3RhdGVfcmVmLmN1cnJlbnRcbiAgICAgIHN0YXRlLmltZyA9IGltZ1xuICAgICAgc3RhdGUudGlsZXMgPSB0aWxlc1xuICAgICAgc3RhdGUuY2VsbHMgPSBjZWxsc1xuICAgICAgc3RhdGUuY29scyA9IGNvbHNcbiAgICAgIHN0YXRlLnJvd3MgPSByb3dzXG5cbiAgICAgIC8vIGZhdmljb25cbiAgICAgIGxldCB0aSA9IHRpX3JlZi5jdXJyZW50XG4gICAgICB0aS53aWR0aCA9IGltZy53aWR0aCAtIHNwICogMlxuICAgICAgdGkuaGVpZ2h0ID0gc3BcbiAgICAgIGxldCB0aXggPSB0aS5nZXRDb250ZXh0KCcyZCcpXG4gICAgICBsZXQgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICBmLndpZHRoID0gMzJcbiAgICAgIGYuaGVpZ2h0ID0gMzJcbiAgICAgIGxldCBmeCA9IGYuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgdC53aWR0aCA9IDhcbiAgICAgIHQuaGVpZ2h0ID0gOFxuICAgICAgbGV0IHR4ID0gdC5nZXRDb250ZXh0KCcyZCcpXG4gICAgICB0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIDAsIDAsIDgsIDgpXG4gICAgICBsZXQgZmF2aWNvbl9kYXRhID0gdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHQud2lkdGgsIHQuaGVpZ2h0KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYXZpY29uX2RhdGEuZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICBsZXQgcmdiID0gWzAsIDEsIDJdLm1hcChvZmZzZXQgPT4gZmF2aWNvbl9kYXRhLmRhdGFbaSArIG9mZnNldF0pXG4gICAgICAgIGxldCBkaXN0YW5jZXMgPSBwYWxldHRlLm1hcChwcmdiID0+IHtcbiAgICAgICAgICBsZXQgW3IxLCBnMSwgYjFdID0gcmdiXG4gICAgICAgICAgbGV0IFtyMiwgZzIsIGIyXSA9IHByZ2JcbiAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoXG4gICAgICAgICAgICAoKHIyIC0gcjEpICogMC4zKSBeXG4gICAgICAgICAgICAgICgyICsgKGcyIC0gZzEpICogMC41OSkgXlxuICAgICAgICAgICAgICAoMiArIChiMiAtIGIxKSAqIDAuMTEpIF5cbiAgICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcylcbiAgICAgICAgbGV0IG1pbl9pbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKG1pbilcbiAgICAgICAgbGV0IGNvbG9yID0gcGFsZXR0ZVttaW5faW5kZXhdXG4gICAgICAgIGxldCBwID0gaSAvIDRcbiAgICAgICAgbGV0IHggPSBwICUgOFxuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IocCAvIDgpXG4gICAgICAgIGZ4LmZpbGxTdHlsZSA9IGZpbGwoY29sb3IpXG4gICAgICAgIGZ4LmZpbGxSZWN0KHggKiA0LCB5ICogNCwgNCwgNClcbiAgICAgIH1cbiAgICAgIHNldEZhdmljb24oZi50b0RhdGFVUkwoKSlcblxuICAgICAgc3RhdGUudGhyZXNob2xkID0gMTIwXG5cbiAgICAgIHJlbmRlcigpXG4gICAgfVxuICAgIC8vIGltZy5zcmMgPSAndW5jdXQuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnZXhtYWNoaW5hLmpwZWcnXG4gICAgLy8gaW1nLnNyYyA9ICdtcnJvYm90LmpwZydcbiAgICAvLyBpbWcuc3JjID0gJ3N0YWxrZXIuanBnJ1xuICAgIGltZy5zcmMgPSAnYWNyb255bS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdtcnJvYm90Mi5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICd2ZWlsYW5jZS5qcGcnXG4gICAgLy8gaW1nLnNyYyA9ICdtY2NhYmUuanBnJ1xuICAgIC8vIGltZy5zcmMgPSAnY29tcHV0ZS5wbmcnXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGNsaWNrU2V0VGhyZXNob2xkKGUpIHtcbiAgICBsZXQgcmVjdCA9IHRpX3JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgbGV0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnRcbiAgICBsZXQgcGVyY2VudCA9IHggLyB0aV9yZWYuY3VycmVudC53aWR0aFxuICAgIGxldCB7IGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgbGV0IG5ld190aHJlc2ggPVxuICAgICAgY2VsbHMgLSBNYXRoLm1pbihjZWxscywgTWF0aC5tYXgoMCwgTWF0aC5yb3VuZChwZXJjZW50ICogY2VsbHMpKSlcbiAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgPSBuZXdfdGhyZXNoXG4gICAgcmVuZGVyKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBsZXQgY3ggPSBjcmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgIGxldCBycCA9IHJwcmVmLmN1cnJlbnRcblxuICAgIGxldCB7IGltZywgdGlsZXMsIGNvbHMsIHJvd3MsIGNlbGxzLCB0aHJlc2hvbGQgfSA9IHN0YXRlX3JlZi5jdXJyZW50XG4gICAgY3guZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuXG4gICAgZm9yIChsZXQgaSA9IHRocmVzaG9sZDsgaSA8IGNlbGxzOyBpKyspIHtcbiAgICAgIGxldCB0aWxlID0gdGlsZXNbaV1cbiAgICAgIGxldCB4ID0gdGlsZS54XG4gICAgICBsZXQgeSA9IHRpbGUueVxuICAgICAgY3guZHJhd0ltYWdlKHJwLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwLCB4ICogc3AsIHkgKiBzcCwgc3AsIHNwKVxuICAgIH1cblxuICAgIHRocmVzaF9yZWYuY3VycmVudC5pbm5lckhUTUwgPSBjZWxscyAtIHRocmVzaG9sZCArICcvJyArIGNlbGxzXG5cbiAgICBsZXQgdGkgPSB0aV9yZWYuY3VycmVudFxuICAgIGxldCB0aXggPSB0aS5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICB0aXguZmlsbFN0eWxlID0gJyNkZGQnXG4gICAgdGl4LmZpbGxSZWN0KDAsIDAsIHRpLndpZHRoLCB0aS5oZWlnaHQpXG5cbiAgICB0aXguZmlsbFN0eWxlID0gJyM5OTknXG4gICAgbGV0IHRtYXJrID0gTWF0aC5taW4oXG4gICAgICBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHRpLndpZHRoICogKChjZWxscyAtIHRocmVzaG9sZCkgLyBjZWxscykpKSxcbiAgICAgIHRpLndpZHRoIC0gMlxuICAgIClcbiAgICB0aXguZmlsbFJlY3QodG1hcmsgLSAxLCAwLCAzLCB0aS5oZWlnaHQpXG5cbiAgICBsZXQgcSA9IHFyZWYuY3VycmVudFxuICAgIGxldCBub2RlcyA9IHEuY2hpbGROb2Rlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gbm9kZXNbaV1cbiAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICcnXG4gICAgICBpZiAoaSA8IHRocmVzaG9sZCkge1xuICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSAndGhyZXNob2xkX21hcmtlcidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVzW2ldLmNsYXNzTmFtZSA9ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGltX3JlZi5jdXJyZW50LmlubmVySFRNTCA9IGltZy53aWR0aCArICd4JyArIGltZy5oZWlnaHRcbiAgICByZWR1Y2VkX3JlZi5jdXJyZW50LmlubmVySFRNTCA9XG4gICAgICAnKCcgK1xuICAgICAgaW1nLndpZHRoICtcbiAgICAgICcvJyArXG4gICAgICBzcCArXG4gICAgICAnKXgoJyArXG4gICAgICBpbWcuaGVpZ2h0ICtcbiAgICAgICcvJyArXG4gICAgICBzcCArXG4gICAgICAnKT0nICtcbiAgICAgIHJvd3MgK1xuICAgICAgJ3gnICtcbiAgICAgIGNvbHNcbiAgfVxuXG4gIGZ1bmN0aW9uIGtleUFjdGlvbihrZXksIGV2ZW50KSB7XG4gICAgbGV0IGttID0ga21fcmVmLmN1cnJlbnRcblxuICAgIGlmIChrZXkgPT09ICdsJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCAtIDEwXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaCcpIHtcbiAgICAgIHN0YXRlX3JlZi5jdXJyZW50LnRocmVzaG9sZCA9IE1hdGgubWluKFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC5jZWxscyxcbiAgICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkICsgMTBcbiAgICAgIClcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdMJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5tYXgoMCwgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkIC0gMSlcbiAgICAgIHJlbmRlcigpXG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdIJykge1xuICAgICAgc3RhdGVfcmVmLmN1cnJlbnQudGhyZXNob2xkID0gTWF0aC5taW4oXG4gICAgICAgIHN0YXRlX3JlZi5jdXJyZW50LmNlbGxzLFxuICAgICAgICBzdGF0ZV9yZWYuY3VycmVudC50aHJlc2hvbGQgKyAxXG4gICAgICApXG4gICAgICByZW5kZXIoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRvd25IYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSB0cnVlXG4gICAga2V5QWN0aW9uKGUua2V5LCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBIYW5kbGVyKGUpIHtcbiAgICBrbV9yZWYuY3VycmVudFtlLmtleV0gPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICBpZiAoc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50KSB7XG4gICAgICBjbGlja1NldFRocmVzaG9sZChlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXIoaWQpIHtcbiAgICBjbGVhcl9yZWYuY3VycmVudC5wdXNoKGlkKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91c2VVcChlKSB7XG4gICAgaWYgKHNsaWRlcl9jbGlja19yZWYuY3VycmVudCkge1xuICAgICAgc2xpZGVyX2NsaWNrX3JlZi5jdXJyZW50ID0gZmFsc2VcbiAgICAgIGNsaWNrU2V0VGhyZXNob2xkKGUpXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xlYXJfcmVmLmN1cnJlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpdGVtID0gY2xlYXJfcmVmLmN1cnJlbnRbaV1cbiAgICAgIGNsZWFySW50ZXJ2YWwoaXRlbSlcbiAgICB9XG4gICAgY2xlYXJfcmVmLmN1cnJlbnQgPSBbXVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGRvd25IYW5kbGVyKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgaGFuZGxlTW91c2VNb3ZlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgaGFuZGxlTW91c2VVcClcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb3duSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwSGFuZGxlcilcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVNb3VzZU1vdmUpXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGhhbmRsZU1vdXNlVXApXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJlczwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaWQ9XCJmYXZpY29uX2xpbmtcIlxuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9e2Zhdmljb259XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogd2lkdGggIT09IG51bGwgPyB3aWR0aCArIHNwICogMiA6ICdhdXRvJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogc3AsIHBhZGRpbmdSaWdodDogc3AgfX0+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwib1wiIC8+XG4gICAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgICA8ZGl2PmxvYWQgaW1hZ2UgKG9yIHBhc3RlIG9yIGRyb3ApPC9kaXY+XG4gICAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgICA8U3BhY2UgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJwXCIgLz5cbiAgICAgICAgICAgICAgPFNwYWNlIC8+XG4gICAgICAgICAgICAgIDxkaXY+c2F2ZSByZXN1bHQgYXMgcG5nPC9kaXY+XG4gICAgICAgICAgICAgIDxTcGFjZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgIDxjYW52YXMgcmVmPXtjcmVmfSAvPlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBoZWlnaHQ9e3NwfVxuICAgICAgICAgICAgICByZWY9e3RpX3JlZn1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHNwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHNwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdjcm9zc2hhaXInLFxuICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4ge1xuICAgICAgICAgICAgICAgIHNsaWRlcl9jbGlja19yZWYuY3VycmVudCA9IHRydWVcbiAgICAgICAgICAgICAgICBjbGlja1NldFRocmVzaG9sZChlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJoXCIgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcmVmPXt0aHJlc2hfcmVmfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJsXCIgdHJpZ2dlcj17dHJpZ2dlcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogc3AsIHBhZGRpbmdSaWdodDogc3AsIGJhY2tncm91bmQ6ICcjZWZlZmVmJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PkhvdyBpdCB3b3JrczwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIEltYWdlOiA8c3BhbiByZWY9e2RpbV9yZWZ9Pjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU3VwZXJwaXhlbDoge3NwfXh7c3B9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlJlZHVjZWQgaW1hZ2U8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17cnJlZn0gLz5cbiAgICAgICAgICA8ZGl2IHJlZj17cmVkdWNlZF9yZWZ9PjwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj44LWNvbG9yIHBhbGV0dGUgZnJvbSByZWR1Y2VkIGltYWdlPC9kaXY+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3ByZWZ9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFVzaW5nIHRoZSBtZWRpYW4gY3V0IGFwcHJvYWNoeycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3NwaW4uYXRvbWljb2JqZWN0LmNvbS8yMDE2LzEyLzA3L3BpeGVscy1hbmQtcGFsZXR0ZXMtZXh0cmFjdGluZy1jb2xvci1wYWxldHRlcy1mcm9tLWltYWdlcy9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBleHBsYWluZWQgaGVyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5lIC8+XG4gICAgICAgICAgPGRpdj44LWNvbG9yIHBhbGV0dGUgYXBwbGllZCB0byByZWR1Y2VkIGltYWdlIGF0IG9yaWdpbmFsIHNpemU8L2Rpdj5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17cnByZWZ9IC8+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgU3VwZXJwaXhlbHMgZnJvbSBvcmlnaW5hbCBpbWFnZSBzb3J0ZWQgYnkgY29tcGxleGl0eSAoZGF0YSBVUkxcbiAgICAgICAgICAgIHN0cmluZyBsZW5ndGggLyBudW1iZXIgb2YgcGl4ZWxzKSBzaG93biBoZXJlIGF0IDJ4XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtxcmVmfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOlxuICAgICAgICAgICAgICAgICdyZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoJyArIHNwICogMiArICdweCwgMWZyKSApJyxcbiAgICAgICAgICAgICAgZ3JpZENvbHVtbkdhcDogc3AgLyAyLFxuICAgICAgICAgICAgICBncmlkUm93R2FwOiBzcCAvIDQsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIC8vIG1heEhlaWdodDogc3AgKiAyMSxcbiAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiA5LFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIElkZWEgZm9yIHVzaW5nIGNvbXByZXNzaW9uIGFzIGEgcHJveHkgZm9yIGNvbXBsZXhpdHl7JyAnfVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1NTc5NTU3L2hvdy10by1jb21wYXJlLWltYWdlcy1hbmQtZGV0ZXJtaW5lLXdoaWNoLWhhcy1tb3JlLWNvbnRlbnQvNDU1Nzk2ODgjNDU1Nzk2ODhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBmcm9tIHRoaXMgc3VnZ2VzdGlvbiBieSBBcnRodXItMSBvbiBTdGFja092ZXJmbG93XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxMaW5lIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBzcCxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogc3AsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb25zdHJhaW50LnN5c3RlbXNcIj5jb25zdHJhaW50LnN5c3RlbXM8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VmlldyBzb3VyY2U8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TGluZSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJztcbiAgICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbSc7XG4gICAgICAgICAgc3JjOiB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9mb250cy9JQk1QbGV4TW9uby1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogJ2N1c3RvbScsIG1vbm9zcGFjZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICAgIC50aHJlc2hvbGRfbWFya2VyIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2JiYjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdfQ== */\n/*@ sourceURL=/home/grant/s/cs/res/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a7c7ee675d5521803231.hot-update.js.map