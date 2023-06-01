import { Schema } from "./node_modules/prosemirror-model/dist/index.js"

Hooks.on('init', function () {
   debugger
   var schema = new Schema({
      topNode: 'doc',
      nodes: ProseMirror.defaultSchema.spec.nodes.append('input', {
         inline: true,
         group: "inline",
         attrs: {
            type: {}
         },
         toDOM(node) {
            debugger
            return ["input", { type: node.attrs.type }]
         },
         parseDOM: [{
            tag: "input", getAttrs(dom) {
               debugger
               return { type: dom.getAttribute("type") }
            }
         }],
      }),
      marks: ProseMirror.defaultSchema.spec.marks
   })
   // todo - figure out where to stick schema
   console.log(schema)
   ProseMirror.defaultSchema = schema
   // debugger
})

Hooks.on('createProseMirrorEditor', function (uuid, plugins, options) {
   console.log(options)
   options.state.config.transformPastedHTML = false

   // var schema = new Schema({
   //    nodes: {
   //       ...ProseMirror.defaultSchema.nodes,
   //       input: {
   //          inline: true,
   //          group: "inline",
   //          attrs: {
   //             type: {}
   //          },
   //          toDOM(node) {
   //             debugger
   //             return ["input", { type: node.attrs.type }]
   //          },
   //          parseDOM: [{
   //             tag: "input", getAttrs(dom) {
   //                debugger
   //                return { type: dom.getAttribute("type") }
   //             }
   //          }],
   //       }
   //    },
   //    marks: ProseMirror.defaultSchema.marks
   // })

   // options.state.config.schema = schema

   // debugger
})