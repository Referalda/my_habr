import React from 'react';
import './PostCard.css';

class PostCard extends React.Component {
    render() {
        return (
            <div class="postcard-blocks">
    <div class="postcard">
        <div class="postcard_authors">
            <span class="create_name">Тестов Тест</span>
            <span class="create_date">31.07.2021 19:59</span>
        </div>
        <div class="postcard_img">
            <img class="postcard__img" src="https://picsum.photos/1200/200" alt=""/>
        </div>
        <div class="postcard_title">
            <a href="#">NASA переходит в облака: MCP, DAPHNE и облачные инструменты для команды
                Perseverance</a>
        </div>
    </div>
</div>
        )
    }
}

export default PostCard;