// AUTOGENERATED FILE, DO NOT EDIT
// Generated by https://gridui.robotikabrno.cz/
// Layout: {"cols":12,"rows":18,"enableSplitting":true,"widgets":[{"uuid":47597,"type":"Input","state":{"id":"message","x":0,"y":2,"w":12,"h":1,"tab":0,"css":{},"text":"","color":"#cccccc","type":"text","disabled":false}},{"uuid":43561,"type":"Slider","state":{"id":"dotMs","x":0,"y":6,"w":12,"h":1,"tab":0,"css":{},"color":"#008000","fontSize":16,"min":200,"max":3000,"value":300,"precision":1,"showValue":true}},{"uuid":39019,"type":"Text","state":{"id":"Text11","x":0.5,"y":5.5,"w":2.5,"h":0.5,"tab":0,"css":{},"text":"tecka (ms)","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":18409,"type":"Slider","state":{"id":"dashCoef","x":0,"y":7.5,"w":12,"h":1,"tab":0,"css":{},"color":"#3584e4","fontSize":16,"min":1,"max":10,"value":3,"precision":0.1,"showValue":true}},{"uuid":57416,"type":"Text","state":{"id":"Text111","x":0.5,"y":7,"w":2.5,"h":0.5,"tab":0,"css":{},"text":"čárka","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":43065,"type":"Slider","state":{"id":"spaceSymbolCoef","x":0,"y":9,"w":12,"h":1,"tab":0,"css":{},"color":"#f6d32d","fontSize":16,"min":1,"max":10,"value":1,"precision":0.1,"showValue":true}},{"uuid":14817,"type":"Text","state":{"id":"Text1111","x":0.5,"y":8.5,"w":2,"h":0.5,"tab":0,"css":{},"text":"mezera","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":64026,"type":"Slider","state":{"id":"spaceLetterCoef","x":0,"y":10.5,"w":12,"h":1,"tab":0,"css":{},"color":"#ff7800","fontSize":16,"min":1,"max":10,"value":3,"precision":0.1,"showValue":true}},{"uuid":18472,"type":"Text","state":{"id":"Text11111","x":0.5,"y":10,"w":2,"h":0.5,"tab":0,"css":{},"text":"m písmeno","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":52161,"type":"Text","state":{"id":"messageError","x":0,"y":3,"w":12,"h":1.5,"tab":0,"css":{},"text":"","fontSize":12,"color":"#e01b24","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":42947,"type":"Slider","state":{"id":"spaceWordCoef","x":0,"y":12,"w":12,"h":1,"tab":0,"css":{},"color":"#9141ac","fontSize":16,"min":1,"max":20,"value":7,"precision":0.1,"showValue":true}},{"uuid":30195,"type":"Text","state":{"id":"Text111111","x":0.5,"y":11.5,"w":2.5,"h":0.5,"tab":0,"css":{},"text":"mezera slovo","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":16924,"type":"Text","state":{"id":"Text1111111","x":0.5,"y":13,"w":2.5,"h":0.5,"tab":0,"css":{},"text":"mezera věta","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","prefix":"","suffix":""}},{"uuid":52206,"type":"Slider","state":{"id":"spaceSentenceCoef","x":0,"y":13.5,"w":12,"h":1,"tab":0,"css":{},"color":"#986a44","fontSize":16,"min":1,"max":20,"value":7,"precision":0.1,"showValue":true}},{"uuid":30088,"type":"Button","state":{"id":"setBtn","x":6,"y":16,"w":5.5,"h":1.5,"tab":0,"css":{},"text":"Nastavit","fontSize":12,"color":"#000000","background":"#57e389","align":"center","valign":"center","disabled":false}},{"uuid":36763,"type":"Button","state":{"id":"reset","x":8.5,"y":0.5,"w":3,"h":1,"tab":0,"css":{},"text":"Reset","fontSize":12,"color":"#000000","background":"","align":"center","valign":"center","disabled":false}},{"uuid":49332,"type":"Led","state":{"id":"Led1","x":0,"y":0,"w":1.5,"h":1.5,"tab":0,"css":{},"color":"#FF0000","on":false}}]}

// Add this as a file layout.ts to your project.
//
// Inicialization:
//
//   import Layout from "./layout.js"
//
//   Layout.begin("Owner name", "Device Name", builder => {
//
//     // Add calback handlers here, like this:
//     builder.Button1.onPress(btn => {
//         console.log("press")
//     })
//
//   })
//
// Usage later in code:
//
//   Layout.Button1.color = "red";
//   console.log(Layout.Button1.pressed)
//

import * as gridui from "gridui"

if(gridui.version() < 0x040000) {
    throw new Error("Your RBGridUi library version is too low for this layout, please update to 040000.")
}

