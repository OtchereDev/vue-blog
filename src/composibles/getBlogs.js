import { ref } from "vue"


const getBlogs=()=>{
    const blogs=ref([])
    const error=ref('')
    
    const loadBlogs= async ()=>{
      try {
        await new Promise(resolve=>{
           setTimeout(resolve,1000)
        })
        
        const res = await fetch('http://localhost:3000/blogs')
        if (!res.ok){
          throw Error('There was an error fetch the blogs')
        }
        blogs.value= await res.json()
    
      } catch (err) {
        error.value=err.message
      }
    }

    return {blogs,error,loadBlogs}

}

export default getBlogs
