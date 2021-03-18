<template>
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="blog">
        <h2>
            {{blog.title}}
        </h2>
        <p>
            {{blog.detail}}
        </p>
    </div>
</template>

<script>
import getBlog from '@/composibles/getBlog'
export default {
    props:['id'],
    setup(props){
        const {blog,error,loadBlog}=getBlog(props.id)

        loadBlog()
            return {blog,error}
    }
}
</script>

<style>

</style>