(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{212:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),a("p",[t._v("A hook is a function that is triggered on "),a("code",[t._v("insert")]),t._v(", "),a("code",[t._v("patch")]),t._v(" or "),a("code",[t._v("delete")]),t._v(". In this hook function you will receive the doc object "),a("em",[t._v("before")]),t._v(" the store mutation occurs. You can do all kind of things:")]),t._v(" "),a("ul",[a("li",[t._v("modify the docs before they get commited to Vuex")]),t._v(" "),a("li",[t._v("modify the docs before they get synced to Firestore")]),t._v(" "),a("li",[t._v("add or delete props (fields) based on conditional checks")]),t._v(" "),a("li",[t._v("prevent a doc to be added to your Vuex module & Firestore")]),t._v(" "),a("li",[t._v("allow a doc to be added to Vuex but prevent sync to Firestore")]),t._v(" "),a("li",[t._v("etc...")])]),t._v(" "),a("h2",{attrs:{id:"hooks-on-local-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-on-local-changes"}},[t._v("#")]),t._v(" Hooks on local changes")]),t._v(" "),a("p",[t._v("Hooks must be defined inside your vuex module under "),a("code",[t._v("sync")]),t._v(". Below are the examples of all possible hooks that will trigger "),a("em",[t._v("before")]),t._v(" 'local' changes. Please also check the overview of "),a("a",{attrs:{href:"#execution-timings-of-hooks"}},[t._v("execution timings of hooks")]),t._v(" to understand the difference between 'local' and 'server' changes.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your other vuex-easy-fire config...")]),t._v("\n  sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("insertHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("patchHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("deleteHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Batches have separate hooks!")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("insertBatchHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("patchBatchHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("deleteBatchHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ids"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("doc")]),t._v(" passed in the "),a("code",[t._v("insert")]),t._v(" and "),a("code",[t._v("patch")]),t._v(" hooks will also have an "),a("code",[t._v("id")]),t._v(" field which is either the new id or the id of the doc to be patched.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("You must call `updateStore(doc)` to make the store mutation.")]),t._v(" "),a("p",[t._v("But you may choose not to call this to abort the mutation. If you do not call "),a("code",[t._v("updateStore(doc)")]),t._v(" nothing will happen.")])]),t._v(" "),a("h2",{attrs:{id:"hooks-after-local-changes-before-sync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-after-local-changes-before-sync"}},[t._v("#")]),t._v(" Hooks after local changes before sync")]),t._v(" "),a("p",[t._v("Below are the examples of all possible hooks that will trigger "),a("em",[t._v("after")]),t._v(" 'local' changes.")]),t._v(" "),a("p",[t._v("Basically when you make a local change you can intercept the change just "),a("em",[t._v("before")]),t._v(" it gets synced to Firestore, but still make the change to Vuex.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// place also in the `sync` prop")]),t._v("\n  sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("insertHookBeforeSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateFirestore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateFirestore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("patchHookBeforeSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateFirestore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateFirestore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("deleteHookBeforeSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateFirestore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateFirestore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("An example of what happens on a patch call:")]),t._v(" "),a("ol",[a("li",[t._v("eg. "),a("code",[t._v("dispatch('myModule/patch', data)")])]),t._v(" "),a("li",[a("code",[t._v("patchHook")]),t._v(" is fired")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("updateStore")]),t._v(" was "),a("strong",[t._v("not")]),t._v(" executed in the hook: abort!")]),t._v(" "),a("li",[t._v("the patch is commited to the Vuex module")]),t._v(" "),a("li",[a("code",[t._v("patchHookBeforeSync")]),t._v(" is fired")]),t._v(" "),a("li",[t._v("if "),a("code",[t._v("updateFirestore")]),t._v(" was "),a("strong",[t._v("not")]),t._v(" executed in the hook: abort!")]),t._v(" "),a("li",[t._v("the patch is synced to Firestore")])]),t._v(" "),a("h2",{attrs:{id:"hooks-after-server-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-after-server-changes"}},[t._v("#")]),t._v(" Hooks after server changes")]),t._v(" "),a("p",[a("em",[t._v("Hooks after server changes")]),t._v(" work just like "),a("em",[t._v("hooks on local changes")]),t._v(" but for changes that have occured on the server. Just as with the hooks for local changes, you can use these hooks to make changes to incoming documents or prevent them from being added to your vuex module.")]),t._v(" "),a("p",[t._v("These hooks will fire not only on modifications and inserts "),a("strong",[t._v("but also when dispatching "),a("code",[t._v("openDBChannel")]),t._v(" or "),a("code",[t._v("fetchAndAdd")]),t._v(" or "),a("code",[t._v("fetchById")])]),t._v(". Be sure to check the "),a("strong",[t._v("execution timings of hooks")]),t._v(" below to know when which are executed.")]),t._v(" "),a("p",[t._v("You also have some extra parameters to work with:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("id:")]),t._v(" the doc id returned in "),a("code",[t._v("change.doc.id")]),t._v(" (see firestore documentation for more info)")]),t._v(" "),a("li",[a("em",[t._v("doc:")]),t._v(" the doc returned in "),a("code",[t._v("change.doc.data()")]),t._v(" (see firestore documentation for more info)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your other vuex-easy-fire config...")]),t._v("\n  serverChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addedHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("modifiedHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("removedHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("updateStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Please make sure to check the overview of execution timings of hooks, in the next chapter:")]),t._v(" "),a("h2",{attrs:{id:"hooks-on-opendbchannel-fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-on-opendbchannel-fetch"}},[t._v("#")]),t._v(" Hooks on openDBChannel / fetch")]),t._v(" "),a("p",[t._v('The "Hooks after server changes" explained above also trigger once on '),a("code",[t._v("openDBChannel")]),t._v(" and "),a("code",[t._v("fetchAndAdd")]),t._v(" and "),a("code",[t._v("fetchById")]),t._v(". Check the "),a("strong",[t._v("execution timings of hooks")]),t._v(" below to know precisely when which hooks are executed.")]),t._v(" "),a("h2",{attrs:{id:"execution-timings-of-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-timings-of-hooks"}},[t._v("#")]),t._v(" Execution timings of hooks")]),t._v(" "),a("p",[a("strong",[t._v("Hooks on 'collection' mode")])]),t._v(" "),a("table",[a("tr",[a("th",[t._v("change type")]),t._v(" "),a("th",[t._v("local")]),t._v(" "),a("th",[t._v("server")])]),t._v(" "),a("tr",[a("td",[t._v("insertion")]),t._v(" "),a("td",[a("ol",[a("li",[a("code",[t._v("sync.insertHook")])]),t._v(" "),a("li",[a("code",[t._v("sync.insertHookBeforeSync")])])])]),t._v(" "),a("td",[a("code",[t._v("serverChange.addedHook")])])]),t._v(" "),a("tr",[a("td",[t._v("modification")]),t._v(" "),a("td",[a("ol",[a("li",[a("code",[t._v("sync.patchHook")])]),t._v(" "),a("li",[a("code",[t._v("sync.patchHookBeforeSync")])])])]),t._v(" "),a("td",[a("code",[t._v("serverChange.modifiedHook")])])]),t._v(" "),a("tr",[a("td",[t._v("deletion")]),t._v(" "),a("td",[a("ol",[a("li",[a("code",[t._v("sync.deleteHook")])]),t._v(" "),a("li",[a("code",[t._v("serverChange.removedHook")])])])]),t._v(" "),a("td",[a("code",[t._v("serverChange.removedHook")])])]),t._v(" "),a("tr",[a("td",[a("ul",[t._v("on\n        "),a("li",[a("code",[t._v("openDBChannel")])]),t._v(" "),a("li",[a("code",[t._v("fetchAndAdd")])]),t._v(" "),a("li",[a("code",[t._v("fetchById")])])])]),t._v(" "),a("td",{attrs:{colspan:"2"}},[a("code",[t._v("serverChange.addedHook")]),t._v(" is executed once for each doc")])])]),t._v(" "),a("p",[a("strong",[t._v("Hooks on 'doc' mode")])]),t._v(" "),a("table",[a("tr",[a("th",[t._v("change type")]),t._v(" "),a("th",[t._v("local")]),t._v(" "),a("th",[t._v("server")])]),t._v(" "),a("tr",[a("td",[t._v("modification")]),t._v(" "),a("td",[a("ol",[a("li",[a("code",[t._v("sync.patchHook")])]),t._v(" "),a("li",[a("code",[t._v("sync.patchHookBeforeSync")])])])]),t._v(" "),a("td",[a("code",[t._v("serverChange.modifiedHook")])])]),t._v(" "),a("tr",[a("td",[a("ul",[t._v("on\n        "),a("li",[a("code",[t._v("openDBChannel")])]),t._v(" "),a("li",[a("code",[t._v("fetchAndAdd")])])])]),t._v(" "),a("td",{attrs:{colspan:"2"}},[a("code",[t._v("serverChange.modifiedHook")]),t._v(" is executed once")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);