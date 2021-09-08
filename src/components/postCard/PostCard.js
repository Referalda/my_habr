import React from 'react';
import style from './PostCard.module.css';

class PostCard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={style.postcard_blocks}>
                <div className={style.postcard}>
                    <div class={style.postcard_authors}>
                        <span className={style.create_name}>{this.props.createName}</span>
                        <span className={style.create_date}>{this.props.createDate}</span>
                    </div>
                    <div className={style.postcard_img}>
                        <img className="postcard__img" src="https://picsum.photos/1200/200" alt="" />
                    </div>
                    <div className={style.postcard_title}>
                        <a href="#">{this.props.title}</a>
                    </div>
                </div>
            </div>
        )
    }
}

PostCard.defaultProps = {
    createName:'Автор неизвестен',
    createDate:'Дата не указано',
    title:'...'
}

export default PostCard;