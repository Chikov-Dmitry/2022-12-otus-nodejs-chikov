import minimist from "minimist"
import fs from "fs";
import path from "node:path"
import {drawTree} from "./drawTree.js";


let args = minimist(process.argv)

let PATH = args.path
if (!PATH) throw new Error('Не задан путь до директории')

let DEPTH = args.depth
if(DEPTH && DEPTH !== +DEPTH) throw new Error('--depth должно быть число')


let countDir = 0
let countFiles = 0
function dirTree(filename) {
  let stats = fs.lstatSync(filename)
  let info = {
    name: path.basename(filename)
  };
  if (stats.isDirectory()) {
    ++countDir
    info.items = fs.readdirSync(filename).map(function (child) {
      if (canDive(filename + '/' + child)) return dirTree(path.join(filename, child));
    });
  }else if(stats.isFile()){
    ++countFiles
  }
  return info;
}

function canDive(fileName) {
  if(!DEPTH) return true
  let normalPath = path.normalize(fileName)
  let pathArr = normalPath.split(path.sep)
  let normalPATHarr = path.normalize(PATH).split(path.sep)
  let endPath = pathArr.slice(normalPATHarr.length)
  return endPath.length <= DEPTH;
}

let tree = dirTree(PATH)

console.log(drawTree(tree))
console.log(`${countDir} directories, ${countFiles} files`)

