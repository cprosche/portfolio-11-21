module.exports = function(grunt) {

    //configure the tasks
    grunt.initConfig({
        cssmin: {
			css: {
				src: 'style.css',
				dest: 'public/css/style.min.css'
			}
		},
        watch: {
            scripts: {
              files: ['*.css'],
              tasks: ['cssmin'],
            },
          },
    })

    // load in modules
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // running tasks
    grunt.registerTask('default', ['cssmin', 'watch']);
}