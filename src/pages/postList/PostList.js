import React from 'react';
import Header from '../../components/header/Header';
import PostCard from '../../components/postCard/PostCard';
import Footer from '../../components/footer/Footer';

class PostList extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <PostCard/>
                <PostCard/>
                <Footer/>
            </>
        )
    }
}

export default PostList;