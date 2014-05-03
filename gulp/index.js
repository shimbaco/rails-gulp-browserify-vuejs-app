var fs          = require('fs');
var scripts     = require('./utils/script_filter');

var tasks       = fs.readdirSync('./gulp/tasks/').filter(scripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
