
const fs = require('fs');
const path = require('path');

const p = path.join(__dirname, '..', 'data', 'message.json');

const readDataFromFile = (customCb) => {
    fs.readFile(p, (err, content) => {
        if(!err) {
            customCb(JSON.parse(content));
        }
        else customCb([]);
    }) 
}
 
module.exports = class {

    constructor(title) {
        this.title = title;
    }

    save() {
        readDataFromFile(data => {
            data.push(this);
            fs.writeFile(p, JSON.stringify(data), err => {
                console.log(err);
            });
        })
    }

    static fetchAll(cb) { 
        readDataFromFile(cb);
    }
 
} 

// module.exports = class {

//     constructor(title) {
//         this.title = title;
//     }

//     save() {
        
//         fs.readFile(p, (err, content) => {
//             let data = [];
//             if (!err) {
//                 data = JSON.parse(content)
//             }
//             data.push(this);
//             fs.writeFile(p, JSON.stringify(data), err => {
//                 console.log(err);
//             });
//         });
//     }
//     static fetchAll(cb) { 
//         fs.readFile(p, (err, content) => {
//             if(!err) {
//                 console.log(JSON.parse(content));
//                 cb(JSON.parse(content));
//             }
//             cb([]);
//         })
//     }

// }