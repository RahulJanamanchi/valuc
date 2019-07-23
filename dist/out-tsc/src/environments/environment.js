// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export var environment = {
    production: false,
    environments: ['localDev', 'staging', 'test'],
    apis: {
        images: 'https://staging1.nvipani.com',
        login: 'https://jsonplaceholder.typicode.com/posts',
        brands: 'https://staging1.nvipani.com/publishedProductBrands',
        items: 'https://jsonplaceholder.typicode.com/photos',
        scan: 'https://staging1.nvipani.com/scanProduct',
        track: 'https://staging1.nvipani.com/trackerNode'
    },
    localDev: {
        images: 'http://localhost:3000',
        login: 'https://jsonplaceholder.typicode.com/posts',
        brands: 'http://localhost:3000/publishedProductBrands',
        items: 'https://jsonplaceholder.typicode.com/photos',
        scan: 'http://localhost:3000/scanProduct',
        track: 'http://localhost:3000/trackerNode'
    },
    staging: {
        images: 'https://staging1.nvipani.com',
        login: 'https://jsonplaceholder.typicode.com/posts',
        brands: 'http://staging1.nvipani.com/publishedProductBrands',
        items: 'https://jsonplaceholder.typicode.com/photos',
        scan: 'https://staging1.nvipani.com/scanProduct',
        track: 'https://staging1.nvipani.com/trackerNode'
    },
    test: {
        images: 'https://staging1.nvipani.com',
        login: 'https://jsonplaceholder.typicode.com/posts',
        brands: 'http://staging1.nvipani.com/publishedProductBrands',
        items: 'https://jsonplaceholder.typicode.com/photos',
        scan: 'https://staging1.nvipani.com/scanProduct',
        track: 'https://staging1.nvipani.com/trackerNode'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map