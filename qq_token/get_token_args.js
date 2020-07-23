
const CryptoJS = require("crypto-js");

// let value = '123456';//待加密字符串加密
// let secrt_value = 'af25-87hk-a35v-5';//秘钥16位
// let iv_value = 'af25-87hk-a35v-5';//初始向量 initial vector 16 位
function get_token(toke_params){
    var e = "2F9fs3z84c36a8d1";
    var t = "DnEL5EDzhqWqceY9";
    let secret = CryptoJS.enc.Utf8.parse(e);
    let iv = CryptoJS.enc.Utf8.parse(t);

    var n = {
        param1: toke_params["param1"],
        param2: toke_params["param2"], 
        param3: toke_params["param3"], 
        param4: toke_params["param4"]
    }
    var n2 = JSON.stringify(n)
    
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
    token = encryted.ciphertext.toString();
    // console.log(encryted);
    return token
}

exports.getToken = get_token;