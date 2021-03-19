import { ref } from "vue"
import {projectFirebase} from '../firebase/config'

const getBlogs=()=>{
    const blogs=ref([])
    const error=ref('')
    
    const loadBlogs= async ()=>{
      
      
      try {
          await new Promise(resolve=>{
            setTimeout(resolve,1000)
          })  

          // using firebase
          const res = await projectFirebase.collection('post').get()
          blogs.value=res.docs.map(doc=>{
            return {...doc.data(),id:doc.id} 
          })
        // using json-server
        // const res = await fetch('http://localhost:3000/blogs')
        // if (!res.ok){
        //   throw Error('There was an error fetch the blogs')
        // }
        // blogs.value= await res.json()
    
      } catch (err) {
        console.log(err.message)
        error.value=err.message
      }
    }

    return {blogs,error,loadBlogs}

}

export default getBlogs
