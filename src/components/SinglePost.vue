<template>
  <div>
      <h2>
          {{blog.title}}

      </h2>
      <p>
          {{snippet}}
      </p>
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