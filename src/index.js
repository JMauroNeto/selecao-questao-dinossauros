import {readFileSync, writeFileSync} from 'fs';

const readCSVSync = (path) => {
    const data = readFileSync(path, 'utf-8').split('\n');
    const keys = data[0].split(',');
    const formattedData = [];
    for(let i=1; i<data.length; i++){
        const row = data[i].split(',');
        let rowObject = {};
        keys.forEach((key, index) => {
            rowObject[key] = row[index];
        })
        formattedData.push(rowObject);
    };
    return formattedData;
}

let file1Data = readCSVSync('dataset1.csv')
let file2Data = readCSVSync('dataset2.csv')

file2Data = file2Data.filter(el2 => (el2.STANCE === "bipedal" && (file1Data.find(el1 => el2.NAME === el1.NAME))))
file1Data = file1Data.filter(el1 => ((file2Data.find(el2 => el1.NAME === el2.NAME))))

file1Data.sort((a, b) => a.NAME.localeCompare(b.NAME))
file2Data.sort((a, b) => a.NAME.localeCompare(b.NAME))

let unifiedData = [];

for(let i=0; i< file1Data.length; i++){ 
    const object = {...file1Data[i], ...file2Data[i]}

    unifiedData.push(object);
}

const gravity = 9.8;

unifiedData.forEach(element => {
    element.SPEED = ((element.STRIDE_LENGTH / element.LEG_LENGTH) - 1) * Math.sqrt(element.LEG_LENGTH * gravity)
});

unifiedData.sort((a, b) => b.SPEED-a.SPEED);

const speedOrderedDinosaurs = unifiedData.map(element => (`${element.NAME}\n`)).join('')

writeFileSync('./output.txt', speedOrderedDinosaurs);

export {readCSVSync, unifiedData, speedOrderedDinosaurs};