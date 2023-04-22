Notes
- npm install webpack webpack-cli
- npx webpack : run webpack without any configuration at default.
- npx webpack --stats detailed: print details about the build process.

4 types of asset modules
- asset/resource: files into the output directory and exports the URL to those files.
- asset/inline: inline the files into the bundles as a data URI. Can be used when importing small asset files like SVG.
- asset: Combination of above, if file size is less than 8kb at default this file will be treated as inline asset module.
- asset/source: Import the source code of the file as it is and injects it into the JS bundle as a string text.