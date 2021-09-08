import React from 'react';
import Header from '../../components/header/Header';
import PostCard from '../../components/postCard/PostCard';
import Footer from '../../components/footer/Footer';

class PostList extends React.Component {
    render() {
        return (
            <>
                <Header />
                <PostCard
                    createName="Тестов Тест"
                    createDate="12.02.2021 15:45"
                    title="Найдена новая сверхгорячая экзопланета размером больше Юпитера" />
                <PostCard
                    createName="Тестова Тест"
                    createDate="17.02.2021 20:30"
                    title="Microsoft купила онлайн-редактор видео Clipchamp" />
                <Footer />
            </>
        )
    }
}

export default PostList;