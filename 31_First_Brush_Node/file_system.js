const fs = require('fs');
const folderName = process.argv[2] || 'Project'

fs.mkdir(folderName);