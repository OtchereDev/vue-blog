<template>
    
        <div v-for="tag in filterTags" :key="tag">
            <router-link :to="{name:'Tag',params:{tag:tag}}">

            <span>
                #{{tag}}
            </span>
            </router-link>

        </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import getBlogs from '@/composibles/getBlogs'
import { computed } from '@vue/runtime-core'
export default {
    

    setup(){
        const tags=new Set

        const tagLine=ref([])

        const {blogs,error,loadBlogs}=getBlogs()

        loadBlogs()
        
        
        const filterTags=computed(()=>{
            blogs.value.forEach(blog=>{
                blog.tags.forEach(tag=>{
                    if(!tagLine.value.includes(tag)){
                        tagLine.value.push(tag)
                    }
                    // tags.add(tag)
                    
                })
            })

            // return tags
            return tagLine.value
        })
       

        return {filterTags,blogs}
    }
}
</script>

<style>

</style>