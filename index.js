"use strict";
exports.__esModule = true;
var isDirectory = require("is-directory");
var fs = require("fs");
test();
function test() {
    console.log('test');
}
function getDirs(path) {
    var found = fs.readdirSync(path);
    var files = [];
    for (var _i = 0, found_1 = found; _i < found_1.length; _i++) {
        var current = found_1[_i];
        var isFolder = isDirectory.sync(path + current);
        if (isFolder) {
            var rec_found = getDirs(path + current + "/");
            if (rec_found) {
                files = files.concat(rec_found);
            }
        }
        else {
            files.push(current);
        }
    }
    return files;
}
function logDirs() {
    var data = getDirs('test/');
    console.log("ERG ", data);
}
logDirs();
