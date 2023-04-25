Notes
- npm install webpack webpack-cli
- npx webpack : run webpack without any configuration at default.
- npx webpack --stats detailed: print details about the build process.

4 types of asset modules
- asset/resource: files into the output directory and exports the URL to those files.
- asset/inline:
  - inline the files into the bundles as a data URI. Can be used when importing small asset files like SVG.
  - doesn't generate a new file in the output directory, instead it'll generate a base 64 for a representation of file.
- asset: Combination of above, if file size is less than 8kb at default this file will be treated as inline asset module.
- asset/source: Import the source code of the file as it is and injects it into the JS bundle as a string text.
  - doesn't generate a new file like asset/inline

Public path
- tell webpack which url to use in order to load all the generated files in the browser

Loaders
- Allow to import all others kinds of files which cannot be handled by using asset modules.
  - Examples: 
    - CSS loader reads the contents of the CSS file and return this contents, but it doesn't do anything after
    - Style loader takes the Css and injects it into the page using style tags. Use style loader to bundle the CSS together with JS into single resulting file.
    - For multiple use: pay attention to the order in the array. webpack process the order from right to left.

Plugins
  - A JS lib that adds functionality to the Webpack
  - Do everything that loaders cannot do
  - Can also modify how the bundles themselves are created.
  - Examples
    - terser-webpack-plugin: minify bundle size