<template>
  <div class="readmore-wrapper">
    <div ref="context" :style="readmoreStyle">
      <slot></slot>
    </div>
    <template v-if="isNeed">
      <div v-if="isOpen" @click="onClickMore" class="link morelink">
        <slot name="moreLink">more</slot>
      </div>
      <div v-else @click="onClickLess" class="link lesslink">
        <slot name="lessLink">less</slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'v-readmore',
  props: {
    collapsedHeight: {
      type: Number,
      default: 320,
    },
  },
  data() {
    return {
      currentHeight: 0,
      isOpen: false,
      isNeed: true,
    }
  },
  mounted() {
    this.currentHeight = this.$refs.context.clientHeight;
    this.isNeed = (this.currentHeight > this.collapsedHeight);
  },
  methods: {
    onClickMore() {
      this.isOpen = false;
    },
    onClickLess() {
      this.isOpen = true;
    },
  },
  watch: {
    currentHeight() {
      this.isOpen = this.currentHeight > this.collapsedHeight;
    },
  },
  computed: {
    readmoreStyle() {
      return {
        maxHeight: this.isOpen ? `${this.collapsedHeight}px`:'none',
        overflow: 'hidden',
      }
    },
  }
}
</script>
<style scoped lang="css">
.readmore-wrapper {
  position: relative;
  text-align: center;
}
.link {
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-top: 40px;
}
.morelink {
  background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(55%, #fff), color-stop(90%, #fff));
  background: linear-gradient(to bottom, transparent 0%, #fff 55%, #fff 90%);
}
</style>