interface LayoutBuilder {
    readonly message: gridui.builder.Input
    readonly dotMs: gridui.builder.Slider
    readonly Text11: gridui.builder.Text
    readonly dashCoef: gridui.builder.Slider
    readonly Text111: gridui.builder.Text
    readonly spaceSymbolCoef: gridui.builder.Slider
    readonly Text1111: gridui.builder.Text
    readonly spaceLetterCoef: gridui.builder.Slider
    readonly Text11111: gridui.builder.Text
    readonly messageError: gridui.builder.Text
    readonly spaceWordCoef: gridui.builder.Slider
    readonly Text111111: gridui.builder.Text
    readonly Text1111111: gridui.builder.Text
    readonly spaceSentenceCoef: gridui.builder.Slider
    readonly setBtn: gridui.builder.Button
    readonly reset: gridui.builder.Button
    readonly Led1: gridui.builder.Led
}

interface Layout {
    readonly message: gridui.widget.Input
    readonly dotMs: gridui.widget.Slider
    readonly Text11: gridui.widget.Text
    readonly dashCoef: gridui.widget.Slider
    readonly Text111: gridui.widget.Text
    readonly spaceSymbolCoef: gridui.widget.Slider
    readonly Text1111: gridui.widget.Text
    readonly spaceLetterCoef: gridui.widget.Slider
    readonly Text11111: gridui.widget.Text
    readonly messageError: gridui.widget.Text
    readonly spaceWordCoef: gridui.widget.Slider
    readonly Text111111: gridui.widget.Text
    readonly Text1111111: gridui.widget.Text
    readonly spaceSentenceCoef: gridui.widget.Slider
    readonly setBtn: gridui.widget.Button
    readonly reset: gridui.widget.Button
    readonly Led1: gridui.widget.Led

    begin(ownerName: string, deviceName: string, builderCallback?: (layoutBuilder: LayoutBuilder) => void): void

    changeTab(index: number): void
    log(message: string): void
}

const layout = {
    begin(ownerName: string, deviceName: string, builderCallback?: (layoutBuilder: LayoutBuilder) => void) {
        gridui.begin(ownerName, deviceName, (builder) => {
            const layoutBuilder: LayoutBuilder = {
                message: builder.input(0, 2, 12, 1, 47597),
                dotMs: builder.slider(0, 6, 12, 1, 43561)
                    .min(200)
                    .max(3000)
                    .value(300),
                Text11: builder.text(0.5, 5.5, 2.5, 0.5, 39019)
                    .text("tecka (ms)"),
                dashCoef: builder.slider(0, 7.5, 12, 1, 18409)
                    .color("#3584e4")
                    .min(1)
                    .max(10)
                    .value(3)
                    .precision(0.1),
                Text111: builder.text(0.5, 7, 2.5, 0.5, 57416)
                    .text("čárka"),
                spaceSymbolCoef: builder.slider(0, 9, 12, 1, 43065)
                    .color("#f6d32d")
                    .min(1)
                    .max(10)
                    .value(1)
                    .precision(0.1),
                Text1111: builder.text(0.5, 8.5, 2, 0.5, 14817)
                    .text("mezera"),
                spaceLetterCoef: builder.slider(0, 10.5, 12, 1, 64026)
                    .color("#ff7800")
                    .min(1)
                    .max(10)
                    .value(3)
                    .precision(0.1),
                Text11111: builder.text(0.5, 10, 2, 0.5, 18472)
                    .text("m písmeno"),
                messageError: builder.text(0, 3, 12, 1.5, 52161)
                    .text("")
                    .color("#e01b24"),
                spaceWordCoef: builder.slider(0, 12, 12, 1, 42947)
                    .color("#9141ac")
                    .min(1)
                    .max(20)
                    .value(7)
                    .precision(0.1),
                Text111111: builder.text(0.5, 11.5, 2.5, 0.5, 30195)
                    .text("mezera slovo"),
                Text1111111: builder.text(0.5, 13, 2.5, 0.5, 16924)
                    .text("mezera věta"),
                spaceSentenceCoef: builder.slider(0, 13.5, 12, 1, 52206)
                    .color("#986a44")
                    .min(1)
                    .max(20)
                    .value(7)
                    .precision(0.1),
                setBtn: builder.button(6, 16, 5.5, 1.5, 30088)
                    .text("Nastavit")
                    .background("#57e389"),
                reset: builder.button(8.5, 0.5, 3, 1, 36763)
                    .text("Reset"),
                Led1: builder.led(0, 0, 1.5, 1.5, 49332)
            }

            if(builderCallback !== undefined) {
                builderCallback(layoutBuilder)
            }

            for(const key in layoutBuilder) {
                layout[key] = layoutBuilder[key].finish()
                layoutBuilder[key] = undefined
            }
        })
    },
    changeTab: gridui.changeTab,
    log: gridui.log,
} as Layout

export default layout
