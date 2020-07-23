//npm install @babel/core
//这个库，怎么操作呢，我们首先需要一个将JS源码转换成语法树的函数:
const parser = require("@babel/parser");

//一个遍历AST的函数:
const traverse = require("@babel/traverse").default;

//一个操作节点的函数，比如判断节点类型，生成新的节点等:
const t = require("@babel/types");

//以及一个将语法树转换为源代码的函数:
const generator = require("@babel/generator").default;

//当然还需要一个操作文件的函数:
const fs = require('fs');

//打开待还原的js代码
var jscode = fs.readFileSync("./encode_js_code.js", {
    encoding: "utf-8"
});

// js中的解密函数，还原初始js，需要调用
var a0_0x3354 = ['join', 'encryptBlock', '_map', '_nRounds', 'mode', 'splice', 'function', '_keySchedule', '_mode', 'string', 'exports', '_doProcessBlock', 'abs', 'EncryptByKey', 'Utf8', '__esModule', 'formatter', 'parse', '_doCryptBlock', 'salt', '_createHmacHelper', 'bind', '_parse', 'sigBytes', 'format', 'clamp', '_prevBlock', 'Base', '_hash', 'reset', 'amd', '_nDataBytes', 'decrypt', '_createHelper', '_process', 'getEncryptKey', 'seed', 'createEncryptor', 'toStringTag', '_xformMode', 'hasOwnProperty', 'processBlock', 'substr', 'HMAC', '_doReset', '_DEC_XFORM_MODE', 'words', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', 'AntiSpider', 'kdf', 'ceil', 'Hex', 'WordArray', 'default', 'indexOf', 'SerializableCipher', '_iv', 'init', 'object', '_doFinalize', 'call', 'pad', 'AES', 'prototype', 'iterations', 'Decryptor', 'apply', 'execute', 'Base64', 'logid', 'hasher', 'clone', 'compute', '_minBufferSize', 'floor', 'MD5', '_cipher', 'lib', '$super', 'Cipher', 'length', '_key', 'charAt', 'cfg', 'Encryptor', 'sin', 'max', 'EvpKDF', 'Hasher', 'ciphertext', '_append', 'unpad', 'decryptBlock', 'PasswordBasedCipher', 'enc', '_data', 'BlockCipherMode', 'defineProperty', 'undefined', '_invKeySchedule', 'slice', 'CipherParams', 'ivSize', 'stringify', 'encrypt', 'update', 'mixIn', 'algo', 'keySize', 'push', 'StreamCipher', 'padding', 'key', 'Pkcs7', 'finalize', 'min', 'blockSize', 'Latin1', 'toString', 'BlockCipher', 'extend', 'create', 'random', 'Malformed\x20UTF-8\x20data', 'BufferedBlockAlgorithm', '_ENC_XFORM_MODE', 'concat'];
(function(_0x28a945, _0x33541c) {
    var _0x5ea1f3 = function(_0xb2eb9d) {
        while (--_0xb2eb9d) {
            _0x28a945['push'](_0x28a945['shift']());
        }
    };
    _0x5ea1f3(++_0x33541c);
}(a0_0x3354, 0x10e));
var a0_0x5ea1 = function(_0x28a945, _0x33541c) {
    _0x28a945 = _0x28a945 - 0x0;
    var _0x5ea1f3 = a0_0x3354[_0x28a945];
    return _0x5ea1f3;
};

//遍历节点，调用揭秘函数，还原js
function traverse_all_callexpress(ast) {
    // 遍历节点，当遇到下列类型的时候会调用函数
    traverse(ast, {
        CallExpression: {
            enter: [replace_function_to_string]
        },
    })
}

function replace_function_to_string(path)
    {//对节点进行处理
    const node = path.node;
    //判断节点类型及函数名，不是则返回
    if (!t.isIdentifier(node.callee,{name:"a0_0x5ea1"})) return;
        //取实参值
        let first_arg  = node.arguments[0].value;
        // let second_arg = node.arguments[1].value;
        //调用本地的_0x5c3a函数
        let value = a0_0x5ea1(first_arg);
        //打印看结果
        console.log(node.callee.name,first_arg);
        //替换节点，因为计算出来的都是字符串，因此不用做判断
        path.replaceWith(t.StringLiteral(value));
    }

    
    let ast = parser.parse(jscode);
    
    traverse_all_callexpress(ast);
    
    let {code} = generator(ast);
    
    fs.writeFile('decode_js_code.js', code, (err)=>{});