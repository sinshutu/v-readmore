import { play } from 'vue-play'
import Vue from 'vue'
import VReadmore from '../dist/index.js'

Vue.use(VReadmore)

play('VReadmore')
  .add('simple', {
    template: '<v-readmore><li v-for="i in 40">item - {{ i }}</li></v-readmore>'
  })
