import { play } from 'vue-play'
import Vue from 'vue'
import VReadmore from '../dist/index.js'

Vue.component(VReadmore)

play('VReadmore')
  .add('simple', {
    template: '<v-readmore><li v-for="i in 20">{{ i }}</li></v-readmore>'
  })
