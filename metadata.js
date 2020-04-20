module.exports = {
  // prompts的变量数据将会写入到metalsmith的metalsmith.metadata()，最终作为模板变量注入到ejs中
  // 因此可通过prompts注入全局变量用于模板条件渲染
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "application created by thinkjs"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
  },
  "new": {
    "default": [
      [".vscode", ".vscode"],
      ["alinode", "alinode"],
      ["docker", "docker"],
      ["src/adapter", "src/adapter"],
      ["src/bootstrap", "src/bootstrap"],
      ["src/config", "src/config"],
      ["src/controller", "src/controller"],
      ["src/extend", "src/extend"],
      ["src/logic", "src/logic"],
      ["src/middleware", "src/middleware"],
      ["src/model", "src/model"],
      ["src/service", "src/service"],
      ["src/utils", "src/utils"],
      ["test", "test"],
      ["www", "www"],
      ["ava.config.js", "ava.config.js"],
      ["development.js", "development.js"],
      ["eslintrc", ".eslintrc"],
      ["gitattributes", ".gitattributes"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"],
    ],
    "multiModule": [
      [".vscode", ".vscode"],
      ["alinode", "alinode"],
      ["docker", "docker"],
      ["src/adapter", "src/common/adapter"],
      ["src/bootstrap", "src/common/bootstrap"],
      ["src/config", "src/common/config"],
      ["src/config/config.js", "src/[moduleName]/config/config.js"],
      ["src/controller", "src/[moduleName]/controller"],
      ["src/extend", "src/[moduleName]/extend"],
      ["src/logic", "src/[moduleName]/logic"],
      ["src/middleware", "src/[moduleName]/middleware"],
      ["src/model", "src/[moduleName]/model"],
      ["src/service", "src/[moduleName]/service"],
      ["src/utils", "src/utils"],
      ["test", "test/[moduleName]"],
      ["www", "www"],
      ["ava.config.js", "ava.config.js"],
      ["development.js", "development.js"],
      ["eslintrc", ".eslintrc"],
      ["gitattributes", ".gitattributes"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"]
    ]
  },
  "controller": {
    "default": [
      ["src/controller/index.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ],
    "rest": [
      ["src/controller/rest.js", "src/[moduleName]/controller/rest.js"],
      ["src/controller/restIndex.js", "src/[moduleName]/controller/[action].js"],
      ["src/logic/index.js", "src/[moduleName]/logic/[action].js"]
    ]
  },
  "model": [
    ["src/model/index.js", "src/[moduleName]/model/[action].js"]
  ],
  "service": [
    ["src/service/index.js", "src/[moduleName]/service/[action].js"]
  ],
  "middleware": [
    ["src/middleware/base.js", "src/[moduleName]/middleware/[action].js"]
  ],
  "adapter": [
    ["src/adapter/base.js", "src/[moduleName]/adapter/[type]/[action].js"]
  ],
  "module": [
    ["src/config/config.js", "src/[moduleName]/config/config.js"],
    ["src/controller/base.js", "src/[moduleName]/controller/base.js"],
    ["src/controller/index.js", "src/[moduleName]/controller/index.js"],
    ["src/logic/index.js", "src/[moduleName]/logic/index.js"],
    ["src/model/index.js", "src/[moduleName]/model/index.js"]
  ],
  "completeMessage": "To get started:\n\n<% if (!inPlace) { %># enter path\n$ cd <%= destDirName %>\n\n<% } %># install dependencies:\n$ npm install\n\n# run the app\n$ npm start"
}
