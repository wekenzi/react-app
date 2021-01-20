import React, { useEffect, useState } from 'react';
import Card from '../card/Card';

const Posts = (props) => {

    let [monsters, setMosters] = useState([]);

    const getCardsData = async () =>{
        try {
            const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users')
            const res = await fetchedData.json();
            setMosters(res);
        } catch (error) {
            alert(error);
        }
    }

    useEffect(()=>{
        console.log('Card List init');
        getCardsData();
        return () => console.log('Unmounted Card List');
    },[])
    
    function deleteCard(index){
        const monstersDel = [...monsters];
        monstersDel.splice(index, 1);
        setMosters(monstersDel);
    }
    
    function loopOnMonsters(){
        const monstersArr = monsters.map((monster,index) => <Card monster={monster} key={monster.id} onDeleteClick={()=>deleteCard(index)} />);
        return monstersArr;
    }

    const posts = <div className="row">{loopOnMonsters()}</div>;

    return (
        <div>
            {posts}
        </div>
    );
};

export default Posts;