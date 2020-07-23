var str = {"name":"菜鸟教程", "site":"http://www.runoob.com"}
var n = {
    param1: "9f035a29fafc97fc505493767045c0fd",
    param2: "d8fd769a9359e2802d1b3da8660de66a", 
    param3: "6e516341bff63ebf45bbb77c9eeec83a", 
    param4: "a0c33f7f58fb0ff7647b0ed0adc9c2ef"
}
str_pretty1 = JSON.stringify(n);
console.log(str_pretty1);


var dic = new Array(); //定义一个字典

dic['one'] = '1';      // 添加字典的元素( key:value)
dic['three'] = '3';
dic['two'] = '2';
dic['8'] = 'seven';
dic['five'] = '5';
dic['four'] = '4';
dic['9'] = 'nine';
dic['six'] = '6';
dic['7'] = 'eight';

console.log(dic["7"]);