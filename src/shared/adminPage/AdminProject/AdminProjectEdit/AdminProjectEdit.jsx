import React, { useEffect, useState } from 'react'
import "../AdminProjectNew/adminprojectnew.css"
import { Navigate, useParams } from 'react-router-dom'
import { selectIsAuth } from '../../../slices/auth'
import { useSelector } from 'react-redux'

import axios from "../../../actions/axios"

function AdminProjectEdit() {


    const isAuth = useSelector(selectIsAuth)
    if (!window.localStorage.getItem("token") && !isAuth) {
        <Navigate to="/" />
    }

    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/project/id=/${id}`)
            .then(res => {
                const data = res.data
                setImageURL(data.img)
                setCategory(data.category)
                setClient(data.client)
                setLink(data.link)
                setMainText(data.mainText)
                setMainTitle(data.mainTitle)
                setProjectid(data.projectid)
                setTag(data.tag)
                setTags(data.tags)
                setTitle(data.title)

                setIsLoading(false)
            })
            .catch(err => {
                console.warn(err);
                alert("Ошибка при получении проекта")
            })
    }, []);

    const [imageURL, setImageURL] = useState("")

    const [mainText, setMainText] = useState("")
    const [title, setTitle] = useState("")
    const [projectid, setProjectid] = useState("bathroom")
    const [mainTitle, setMainTitle] = useState("")
    const [client, setClient] = useState("")
    const [category, setCategory] = useState("")
    const [tag, setTag] = useState("")
    const [tags, setTags] = useState("")
    const [link, setLink] = useState("")

    const onSubmit = async () => {
        try {
            const fields = {
                mainText,
                title,
                projectid,
                mainTitle,
                client,
                category,
                tag,
                tags,
                link,
                img: imageURL,
            }
            const { data } = await axios.put(`/api/project/${id}/edit`, fields)
        } catch (error) {
            console.warn(error);
            alert("Ошибка при создании проекта")
        }
    }

    const onImgChange = async (event) => {
        try {
            const formData = new FormData()
            const file = event.target.files[0]
            formData.append("image", file)
            const { data } = await axios.post("/upload", formData)
            setImageURL(data.url)
        } catch (error) {
            console.warn(error);
            alert("Ошибка при загрузке файла")
        }
    }

    return (
        <main className='admin-project'>
            <form className='admin-project-aside'>
                <select className='admin-project-aside-item' value={projectid} onChange={(e) => setProjectid(e.target.value)}>
                    <option value="bathroom">Bathroom</option>
                    <option value="bedroom">Bedroom</option>
                    <option value="kitchan">Kitchan</option>
                    <option value="livingroom">Living area</option>
                </select>
                <input className='admin-project-aside-item' type="text" placeholder='Client name' value={client} onChange={(e) => setClient(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Tag' value={tag} onChange={(e) => setTag(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Tags' value={tags} onChange={(e) => setTags(e.target.value)} />
                <input className='admin-project-aside-item' type="text" placeholder='Link' value={link} onChange={(e) => setLink(e.target.value)} />
            </form>
            <div className='admin-project-main'>

                <form className='admin-project-title-form'>
                    <input className='admin-project-title' type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input className='admin-project-title' type="text" placeholder='Full Title' value={mainTitle} onChange={(e) => setMainTitle(e.target.value)} />
                </form>
                <form>
                    <textarea className='adminprojectnew-editor' value={mainText} onChange={(e) => setMainText(e.target.value)} cols="30" rows="10" placeholder='Write some text'></textarea>
                    <input type="file" onChange={onImgChange} accept="image/*" className='admin-project-image-input'/>
                    {
                        imageURL ?
                            <img src={`http://localhost:5000${imageURL}`} className="admin-project-preview" />
                            :
                            null
                    }
                </form>
            </div>
            <div>
                <button onClick={onSubmit} className="btn admin-project-btn">Submit</button>
            </div>
        </main>
    )
}

export default AdminProjectEdit
