"use client";
import Image from 'next/image';
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState(null);
    const inputImage = useRef();

    function handlePickImage() {
        inputImage.current.click();
    }

    function handleImageChange(e) {
        const image = e.target.files[0];

        if (!image) {
            setPickedImage(null);
            return;
        }
        
        const imageReader = new FileReader();
        
        imageReader.onload = () => {
            setPickedImage(imageReader.result);
        }

        imageReader.readAsDataURL(image);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
                </div>
                <input ref={inputImage} type="file" name={name} id={name} accept="image/png, image/jpeg" required className={classes.input} onChange={handleImageChange}/>
            </div>
            <button type="button" className={classes.button} onClick={handlePickImage}>Pick an image</button>
        </div>
    );
}