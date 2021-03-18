<template>
  <div class="home">
    <h2>
      OtchereDev Blogs
    </h2>
    <div v-if="error">{{error}}</div>
    <PostList :blogs='blogs' />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'
import getBlogs from '@/composibles/getBlogs'

export default {
  name: 'Home',
  components: {
   PostList
  },
  setup(){
    const {blogs,error,loadBlogs}=getBlogs()

    loadBlogs()

    return {blogs,error}
  }
}
</script>
