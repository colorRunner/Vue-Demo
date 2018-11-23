import ajax from './ajax'
const BASE_URL = '/api'
//[1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
export const reqAddress = (geohash) => ajax('/address')
//[2、获取食品分类列表](#2 获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax('/categorys')
//[3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude,latitude) => ajax('/shops')
//[4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表)<br/>
export const reqSearchShop = (geohash,keyword) => ajax(BASE_URL+`/search_shops`,{geohash,keyword})
//[6、用户名密码登陆](#6 用户名密码登陆)<br/>
export const reqPwdLogin = (name,pwd,captcha) => ajax(BASE_URL+`/login_pwd`,{name,pwd,captcha},'POST')
// [7、发送短信验证码](#7 发送短信验证码)<br/>
export const reqSendCode = (phone) => ajax(BASE_URL+`/sendcode`,{phone})
// [8、手机号验证码登陆](#8 手机号验证码登陆)<br/>
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+`/login_sms`,{phone,code},'POST')
// [9、根据会话获取用户信息](#9 根据会话获取用户信息)<br/>
export const reqUserInfo = () => ajax(BASE_URL+`/userinfo`)
// [10、用户登出](#10 用户登出)<br/>
export const reqLogout = () => ajax(BASE_URL+`/logout`)
