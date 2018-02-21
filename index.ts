import { IDublette, IDublettenpruefung, Vergleichsmodi } from './contracts/index';
import * as isDirectory from 'is-directory';
import * as fs from 'fs';

function getDirs(path): Array<string>{
  const found = fs.readdirSync(path);
  let files = [];

  for (const current of found){
    const isFolder = isDirectory.sync(path+current);

    if(isFolder){
      const rec_found = getDirs(path+current+"/");
      if(rec_found){
        files = files.concat(rec_found);
      }
    }else{
      files.push(current);
    }
  }

  return files;
}

function logDirs(): void {
  const data = getDirs('test/');
  console.log("Folders: ", data);
}

logDirs();
