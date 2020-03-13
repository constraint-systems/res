import * as _ from 'lodash'

function getChannel(colors, i) {
  return colors.map(o => o[i])
}

function getRange(channel) {
  return _.max(channel) - _.min(channel)
}

function splitArray(array, split_index) {
  let first = array.slice(0, split_index)
  let second = array.slice(split_index)
  return [first, second]
}

function getAverageColor(colors) {
  return [0, 1, 2].map(i => {
    let channel = getChannel(colors, i)
    return Math.round(_.mean(channel))
  })
}

function splitColors(colors) {
  let channels = [0, 1, 2].map(i => getChannel(colors, i))
  let ranges = channels.map(c => getRange(c))
  let selected_index = ranges.indexOf(_.max(ranges))
  colors.sort(function(a, b) {
    a = a[selected_index]
    b = b[selected_index]
    if (a < b) {
      return -1
    }
    if (b < a) {
      return 1
    }
    return 0
  })
  let median_index = Math.round(colors.length / 2)
  let split = splitArray(colors, median_index)
  return split
}

export function medCut(colors) {
  let split = splitColors(colors)
  let splits = []
  for (let i = 0; i < split.length; i++) {
    let this_split = split[i]
    let again = splitColors(this_split)
    splits.push(...again)
  }
  // let eights = splits
  let eights = []
  for (let i = 0; i < splits.length; i++) {
    let this_split = splits[i]
    let again = splitColors(this_split)
    eights.push(...again)
  }
  let palette = eights.map(array => getAverageColor(array))
  return palette
}
