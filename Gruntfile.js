module.exports = function(grunt) {

    grunt.initConfig({
        shell: {
            xpi: {
                command: [
                    'cfx xpi',
                    'wget --post-file=todo.xpi http://localhost:8888/ || echo>/dev/null'
                ].join('&&')
            }
        },
        watch: {
            xpi: {
                files: 'lib/**',
                tasks: ['shell:xpi']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['watch']);
};