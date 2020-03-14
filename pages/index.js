import Head from 'next/head'
import React, { useRef, useEffect, useState } from 'react'
import { medCut } from '../utils'
import * as _ from 'lodash'

// super pixel
let sp = 16

function fill(rgb) {
  return 'rgb(' + rgb.join(',') + ')'
}

let Line = () => <div style={{ height: sp, width: '100%' }} />

let Space = () => <div style={{ width: sp / 2 }} />

let Button = ({
  label,
  clearer,
  trigger,
  text_label,
  press_gates,
  custom_style,
}) => {
  let button_style = {
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
  }
  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style)
  }
  return (
    <div style={{ display: 'flex' }}>
      <button
        style={button_style}
        onMouseDown={e => {
          trigger()
        }}
      >
        {label}
      </button>
      {text_label !== undefined ? (
        <div
          style={{ display: 'flex', cursor: 'default' }}
          onMouseDown={e => {
            trigger()
          }}
        >
          <Space />
          <div>{text_label}</div>
        </div>
      ) : null}
    </div>
  )
}

let RepeatButton = ({
  label,
  clearer,
  trigger,
  text_label,
  press_gates,
  custom_style,
}) => {
  let repeat_ref = useRef(null)
  let start_gate = useRef(false)

  let touch_mode = useRef(false)

  let button_style = {
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
  }
  if (custom_style !== undefined) {
    button_style = Object.assign(button_style, custom_style)
  }
  return (
    <div style={{ display: 'flex' }}>
      <button
        style={button_style}
        onTouchStart={e => {
          touch_mode.current = true
          press_gates.current = true
          trigger()
          setTimeout(() => {
            if (press_gates.current) {
              repeat_ref.current = setInterval(() => {
                trigger()
              }, 100)
              clearer(repeat_ref.current)
            }
          }, 400)
        }}
        onTouchEnd={e => {
          setTimeout(() => {
            touch_mode.current = false
          }, 400)
          e.preventDefault()
        }}
        onMouseDown={e => {
          if (!touch_mode.current) {
            press_gates.current = true
            trigger()
            setTimeout(() => {
              if (press_gates.current) {
                repeat_ref.current = setInterval(() => {
                  trigger()
                }, 100)
                clearer(repeat_ref.current)
              }
            }, 400)
          }
        }}
        onMouseUp={e => {
          if (!touch_mode.current) {
            clearInterval(repeat_ref.current)
          }
        }}
      >
        {label}
      </button>
      {text_label !== undefined ? (
        <div
          style={{ display: 'flex', cursor: 'default' }}
          onMouseDown={e => {
            repeat_ref.current = setInterval(() => {
              trigger()
            }, 200)
            clearer(repeat_ref.current)
            trigger()
          }}
          onMouseUp={e => {
            clearInterval(repeat_ref.current)
          }}
        >
          <Space />
          <div>{text_label}</div>
        </div>
      ) : null}
    </div>
  )
}

