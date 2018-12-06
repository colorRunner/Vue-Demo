import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} from '../api'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送异步请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    console.log(result);
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategorys({commit}) {
    const result = await reqFoodCategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },

  async getShops({commit, state}) {
    const {longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    if(result.code === 0){
      const shops = result.data

      commit(RECEIVE_SHOPS,{shops})
    }
  },

  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  //获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      //数据改变了通知一下组件
      callback && callback()
    }
  },
  //获取商家评价列表
  async getShopRatings({commit},callback) {
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      //数据改变了通知一下组件
      callback && callback()
    }
  },
  //同步更新food中count
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  //清空购物车
  clearCart({commit}){
    commit(CLEAR_CART)
  }

}
