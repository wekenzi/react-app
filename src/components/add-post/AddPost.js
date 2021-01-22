import React from 'react';
import styles from'./CardStyle.module.css';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddPost = () => {
    const history = useHistory();
    const postsInSession = sessionStorage.getItem('posts');

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.id = postsInSession? JSON.parse(postsInSession).length + 100 : 100;
        const newPost = data;
        if(postsInSession){
            let newarr = JSON.parse(postsInSession)
            newarr = [newPost,...newarr];
            sessionStorage.setItem('posts', JSON.stringify(newarr));
        }else{
            sessionStorage.setItem('posts', JSON.stringify([newPost]));
        }

        history.push("/");

    }
    return (
        <div className={styles.wrapperCard}>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" ref={register({ required: true })}/>
                            {errors.name && <small className="text-danger">Type name</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone" ref={register({ required: true })}/>
                            {errors.phone && <small className="text-danger">Type phone</small>}
                        </div>
                        <button type="submit" className="btn btn-primary d-block m-auto">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;