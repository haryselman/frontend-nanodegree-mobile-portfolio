/*
In comparision to the Udaticty tutorials I added several folder where responsive images are exported to
added prefixr to automatically creat the css prefixes
added csscomb to comply to Udacity styleguide.
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      views: {
        options: {
          newFilesOnly: 'false',
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


    /* Clear out the images directory if it exists */
    clean: {
      views: {
        src: ['views/images']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      views: {
        options: {
          create: ['views/images']
        }
      }
    }
  }});

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
