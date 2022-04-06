import { useState, useEffect } from 'react'
// import { storage, db, serverTimestamp } from '../firebase'
import Link from 'next/link'

import {auth, db, serverTimestamp} from '../firebase'

export default function createblog({ user }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    

    const createPost = async (e) => {
        if (!title || !content){
            M.toast({html: 'please add all the fields',classes:"red"})    
            return
        }
        try {
            db.collection("posts").add({
             title,
             content,
             author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
             createAt: serverTimestamp(),
             updateAt: serverTimestamp(),
            })

            M.toast({ html: 'Blog Created', classes: "green" })
                } catch (err) {
                    M.toast({ html: 'Error creating blog', classes: "red" })
                }
    }

    return (
        <div className="input-field rootdiv">
            <h3>Create A Blog !!</h3>
            <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}

            />
            <textarea
                type="text"
                value={content}
                placeholder="content"
                onChange={(e) => setContent(e.target.value)}

            />
            <Link href="/"><button className="btn #fb8c00 orange darken-1" onClick={() => createPost()}>Submit Post</button></Link>

            <style jsx>
                {`
                 
                 .rootdiv{
                     margin:30px auto;
                     max-width:600px;
                     padding:20px;
                     text-align:center;
                 }
                 `}
            </style>

        </div>
    )
}