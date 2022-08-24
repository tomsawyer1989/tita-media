import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts, getPostByTag } from "../actions/posts";
import DefaultLayout from "../components/default";
import Post from "../components/post";

function HomePage({ getPosts, getPostByTag, posts }) {

    useEffect(() => {
        const fetchPosts = async () => {
            await getPosts();
        }

        fetchPosts();
    }, []);

    const filterPostByTag = async (e) => {
        await getPostByTag(e.target.value);
    }

    return(
        <DefaultLayout>
            <div style={ styles.container }>
                <input style={ styles.input } type="text" placeholder="Search posts by tag" onChange={filterPostByTag}/>
                {posts.postByTag ? (posts.postByTag.length !== 0 ? posts.postByTag.map(item => (
                    <Post key={ item.id } item={ item } />
                )) : <p style={{ color: 'white' }}>No search results</p>)
                :
                posts.posts && posts.posts.data.map(item => (
                    <Post key={ item.id } item={ item } />
                ))}
            </div>
        </DefaultLayout>
    );
}

const styles = {
    container: {
        textAlign: 'center'
    },
    input: {
        padding: '7px',
        marginBottom: '20px',
        borderRadius: '15px',
        color: 'white',
        backgroundColor: '#444950'
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()),
    getPostByTag: (filter) => dispatch(getPostByTag(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);