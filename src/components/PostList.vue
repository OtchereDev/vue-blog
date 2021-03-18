<template>
<div>

    <div v-for="blog in blogs" :key="blog.id">
        <SinglePost :blog='blog' />

        
    </div>
</div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
    components:{SinglePost},
    props:['blogs'],
    setup(props){
        
    }
}
</script>

<style>

</style>