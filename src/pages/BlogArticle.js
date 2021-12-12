import { useEffect } from 'react';

// styled
import styled from 'styled-components';
import { useParams } from 'react-router';

// redux
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/actions/posts';
import { useSelector } from 'react-redux';

// components
import CommentSection from "../components/CommentSection";

// router
import { Link } from 'react-router-dom';

//images
import Edit from '../images/editIconBlack.png';

export default function BlogArticle({role, author, username}) {

    const { id } = useParams();

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const articles = useSelector((state) => state.posts);

    return (
        <StyledArticle>
            {
                role === process.env.REACT_APP_ADMIN_SECRET || username === author ? (
                    <Link to={`/EditPostPage/${id}`}><img id="edit" src={Edit} alt="" /></Link>
                ) : (
                    <Link to={`/EditPostPage/${id}`}><img id="edit" src={Edit} alt="" /></Link>
                )
            }
           { 
                articles.filter(articles => articles._id === `${id}`).map((article, key) => {
                    return (
                        <div className="overlayContent" key={key}>
                            <div className="overlayWrapper">
                                <h4>{article.postTitle}</h4>
                                <h5>{article.postDate}</h5>
                                <img src={article.thumbnail} alt="" />
                                <p>{article.postIntro}</p>
                                    <div className="paraWrapper">
                                        <h6>{article.postParagraphTitle1}</h6>
                                        <img src={article.postImage1} alt='' />
                                        <p>{article.postParagraph1}</p>
                                        <a href={article.postLink1} target="_blank" rel="noreferrer">{article.postLink1}</a>
                                    </div>
                                <div className="paraWrapper">
                                    <h6>{article.postParagraphTitle2}</h6>
                                    <img src={article.postImage2} alt='' />
                                    <p>{article.postParagraph2}</p>
                                    <a href={article.postLink2} target="_blank" rel="noreferrer">{article.postLink2}</a>
                                </div>
                                <div className="paraWrapper">
                                    <h6>{article.postParagraphTitle3}</h6>
                                    <img src={article.postImage3} alt='' />
                                    <p>{article.postParagraph3}</p>
                                    <a href={article.postLink3} target="_blank" rel="noreferrer">{article.postLink3}</a>
                                </div>
                                <div className="paraWrapper">
                                    <h6>{article.postParagraphTitle4}</h6>
                                    <img src={article.postImage4} alt='' />
                                    <p>{article.postParagraph4}</p>
                                    <a href={article.postLink4} target="_blank" rel="noreferrer">{article.postLink4}</a>
                                </div>
                                <div className="paraWrapper">
                                    <h6>{article.conclusionHeader}</h6>
                                    <p>{article.conclusion}</p>
                                </div>
                            </div>
                            <CommentSection

                            />
                        </div>
                    )
                })
            }
        </StyledArticle>
    )
}

const StyledArticle = styled.div`
min-height: 20vh;
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 2em 0;
align-items: center;
width: 100%;
border-radius: 14px;
box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.219);
background: #ffffff;
position: relative;
a {
    width: 25px;
    position: absolute;
    top: 1%;
    right: 2%;
        #edit {
            width: 100%;
        }
    }
    .overlayContent {
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin:  2em auto;
    border-radius: 20px;
        @media (max-width: 750px){
            width: 90%;
        }
        img {
            width: 80%;
            border-radius: 10px;
        }
        .overlayWrapper{
            width: 90%;
            height: 100%;
            margin: auto;
            h4 {
            font-size: 3em;
                @media (max-width: 750px){
                    font-size: 2.5em;
                }
            }
            h5 {
                font-size: 2em;
                color: gray;
            }
            p {
                font-size: 2em;
                margin: 20px 0;
                letter-spacing: 0.5px;
                line-height: 1.7;
                a {
                    font-size: 1em;
                }
            }
            .paraWrapper{
                margin:5% 0 10% 0;
                h6 {
                    color: #3b5998;
                    font-size: 3em;
                    margin: 25px 0;
                        @media (max-width: 750px){
                            font-size: 2.5em;
                        }
                }
            }
        }
        
    }
`;