const CryptoJS = require("crypto-js");

var t = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex)
var t = "5c2ed095b3539e5244751f3b6b031c45"
var e = {suuid: "41c65da3-fe2d-48e2-9809-d26367a0ae26", codeData: "q0B1v6zgfUnv6mP7"}
var i = CryptoJS.enc.Utf8.parse(e.codeData);
//加密
let n = CryptoJS.AES.encrypt(e.codeData,i,{
    iv :CryptoJS.enc.Hex.parse(t),
    //mode 支持 CBC、CFB、CTR、ECB、OFB，默认CBC
    mode: CryptoJS.mode.ECB,
    //NoPadding 、ZeroPadding， 默认 PKcs7 即PKcs5
    padding :CryptoJS.pad.Pkcs7
});
r = {};
r.codeData = e.codeData;
r.seeda = encodeURIComponent(n);
r.sckval = CryptoJS.MD5(e.suuid + e.codeData).toString();
r.suuid = e.suuid;
console.log(r);
// console.log(seeda);