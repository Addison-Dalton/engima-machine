(this["webpackJsonpengima-machine"]=this["webpackJsonpengima-machine"]||[]).push([[0],{24:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(11),a=n.n(o),c=(n(24),n(4)),s=n(2),u=n(6),l=n(5),h={name:"rotorI",type:"rotor",turnOver:16,keys:"EKMFLGDQVZNTOWYHXUSPAIBRCJ".split("")},b={name:"rotorII",type:"rotor",turnOver:4,keys:"AJDKSIRUXBLHWTMCQGZNPYFVOE".split("")},m={name:"rotorIII",type:"rotor",turnOver:21,keys:"BDFHJLCPRTXVZNYEIWGAKMUSQO".split("")},d={name:"UKW-B",type:"reflector",keys:"YRUHQSLDPXNGOKMIEBFZCWVJAT".split("")},f=[h,b,m],p=Object(u.b)({name:"handleRotors",initialState:f,reducers:{}}).reducer,j=n(10),O="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),x=([].concat(Object(j.a)(O),[" "]),function(e){return O.findIndex((function(t){return t===e.toUpperCase()}))}),g=function(e){return O[e]||""},v=function(e,t){return(e%t+t)%t},y=function(e,t,n){var r,i=v(t.position+t.initialPosition,O.length);switch(n){case"add":r=e+i;break;case"subtract":r=e-i;break;default:r=null}return null===r?-1:v(r,O.length)},k=function(e,t,n){return e.reduce((function(e,t){if(console.log("-------------------------"),console.log("slot: ".concat(t.name," at position ").concat(t.position,". Given keyNum: ").concat(e,". Using rotor: ").concat(t.rotor.name,", with keys: ").concat(t.rotor.keys)),e<0)return-1;var r,i,o,a=y(e,t,"add"),c=g(a),s=(r=t.rotor.keys,i=a,o=c,n?r.indexOf(o):x(r[i]));return console.log("Calc key as",g(s)),console.log("Key num is, ",s),console.log("output key num with positiuon",y(s,t,"subtract")),y(s,t,"subtract")}),t)},w=function(e,t){if(" "===t)return" ";var n=k(e,x(t));e.reverse().shift(),console.log("first pass num: ",n);var r=k(e,n,!0);return console.log("second pass num: ",r),g(r)},C=function(e){e.some((function(t,n){if("reflector"===t.rotor.type)return!0;var r=t.position>=25?0:t.position+1;return e[n].position=r,!(t.rotor.turnOver===t.position)}))},I={slots:[{name:"slot1",rotor:h,position:0,initialPosition:0},{name:"slot2",rotor:b,position:0,initialPosition:0},{name:"slot3",rotor:m,position:0,initialPosition:0},{name:"slot4",rotor:d,position:0,initialPosition:0}],outputKey:"",totalInput:"",totalOutput:""},K=Object(u.b)({name:"handleSlots",initialState:I,reducers:{handleChangeInitialRotorPosition:function(e,t){var n=t.payload,r=n.slotName,i=n.position,o=e.slots.findIndex((function(e){return e.name===r})),a=function(e){return e<=25&&e>=0}(i);o<0||!a||(e.slots[o].initialPosition=i)},handleSingleRotorRotation:function(e,t){var n=e.slots,r=t.payload;if(e.totalInput+=r," "!==r){C(n);var i=w(Object(j.a)(n),r);e.outputKey=i,e.totalOutput+=i}else e.totalOutput+=" "},handleFullRotorRotation:function(e,t){var n=e.slots;e.totalInput=t.payload.toUpperCase(),function(e){e.forEach((function(e){e.position=0}))}(n);var r=e.totalInput.split("").map((function(e){return" "===e?" ":(C(n),w(Object(j.a)(n),e))}));e.outputKey=r[r.length-1],e.totalOutput=r.join("")}}}),R=K.actions,z=R.handleSingleRotorRotation,P=R.handleFullRotorRotation,F=R.handleChangeInitialRotorPosition,L=K.reducer,S=Object(l.b)({rotors:p,machine:L});var T,U,D,B,E,N,J,A,G,M,V,W,Z,H,Q,X=Object(u.a)({reducer:S}),Y={borderRadius:"6px",colors:{white:"white",primary:"#2e1a2b",litLetter:"#7a7b3d"},font:{size:"1em"},baseline:"24px",breakpoint:{smallDesktop:"1200px",tablet:"768px",smallTablet:"580px",mobile:"480px"}},$=n(1),q=function(e){var t=e.children;return Object($.jsx)(c.a,{store:X,children:Object($.jsx)(s.a,{theme:Y,children:t})})},_=n(3),ee=n(12),te=function(e){return e.machine},ne=function(e){return e.machine.slots},re=(Object(ee.a)([te],(function(e){return e.slots})),Object(ee.a)([te],(function(e){return e.outputKey}))),ie=Object(ee.a)([te],(function(e){return e.totalOutput})),oe=Object(ee.a)([te],(function(e){return e.totalInput})),ae=n(19),ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=/^(^-?\d+(?:\.\d+)?)(.*)$/,r=e.match(n);if(!r)return e;var i=Object(ae.a)(r,3),o=i[1],a=i[2],c=parseFloat(o);return c&&a?"".concat(c*t).concat(a):e},se=s.b.div(T||(T=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  border: 2px solid lightgray;\n  background-color: ",";\n  margin-left: ",";\n  margin-right: ",";\n\n  @media screen and (max-width: ",") {\n    width: ",";\n    height: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    width: ",";\n    height: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    width: ",";\n    height: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    width: ",";\n    height: ",";\n  }\n"])),(function(e){return ce(e.theme.baseline,3)}),(function(e){return ce(e.theme.baseline,3)}),(function(e){return e.isLit?e.theme.colors.litLetter:"grey"}),(function(e){return ce(e.theme.baseline,.25)}),(function(e){return ce(e.theme.baseline,.25)}),(function(e){return e.theme.breakpoint.smallDesktop}),(function(e){return ce(e.theme.baseline,2)}),(function(e){return ce(e.theme.baseline,2)}),(function(e){return e.theme.breakpoint.tablet}),(function(e){return ce(e.theme.baseline,1.5)}),(function(e){return ce(e.theme.baseline,1.5)}),(function(e){return e.theme.breakpoint.smallTablet}),(function(e){return ce(e.theme.baseline,1)}),(function(e){return ce(e.theme.baseline,1)}),(function(e){return e.theme.breakpoint.mobile}),(function(e){return ce(e.theme.baseline,.85)}),(function(e){return ce(e.theme.baseline,.85)})),ue=s.b.p(U||(U=Object(_.a)(["\n  color: ",";\n  font-size: ",";\n  flex: 0;\n\n  @media screen and (max-width: ",") {\n    font-size: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    font-size: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    font-size: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return ce(e.theme.font.size,2)}),(function(e){return e.theme.breakpoint.smallDesktop}),(function(e){return ce(e.theme.font.size,1.5)}),(function(e){return e.theme.breakpoint.tablet}),(function(e){return ce(e.theme.font.size,1)}),(function(e){return e.theme.breakpoint.smallTablet}),(function(e){return ce(e.theme.font.size,.75)}),(function(e){return e.theme.breakpoint.mobile}),(function(e){return ce(e.theme.font.size,.65)})),le=function(e){var t=e.letter,n=e.isLit,r=void 0!==n&&n;return Object($.jsx)(se,{isLit:r,children:Object($.jsx)(ue,{children:t.toUpperCase()})})},he=i.a.memo(le),be=s.b.div(D||(D=Object(_.a)(["\n  display: flex;\n  margin-bottom: ",";\n"])),(function(e){return ce(e.theme.baseline,.5)})),me=function(e){var t=e.letters,n=e.activeKey;return Object($.jsx)(be,{children:t.map((function(e){var t=e===n;return Object($.jsx)(he,{letter:e,isLit:t},"".concat(e))}))})},de=i.a.memo(me),fe="QWERTYUIOP".split(""),pe="ASDFGHJKL".split(""),je="ZXCVBNM".split(""),Oe=s.b.div(B||(B=Object(_.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),xe=function(e){var t=e.activeKey;return Object($.jsxs)(Oe,{children:[Object($.jsx)(de,{letters:fe,activeKey:t}),Object($.jsx)(de,{letters:pe,activeKey:t}),Object($.jsx)(de,{letters:je,activeKey:t})]})},ge=function(){var e=Object(c.c)(re);return Object($.jsx)(xe,{activeKey:e})},ve=s.b.div(E||(E=Object(_.a)(["\n  p {\n    color: ","\n  }\n"])),(function(e){return ce(e.theme.colors.white)})),ye=s.b.div(N||(N=Object(_.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ",";\n  \n  textarea {\n    flex: 1;\n    font-size: ",";\n    text-transform: uppercase;\n    height: 6em;\n    max-width: 30em;\n    min-width: 20em;\n    margin: ",";\n    resize: none;\n  }\n\n  @media screen and (max-width: ",") {\n    textarea {\n      height: 4em;\n      min-width: 10em;\n    }\n  }\n"])),(function(e){return ce(e.theme.baseline,1)}),(function(e){return ce(e.theme.font.size,1.5)}),(function(e){return ce(e.theme.baseline,.5)}),(function(e){return e.theme.breakpoint.smallTablet})),ke=s.b.textarea(J||(J=Object(_.a)(["\n  height: 10em;\n"]))),we=s.b.textarea(A||(A=Object(_.a)(["\n  background-color: ",";\n"])),(function(e){return ce(e.theme.colors.white)})),Ce=function(){var e=Object(c.c)(ie),t=Object(c.c)(oe),n=Object(c.b)(),i=Object(r.useCallback)((function(e){var r=e.target.value.replace(/[^a-zA-Z ]+/gm,""),i=function(e,t){if(0===e.length&&1===t.length)return!0;var n=t.slice(0,-1);return e.toUpperCase()===n.toUpperCase()}(t,r);n(i?z(r.substr(-1)):P(r))}),[t,n]);return Object($.jsxs)(ve,{children:[Object($.jsx)("p",{children:"Enter text below to be encypted or decrypted."}),Object($.jsxs)(ye,{children:[Object($.jsx)(ke,{onChange:i,spellCheck:!1,placeholder:"Input text here..."}),Object($.jsx)(we,{disabled:!0,value:e,placeholder:"Output here..."})]})]})},Ie=s.b.select(G||(G=Object(_.a)([""]))),Ke=s.b.option(M||(M=Object(_.a)([""]))),Re=function(e){var t=e.options,n=e.handleChange,r=e.selectLabel,i="select-".concat(r),o=r?i:void 0;return Object($.jsxs)($.Fragment,{children:[r&&Object($.jsx)("label",{htmlFor:i,children:r}),Object($.jsx)(Ie,{onChange:n,id:o,defaultValue:0,children:t.map((function(e){return Object($.jsx)(Ke,{value:e.value,children:e.name},e.name)}))})]})},ze=s.b.div(V||(V=Object(_.a)(["\n  select {\n    margin: ",";\n  }\n"])),(function(e){return ce(e.theme.baseline,.25)})),Pe=function(){var e=Object(c.b)(),t=Object(c.c)(ne),n=O.map((function(e,t){return{name:e,value:t}})),i=Object(r.useCallback)((function(t,n){e(F({slotName:t,position:parseInt(n,10)}))}),[e,F]);return Object($.jsx)(ze,{children:t.map((function(e){return"reflector"===e.rotor.type?null:Object($.jsx)(Re,{options:n,handleChange:function(t){return i(e.name,t.target.value)}})}))})},Fe=s.b.div(W||(W=Object(_.a)(["\n  background-color: #757070;\n  flex: 0 0 ",";\n  padding: ",";\n\n  @media screen and (max-width: 950px) {\n    display: none;\n  }\n"])),(function(e){return ce(e.theme.baseline,10)}),(function(e){return e.theme.baseline})),Le=function(){return Object($.jsxs)(Fe,{children:[Object($.jsx)("h2",{children:"Controls"}),Object($.jsx)(Pe,{})]})},Se=i.a.memo(Le),Te=s.b.div(Z||(Z=Object(_.a)(["\n  display: flex;\n  height: 100vh;\n"]))),Ue=s.b.div(H||(H=Object(_.a)(["\n  flex: 1;\n  margin: ",";\n"])),(function(e){return ce(e.theme.baseline,1)})),De=(s.b.h1(Q||(Q=Object(_.a)(["\n  color: ",";\n\n  @media screen and (max-width: ",") {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.breakpoint.smallTablet}),(function(e){return ce(e.theme.font.size,1.5)})),function(){return Object($.jsxs)(Te,{children:[Object($.jsx)(Se,{}),Object($.jsxs)(Ue,{children:[Object($.jsx)(ge,{}),Object($.jsx)(Ce,{})]})]})}),Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))};a.a.render(Object($.jsx)(i.a.StrictMode,{children:Object($.jsx)(q,{children:Object($.jsx)(De,{})})}),document.getElementById("root")),Be()}},[[31,1,2]]]);
//# sourceMappingURL=main.151db09e.chunk.js.map