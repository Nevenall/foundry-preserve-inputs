import { Schema } from "./node_modules/prosemirror-model/dist/index.js"

// Hooks.on('init', function () {
//    ProseMirror.defaultSchema = new Schema({
//       nodes: {
//          ...ProseMirror.defaultSchema.nodes,
//          input: {
//             inline: true,
//             group: "inline",
//             atom: true,

//             attrs: {
//                type: {}
//             },
//             toDOM(node) {
//                return ["input", { type: node.attrs.type }, 0]
//             },
//             parseDOM: [{ tag: "input", getAttrs(dom) { return { type: dom.getAttribute("type") } } }],
//          },
//       },
//       marks: ProseMirror.defaultSchema.marks
//    })
// })

Hooks.on('createProseMirrorEditor', function (uuid, plugins, options) {
   console.log('initializing preserve-inputs')
   options.state.transformPastedHTML = false

   options.state.config.schema = new Schema({
      nodes: {
         ...ProseMirror.defaultSchema.nodes,
         input: {
            inline: true,
            group: "inline",
            atom: true,

            attrs: {
               type: {}
            },
            toDOM(node) {
               return ["input", { type: node.attrs.type }, 0]
            },
            parseDOM: [{ tag: "input", getAttrs(dom) { return { type: dom.getAttribute("type") } } }],
         },
      },
      marks: ProseMirror.defaultSchema.marks
   }) 


   debugger
})