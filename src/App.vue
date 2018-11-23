<template>
    <div>
      <router-view/>
      <FooterGuide />
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
    import {mapActions} from 'vuex'
    export default {
      mounted(){
        // this.$store.dispatch('getAddress')
        this.getAddress()
      },
      methods: {
        ...mapActions(['getAddress'])
      },
      components: {
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
