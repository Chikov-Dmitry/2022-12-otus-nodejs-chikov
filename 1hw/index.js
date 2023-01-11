import tree from './tree.json' assert {type: 'json'}


import prefixes from './prefixes.js'

function createTreeArr(obj, lev) {
  let treeArr = []

  function recursion(obj, lev) {
    let level = lev ? lev : 0
    for (const treeKey in obj) {
      if (treeKey === 'name') {
        treeArr.push({value: obj[treeKey], level: level})
      } else if (treeKey === 'items') {
        level++
        obj[treeKey].forEach(el => {
          recursion(el, level)
        })
      }
    }
  }
  recursion(obj, lev)

  return treeArr
}

function drawTree(TreeArr) {
  let resStr = ""
  for (let i = 0; i < TreeArr.length; i++) {
    if (TreeArr[i].level === 0)  resStr +=TreeArr[i].value.toString() +'\n'
    if (TreeArr[i].level === 1) {
      let space = ""
      let hasNextSibling = checkNextSibling(TreeArr.slice(i, TreeArr.length - 1))
      if (hasNextSibling) {
        space += prefixes.cross
      } else space += prefixes.angle
      resStr += space + TreeArr[i].value + '\n'
    }
    if (TreeArr[i].level > 1) {
      let space = ""
      for (let j = 0; j < TreeArr[i].level; j++) {

        if (j !== TreeArr[i].level - 1) {
          let hasNextSibling = checkSibling(TreeArr.slice(i), j + 1)
          if (hasNextSibling) space += prefixes.vert
          else space += prefixes.space
        } else {
          let hasNextSibling = checkNextSibling(TreeArr.slice(i, TreeArr.length - 1))
          if (hasNextSibling) {
            space += prefixes.cross
          } else space += prefixes.angle
        }
      }
      resStr +=space + TreeArr[i].value + '\n'
    }
  }

  function checkSibling(inputArr, level) {
    let res = false
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].level === level) {
        res = true
        break
      }
    }

    return res
  }

  function checkNextSibling(inputArr) {
    let res = false
    for (let i = 1; i < inputArr.length; i++) {
      if (inputArr[0].level === inputArr[i].level) res = true
    }
    return res
  }

  return resStr
}

console.log(drawTree(createTreeArr(tree)))

