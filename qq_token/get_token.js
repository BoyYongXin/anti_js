const CryptoJS = require("crypto-js");

// let value = '123456';//待加密字符串加密
// let secrt_value = 'af25-87hk-a35v-5';//秘钥16位
// let iv_value = 'af25-87hk-a35v-5';//初始向量 initial vector 16 位

var e = "2F9fs3z84c36a8d1";
var t = "DnEL5EDzhqWqceY9";
let secret = CryptoJS.enc.Utf8.parse(e);
let iv = CryptoJS.enc.Utf8.parse(t);
// var n = {
//     param1: "9f035a29fafc97fc505493767045c0fd",
//     param2: "d8fd769a9359e2802d1b3da8660de66a", 
//     param3: "6e516341bff63ebf45bbb77c9eeec83a", 
//     param4: "a0c33f7f58fb0ff7647b0ed0adc9c2ef"
// }

var n = {"param1":"f49bb3debbc3db1dcbf8b2411e62c30c","param2":"4e869cc2acdf90210d465818508b6afb","param3":"02f2cd926b0dd9974e8dba52b03c12bb","param4":"72b2864d4dcc4fd1fe5f8fd7c3e50087"}

var n2 = JSON.stringify(n)
console.log(n2);

let value = CryptoJS.enc.Utf8.parse(n2);

//加密
let encryted = CryptoJS.AES.encrypt(value,secret,{
    iv :iv,
    //mode 支持 CBC、CFB、CTR、ECB、OFB，默认CBC
    mode: CryptoJS.mode.CBC,
    //NoPadding 、ZeroPadding， 默认 PKcs7 即PKcs5
    padding :CryptoJS.pad.Pkcs7
});
// 将加密结果转换为字符串
encryted = encryted.ciphertext.toString();
console.log(encryted);


