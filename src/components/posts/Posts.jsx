import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../card/Card';

const Posts = () => {

    let [posts, setPosts] = useState([]);

    const getCardsData = async () =>{
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
            sessionStorage.setItem('posts', JSON.stringify(data));
            setPosts(data);
        } catch (error) {
            throw error;
        }
    }

    useEffect(()=>{
        const postsInSession = sessionStorage.getItem('posts');
        console.log('Card List init');
        if(postsInSession){
            setPosts(JSON.parse(postsInSession));
        }else{
            getCardsData();
        }
        return () => console.log('Unmounted Card List');
    },[])
    
    function deleteCard(index){
        const postsDel = [...posts];
        postsDel.splice(index, 1);
        setPosts(postsDel);
    }
    
    function loopOnposts(){
        const postsArr = posts.map((post,index) => <Card post={post} key={post.id} onDeleteClick={()=>deleteCard(index)} />);
        return postsArr;
    }

    const postsList = <div className="row">{loopOnposts()}</div>;

    return (
        <div>
            {postsList}
        </div>
    );
};

export default Posts;