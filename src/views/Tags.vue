<template>

  <h2>
      Tags {{tag}}
  </h2>
  <p>
      Search results
  </p>
  <div v-if="blogWithTag.length">

  <PostList :blogs='blogWithTag' />
  <tag-cloud></tag-cloud>
  </div>
  <div v-else>
      Loading
  </div>


</template>

<script>
import { useRoute } from 'vue-router'
import PostList from "@/components/PostList.vue"
import getBlogs from '@/composibles/getBlogs'
import { computed, ref } from '@vue/runtime-core'
import TagCloud from '../components/TagCloud.vue'

export default {

    components:{PostList,TagCloud},
    setup(){
        TagCloud
        const route=useRoute()

        const tag=ref()

        const{blogs,error,loadBlogs}=getBlogs()

        loadBlogs()

        const blogWithTag = computed(()=>{
            const tag_link=route.params.tag
            tag.value=tag_link
            const filtered=blogs.value.filter(blog=>{
                
                return blog.tags.includes(tag_link)
            })
            return filtered
        })

        return { tag,blogWithTag}
    }
}
</script>

<style>

</style>