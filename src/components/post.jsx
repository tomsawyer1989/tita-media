import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCommentsByPost } from "../actions/comments";

function Post({ item, getCommentsByPost }) {

    const [ comments, setComments ] = useState(null);

    useEffect(() => {
        const fetchCommentsByPost = async () => {
            const response = await getCommentsByPost(item.id);
            setComments(response);
        }
    
        fetchCommentsByPost();
    }, []);

    return(
        <div style={ styles.container }>
            <div style={ styles.header }>
                <img style={ styles.headerPicture } src={ item.owner.picture } alt="header picture"/>
                <strong>{`${item.owner.firstName} ${item.owner.lastName}`}</strong>
            </div>
            <div>
                <p>{ item.text }</p>
            </div>
            <img style={ styles.image } src={ item.image } alt="image"/>
            <div style={ styles.bottom }>
                <span>{ item.likes } likes</span>
                <span>{ comments && comments.total } comments</span>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: '375px',
        width: '450px',
        padding: '15px',
        marginTop: '15px',
        color: 'white',
        borderRadius: '15px',
        backgroundColor: '#1c1e21'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '50px'
    },
    headerPicture: {
        width: '50px',
        height: '50px',
        marginRight: '15px',
        borderRadius: '50px'
    },
    image: {
        width: '100%',
        height: '250px'
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}

// const mapStateToProps = state => ({
//     comments: state.comments
// });

const mapDispatchToProps = (dispatch) => ({
    getCommentsByPost: (id) => dispatch(getCommentsByPost(id))
});

export default connect(null, mapDispatchToProps)(Post);