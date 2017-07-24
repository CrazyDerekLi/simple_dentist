
var md5 = require("./md5.js");
var uuid = require("./UUID.js");
var Parser = require('./xml/dom-parser');
var keyArr = ["amount","appid","attach","body","check_name","desc","detail","device_info","fee_type","goods_tag","limit_pay","mch_appid","mch_id","mchid","nonce_str","notify_url","openid","out_trade_no","partner_trade_no","product_id","sign","sign_type","spbill_create_ip","time_expire","time_start","total_fee","trade_type"];

function Pay(options){
    this.options = options ||{};
    this.options.appid = this.options.appid||"wxb36394319df47dbe";
    this.options.mch_id = this.options.mch_id||"1447907102";
    this.options.spbill_create_ip = this.options.spbill_create_ip||"119.29.141.151";
    this.options.notify_url = this.options.notify_url||"https://dingdongyy.net/";
    this.options.trade_type = this.options.trade_type||"JSAPI";
    this.options.key = this.options.key||"dddddddddddddddddddddddddddddddd";
    this.options.check_name = this.options.check_name||"NO_CHECK";
}
Pay.prototype.formatDate=function(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    function format2(num){
        var str = "";
        if(num/10==0){
            str += "0";
        }
        str += num;
        return str;
    }
    return year+format2(month)+format2(day)+format2(hour)+format2(minute)+format2(second);
};
Pay.prototype.formatTime=function(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    function format2(num){
        var str = "";
        if(num/10==0){
            str += "0";
        }
        str += num;
        return str;
    }
    return year+format2(month)+format2(day)+format2(hour)+format2(minute)+format2(second)+uuid.uuidSelf(18,10);
};
Pay.prototype.getXMLStr=function(params){
    var str = "<xml>";
    for(var i=0;i<keyArr.length;i++){
        var key = keyArr[i];
        if(params[key]!=undefined&&params[key]!=""){
        str+= "<"+key+">"+params[key]+"</"+key+">";
        }
    }
    str += "</xml>";
    return str;
};
Pay.prototype.getSign=function(params){
    var k = this.options.key;
    var str = "";
    for(var i=0;i<keyArr.length;i++){
        var key = keyArr[i];
        if(params[key]!=undefined&&params[key]!=""){
        if(str){str+="&"}
        str+= key+"="+params[key];
        }
    }
    str += "&key="+k;
    //console.log(str);
    return md5.md5(str).toUpperCase();
};
Pay.prototype.doDDYYPay = function(){
    var appid = this.options.appid;
    var mch_id = this.options.mch_id;
    var body = this.options.body;
    var total_fee = this.options.total_fee;
    var spbill_create_ip = this.options.spbill_create_ip;
    var notify_url = this.options.notify_url;
    var trade_type = this.options.trade_type;
    var openid = this.options.openid;
    var key = this.options.key;
    var getPrepay_idURL = 'https://api.mch.weixin.qq.com/pay/unifiedorder';
    if(!openid||!total_fee||!body){return {result:false,msg:"传入参数不全"};}

    var tradeNo = this.formatTime(new Date());
    var nonce_str = uuid.uuid4();

    var params = {
      appid:appid,
      mch_id:mch_id,
      nonce_str:nonce_str,
      body:body,
      out_trade_no:tradeNo,
      total_fee:total_fee,
      spbill_create_ip:spbill_create_ip,
      notify_url:notify_url,
      trade_type:trade_type,
      openid:openid
    };
    //console.log(params);
    var sign = this.getSign(params);
    //console.log(sign);
    params.sign = sign;
    
    var xmlStr = this.getXMLStr(params);
    //console.log(xmlStr);
    wx.request({
      url: getPrepay_idURL,
      data: xmlStr,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {"content-type":"text/xml;charset=utf-8"}, // 设置请求的 header
      success: function(res){
        var str = res.data;
        //console.log(str);
        var xmlParser = new Parser.DOMParser();
        var doc = xmlParser.parseFromString(str);
        var timeStamp = new Date().getTime()+"";
        var payAppId = doc.getElementsByTagName("appid")[0].firstChild.nodeValue;
        var prepay_id = "prepay_id="+doc.getElementsByTagName("prepay_id")[0].firstChild.nodeValue;
        var paySign = doc.getElementsByTagName("sign")[0].firstChild.nodeValue;
        var nonceStr = doc.getElementsByTagName("nonce_str")[0].firstChild.nodeValue;
        var signStr1 = "appId="+payAppId
            +"&nonceStr="+nonceStr
            +"&package="+prepay_id
            +"&signType=MD5"
            +"&timeStamp="+timeStamp
            +"&key="+key;
        var newPaySign = md5.md5(signStr1).toUpperCase();
        wx.requestPayment({
          appId:payAppId,
          timeStamp: timeStamp,
          nonceStr: nonceStr,
          package: prepay_id,
          signType: 'MD5',
          paySign: newPaySign,
          success: function(res){
            wx.showToast({
              title:'支付成功'
            });
          },
          fail: function(res) {
            // fail
            //console.log(res);
          },
          complete: function() {
            // complete

          }
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
}
Pay.prototype.doCompanyPay = function(){
    var mch_appid = this.options.appid;
    var mchid = this.options.mch_id;
    var desc = this.options.desc;
    var amount = this.options.amount;
    var spbill_create_ip = this.options.spbill_create_ip;
    var openid = this.options.openid;
    var key = this.options.key;
    var check_name = this.options.check_name;

    //var payUserUrl = 'https://api.mch.weixin.qq.com/mmpaymkttransfers/promotion/transfers';
    var payUserUrl = 'https://dingdongyy.net/hospital-webapp/core/user/companyPay';
    if(!mch_appid||!mchid||!openid||!check_name||!amount||!desc||!spbill_create_ip){return {result:false,msg:"传入参数不全"};}

    var partner_trade_no = this.formatTime(new Date());
    var nonce_str = uuid.uuid4();

    var params = {
      mch_appid:mch_appid,
      mchid:mchid,
      nonce_str:nonce_str,
      amount:amount,
      desc:desc,
      spbill_create_ip:spbill_create_ip,
      check_name:check_name,
      partner_trade_no:partner_trade_no,
      openid:openid
    };
    var sign = this.getSign(params);
    params.sign = sign;
    
    var xmlStr = this.getXMLStr(params);
    //console.log(xmlStr);
    wx.request({
      url: payUserUrl,
      data: {xml:xmlStr,no:mchid},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: function(res){
        //console.log(res);
      },
      fail: function(res) {
        // fail
        //console.log(res)
      },
      complete: function() {
        // complete
      }
    })
}
module.exports.Pay = Pay;