<h1 id="hw1"> hw1 - Написать функцию для показа древовидной структуры.</h1>

<details>
<summary>Текст задания</summary>
Можно выполнять одну из двух предложенных примеров задач.

1: Написать функцию для показа древовидной структуры.

Пример данных:

```json
{
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
    }
  ]
}
```

Пример запуска программы:

    npm start

Ожидаемый результат:

    1
    ├── 2
    │ ├── 3
    │ └── 4
    ├── 5
    └── 6

2: Написать утилиту tree для удобного показа структуры файлов директории.
Утилита должна принимать на вход обязательный аргумент — путь до директории для показа ее структуры. Также она должна
понимать опцию глубину показа --depth, -d с числом в качестве значения.

Пример запуска программы:

    tree Node.js -d 2

Ожидаемый результат:

    Node.js
    ├── cluster
    │ └── drawTree.js
    ├── domain
    │ ├── error.js
    │ ├── flow.js
    │ └── run.js
    ├── errors
    │ ├── counter.js
    │ └── try-catch.js
    ├──worker
    └── drawTree.js
    4 directories, 7 files

</details>

<h2>Результат выполнения</h2>

<h3>1</h3>

В файле `tree.json` содержится пример данных для запуска первого пункта задания.

<details>
<summary>Пример данных</summary>

```json
{
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
```
</details>

Для зупуска использовать команду

    node jsonTree

Ожидаемый результат:

    1
    ├── 2
    │  ├── 3
    │  ├── 4
    ├── 5
    │  ├── 6
    └── 7
    └── 8
    ├── 9
    └── 10
    │  ├── 11
    │  ├── 12
    │  │  └── 13
    │  │    └── 14
    │  └── 15
    └── 16

___

<h3>2</h3>

Для запуска использовать команду 
    
    node directoryTree --path ../1hw --depth 2

`--path` путь до директории для показа ее структуры

`--depth` глубина показа (необязательный аргумент)

Ожидаемый результат:

    1hw
    ├── directoryTree.js
    ├── drawTree.js
    ├── jsonTree.js
    ├── node_modules
    │  ├── .bin
    │  ├── .package-lock.json
    │  ├── abbrev
    │  ├── anymatch
    │  ├── balanced-match
    │  ├── binary-extensions
    │  ├── brace-expansion
    │  ├── braces
    │  ├── chokidar
    │  ├── concat-map
    │  ├── debug
    │  ├── fill-range
    │  ├── glob-parent
    │  ├── has-flag
    │  ├── ignore-by-default
    │  ├── is-binary-path
    │  ├── is-extglob
    │  ├── is-glob
    │  ├── is-number
    │  ├── minimatch
    │  ├── minimist
    │  ├── ms
    │  ├── nodemon
    │  ├── nopt
    │  ├── normalize-path
    │  ├── picomatch
    │  ├── pstree.remy
    │  ├── readdirp
    │  ├── semver
    │  ├── simple-update-notifier
    │  ├── supports-color
    │  ├── to-regex-range
    │  ├── touch
    │  └── undefsafe
    ├── package-lock.json
    ├── package.json
    ├── prefixes.js
    └── README.md
    └── tree.json
    
    35 directories, 9 files


