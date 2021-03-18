<template>
  <div class="home">
    <h2>
      OtchereDev Blogs
    </h2>
    <div v-if="error">{{error}}</div>
    
    <div v-if="blogs.length">
      <PostList :blogs='blogs' />
    </div>
    <div v-else>
      Loading...
    </div>
    <TagCloud/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import getBlogs from '@/composibles/getBlogs'

export default {
  name: 'Home',
  components: {
   PostList,TagCloud
  },
  setup(){
    const {blogs,error,loadBlogs}=getBlogs()

    loadBlogs()

    return {blogs,error}
  }
}
</script>
