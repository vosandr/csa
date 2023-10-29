import fs from 'fs';
import path from 'path';
const filePath = path.resolve(__dirname, './start.csa')
let startFile = fs.readFileSync(filePath, 'utf8')
if(startFile!==':'){

} else {
  
}
console.log(startFile)