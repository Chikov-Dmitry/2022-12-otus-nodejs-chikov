import {dirTree, canDive} from "../src/directoryTree.js";

describe('testing dirTree function', () => {
  test('without path', () => {
    expect(dirTree()).toBeNull()
  })
  test('some test', () => {
    expect(dirTree('C:\\projects\\2022-12-otus-nodejs-chikov\\3hw\\coverage')).toEqual(
      {
        "name": "coverage",
        "items": [{"name": "clover.xml"}, {"name": "coverage-final.json"}, {
          "name": "lcov-report",
          "items": [{"name": "base.css"}, {"name": "block-navigation.js"}, {"name": "directoryTree.js.html"}, {"name": "drawTree.js.html"}, {"name": "favicon.png"}, {"name": "index.html"}, {"name": "prefixes.js.html"}, {"name": "prettify.css"}, {"name": "prettify.js"}, {"name": "sort-arrow-sprite.png"}, {"name": "sorter.js"}]
        }, {"name": "lcov.info"}]
      }
    )
  })
})

describe('testing canDive function', ()=>{
  test('without depth', ()=>{
    expect(canDive()).toBeTruthy()
  })
})