import React from 'react';
import styles from'./CardStyle.module.css';
import { useForm } from "react-hook-form";

const AddPost = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
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
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" id="content" name="content" rows="3" ref={register({ required: true })}></textarea>
                            {errors.content && <small className="text-danger">Type content</small>}
                        </div>
                        <button type="submit" className="btn btn-primary d-block m-auto">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;