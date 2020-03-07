# gas-webpack-boilerplate

GAS でローカル開発するときのための自分用ボイラープレート

## Tech Stack

- google/clasp
- webpack
- TypeScript

## Prerequisites

- Node.js
- google/clasp
- UNIX

## Getting Started

```
$ git clone <URL> <project_name>
$ cd <project_name>
$ yarn
```

```json
{
  "scriptId": <your_script_id>,
  "rootDir": "dist"
}
```

```
$ yarn build
$ clasp push
```
