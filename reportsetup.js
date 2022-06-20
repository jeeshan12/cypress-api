const fs = require('fs');
function removeMochawesomeJSON() {
    // checking for mochawesome.json, if exists delete it
    if (fs.existsSync('./mochawesome.json')) {
        fs.unlinkSync('./mochawesome.json');
        console.log('mochawesome.json file Deleted Successfully !!!!!')
    }

    // checking for mochawesome-report, if exists delete it
    if (fs.existsSync('./mochawesome-report')) {
        fs.rmSync('./mochawesome-report', {
            recursive: true,
            force: true
        })
        console.log('mochawesome-report folder Deleted Successfully !!!!!')
    }

     // checking for results, if exists delete it
     if (fs.existsSync('./cypress/results')) {
        fs.rmSync('./cypress/results', {
            recursive: true,
            force: true
        })
        console.log('results folder Deleted Successfully !!!!!')
    }

}

removeMochawesomeJSON();