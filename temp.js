/*
 In comparision to the Udaticty tutorials I added several folder where responsive images are exported to
 added prefixr to automatically creat the css prefixes
 added csscomb to comply to Udacity styleguide.
 */

module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            portfolio: {
                options: {
                    newFilesOnly: 'true',
                    engine: 'im',
                    sizes: [
                        {
                            width: 600,
                            suffix: '_large_2x',
                            quality: 100
                        },
                        {
                            width: 500,
                            suffix: '_large_1x',
                            quality: 70
                        },
                        {
                            width: 400,
                            suffix: '_medium_2x',
                            quality: 100
                        },
                        {
                            width: 350,
                            suffix: '_medium_1x',
                            quality: 70
                        }
                    ]
                },

                /*
                 You don't need to change this part if you don't change
                 the directory structure.
                 */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'assets_src/images_src/portfolio',
                    dest: 'assets/images/portfolio'
                }]
            },
            social: {
                options: {
                    newFilesOnly: 'true',
                    engine: 'im',
                    sizes: [
                        {
                            width: 400,
                            suffix: '_large_2x',
                            quality: 70
                        },
                        {
                            width: 200,
                            suffix: '_large_1x',
                            quality: 40
                        },
                        {
                            width: 300,
                            suffix: '_medium_2x',
                            quality: 70
                        },
                        {
                            width: 150,
                            suffix: '_medium_1x',
                            quality: 40
                        }
                    ]
                },

                /*
                 You don't need to change this part if you don't change
                 the directory structure.
                 */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'assets_src/images_src/social',
                    dest: 'assets/images/social'
                }]
            },
            about: {
                options: {
                    newFilesOnly: 'true',
                    engine: 'im',
                    sizes: [
                        {
                            height: 2000,
                            suffix: '_large_2x',
                            quality: 30
                        },
                        {
                            height: 1000,
                            suffix: '_large_1x',
                            quality: 30
                        },
                        {
                            height: 800,
                            suffix: '_medium_2x',
                            quality: 30
                        },
                        {
                            height: 600,
                            suffix: '_medium_1x',
                            quality: 30
                        }
                    ]
                },

                /*
                 You don't need to change this part if you don't change
                 the directory structure.
                 */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'assets_src/images_src/about',
                    dest: 'assets/images/about'
                }]
            }
        },

        /* creates css according to the name convention of Udacity */
        csscomb: {
            dynamic_mappings: {
                expand: true,
                cwd: 'assets_src/css_src/css_src_prefixr/',
                src: ['*.css', '!*.resorted.css'],
                dest: 'assets/css',
                ext: '.css'
            }
        },
        /* automatically creates the prefixes in the css files. browser support is defined in browserslist which is in the root */
        autoprefixer: {
            options: {
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'assets_src/css_src/*.css',
                dest: 'assets_src/css_src/css_src_prefixr/'
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            portfolio: {
                src: ['assets/images/portfolio']
            },
            social: {
                src: ['assets/images/social']
            },
            about: {
                src: ['assets/images/about']
            }
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            portfolio: {
                options: {
                    create: ['assets/images/portfolio']
                }
            },
            portfolio: {
                options: {
                    create: ['assets/images/social']
                }
            },
            portfolio: {
                options: {
                    create: ['assets/images/about']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-csscomb');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'autoprefixer', 'csscomb']);

};
