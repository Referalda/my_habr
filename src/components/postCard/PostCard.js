import React from 'react';
import style from './PostCard.module.css';

class PostCard extends React.Component {
    render() {
        return (
            <div className={style.postcard_blocks}>
    <div className={style.postcard}>
        <div class={style.postcard_authors}>
            <span className={style.create_name}>Тестов Тест</span>
            <span className={style.create_date}>31.07.2021 19:59</span>
        </div>
        <div className={style.postcard_img}>
            <img className="postcard__img" src="https://picsum.photos/1200/200" alt=""/>
        </div>
        <div className={style.postcard_title}>
            <a href="#">NASA переходит в облака: MCP, DAPHNE и облачные инструменты для команды
                Perseverance</a>
        </div>
    </div>
</div>
        )
    }
}

export default PostCard;