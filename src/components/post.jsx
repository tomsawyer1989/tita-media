import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPostUser } from "../actions/users";
import { getCommentsByPost } from "../actions/comments";
import Modal from "./modal";

function Post({ item, getPostUser, getCommentsByPost }) {

    const [ owner, setOwner ] = useState(null);
    const [ comments, setComments ] = useState(null);
    const [ isHoveringComments, setIsHoveringComments ] = useState(false);
    const [ isHoveringOwner, setIsHoveringOwner ] = useState(false);
    const [ showOwner, setShowOwner ] = useState(false);
    const [ showComments, setShowComments ] = useState(false);
    const [ title, setTitle ] = useState('Modal title');

    useEffect(() => {
        const fetchCommentsByPost = async () => {
            const response = await getCommentsByPost(item.id);
            setComments(response);
        }
    
        fetchCommentsByPost();
    }, []);

    const toggleModalOwner = async () => {
        const response = await getPostUser(item.owner.id);
        setOwner(response);
        setTitle(`${item.owner.firstName} ${item.owner.lastName}`);
        setShowOwner(true);
    }

    const toggleModalComments = () => {
        setTitle('comments');
        setShowComments(true);
    }

    return(
        <>
        <div style={ styles.container }>
            <div style={ styles.header }>
                <img
                    style={ styles.headerPicture }
                    src={ item.owner.picture }
                    alt="header picture"
                    onClick={() => toggleModalOwner()}
                />
                <strong
                    style={{ cursor: 'pointer', textDecoration: isHoveringOwner ? 'underline' : 'none' }}
                    onMouseEnter={() => setIsHoveringOwner(true)}
                    onMouseLeave={() => setIsHoveringOwner(false)}
                    onClick={() => toggleModalOwner()}
                >
                    {item.owner.firstName} {item.owner.lastName}
                </strong>
            </div>
            <div>
                <p>{ item.text }</p>
            </div>
            <div style={ styles.tagsContainer }>
                {item.tags.map((item, i)=> (
                    <div key={ i } style={ styles.tagsMessage }>
                        <small>{ item }</small>
                    </div>
                ))}
            </div>
            <img style={ styles.image } src={ item.image } alt="image"/>
            <div style={ styles.bottom }>
                <span>{ item.likes } likes</span>
                <span
                    style={{ cursor: 'pointer', textDecoration: isHoveringComments ? 'underline' : 'none' }}
                    onMouseEnter={() => setIsHoveringComments(true)}
                    onMouseLeave={() => setIsHoveringComments(false)}
                    onClick={() => toggleModalComments()}
                >
                    { comments && comments.total } comments
                </span>
            </div>
        </div>
        {owner && <Modal show={ showOwner } onClose={() => setShowOwner(false)} title={ title }>
            <div style={ styles.ownerContainer }>
                <div>
                    <img style={ styles.ownerPicture } src={ owner.picture } alt="owner picture"/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ul style={{ padding: '0px', margin: '0px' }}>
                            <li style={{ listStyleType: 'none' }}>{ owner.email }</li>
                            <li style={{ listStyleType: 'none' }}>{ owner.location.street }</li>
                            <li style={{ listStyleType: 'none' }}>{ owner.location.city } - { owner.location.state }</li>
                            <li style={{ listStyleType: 'none' }}>{ owner.location.country }</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul style={{ padding: '0px', margin: '0px' }}>
                        <li style={{ listStyleType: 'none' }}><strong>title: </strong>{ owner.title }</li>
                        <li style={{ listStyleType: 'none' }}><strong>gender: </strong>{ owner.gender }</li>
                        <li style={{ listStyleType: 'none' }}><strong>phone: </strong>{ owner.phone }</li>
                        <li style={{ listStyleType: 'none' }}><strong>date of birth: </strong>{ owner.dateOfBirth.split('T')[0] }</li>
                        <li style={{ listStyleType: 'none' }}><strong>register date: </strong>{ owner.registerDate.split('T')[0] }</li>
                        <li style={{ listStyleType: 'none' }}><strong>updated date: </strong>{ owner.updatedDate.split('T')[0] }</li>
                        <li style={{ listStyleType: 'none' }}><strong>time zone: </strong>{ owner.location.timezone }</li>
                    </ul>
                </div>
            </div>
        </Modal>}
        {comments && <Modal show={ showComments } onClose={() => setShowComments(false)} title={ title }>
            {comments.data.map(item => (
                <div key={ item.id } style={ styles.commentsContainer }>
                    <img style={ styles.commentsPicture } src={ item.owner.picture } alt="owner picture"/>
                    <div style={ styles.commentsMessage }>
                        <strong>{ item.owner.firstName } { item.owner.lastName }</strong>
                        <div>
                            { item.message }
                        </div>
                    </div>
                </div>
            ))}
        </Modal>}
        </>
    );
}

const styles = {
    container: {
        height: '470px',
        width: '500px',
        padding: '15px',
        marginBottom: '20px',
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
        cursor: 'pointer',
        width: '55px',
        height: '55px',
        marginRight: '15px',
        borderRadius: '50px'
    },
    tagsContainer: {
        display: 'flex',
        marginBottom: '15px'
    },
    tagsMessage: {
        padding: '4px',
        marginRight: '7px',
        borderRadius: '10px',
        backgroundColor: '#444950'
    },
    image: {
        width: '100%',
        height: '300px'
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    ownerContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '20px'
    },
    ownerPicture: {
        width: '230px',
        height: '230px',
        borderRadius: '120px'
    },
    commentsContainer: {
        display: 'flex',
        paddingTop: '20px'
    },
    commentsPicture: {
        width: '40px',
        height: '40px',
        marginRight: '10px',
        borderRadius: '50px'
    },
    commentsMessage: {
        padding: '7px',
        borderRadius: '15px',
        backgroundColor: '#444950'
    }
}

const mapDispatchToProps = (dispatch) => ({
    getPostUser: (id) => dispatch(getPostUser(id)),
    getCommentsByPost: (id) => dispatch(getCommentsByPost(id))
});

export default connect(null, mapDispatchToProps)(Post);