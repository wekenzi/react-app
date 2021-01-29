import React from "react";
import { useEffect } from 'react';
import styles from'./CardStyle.module.css';

const Card = ({post,onDeleteClick}) => {

    useEffect(()=>{
        console.log('init Card');
        return ()=> console.log('Card Unmounted')
    },[])

    return (
        <div className="col-md-4 mt-3">
            <div className={`card ${styles.postCard}`}>
                <div className="card-body">
                    <h5 className="card-title">{post.name}</h5>
                    <p className="card-text">{post.phone}</p>
                    <button className="btn btn-primary mr-2">Edit</button>
                    <button className="btn btn-danger" onClick={onDeleteClick}>Delete</button>
                </div>
            </div> 
        </div>
    );
};

export default Card;