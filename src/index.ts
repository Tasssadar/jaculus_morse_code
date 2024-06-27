import * as gpio from "gpio"

// layout.ts vygeneruje web designer
import Layout from "./layout.js"

const SEQ_WORD_SPACE = -1
const SEQ_SENTENCE_SPACE = -2

const MORSE_CODE = [
    // Start at ascii code 48
    "-----", //0
    ".----", //1
    "..---", //2
    "...--", //3
    "....-", //4
    ".....", //5
    "-....", //6
    "--...", //7
    "---..", //8
    "----.", //9
    // Some symbols in asciitable
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ".-",   //A - ascii code 65
    "-...", //B
    "-.-.", //C
    "-..",  //D
    ".",    //E
    "..-.", //F
    "--.",  //G
    "....", //H
    "..",   //I
    ".---", //J
    "-.-",  //K
    ".-..", //L
    "--",   //M
    "-.",   //N
    "---",  //O
    ".--.", //P
    "--.-", //Q
    ".-.",  //R
    "...",  //S
    "-",    //T
    "..-",  //U
    "...-", //V
    ".--",  //W
    "-..-", //X
    "-.--", //Y
    "--..", //Z
]

function validateMessage(text: string): string | null {
    if(text.length === 0) {
        return "Zprava je moc kratka."
    }

    text = text.toUpperCase()

    for(let i = 0; i < text.length; ++i) {
        const c = text.charCodeAt(i)
        if(c == 32 || c == 44 || c == 46) // space, comma, dot
            continue
        const morseIdx = c - 48;
        if(morseIdx < 0 || morseIdx >= MORSE_CODE.length) {
            return `Nelze zakodovat znak na pozici ${i}: ${text.charAt(i)}`
        }
    }
    return null
}

function prepareSequence(text: string): number[] {
    const res: number[] = []

    text = text.toUpperCase()

    for(let i = 0; i < text.length; ++i) {
        const c = text.charCodeAt(i)
        if(c == 32) {
            res.push(SEQ_WORD_SPACE)
            continue
        } else if(c == 46) {
            res.push(SEQ_SENTENCE_SPACE)
            continue
        }

        const morseIdx = c - 48;
        if(morseIdx < 0 || morseIdx >= MORSE_CODE.length) {
            continue
        }

        res.push(morseIdx)
    }
    return res
}

function output(on: boolean) {
    gpio.write(15, on ? 1 : 0)
    gpio.write(10, on ? 1 : 0)
    gpio.write(21, on ? 1 : 0)
}

let gSequence: number[] = []
let gSeqIdx = 0
let gCharIdx = 0

function resetIndexes() {
    output(false);
    gSeqIdx = 0;
    gCharIdx = 0;
}

async function sequenceIter() {
    if(gSeqIdx >= gSequence.length) {
        resetIndexes();
        await sleep(Layout.dotMs.value * Layout.spaceSentenceCoef.value * 2)
        return;
    }

    const symbolIdx = gSequence[gSeqIdx]
    if(symbolIdx === SEQ_WORD_SPACE) {
        await sleep(Layout.dotMs.value * Layout.spaceWordCoef.value)
        ++gSeqIdx;
        return;
    } else if(symbolIdx === SEQ_SENTENCE_SPACE) {
        await sleep(Layout.dotMs.value * Layout.spaceSentenceCoef.value)
        ++gSeqIdx;
        return;
    }

    const symbol = MORSE_CODE[symbolIdx]
    if(gCharIdx >= symbol.length) {
        await sleep(Layout.dotMs.value * Layout.spaceLetterCoef.value)
        gCharIdx = 0;
        ++gSeqIdx;
        return;
    }

    const coef = symbol.charAt(gCharIdx) === '.' ? 1 : Layout.dashCoef.value;
    output(true)
    await sleep(Layout.dotMs.value * coef)
    output(false)
    await sleep(Layout.dotMs.value * Layout.spaceSymbolCoef.value)

    ++gCharIdx;
}

async function main() {
    gpio.pinMode(15, gpio.PinMode.OUTPUT)
    gpio.pinMode(10, gpio.PinMode.OUTPUT)
    gpio.pinMode(21, gpio.PinMode.OUTPUT)

    output(false);

    Layout.begin("FrantaFlinta", "Morseovak", builder => {
        builder.message.onChanged((msg) => { 
            const error = validateMessage(msg.text)
            Layout.messageError.text = error || ""
        })

        builder.setBtn.onPress(() => {
            gSequence = prepareSequence(Layout.message.text)
            resetIndexes()
        })
    })

    gSequence = prepareSequence(Layout.message.text)
    resetIndexes()

    while(true) {
        if(gSequence.length === 0) {
            await sleep(100);
            continue;
        }

        await sequenceIter();
    }
}

main()
