# Boiler plate for web development
Boiler plate code for Bootstrap + JQuery. Backend node.js + Babel + Webpack.

Add build dependencies to package.json > { } devDependencies
Add runtime dependencies to package.json > { } dependencies

Not all bootstrap classes have been imported. Add new import statements for bootstrap to src > main.scss at the bottom. __Do not change required calls.__

Try to keep each js file to under 200 kB to improve user experience.

Avoid inline js calls. Try to add all js to .js files and use Webpack export import calls.