import React, {useState} from 'react'
import './ImageUpload.css'
import {storage} from '../firebase';
import axios from './axios'

const ImageUpload = ({username}) => {
    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
    const [caption, setCaption] = useState('')
    const [url, setUrl] = useState('');
    const handleChange = e => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref("images/${image.name}").put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadUrl()
                    .then((url) => {
                        setUrl(url);

                        axios.post('http://localhost:9000/upload', {
                            caption: caption,
                            user: username,
                            image: url
                        })
                        setProgress(0);
                        setCaption('');
                        setImage(null);
                    })
            }
        );
    };

    return(
        <div className='imageUpload'>
            <progress className='imageUpload_progress' value={progress} max='100'>
                <input
                    type='text'
                    placeholder='Enter a caption...'
                    className='imageUpload_input'
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                />
                <input className='imageUpload_file' type='file' onChange={handleChange}/>
                <button className='imageUpload_button' onClick={handleUpload}>Upload</button>
            </progress>
        </div>
    )
}

export default ImageUpload;