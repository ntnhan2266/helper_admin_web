// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    apiUrl: 'http://ec2-18-140-5-166.ap-southeast-1.compute.amazonaws.com//api',
    imageHost: 'http://ec2-18-140-5-166.ap-southeast-1.compute.amazonaws.com/',
    // apiUrl: 'http://localhost:4000/api',
    // imageHost: 'http://localhost:4000',
};
