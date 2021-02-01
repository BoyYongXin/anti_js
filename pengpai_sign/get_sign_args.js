
const CryptoJS = require("crypto-js");

// let value = '123456';//待加密字符串加密
// let secrt_value = 'af25-87hk-a35v-5';//秘钥16位
// let iv_value = 'af25-87hk-a35v-5';//初始向量 initial vector 16 位
function get_token(e){
    var t = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex)
    var t = "5c2ed095b3539e5244751f3b6b031c45"
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
    return r
}

exports.getToken = get_token;