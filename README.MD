STEPS 
1. npm init -y
2. npm install webpack webpack-cli --save-dev
3. in package.json: 
    -  "main": "index.js", (remove)
    +  "private": true, (add)

4. directory: 
├── dist
│   ├── main.js
│   └── index.html
├── src
│   ├── index.js 
    └── other js files 

├── package-lock.json
├── package.json
└── webpack.config.js (view this repository's config to see what to add)

on config files: 
As of version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file.
https://webpack.js.org/guides/getting-started/

