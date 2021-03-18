<template>
  <div>
      <h2>
          <router-link :to="{name:'Detail',params:{id:blog.id}}">
          {{blog.title}}
          </router-link>

      </h2>
      <p>
          {{snippet}}
      </p>
      <div>
          <span v-for="tag in blog.tags" :key="tag">
              #{{tag}}
          </span>
      </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props:['blog'],
    setup(props){
        const snippet=computed(()=>{
            return props.blog.detail.substring(0,35) 
        })

        return {snippet}
    }
}
</script>

<style>

</style>