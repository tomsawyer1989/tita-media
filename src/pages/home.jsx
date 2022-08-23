import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/posts";
import DefaultLayout from "../components/default";
import Post from "../components/post";

function Home(props) {
    const [ filter, setFilter ] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            await props.getPosts();
        }

        fetchPosts();
    }, []);
    
    return(
        <DefaultLayout>
            <div style={ styles.container }>
                <input style={ styles.input } type="text" placeholder="Search" onChange={(e) => setFilter(e.target.value)}/>
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
    getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);