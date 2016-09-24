module.exports = {
    browsersync: {
        parent: '[Parent Task] Loads the site in the default browser and runs a server for other devices to connect to.',
        reload: '[Child Task] Forces BrowserSync to reload the site.'
    },
    build: {
        parent: '[Parent Task] Processes files used to create the site and opens it in the default browser.',
    },
    clean: {
        parent: '[Parent Task] Deletes all files and folders generated by Gulp.',
        root: '[Child Task] Deletes the root folder and all its contents.',
        images: '[Child Task] Deletes the `images/` folder and all its contents.',
        scripts: '[Child Task] Deletes the `main.js`.',
        static: '[Child Task] Deletes the `static/` folder and all its contents.',
        styles: '[Child Task] Deletes the `main.css`.',
        documentation: {
            root: '[Child Task] Deletes `documentation/` and all its contents.',
            styles: '[Child Task] Deletes `documentation/styles/` and all its contents.'
        }
    },
    document: {
        parent: '[Parent Task] Generates the output from the different self-documenting systems.',
        styles: '[Child Task] Generate a Scss styleguide via SassDoc.'
    },
    errata: {
        parent: '[Parent Task] Copies all remaining files to `.build/`.'
    },
    images: {
        build: '[Child Task] Copies images to `.build/`.',
        test: '[Child Task] Optimizes images and copies them to `.test/`.'
    },
    lint: {
        parent: '[Parent Task] Checks all code for issues.',
        scripts: '[Child Task] Checks JavaScript for issues.',
        styles: '[Child Task] Checks Sass for issues.',
        pages: '[Child Task] HTML for issues.'
    },
    pages: {
        build: '[Child Task] Compiles HTML partials and converts special symbols into valid HTML entities.',
        test: '[Child Task] Minifies the compiled HTML.'
    },
    scripts: {
        build: '[Child Task] Collects JavaScript files and combine into one main file.',
        test: '[Child Task] Optimizes combined JavaScript.'
    },
    static: {
        build: '[Child Task] Copies static files and subfolders to `.build/`.',
        test: '[Child Task] Copies static files and subfolders to `.test/`.'
    },
    styles: {
        build: '[Child Task] Compile auditable Sass and report if there are syntax errors, generate sourcemaps, and generate vendor prefixes.',
        test: '[Child Task] Rewrites CSS according to `.stylelintrc`, compile optimized Sass, and generate vendor prefixes.'
    },
    vendor: {
        parent: '[Parent Task] Copies vendor code from `node_modules/`.',
        jquery: '[Child Task] Copies jQuery to `source/vendor/jquery/`.'
    }
};