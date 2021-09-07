import React from 'react';
import style from './Post.module.css';
import avatar from './ava.jpg';
import photo from './phot0.jpg';

class Post extends React.Component {
    render() {
        return (
            <>
                <div className={style.container}>
                    <div className={style.flex}>
                        <img src={avatar} className={style.img}/> 
                        <p className={style.nickname}>phillennium</p>
                        <p className={style.date}>1.09.2021</p>
                    </div>
                    <h1 className={style.h1}>GitOps, облачный вендор-лок и Jenkins-джобы: что будет на Luxoft TechFest #5</h1>
                    <img src={photo} className={style.phot0} />
                    <p className={style.description}>Как перестать создавать Jenkins-джобы руками? Как избежать зависимости от конкретного облачного провайдера? Как Git может помочь не только в разработке, но и в развертывании приложений? Обо всем этом пойдет речь на <span className={style.font}>Luxoft TechFest #5:</span> бесплатном онлайн-мероприятии с тремя докладами по DevOps. Оно пройдет 9 сентября с 18:00 по 20:40. <br></br> <br></br>

                    Под катом — более подробная информация о докладах, а заодно еще и видеозаписи докладов предыдущего Luxoft TechFest (по теме Java и DevOps).</p>
                </div>
            </>
        )
    }
}

export default Post;