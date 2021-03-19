<template>
  <h2>
      Add a new blog
  </h2>
  <form @submit.prevent="handleSubmit">
    <div>

    <label >Blog Title</label>
    <input type="text" v-model="title" >
  
    </div>
    <div>
      <label >
        Content
      </label>
      <textarea cols="30" rows="10" v-model="detail"></textarea>
    </div>
    <div>
      <label>Tags (Press enter to add a tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleTags">
      <span v-for="tag in tags" :key="tag">
        #{{tag}}
      </span>
    </div>
    <button>
      Submit
    </button>
  </form>

</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
import {projectFirebase} from '../firebase/config'
export default {
  setup(){
    const title=ref('')
    const detail=ref('')
    const tag=ref('')
    const tags=ref([])

    const router=useRouter()

    const handleSubmit = async ()=>{
      const post={
        title:title.value,
        detail:detail.value,
        tags:tags.value
      }


      // using -firestore
      const res=  await projectFirebase.collection('post').add(post)

      // using json-server
      // await fetch('http://localhost:3000/blogs',{
      //   method:"POST",
      //   headers:{
      //     'Content-Type':'application/json'
      //   },
      //   body:JSON.stringify(post)
      // })
      title.value=''
      detail.value=''
      tags.value=[]
      router.push({name:'Home'})

    }

    const handleTags=()=>{
      if(tag.value.length){
        if(!tags.value.includes(tag.value)){
          tags.value.push(tag.value)
        }
      }
      tag.value=''
    }

    return {title,detail,tag,tags,handleTags,handleSubmit}
  }
}
</script>

<style>

</style>