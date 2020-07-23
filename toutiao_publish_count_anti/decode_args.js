const CryptoJS = require("crypto-js");


function decode_args(take_params){
    /** 
     // let value = '2541';//待加密字符串加密
    // let secrt_value = 'c451852f721ba85b8176387aec11bca4';//秘钥16位
    // let iv_value = 'c451852f721ba85b8176387aec11bca4';//初始向量 initial vector 16 位
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
    */
    var data = take_params["datas"]
    var logid = take_params["logid"]
    var seed = take_params["seed"]
    var sss = logid + seed + logid
    var key  = CryptoJS.MD5(sss).toString();
    
    let secrt_value = key;//秘钥16位
    let iv_value = key;//初始向量 initial vector 16 位
    let encryted = data;

    let secret = CryptoJS.enc.Hex.parse(secrt_value);
    let iv = CryptoJS.enc.Hex.parse(iv_value);
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
   return decrypted
}

// var data = "N20r0z+sOYbAaVkZ9DM+Ng=="

// console.log(decode_args(data, "seed", "logid"));


exports.decryptArgs = decode_args;