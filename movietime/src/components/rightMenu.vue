<template>
     <transition :name="transitionName">
    <div class="page-component-up " 
      @click="backToTop"
      v-show="visible"
      :style="customStyle">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    transitionName: {
      type: String,
      default: 'fade'
    },
    customStyle: {
      type: Object
    },
    visibilityHeight: { // 纵向滑动多远距离出现滚动条
      type: Number
    },
    backPosition: { // 返回顶部时，滚动到哪里（距离顶部的距离）
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      visible: false,
      interval: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    if(this.interval) {
      clearInterval(this.interval)
    }
  },
  methods: {
    handleScroll() {
      this.visible = window.pageYOffset > this.visibilityHeight
    },
    backToTop() {
      let distanceY = window.pageYOffset
      let i = 0
      this.interval = setInterval(() => {
        let next = Math.floor(this.easeInOutQuad(10 * i, distanceY, -distanceY, 500))
        if(next <= this.backPosition) {
          window.scrollTo(0, this.backPosition)
          clearInterval(this.interval)
        } else{
          window.scrollTo(0, next)
        }
        i++
      }, 17)
    },
    
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) { 
        return c / 2 * t * t + b
      } else {
       
        return -c / 2 * (--t * (t - 2) - 1) + b
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-component-up{
  position: fixed;
  right: 10px;
  bottom: 30px;
  cursor: pointer;
  text-align: center;
  transition: .3s;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  z-index: 99;
  i{
    color: #409eff;
    display: block;
    line-height: inherit;
    text-align: center;
    font-size: 18px;
  }
}


</style>
