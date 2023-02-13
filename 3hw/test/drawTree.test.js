import {createTreeArr, checkSibling, checkNextSibling, drawTree} from "../src/drawTree";

const obj = {
  name: 1,
  items: [{
    name: 2,
    items: [
      {
        name: 3
      },
      {
        name: 4
      }
    ]
  }]
}
const largeObj = {
  "name": 1,
  "items": [
    {
      "name": 2,
      "items": [
        {
          "name": 3
        },
        {
          "name": 4
        }
      ]
    },
    {
      "name": 5,
      "items": [
        {
          "name": 6
        }
      ]
    },
    {
      "name": 7,
      "items": [
        {
          "name": 8,
          "items": [
            {
              "name": 9
            },
            {
              "name": 10,
              "items": [
                {
                  "name": 11
                },
                {
                  "name": 12,
                  "items": [
                    {
                      "name": 13,
                      "items": [
                        {
                          "name": 14
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": 15
                }
              ]
            },
            {
              "name": 16
            }
          ]
        }
      ]
    }
  ]
}

const resArr = [{"level": 0, "value": 1}, {"level": 1, "value": 2}, {"level": 2, "value": 3}, {"level": 2, "value": 4}]

const truthyNextSiblingArr = [{"level": 2, "value": 3}, {"level": 2, "value": 4}]
const falsyNextSiblingArr = [{"level": 2, "value": 3}, {"level": 3, "value": 4}]

describe("testing createTreeArr function", () => {
  test('simple obj', () => {
    expect(createTreeArr({name: 'test name'})).toEqual([{value: 'test name', level: 0}])
  })
  test('simple obj with level', () => {
    expect(createTreeArr({name: 'test with lvl'}, 2)).toEqual([{value: 'test with lvl', level: 2}])
  })
  test('simple obj with child', () => {
    expect(createTreeArr(obj)).toEqual(resArr)
  })
})

describe("testing checkSibling function", ()=>{
    test('always true', ()=>{
      expect(checkSibling(resArr, 0)).toBe(true)
    })
  test('to be false', ()=>{
    expect(checkSibling(resArr, 10)).toBe(false)
  })
  test('to be true', ()=>{
    expect(checkSibling(resArr, 2)).toBe(true)
  })



})

describe("testing checkNextSibling function", ()=> {

  test('to be false', () => {
    expect(checkNextSibling(falsyNextSiblingArr)).toBe(false)
  })
  test('to be true', () => {
    expect(checkNextSibling(truthyNextSiblingArr)).toBe(true)
  })
})

describe("testing drawTree function", ()=> {

  test('simple test', () => {
    expect(drawTree(obj)).toBe('1\n' +
      '└── 2\n' +
      '  └── 3\n' +
      '  └── 4\n')
  })
  test('large test', () => {
    expect(drawTree(largeObj)).toBe('1\n' +
      '├── 2\n' +
      '│  ├── 3\n' +
      '│  ├── 4\n' +
      '├── 5\n' +
      '│  ├── 6\n' +
      '└── 7\n' +
      '  └── 8\n' +
      '    ├── 9\n' +
      '    └── 10\n' +
      '    │  ├── 11\n' +
      '    │  ├── 12\n' +
      '    │  │  └── 13\n' +
      '    │  │    └── 14\n' +
      '    │  └── 15\n' +
      '    └── 16\n')
  })

})

