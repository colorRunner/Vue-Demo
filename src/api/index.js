import ajax from './ajax'

//获取地址
export const reqAddress = (geohash) => ajax('/address')
export const reqFoodCategorys = () => ajax('/categorys')
export const reqShops = (longitude,latitude) => ajax('/shops')
//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家评论数组
export const reqShopRatings = () => ajax('/ratings')
//获取商家商品数组
export const reqShopGoods = () => ajax('/goods')
