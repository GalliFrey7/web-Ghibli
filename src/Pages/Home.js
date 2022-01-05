import React, { Component } from 'react'
import { Container, Card, Button, CardGroup } from 'react-bootstrap'
import CardDeck from "react-bootstrap/Card"
import CarouselBox from '../Components/CarouselBox'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Information</h2>
                    <CardGroup>
                    <Card margin-right="20px">
                        <Card.Img
                            variant="top"
                            src='https://lostfilm.info/images/photo_actor/82/224720_811603.jpg'
                        />
                        <Card.Body className='text-center'>
                            <Card.Title>Hayao Miyazaki</Card.Title>
                            <Card.Text>
                                No artist has explored the contradictions of humanity as sympathetically and critically as the Japanese animation legend. Now, at 80, he’s coming out of retirement with another movie.
                            </Card.Text>
                            <Button href='https://www.nytimes.com/2021/11/23/t-magazine/hayao-miyazaki-studio-ghibli.html' 
                            variant='primary'>More</Button>
                        </Card.Body>
                    </Card>   
                    <Card>
                        <Card.Img
                            variant="top"
                            src='https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/218/image/base_ad2aff6a0a.jpg'
                        />
                        <Card.Body className='text-center'>
                            <Card.Title>Studio Ghibli</Card.Title>
                            <Card.Text>
                            Studio Ghibli is a Japanese animation studio. It was founded in 1985 by director and screenwriter Hayao Miyazaki together with his colleague and friend Isao Takahata with the support of Tokuma
                            </Card.Text>
                            <Button variant='primary' href='/about'>More</Button>
                            
                        </Card.Body>
                    </Card>                    
                    </CardGroup>
                    
                    
                </Container>
            </>
        )
    }
}
