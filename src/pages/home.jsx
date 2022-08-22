import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/posts";
import DefaultLayout from "../components/default";
import Post from "../components/post";

function Home(props) {

    useEffect(() => {
        const fetchPosts = async () => {
            await props.getPosts();
        }

        fetchPosts();
    }, []);
    
    return(
        <DefaultLayout>
            <div style={ styles.container }>
                {props.posts.posts && props.posts.posts.data.map(item => (
                    <Post key={ item.id } item={ item } />
                ))}
            </div>
        </DefaultLayout>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);