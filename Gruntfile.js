module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'less/modules/mixins.less',
          'less/modules/base.less',
          'less/modules/buttons.less',
          'less/modules/section.less',
          'less/modules/header.less',
          'less/modules/menu.less',
          'less/modules/side-menu.less',
          'less/modules/titles.less',
          'less/modules/big-slider.less',
          'less/modules/icon-boxes.less',
          'less/modules/lists.less',
          'less/modules/contacts.less',
          'less/modules/share.less',
          'less/modules/progress-bar.less',
          'less/modules/footer.less',
          'less/modules/animations.less'
        ],
        dest: 'less/style.less',
      },
    },
    less: {
      development: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },
    watch: {
      files: ['less/modules/*.less'],
      tasks: ['concat','less']
    },
    browserSync: {
      dev: {
          bsFiles: {
              src : [
                  'css/style.css',
                  '*.html'
              ]
          },
          options: {
              watchTask: true,
              server: './'
          }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['browserSync', 'watch']);

};