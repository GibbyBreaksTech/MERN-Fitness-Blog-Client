import { useState, useEffect } from 'react';

// styled
import styled from 'styled-components';

// components
import BlogSnip from '../../components/BlogSnip';
import Loader from '../../loaders/Loader';

// router
import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/actions/posts';
import { useSelector } from 'react-redux';

// router
import { useParams } from 'react-router-dom';


export default function FilteredSearchPage ({ username }) {

    const { tag } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPosts());
    }, [dispatch])

    const articles = useSelector((state) => state.posts);
    const [ value, setValue ] = useState(10);

    function handleShowMore(){
      let i = 10;
      setValue(value + i)
    }

    return (
        <StyledFilterPage>
            <h1>{tag} Articles</h1>
            <div className="tag-container">
                <Link id="tag" to="/posts/@Motivation">@Motivation</Link>
                <Link id="tag" to="/posts/@Tips">@Tips</Link>
                <Link id="tag" to="/posts/@Advice">@Advice</Link>
            </div>
            <div className="blog">
                <div className="blogWrapper">
                    {
                       articles.length === 0 ? (
                            <Loader />
                        ) : (
                        articles.filter(articles => articles.tag === `${tag}`).slice(0,value).reverse().map((article, key) =>  {
                            return(
                                <BlogSnip
                                    author={article.author}
                                    username={username}
                                    id={article._id}
                                    title={article.postTitle}
                                    date={article.postDate}
                                    linkTitle={article.linkTitle}
                                    thumbnail={article.thumbnail}
                                    comments={article.comments.length}
                                    likes={article.likes.length}
                                    tag={article.tag}
                                    authorUsername={article.authorUsername}
                                    key={key}
                                />
                            )
                        })
                    )}
                </div>
            </div>
            {
                articles.filter(articles => articles.tag === `${tag}`).length >= 10 ? (
                    <button id="showmore" onClick={handleShowMore}>Show More</button>
                ) : (
                    <></>
                )
            }
        </StyledFilterPage >
        )
    }

const StyledFilterPage = styled.div`
    height: 100%;
    width: 70%;
    margin: 1em auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    #showmore {
        height: 35px;
        width: 200px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
    }
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        color: #f3f3f3;
        span {
            margin-left: 3px;
        }
    }
    .tag-container {
        display: flex;
        width: 60%;
        margin: 20px auto 50px auto;
        justify-content: center;
        #tag {
            color: #c9c9c9;
            font-size: 2em;
            margin: 0 20px;
        }
    }
    .blog {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 1em auto;
    .blogWrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100%;
        margin: 0 auto;
        border-radius: 12px;
        .loadingContainer{
            display: flex;
            width: 100%;
            height: 50vh;
            justify-content: center;
            align-items: center;
            .loader {
                border: 16px solid #f3f3f3;
                border-top: 16px solid #000000;
                border-radius: 50%;
                width: 250px;
                height: 250px;
                animation: spin 2s linear infinite;
                img {
                    width: 120px;
                }
            }
        }
    }
        @keyframes spin {
            0%  { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
}
`;