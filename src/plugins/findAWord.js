import words from "../data/oxford_3000";
import yandex from "yandex-translate";

let tran = yandex("trnsl.1.1.20191227T180741Z.4d3d316f07c6dd69.2906b03a430fe5c56cd6a5cd4bdabcba7ca97f64");

export default async (letters, lang) => {
    if (letters.includes("all")) {
        let word = words[Math.floor(Math.random() * words.length)];
        return returnQuestionObject(word, lang);

    } else {
        let letter = letters[Math.floor(Math.random() * letters.length)];
        let wordsStartWithLetter = words.filter(word => word.startsWith(letter));
        let word = wordsStartWithLetter[Math.floor(Math.random() * wordsStartWithLetter.length)];
        return returnQuestionObject(word, lang);
    }
}

function returnQuestionObject(word, lang) {
    return new Promise((resolve, reject) => {
        tran.translate(word, { to: "ar" }, (err, arabicWord) => {
            let _word = lang === "ar" ? arabicWord.text[0] : word;
            let answer = lang === "ar" ? word : arabicWord.text[0];
            if (!err) return resolve({ word: _word, answer });
            reject(err);
        });
    });

}