let Home = () => {
  let [width, setWidth] = useState(null)
  let [favicon, setFavicon] = useState('favicon.png')

  let cref = useRef(null)
  let rref = useRef(null)
  let pref = useRef(null)
  let rpref = useRef(null)
  let qref = useRef(null)

  let press_gates = useRef(false)

  let dim_ref = useRef(null)
  let reduced_ref = useRef(null)

  let km_ref = useRef({})
  let state_ref = useRef({
    img: null,
    tiles: null,
  })

  let slider_click_ref = useRef(null)
  let slider_touch_mode = useRef(false)

  let ti_ref = useRef(null)

  let thresh_ref = useRef(null)

  let clear_ref = useRef([])

  let [debug, setDebug] = useState(null)

  function loadImage(src) {
    let c = cref.current
    let cx = c.getContext('2d')
    let r = rref.current
    let rx = r.getContext('2d')
    let p = pref.current
    let px = p.getContext('2d')
    let rp = rpref.current
    let rpx = rp.getContext('2d')

    let img = document.createElement('img')
    img.onload = () => {
      let adj_width = Math.min(img.width, window.innerWidth - sp * 2)
      let dsp = sp
      let snapw = Math.round(adj_width / dsp) * dsp
      let snapr = snapw / img.width
      let snaph = Math.round((img.height * snapr) / dsp) * dsp

      img.width = snapw
      img.height = snaph

      setWidth(img.width)

      c.width = img.width
      c.height = img.height

      let cols = img.width / sp
      let rows = img.height / sp
      let cells = cols * rows

      // preserve dimensions
      let t_img = document.createElement('canvas')
      t_img.width = c.width
      t_img.height = c.height
      let t_imgx = t_img.getContext('2d')
      t_imgx.drawImage(img, 0, 0, c.width, c.height)
      img = t_img

      cx.drawImage(img, 0, 0, c.width, c.height)

      r.width = cols
      r.height = rows

      rx.drawImage(img, 0, 0, c.width, c.height, 0, 0, r.width, r.height)

      p.width = sp * 8
      p.height = sp

      rp.width = img.width
      rp.height = img.height

      // get colors from reduced image
      let image_data = rx.getImageData(0, 0, r.width, r.height)
      let colors = []
      for (let i = 0; i < image_data.data.length; i += 4) {
        let rgb = [0, 1, 2].map(offset => image_data.data[i + offset])
        colors.push(rgb)
      }

      // get palette draw palette
      let palette = medCut(colors)
      // palette = palette.map(color => color.map(channel => 255 - channel))
      for (let i = 0; i < palette.length; i++) {
        px.fillStyle = fill(palette[i])
        px.fillRect(i * sp, 0, sp, sp)
      }

      // draw palette image
      for (let i = 0; i < image_data.data.length; i += 4) {
        let rgb = [0, 1, 2].map(offset => image_data.data[i + offset])
        let distances = palette.map(prgb => {
          let [r1, g1, b1] = rgb
          let [r2, g2, b2] = prgb
          // return Math.abs(
          //   ((r2 - r1) * 1) ^ (2 + (g2 - g1) * 1) ^ (2 + (b2 - b1) * 1) ^ 2
          // )
          // weighted match
          return Math.abs(
            ((r2 - r1) * 0.3) ^
              (2 + (g2 - g1) * 0.59) ^
              (2 + (b2 - b1) * 0.11) ^
              2
          )
        })
        let min = Math.min(...distances)
        let min_index = distances.indexOf(min)
        let color = palette[min_index]
        let p = i / 4
        let x = p % cols
        let y = Math.floor(p / cols)
        rpx.fillStyle = fill(color)
        rpx.fillRect(x * sp, y * sp, sp, sp)
      }

      // cut up original image
      let tiles = []
      for (let i = 0; i < cells; i++) {
        let t = document.createElement('canvas')
        t.width = sp
        t.height = sp
        let tx = t.getContext('2d')

        let x = i % cols
        let y = Math.floor(i / cols)

        tx.drawImage(c, x * sp, y * sp, sp, sp, 0, 0, sp, sp)

        let complexity = t.toDataURL().length / (sp * sp)

        tiles.push({ t, c: complexity, x, y, i })
      }

      tiles = _.sortBy(tiles, 'c').reverse()

      let q = qref.current
      q.innerHTML = ''
      for (let i = 0; i < tiles.length; i++) {
        let bigger = document.createElement('canvas')
        bigger.width = sp * 2
        bigger.height = sp * 2
        let bx = bigger.getContext('2d')
        bx.imageSmoothingEnable = false
        let tile = tiles[i]
        bx.drawImage(tile.t, 0, 0, bigger.width, bigger.height)
        let d = document.createElement('div')
        // d.style.display = 'flex'
        // d.style.alignItems = 'center'
        let text = document.createElement('div')
        // text.style.marginLeft = sp / 2 + 'px'
        text.innerHTML = `${tile.c.toFixed(3)}`
        d.appendChild(bigger)
        d.appendChild(text)
        q.appendChild(d)
      }

      let state = state_ref.current
      state.img = img
      state.tiles = tiles
      state.cells = cells
      state.cols = cols
      state.rows = rows

      let ti = ti_ref.current
      ti.width = img.width - sp * 4
      ti.height = sp * 2

      // favicon
      let f = document.createElement('canvas')
      f.width = 32
      f.height = 32
      let fx = f.getContext('2d')
      let t = document.createElement('canvas')
      t.width = 8
      t.height = 8
      let tx = t.getContext('2d')
      tx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 8, 8)
      let favicon_data = tx.getImageData(0, 0, t.width, t.height)
      for (let i = 0; i < favicon_data.data.length; i += 4) {
        let rgb = [0, 1, 2].map(offset => favicon_data.data[i + offset])
        let distances = palette.map(prgb => {
          let [r1, g1, b1] = rgb
          let [r2, g2, b2] = prgb
          return Math.abs(
            ((r2 - r1) * 0.3) ^
              (2 + (g2 - g1) * 0.59) ^
              (2 + (b2 - b1) * 0.11) ^
              2
          )
        })
        let min = Math.min(...distances)
        let min_index = distances.indexOf(min)
        let color = palette[min_index]
        let p = i / 4
        let x = p % 8
        let y = Math.floor(p / 8)
        fx.fillStyle = fill(color)
        fx.fillRect(x * 4, y * 4, 4, 4)
      }
      setFavicon(f.toDataURL())

      state.threshold = 120

      render()
    }

    img.src = src
  }

  useEffect(() => {
    // img.src = 'uncut.jpg'
    // img.src = 'exmachina.jpeg'
    // img.src = 'mrrobot.jpg'
    // img.src = 'stalker.jpg'
    // img.src = 'acronym.jpg'
    // img.src = 'mrrobot2.jpg'
    // img.src = 'veilance.jpg'
    // img.src = 'mccabe.jpg'
    // img.src = 'compute.png'
    loadImage('mrrobot2.jpg')
  }, [])

  function clickSetThreshold(x) {
    let rect = ti_ref.current.getBoundingClientRect()
    x = x - rect.left
    let percent = x / ti_ref.current.width
    let { cells, threshold } = state_ref.current
    let new_thresh =
      cells - Math.min(cells, Math.max(0, Math.round(percent * cells)))
    state_ref.current.threshold = new_thresh
    render()
  }

  function render() {
    let cx = cref.current.getContext('2d')
    let rp = rpref.current

    let { img, tiles, cols, rows, cells, threshold } = state_ref.current
    cx.drawImage(img, 0, 0, img.width, img.height)

    for (let i = threshold; i < cells; i++) {
      let tile = tiles[i]
      let x = tile.x
      let y = tile.y
      cx.drawImage(rp, x * sp, y * sp, sp, sp, x * sp, y * sp, sp, sp)
    }

    thresh_ref.current.innerHTML = cells - threshold + '/' + cells

    let ti = ti_ref.current
    let tix = ti.getContext('2d')

    tix.fillStyle = '#ddd'
    tix.fillRect(0, 0, ti.width, sp * 2)

    tix.fillStyle = '#999'
    let tmark = Math.min(
      Math.max(1, Math.round(ti.width * ((cells - threshold) / cells))),
      ti.width - 2
    )
    tix.fillRect(tmark - 1, 0, 3, sp * 2)

    let q = qref.current
    let nodes = q.childNodes
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i]
      nodes[i].className = ''
      if (i < threshold) {
        nodes[i].className = 'threshold_marker'
      } else {
        nodes[i].className = ''
      }
    }

    dim_ref.current.innerHTML = img.width + 'x' + img.height
    reduced_ref.current.innerHTML =
      '(' +
      img.width +
      '/' +
      sp +
      ')x(' +
      img.height +
      '/' +
      sp +
      ')=' +
      cols +
      'x' +
      rows
  }

  function trigger(key) {
    keyAction(key, null)
  }

  function keyAction(key, event) {
    let km = km_ref.current

    if (key === 'o') {
      let input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
      )
      function handleChange(e) {
        let files = ''
        for (let item of this.files) {
          console.log(item)
          files += item.name + '.' + item.type
          if (item.type.indexOf('image') < 0) {
            continue
          }
          let src = URL.createObjectURL(item)
          loadImage(src)
        }
        setDebug(files)
        this.removeEventListener('change', handleChange)
      }
      input.addEventListener('change', handleChange)
    } else if (key === 'p') {
      let link = document.createElement('a')

      cref.current.toBlob(function(blob) {
        link.setAttribute(
          'download',
          'res-' +
            new Date()
              .toISOString()
              .slice(0, -4)
              .replace(/-/g, '')
              .replace(/:/g, '')
              .replace(/_/g, '')
              .replace(/\./g, '') +
            'Z' +
            '.png'
        )

        link.setAttribute('href', URL.createObjectURL(blob))
        link.dispatchEvent(
          new MouseEvent(`click`, {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        )
      })
    }

    if (key === 'l') {
      state_ref.current.threshold = Math.max(
        0,
        state_ref.current.threshold - 10
      )
      render()
    } else if (key === 'h') {
      state_ref.current.threshold = Math.min(
        state_ref.current.cells,
        state_ref.current.threshold + 10
      )
      render()
    } else if (key === 'L') {
      state_ref.current.threshold = Math.max(0, state_ref.current.threshold - 1)
      render()
    } else if (key === 'H') {
      state_ref.current.threshold = Math.min(
        state_ref.current.cells,
        state_ref.current.threshold + 1
      )
      render()
    }
  }

  function downHandler(e) {
    km_ref.current[e.key] = true
    keyAction(e.key, e)
  }

  function upHandler(e) {
    km_ref.current[e.key] = false
  }

  function handleMouseMove(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.clientX)
      }
    }
  }

  function clearer(id) {
    clear_ref.current.push(id)
  }

  function clearRepeatIntervals() {
    for (let i = 0; i < clear_ref.current.length; i++) {
      let item = clear_ref.current[i]
      clearInterval(item)
    }
    clear_ref.current = []
  }

  function clearPressGates() {
    press_gates.current = false
  }

  function handleMouseUp(e) {
    if (!slider_touch_mode.current) {
      if (slider_click_ref.current) {
        slider_click_ref.current = false
        clickSetThreshold(e.clientX)
      }
    }
    clearRepeatIntervals()
  }

  function onDrop(e) {
    e.preventDefault()
    e.stopPropagation()
    let file = e.dataTransfer.files[0]
    let filename = file.path ? file.path : file.name ? file.name : ''
    let src = URL.createObjectURL(file)
    loadImage(src)
  }

  function onDrag(e) {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy'
  }

  function onPaste(e) {
    e.preventDefault()
    e.stopPropagation()
    for (const item of e.clipboardData.items) {
      if (item.type.indexOf('image') < 0) {
        continue
      }
      let file = item.getAsFile()
      let src = URL.createObjectURL(file)
      loadImage(src)
    }
  }

  function handleTouchMove(e) {
    if (slider_touch_mode.current) {
      if (slider_click_ref.current) {
        clickSetThreshold(e.changedTouches[0].clientX)
        e.preventDefault()
      }
    }
  }

  function handleTouchEnd(e) {
    // touch end doesn't seem to have client x
    clearPressGates()
    clearRepeatIntervals()
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('paste', onPaste)
    window.addEventListener('dragover', onDrag)
    window.addEventListener('drop', onDrop)
    window.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('paste', onPaste)
      window.removeEventListener('dragover', onDrag)
      window.removeEventListener('drop', onDrop)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Res</title>
        <link
          id="favicon_link"
          rel="shortcut icon"
          type="image/png"
          href={favicon}
        />
      </Head>

      <div
        style={{
          display: width !== null ? 'block' : 'none',
          width: width !== null ? width + sp * 2 : 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {debug !== null ? <div>{debug}</div> : null}
        <div
          className="no-select"
          style={{ paddingLeft: sp, paddingRight: sp }}
        >
          <Line />
          <div style={{ display: 'flex' }}>
            <Button
              label="o"
              press_gates={press_gates}
              text_label="Load image (or paste or drop)"
              clearer={clearer}
              trigger={() => {
                trigger('o')
              }}
            />
            <Space />
            <Button
              label="p"
              press_gates={press_gates}
              text_label="Save result as png"
              clearer={clearer}
              trigger={() => {
                trigger('p')
              }}
            />
          </div>

          <Line />
          <canvas ref={cref} />
          <Line />
          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              width: '100%',
              position: 'relative',
            }}
          >
            <canvas
              height={sp * 23}
              ref={ti_ref}
              style={{
                position: 'absolute',
                height: sp * 2,
                left: sp * 2,
                top: 0,
                cursor: 'crosshair',
              }}
              onTouchStart={e => {
                slider_click_ref.current = true
                slider_touch_mode.current = true
                clickSetThreshold(e.changedTouches[0].clientX)
              }}
              onTouchEnd={e => {
                setTimeout(() => {
                  slider_click_ref.current = false
                  slider_touch_mode.current = false
                }, 400)
              }}
              onMouseDown={e => {
                if (!slider_touch_mode.current) {
                  slider_click_ref.current = true
                  clickSetThreshold(e.clientX)
                }
              }}
            />
            <RepeatButton
              label="h"
              press_gates={press_gates}
              custom_style={{ height: sp * 2, width: sp * 2 }}
              clearer={clearer}
              trigger={() => {
                trigger('h')
              }}
            />
            <div
              ref={thresh_ref}
              style={{
                flexGrow: 1,
                position: 'relative',
                pointerEvents: 'none',
                lineHeight: sp * 2 + 'px',
              }}
            ></div>
            <RepeatButton
              label="l"
              press_gates={press_gates}
              custom_style={{ height: sp * 2, width: sp * 2 }}
              clearer={clearer}
              trigger={() => {
                trigger('l')
              }}
            />
          </div>
        </div>
        <Line />
        <Line />
        <div
          style={{ paddingLeft: sp, paddingRight: sp, background: '#efefef' }}
        >
          <Line />
          <div>How it works</div>
          <Line />
          <div>
            Adjusted image size: <span ref={dim_ref}></span>
          </div>
          <div>
            Superpixel: {sp}x{sp}
          </div>
          <Line />
          <div>Reduced image</div>
          <canvas ref={rref} />
          <div ref={reduced_ref}></div>
          <Line />
          <div>8-color palette from reduced image</div>
          <canvas ref={pref} />
          <div>
            Using the median cut approach{' '}
            <a
              href="https://spin.atomicobject.com/2016/12/07/pixels-and-palettes-extracting-color-palettes-from-images/"
              target="_blank"
            >
              explained here
            </a>
          </div>
          <Line />
          <div>8-color palette applied to reduced image at original size</div>
          <canvas ref={rpref} />
          <Line />
          <div>
            Superpixels from original image sorted by complexity (data URL
            string length / number of pixels) shown here at 2x
          </div>
          <div
            ref={qref}
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat( auto-fit, minmax(' + sp * 2 + 'px, 1fr) )',
              gridColumnGap: sp / 2,
              gridRowGap: sp / 4,
              textAlign: 'center',
              // maxHeight: sp * 21,
              overflowY: 'auto',
              fontSize: 9,
              lineHeight: '12px',
            }}
          />
          <div>
            Idea for using compression as a proxy for complexity{' '}
            <a
              target="_blank"
              href="https://stackoverflow.com/questions/45579557/how-to-compare-images-and-determine-which-has-more-content/45579688#45579688"
            >
              from this suggestion by Arthur-1 on StackOverflow
            </a>
          </div>
          <Line />
        </div>
        <Line />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: sp,
            paddingRight: sp,
          }}
        >
          <div>
            <a href="https://constraint.systems">constraint.systems</a>
          </div>
          <div>
            <a href="#">View source</a>
          </div>
        </div>
        <Line />
      </div>

      <style jsx global>{`
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Regular.woff') format('woff');
        }
        @font-face {
          font-family: 'custom';
          src: url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'),
            url('/fonts/IBMPlexMono-Italic.woff') format('woff');
          font-style: italic;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'custom', monospace;
          font-size: 12px;
          line-height: 16px;
        }
        * {
          box-sizing: border-box;
        }
        canvas {
          display: block;
        }
        a {
          color: inherit;
        }
        .threshold_marker div {
          background: #bbb;
        }
        button {
          user-select: none;
        }
        .no-select {
          user-select: none;
        }
      `}</style>
    </div>
  )
}

export default Home
