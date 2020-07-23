import hashlib
import execjs

def js_aes():
    jscode = """
        function decryptByAES(encryted) {
        var crypto = require("crypto-js");
        let iv2 = crypto.enc.Hex.parse("c451852f721ba85b8176387aec11bca4");
        let secret2 = iv2;
        let decry_data = crypto.AES.decrypt(encryted, secret2, {
        iv: iv2,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
        });
       let decryted = crypto.enc.Utf8.stringify(decry_data);
       return decryted;
}
    """
    ctx = execjs.compile(jscode)
    decrypto_data = ctx.call("decryptByAES", "N20r0z+sOYbAaVkZ9DM+Ng==")
    return decrypto_data

def get_md5(user_name):
    md5 = hashlib.md5()
    md5.update('{user_name}'.format(user_name=user_name).encode('utf-8'))
    user_id = md5.hexdigest()
    return user_id

ss = '{seed: "59f94de6ceacb6c867b3ea7f59e45034", logid: "202007141528140100140481303614FAC3"}'
seed = "59f94de6ceacb6c867b3ea7f59e45034"
logid = "202007141528140100140481303614FAC3"
sss = logid + seed + logid


if __name__ == '__main__':
    import requests
    headers = {
        'authority': 'profile.zjurl.cn',
        'accept': 'text/javascript, text/html, application/xml, text/xml, */*',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://profile.zjurl.cn/rogue/ugc/profile/?version_code=780&version_name=70800&user_id=3994535116&media_id=3994535116&request_source=1&active_tab=dongtai&device_id=65&app_name=news_article',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'gftoken=Mzc4OTk2NjY4N3wxNTk0NzExNTk2MjB8fDAGBgYGBgY; s_v_web_id=verify_kclm3z9u_quRwoMe0_Oiwe_41oM_9fbi_QHhNCMHhXECa; odin_tt=1b85b8c9396c4a182ee5aed3e7811896b02c4e0c7505d7aae0875c227c04e06f484ac14e673f2ad713f5e51f6e19e10a; ttcid=76f5cb439ce7467c98d42f5ad762917a39; SLARDAR_WEB_ID=6da0e284-5122-45b1-b5e2-aeb088982bc8; tt_scid=EZAOQcqJKH2QO.Li63lWY1IHR1uwlSR3RRnAYQtiOI9gcHYupHag-oB2G28UdnEOf36f',
    }

    params = (
        ('version_code', '780'),
        ('version_name', '70800'),
        ('user_id', '3994535116'),
        ('media_id', '3994535116'),
        ('request_source', '1'),
        ('active_tab', 'dongtai'),
        ('device_id', '65'),
        ('app_name', 'news_article'),
        ('_signature',
         '_02B4Z6wo00f01.HblTQAAIBDFiDf2Yb9kW.x3pGAAKOFGWxlnCLOsybfR0xMm6fbpAfRjXGflkMVO8Rcb3dhODK2g6eiiY7cc4bEsz2otvUbNo6VXn957xQTA3DkMUSKxeHb1cX-nYb0UF80cc'),
    )

    response = requests.get('https://profile.zjurl.cn/user/profile/homepage/share/v7/', headers=headers, params=params)
    response_headers = response.headers

    seed = response_headers['x-tt-seed']
    logid = response_headers['x-tt-logid']

    data1 = response.json()["data"]['digg_count']
    # data1 = "XwJsgDzylFH0YH/v9eJ07w=="
    data = {
        "datas": data1,
        "seed": seed,
        "logid": logid,
    }
    res = requests.post("http://10.60.102.67:3009/decrypt/toutiao", data=data).json()["msg"]
    print(res)
