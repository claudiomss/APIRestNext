'use client'
import { useState } from 'react'
import { createPost, deletePost, updatePost} from '@/services/services'
import { HtmlFrame } from './frame'


export default function Home() {
  
  const [id, setID] = useState<String>()
  const [title, setTitle] = useState<String>()
  const [desc, setDesc] = useState<String>()


  const create = async () => await createPost(title, desc)
  const update = async () => await updatePost(title, desc,id)
  const delet = async () => await deletePost(id)

  const updatePage =  () => window.location.reload()

  return (

    <>
    <main style={{height: '100vh', display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '200px 50px 150px 400px', alignItems: 'center', justifyContent: 'center', gap:'2rem', width: '10rem', margin: '0 auto'}}>
    <section style={{display: 'grid', justifyContent: 'center',  gap: '0.3rem'}}>
        <label style={{textAlign: 'center'}}>Criar Post</label>
        <span>Title: <input onChange={((e) => setTitle(e.target.value))} type="text" /></span>
        <span>Desc: <input onChange={((e) => setDesc(e.target.value))} type="text" /></span>
        <button onClick={create}>Criar</button>
      </section>

      <section style={{display: 'grid', justifyContent: 'center', gap: '0.3rem'}}>
          <label  style={{textAlign: 'center'}}>Alterar Post</label>
          <span>Id: <input onChange={((e) => setID(e.target.value))} type="text" /></span>
          <span>Title: <input onChange={((e) => setTitle(e.target.value))} type="text" /></span>
          <span>Desc: <input onChange={((e) => setDesc(e.target.value))} type="text" /></span>
          <button onClick={update}>Alterar</button>
      </section>

      <section style={{display: 'grid', justifyContent: 'center', gap: '0.3rem'}}>
          <label  style={{textAlign: 'center'}}>Deletar Post</label>
          <span>Id: <input onChange={((e) => setID(e.target.value))} type="text" /></span>
          <button onClick={delet}>Deletar</button>
          <p style={{position: 'absolute', top: '50vh'}}>http://localhost:3000/api/blog
          <button style={{padding: '0.3rem', marginLeft: '1rem'}} onClick={updatePage}>Atualizar</button>
          </p>
      </section>
    
    <HtmlFrame/>

    </main>
    </>

  )
}

