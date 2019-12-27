import words from "../data/oxford_3000";
export default letter => {
    if (letter === "all") {
        let word = words[Math.floor(Math.random() * words.length)];
        return word;
    } else {
        let wordsStartWithLetter = words.filter(word => word.startsWith(letter));
        let word = wordsStartWithLetter[Math.floor(Math.random() * wordsStartWithLetter.length)];
        return word;
    }
}