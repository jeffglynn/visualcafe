var browserSync = require('browser-sync');

browserSync({
  
  proxy: 'http://visualcafe.ca/',
 
  
files: "css/*.css",
serveStatic: ['.']
  
  
});
