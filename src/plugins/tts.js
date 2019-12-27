import basicTts from "basic-tts"
export default {
    normall: basicTts.createSpeaker({
        voice: "Google US English",
        lang: "en-UK",
        volume: 1,
        pitch: 1,
        rate: 1
    }),
    slow: basicTts.createSpeaker({
        voice: "Google US English",
        lang: "en-UK",
        volume: 1,
        pitch: 1,
        rate: -1
    })
};