export const createPost = async (title, desc) => {
    const post = {
      title,
      desc
    }
    
    await fetch('http://localhost:3000/api/blog', {
      method: 'POST',
      body: JSON.stringify(post)
  })
  
}

export const updatePost = async (title, desc, id) => {
    const post = {
      title,
      desc
    }
    
    await fetch(`http://localhost:3000/api/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post)
  })

}

export const deletePost = async (id) => { 
    await fetch(`http://localhost:3000/api/blog/${id}`, {
    method: 'DELETE',
  })

}