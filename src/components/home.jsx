import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getPosts } from "../actions/posts";

function Home(props) {

    useEffect(() => {
        const fetchPosts = async () => {
            await props.getPosts();
        }

        fetchPosts();
    }, []);

    console.log('before render ', props.posts.posts);
    return(
        <p>Home component</p>
    );
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);