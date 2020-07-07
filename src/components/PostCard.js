import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'

const PostCard = ({title, author, path, date, body, fluid}) => {
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
                </CardBody>
            </Link>
        </Card>
    )
}

export default PostCard;

