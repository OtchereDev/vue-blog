import { ref } from "vue"

const getBlog=(id)=>{
    const blog=ref('')
    const error=ref('')

    const loadBlog= async ()=>{
        try {
            const res = await fetch('http://localhost:3000/blogs/'+id)
            if(!res.ok){
                throw Error('The post you are trying to access does not exit')
            }
            blog.value= await res.json()  
        } catch (err) {
            error.value=err.message
        }

    }

    return {blog,error,loadBlog}
}

export default getBlog