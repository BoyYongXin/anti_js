const CryptoJS = require("crypto-js");

let value = '2541';//待加密字符串加密
let secrt_value = 'a64c550085c0be56c092f71a5840d6c9';//秘钥16位
let iv_value = 'a64c550085c0be56c092f71a5840d6c9';//初始向量 initial vector 16 位

//秘钥和向量处理
let secret = CryptoJS.enc.Hex.parse(secrt_value);
let iv = CryptoJS.enc.Hex.parse(iv_value);
console.log(iv);
console.log(iv.toString());
//加密
let encryted = CryptoJS.AES.encrypt(value,secret,{
    iv :iv,
    //mode 支持 CBC、CFB、CTR、ECB、OFB，默认CBC
    mode: CryptoJS.mode.CBC,
    //NoPadding 、ZeroPadding， 默认 PKcs7 即PKcs5
    padding :CryptoJS.pad.Pkcs7
});
// 将加密结果转换为字符串
encryted = encryted.toString();


//解密，传入密文、秘钥和向量并设置加密与填充模式
let decrypted = CryptoJS.AES.decrypt(encryted,secret,{
    iv :iv,
    //mode 支持 CBC、CFB、CTR、ECB、OFB，默认CBC
    mode: CryptoJS.mode.CBC,
    //NoPadding 、ZeroPadding， 默认 PKcs7 即PKcs5
    padding :CryptoJS.pad.Pkcs7
});

//将解密结果转换为utf8字符串
decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
/*
打印明文、密文和解密结果
xLilCRGWQ/CGqBUVya+4LQ==
123456
 */


console.log(value);
console.log(encryted);
console.log(decrypted);


var seed = "59f94de6ceacb6c867b3ea7f59e45034"
var logid = "202007141528140100140481303614FAC3"
var sss = logid + seed + logid
var key  = CryptoJS.MD5(sss).toString()
console.log(key);