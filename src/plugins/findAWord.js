import words from "../data/oxford_3000";
import tran from "./tran";

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
            let _word = lang === "ar" ? arabicWord.text.join("") : word;
            let answer = lang === "ar" ? word : arabicWord.text.join("");
            if (!err) return resolve({ word: _word, answer });
            reject(err);
        });
    });

}