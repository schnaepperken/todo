module.exports = function (grunt) {

    grunt.initConfig({
        shell: {
            build: {
                command: 'cfx xpi'
            },
            upload: {
                command: 'wget --post-file=todo.xpi http://localhost:8888/ || echo>/dev/null'
            }
        },
        watch: {
            xpi: {
                files: 'lib/**',
                tasks: ['shell:build', 'shell:upload']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['watch:xpi']);
    grunt.registerTask('build', ['shell:build']);
};