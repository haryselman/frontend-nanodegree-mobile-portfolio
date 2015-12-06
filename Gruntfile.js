/*
Used grunt to automate images optimisation and minify content such as js, css and html
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      views: {
        options: {
          newFilesOnly: 'true',
          engine: 'im',
          sizes: [
            {
              width: 1440,
              suffix: '_large_2x',
              quality: 90
            },
            {
              width: 720,
              suffix: '_large_1x',
              quality: 80
            },
            {
              width: 720,
              suffix: '_medium_2x',
              quality: 90
            },
            {
              width: 360,
              suffix: '_medium_1x',
              quality: 80
            },
            {
              width: 200,
              suffix: '_small_2x',
              quality: 90
            },
            {
              width: 100,
              suffix: '_small_1x',
              quality: 80
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
          cwd: 'src/views/images',
          dest: 'views/images'
        }]
      },
        profileimg: {
            options: {
                newFilesOnly: 'true',
                engine: 'im',
                sizes: [
                    {
                        width: 70,
                        suffix: '_small_1x',
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
                cwd: 'src/img',
                dest: 'img'
            }]
        }
    },

    /* Clear out the images directory if it exists */
    clean: {
      views: {
        src: ['views/images']
      },
        profileimg: {
            src: ['img']
        }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      views: {
        options: {
          create: ['views/images']
        }
      },
        profileimg: {
            options: {
                create: ['img']
            }
        }
    },

//minifies all css resources
      cssmin: {
          target: {
              files: [{
                  expand: true,
                  cwd: 'src/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'css',
                  ext: '.min.css'
              }]
          },
          target: {
              files: [{
                  expand: true,
                  cwd: 'src/views/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'views/css',
                  ext: '.min.css'
              }]
          }
      },

//minifies all js resources
      uglify: {
          options: {
              mangle: false
          },
          main: {
              files: {
                  'js/perfmatters.min.js': ['src/js/perfmatters.js']
              }
          },
          views: {
              files: {
                  'views/js/main.min.js': ['src/views/js/main.js']
              }
          }
      },

//minifies relevant html resources. Eventually figured out the htmlmin could also do the minifying of JS and CSS, which would be a better way to go. I guess I will do that in the next project
      htmlmin: {
          dist: {
              options: {
                  removeComments: true,
                  collapseWhitespace: true
              },
              files: {
                  'index.html': 'src/index.html',
                  'views/pizza.html': 'src/views/pizza.html'
              }
          }
      }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images', 'cssmin', 'uglify', 'htmlmin']);

};
