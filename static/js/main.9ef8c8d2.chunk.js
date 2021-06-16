(this["webpackJsonpengima-machine"]=this["webpackJsonpengima-machine"]||[]).push([[0],{24:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(10),c=n.n(i),s=(n(24),n(9)),a=n(2),u=n(5),l=n(4),b={name:"rotorI",type:"rotor",turnOver:16,keys:"EKMFLGDQVZNTOWYHXUSPAIBRCJ".split("")},d={name:"rotorII",type:"rotor",turnOver:4,keys:"AJDKSIRUXBLHWTMCQGZNPYFVOE".split("")},f={name:"rotorIII",type:"rotor",turnOver:21,keys:"BDFHJLCPRTXVZNYEIWGAKMUSQO".split("")},j={name:"UKW-B",type:"reflector",keys:"YRUHQSLDPXNGOKMIEBFZCWVJAT".split("")},m=[b,d,f],p=Object(u.b)({name:"handleRotors",initialState:m,reducers:{}}).reducer,h=n(19),O="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),v=function(t){return O.findIndex((function(e){return e===t.toUpperCase()}))},y=function(t){return O[t]||""},g=function(t,e,n){var r,o,i;switch(n){case"add":r=t+e;break;case"subtract":r=t-e;break;default:r=null}return null===r?-1:(o=r,i=O.length,(o%i+i)%i)},x=function(t,e,n){return t.reduce((function(t,e){if(console.log("-------------------------"),console.log("slot: ".concat(e.name," at position ").concat(e.position,". Given keyNum: ").concat(t,". Using rotor: ").concat(e.rotor.name,", with keys: ").concat(e.rotor.keys)),t<0)return-1;var r,o,i,c=g(t,e.position,"add"),s=y(c),a=(r=e.rotor.keys,o=c,i=s,n?r.indexOf(i):v(r[o]));return console.log("Calc key as",y(a)),console.log("Key num is, ",a),console.log("output key num with positiuon",g(a,e.position,"subtract")),g(a,e.position,"subtract")}),e)},k={slots:[{name:"slot1",rotor:b,position:0},{name:"slot2",rotor:d,position:0},{name:"slot3",rotor:f,position:0},{name:"slot4",rotor:j,position:0}],outputKey:""},w=Object(u.b)({name:"handleSlots",initialState:k,reducers:{handleRotorRotation:function(t,e){var n=t.slots;n.some((function(t,e){if("reflector"===t.rotor.type)return!0;var r=t.position>=25?0:t.position+1;return n[e].position=r,!(t.rotor.turnOver===t.position)})),t.outputKey=function(t,e){var n=x(t,e);t.reverse().shift(),console.log("first pass num: ",n);var r=x(t,n,!0);return console.log("second pass num: ",r),y(r)}(Object(h.a)(n),e.payload)}}}),K=w.actions.handleRotorRotation,L=w.reducer,I=Object(l.b)({rotors:p,machine:L});var C,E,R,S,F,U,B=Object(u.a)({reducer:I}),J={borderRadius:"6px",colors:{white:"white",primary:"red",litLetter:"#7a7b3d"},font:{size:"1em"},baseline:"24px"},P=n(1),T=function(t){var e=t.children;return Object(P.jsx)(s.a,{store:B,children:Object(P.jsx)(a.a,{theme:J,children:e})})},D=n(3),G=n(11),M=function(t){return t.machine},N=(Object(G.a)([M],(function(t){return t.slots})),Object(G.a)([M],(function(t){return t.outputKey}))),W=n(13),A=function(t,e){var n=t.match(/^(^-?\d+(?:\.\d+)?)(.*)$/);if(!n)return t;var r=Object(W.a)(n,3),o=r[1],i=r[2],c=parseFloat(o);return c&&i?"".concat(c*e).concat(i):t},H=a.b.div(C||(C=Object(D.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  border: 2px solid lightgray;\n  background-color: ",";\n  margin-left: ",";\n  margin-right: ",";\n"])),(function(t){return A(t.theme.baseline,3)}),(function(t){return A(t.theme.baseline,3)}),(function(t){return t.isLit?t.theme.colors.litLetter:"grey"}),(function(t){return A(t.theme.baseline,.25)}),(function(t){return A(t.theme.baseline,.25)})),Q=a.b.p(E||(E=Object(D.a)(["\n  color: ",";\n  font-size: ",";\n  flex: 0;\n"])),(function(t){return t.theme.colors.white}),(function(t){return A(t.theme.font.size,2)})),V=function(t){var e=t.letter,n=t.isLit,r=void 0!==n&&n;return Object(P.jsx)(H,{isLit:r,children:Object(P.jsx)(Q,{children:e.toUpperCase()})})},X=o.a.memo(V),Y=a.b.div(R||(R=Object(D.a)(["\n  display: flex;\n  margin-bottom: ",";\n"])),(function(t){return A(t.theme.baseline,.5)})),Z=function(t){var e=t.letters,n=t.activeKey;return Object(P.jsx)(Y,{children:e.map((function(t){var e=t===n;return Object(P.jsx)(X,{letter:t,isLit:e},"".concat(t))}))})},z=o.a.memo(Z),$="QWERTYUIOP".split(""),q="ASDFGHJKL".split(""),_="ZXCVBNM".split(""),tt=a.b.div(S||(S=Object(D.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),et=function(t){var e=t.activeKey;return Object(P.jsxs)(tt,{children:[Object(P.jsx)(z,{letters:$,activeKey:e}),Object(P.jsx)(z,{letters:q,activeKey:e}),Object(P.jsx)(z,{letters:_,activeKey:e})]})},nt=function(){var t=Object(s.c)(N),e=function(){var t=Object(r.useState)(!1),e=Object(W.a)(t,2),n=e[0],o=e[1];return Object(r.useEffect)((function(){return o(!0)})),n}(),n=Object(s.b)();return Object(r.useEffect)((function(){if(e){var t=function(t){var e=v(t.key);e<0||n(K(e))};window.addEventListener("keydown",t);return function(){window.removeEventListener("keydown",t)}}}),[e]),Object(P.jsx)(et,{activeKey:t})},rt=a.b.div(F||(F=Object(D.a)(["\n\n"]))),ot=a.b.h1(U||(U=Object(D.a)(["\n  color: ",";\n"])),(function(t){return t.theme.colors.white})),it=function(){return Object(P.jsxs)(rt,{children:[Object(P.jsx)(ot,{children:"Engima"}),Object(P.jsx)(nt,{})]})},ct=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),i(t),c(t)}))};c.a.render(Object(P.jsx)(o.a.StrictMode,{children:Object(P.jsx)(T,{children:Object(P.jsx)(it,{})})}),document.getElementById("root")),ct()}},[[31,1,2]]]);
//# sourceMappingURL=main.9ef8c8d2.chunk.js.map