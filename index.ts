import { IDublette, IDublettenpruefung, Vergleichsmodi } from './contracts/index';
import * as isDirectory from 'is-directory';
import * as fs from 'fs';

test();

function test():void {
  console.log('test');
}

function getDirs(path){
  var found = fs.readdirSync(path);
  var files = [];

  for (const current of found){
    const isFolder = isDirectory.sync(path+current);

    if(isFolder){
      var rec_found = getDirs(path+current+"/");
      if(rec_found){
        files = files.concat(rec_found);
      }
    }else{
      files.push(current);
    }
  }

  return files;
}

function logDirs(){
  var data = getDirs('test/');
  console.log("Folders: ", data);
}
logDirs();
