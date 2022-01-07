(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,500;1,700&display=swap);"]),o.push([e.id,'* {\n    margin: 0;\n    padding: 0;\n    font-family: "Open Sans";\n    color: black;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #4787c2;\n    padding: 15px;\n    font-size: 26px;\n    gap: 5px;\n}\n\nimg {\n    width: 25px;\n    height: 25px;\n    cursor: pointer;\n    border-radius: 50%;\n}\n\nmain {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.playerSide,\n.aiSide {\n    width: 50%;\n    color: #989fce;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.aiSide {\n    width: 50%;\n\n    display: none;\n}\n\n.addShips {\n    width: 50%;\n\n    display: flex;\n    box-sizing: border-box;\n    padding: 50px;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.block {\n    background-color: #989fce;\n    width: 50px;\n    height: 50px;\n    border: #5a5a5a solid 1px;\n}\n\n.playerBoard,\n.aiBoard {\n    width: 35vw;\n    height: 65vh;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.cell {\n    border: #5a5a5a solid 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.hit {\n    background-color: #4787c2;\n    color: #5a5a5a;\n    font-size: large;\n    font-weight: bold;\n}\n.occupied {\n    background-color: #989fce;\n}\n.missed {\n    background-color: lightblue;\n    color: #5a5a5a;\n    font-size: large;\n    font-weight: bold;\n}\n\n.modal {\n    display: block;\n    position: fixed;\n    z-index: 1;\n    padding-top: 50px;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n}\n\ninput {\n    padding: 10px;\n}\n\n#modalContent {\n    position: relative;\n    margin: auto;\n    background-color: #fefefe;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    box-sizing: border-box;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: 30px;\n    border: 1px solid #888;\n    border-radius: 15px;\n    height: 30%;\n    width: 340px;\n    font-size: 20px;\n    color: indigo;\n    font-weight: bolder;\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n}\n\n@keyframes animatetop {\n    from {\n        top: -300px;\n        opacity: 0;\n    }\n    to {\n        top: 0;\n        opacity: 1;\n    }\n}\n\n#modalContent p {\n    padding: 0;\n    margin: 0;\n}\n#nameInput {\n    width: 100%;\n    height: 40px;\n    font-size: 20px;\n    color: indigo;\n    margin-top: 14px;\n    border: #5a5a5a 2px solid;\n    border-radius: 7px;\n}\n#submitButton,\n#playAgainButton {\n    width: 200px;\n    height: 40px;\n    align-self: center;\n    font-size: 20px;\n    font-weight: bold;\n    color: #333;\n    background-color: aliceblue;\n    border: 1px solid black;\n    border-radius: 10px;\n}\n#endGameModal {\n    display: none;\n    position: fixed;\n    z-index: 9999;\n    padding-top: 130px;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.4);\n    animation-name: animatetop;\n    animation-duration: 0.4s;\n}\n#endGameContent {\n    position: relative;\n    margin: auto;\n    background-color: #fefefe;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    box-sizing: border-box;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    padding: 30px;\n    border: 1px solid #888;\n    border-radius: 15px;\n    height: 30%;\n    width: 340px;\n    font-size: 23px;\n    color: indigo;\n    font-weight: bold;\n}\n#playAgainButton {\n    width: 150px;\n}\n',""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var c=r(e,a),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},966:(e,t,n)=>{e.exports=n.p+"7615be16eed41f806def.png"},396:(e,t,n)=>{e.exports=n.p+"f8bd514cbeb6986bb878.png"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{class e{constructor(e){this.length=e,this.ship=this.createShip()}createShip(){let e=[],t=this.length;for(;t>0;)e.push({hit:!1}),t--;return e}getShip(){return this.ship}getShipLength(){return this.ship.length}hit(e){return this.ship[e].hit=!0}checkHit(e){return 1==e.hit}isSunk(){return!!this.ship.every(this.checkHit)}}class t{constructor(){this.gameBoardArray=this.createGameBoard(),this.missedAttacks=[]}createGameBoard(){let e=[],t=[];for(let n=0;n<10;n++){for(let e=0;e<10;e++)t.push({shipName:void 0,shipIndex:void 0});e.push(t),t=[]}return e}getGameBoard(){return this.gameBoardArray}checkIfShipPlacementIsValid(e,t,n){if(t>10||t<0||n>10||n<0||n+e>10)return!1;for(let r=n;r<n+e;r++)if(null!=this.gameBoardArray[r][t].shipName)return!1;return!0}placeShip(e,t,n){if(this.checkIfShipPlacementIsValid(e.getShipLength(),t,n))for(let r=0;r<e.getShipLength();r++)this.gameBoardArray[n+r][t].shipName=e,this.gameBoardArray[n+r][t].shipIndex=r}receiveAttack(e,t){null==this.gameBoardArray[t][e].shipName?this.missedAttacks.push({x:e,y:t}):this.gameBoardArray[t][e].shipName.hit(this.gameBoardArray[t][e].shipIndex)}getMissedAttacksArray(){return this.missedAttacks}checkIfAllShipSunk(){let e=!0;return this.gameBoardArray.forEach((t=>{t.forEach((t=>{t.shipName&&0==t.shipName.isSunk()&&(e=!1)}))})),e}}class r{constructor(e){this.name=e,this.turn=!0}setName(e){this.name=e}getName(){return this.name}endTurn(e){1==this.turn&&(this.turn=!1,e.startTurn())}startTurn(){0==this.turn&&(this.turn=!0)}checkTurn(){return this.turn}attack(e,t,n,r){this.checkTurn()&&(r.receiveAttack(e,t),this.endTurn(n))}}var a=n(379),i=n.n(a),o=n(795),s=n.n(o),c=n(569),d=n.n(c),l=n(565),p=n.n(l),u=n(216),h=n.n(u),m=n(589),f=n.n(m),g=n(426),y={};y.styleTagTransform=f(),y.setAttributes=p(),y.insert=d().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=h(),i()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var x=n(966),b=n(396);!function(){let e=document.getElementById("imgContainer");const t=document.createElement("img");t.src=x;const n=document.createElement("img");n.src=b,e.appendChild(t),e.appendChild(n),t.addEventListener("click",(function(){window.open("https://github.com/GuidoRial","_blank")})),n.addEventListener("click",(function(){window.open("https://www.linkedin.com/in/guido-rial-275552221/","_blank")}))}();const v=document.querySelector("#battleship"),S=document.querySelector("#carrier"),k=document.querySelector("#submarine"),w=document.querySelector("#destroyer"),A=document.querySelector("#patrolboat"),B=document.querySelector(".addShips"),I=document.querySelector(".aiSide"),N=document.querySelector(".modal"),C=document.querySelector("#nameInput"),E=document.querySelector("#modalContent"),q=document.querySelector("#playerName"),T=(document.querySelector("#endGameContent"),document.querySelector("#endGameModal")),L=document.querySelector("#playAgainButton"),M=document.querySelector("#winnerText");let $=new e(5),P=new e(4),j=new e(3),z=new e(3),G=new e(2),V=new e(5),D=new e(4),H=new e(3),O=new e(3),R=new e(2),Z=new t,_=new t,F=new r("Kuzuha"),U=new class extends r{constructor(e,t,n){super(e,n),this.turn=!1,this.enemyPlayer=t,this.enemyBoard=n,this.attackArray=[]}generateRandomAttack(){if(this.checkTurn()){let e={x:void 0,y:void 0};for(;;){let t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());if(e.x=t,e.y=n,!this.attackArray.some((t=>t.x==e.x&&t.y==e.y))){this.attackArray.push(e),this.attack(e.x,e.y,this.enemyPlayer,this.enemyBoard);break}}}}getAttackArray(){return this.attackArray}}("AI",F,Z);function X(e){for(;;){let t=[];if(t=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],_.checkIfShipPlacementIsValid(e.getShipLength(),t[0],t[1])){_.placeShip(e,t[0],t[1]);break}}}function J(e){e.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",e.target.id)}))}function K(e){let t=e.dataTransfer.getData("text"),n=parseInt(e.target.getAttribute("data-x")),r=parseInt(e.target.getAttribute("data-y"));switch(t){case"battleship":if(Z.checkIfShipPlacementIsValid(P.length,n,r)){Z.placeShip(P,n,r),ee("playerBoard",Z);let e=document.querySelector(`#${t}`);B.removeChild(e),B.childNodes.length<=6&&(B.style.display="none",I.style.display="flex")}break;case"carrier":if(Z.checkIfShipPlacementIsValid($.length,n,r)){Z.placeShip($,n,r),ee("playerBoard",Z);let e=document.querySelector(`#${t}`);B.removeChild(e),B.childNodes.length<=6&&(B.style.display="none",I.style.display="flex")}break;case"submarine":if(Z.checkIfShipPlacementIsValid(z.length,n,r)){Z.placeShip(z,n,r),ee("playerBoard",Z);let e=document.querySelector(`#${t}`);B.removeChild(e),B.childNodes.length<=6&&(B.style.display="none",I.style.display="flex")}break;case"destroyer":if(Z.checkIfShipPlacementIsValid(j.length,n,r)){Z.placeShip(j,n,r),ee("playerBoard",Z);let e=document.querySelector(`#${t}`);B.removeChild(e),B.childNodes.length<=6&&(B.style.display="none",I.style.display="flex")}break;case"patrolboat":if(Z.checkIfShipPlacementIsValid(G.length,n,r)){Z.placeShip(G,n,r),ee("playerBoard",Z);let e=document.querySelector(`#${t}`);B.removeChild(e),B.childNodes.length<=6&&(B.style.display="none",I.style.display="flex")}}}function Q(e){let t=document.querySelector(`.${e}`);for(let n=0;n<10;n++)for(let r=0;r<10;r++){let a=document.createElement("div");a.classList.add("cell"),a.setAttribute("data-x",r),a.setAttribute("data-y",n),"aiBoard"==e?a.addEventListener("click",(e=>{W(e.target)})):"playerBoard"==e&&(a.addEventListener("dragover",(e=>{e.preventDefault()})),a.addEventListener("drop",(e=>{e.preventDefault(),K(e)}))),t.appendChild(a)}}function W(e){let t=e.getAttribute("data-x"),n=e.getAttribute("data-y");F.attack(t,n,U,_),ee("aiBoard",_),e.style.pointerEvents="none",_.checkIfAllShipSunk()&&Y(F.getName()),U.generateRandomAttack(),ee("playerBoard",Z),Z.checkIfAllShipSunk()&&Y("AI")}function Y(e){T.style.display="block",M.textContent=`${e} is the winner!!`}function ee(e,t){let n=t.getGameBoard(),r=t.getMissedAttacksArray();n.forEach(((t,n)=>{t.forEach(((t,r)=>{if(t.shipName)if(1==t.shipName.checkHit(t.shipName.getShip()[t.shipIndex])){let t=document.querySelector(`.${e} [data-x="${r}"][data-y ="${n}"]`);t.textContent="X",t.classList.add("hit"),t.classList.remove("occupied")}else 0==t.shipName.checkHit(t.shipName.getShip()[t.shipIndex])&&"playerBoard"==e&&document.querySelector(`.${e} [data-x="${r}"][data-y ="${n}"]`).classList.add("occupied")}))})),r.forEach((t=>{let n=document.querySelector(`.${e} [data-x="${t.x}"][data-y ="${t.y}"]`);n.textContent="X",n.classList.add("missed")}))}J(v),J(S),J(k),J(w),J(A),X(V),X(D),X(H),X(O),X(R),Q("playerBoard"),Q("aiBoard"),ee("playerBoard",Z),ee("aiBoard",_),E.addEventListener("submit",(e=>{e.preventDefault();let t=C.value||"Player 1";F.setName(t),q.textContent=`${F.getName()}'s Board`,N.style.display="none"})),L.addEventListener("click",(()=>{location.reload()}))})()})();