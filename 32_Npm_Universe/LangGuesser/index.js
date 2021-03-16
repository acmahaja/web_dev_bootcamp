const franc = require('franc');
var colors = require('colors');
const langs = require('langs');

const sentence = process.argv.slice(2).toString().replace(/,/g, ' ');
console.log(sentence.yellow);
const languageCode = franc(sentence);
if (languageCode === 'und') {
    console.log(`We couldnt figure out your language, we need more text`.red);
} else {
    const language = langs.where("3", languageCode);
    console.log(`We think your language is: ${language.name}`.green);
    if (franc.all(sentence).slice(1, 4).length) {
        console.log(`Similar Langauges are:`.green);
        for (let language of franc.all(sentence).slice(1, 4)) {
            const result = langs.where("3", language[0]);
            if (result !== undefined) {
                console.log(`\t${result.name.green}`);
            }
        }
    }
}