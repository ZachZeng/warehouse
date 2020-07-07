import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../utils/utilityFunctions'

const PostCard = ({title, author, path, date, body, fluid, tags}) => {
    return(
        <Card>
            <Link to={path}>
                <Img className="card-image-top" fluid={fluid}/>
                <CardBody>
                    <CardTitle>
                        {title}
                    </CardTitle>
                    <CardSubtitle>
                        <span className="text-info">{date}</span> {' '} by {' '}
                        <span className="text-info">{author}</span>
                    </CardSubtitle>
                    <CardText>{body}</CardText>
                    <ul className="post-tags">
                        {tags.map(tag => (
                            <li>
                                <Link to={`/tag/${slugify(tag)}`} >
                                    <Badge color="primary" className="text-uppercase">{tag}</Badge>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Link>
        </Card>
    )
}

export default PostCard;

