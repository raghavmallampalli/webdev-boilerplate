# Boiler plate for web development
Boiler plate code for Bootstrap + JQuery. Backend node.js + Babel + Webpack. 

## Getting started
Fork the repo and change your project details in webpack.config.js and package.json. Install node.js for your PC. Change to parent directory of repo and run ```npm install```

## Adding new dependencies
Easiest way to add new third party libraries is running ```npm install nameOfPackage``` at the terminal. package.json is updated automatically. 

### To improve perfomance:
Add build dependencies to package.json > { } devDependencies

Add runtime dependencies to package.json > { } dependencies

Make sure to add version numbers to prevent future conflicts

## Notes
Not all bootstrap classes have been imported. Add new import statements for bootstrap to src > main.scss at the bottom. __Do not change required calls.__

Try to keep each js file to under 200 kB to improve user experience.

Avoid inline JS calls. Try to add all JS to .js files and use Webpack export import calls.

## Serve the site
Run in terminal:
```
npm run-script serve:testing
```
## Deploy the site
Run in terminal:
```
npm run-script build:production
```
Then copy the "public" folder and deploy it
