import { ref } from "vue"
import { projectFirebase } from "../firebase/config"

const getBlog=(id)=>{
    const blog=ref('')
    const error=ref('')

    const loadBlog= async ()=>{
        try {
            const doc = await projectFirebase.collection('post').doc(id).get()

            blog.value={...doc.data(),id:doc.id}

            // using json-server
            // const res = await fetch('http://localhost:3000/blogs/'+id)
            // if(!res.ok){
            //     throw Error('The post you are trying to access does not exit')
            // }
            // blog.value= await res.json()  
        } catch (err) {
            error.value=err.message
        }

    }

    return {blog,error,loadBlog}
}

export default getBlog