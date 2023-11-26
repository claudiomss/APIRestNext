type Post = {
    id: string,
    title: string,
    desc: string,
    date: Date
}

export let posts: Post[] = []

export const getPosts = () => posts

export const addPost = (post:Post) => {
    posts.push(post)
}

export const updadePost = (id:string, title:string, desc:string) => {
    const post = posts.find((post) => post.id === id)

    if(post){
        post.title = title
        post.desc = desc
    }else{
        throw new Error ("No Post Found")
    }
}

export const getById = (id:string) => {
    return posts.find((post) => post.id === id)
}

export const deletePost = (id:string) => {
     posts = posts.filter((post) => post.id !== id)
}