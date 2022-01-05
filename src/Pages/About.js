import React, { Component } from 'react'
import { Container, Nav, Row, Tab, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-5'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Name</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">History</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Awesome facts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey="first">
                                    <img className='d-block w-100' src='https://static0.srcdn.com/wordpress/wp-content/uploads/2017/08/Studio-Ghibli-Reopens-For-Hayao-Miyazaki-Movie.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5'></img>
                                    <p class="text-center mt-4">The name "Ghibli" was chosen by Miyazaki from the Italian noun ghibli (also used in English), based on the Libyan Arabic name for hot desert wind (قبلي, 'ghiblī'), the idea being the studio would "blow a new wind through the anime industry". It also refers to an Italian aircraft, the Caproni Ca.309. Although the Italian word would be more accurately transliterated as 'Giburi' (ギブリ), with a hard g sound, the studio is romanised in Japanese as Jiburi.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className='d-block w-100' src='https://tierragamer.com/wp-content/uploads/2020/01/Studio-Ghibli_2020.jpg'></img>
                                    <p class="text-center mt-4">Founded on June 15, 1985, the studio was headed by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki. Prior to the formation of the studio, Miyazaki and Takahata had already had long careers in Japanese film and television animation and had worked together on The Great Adventure of Horus, Prince of the Sun in 1968 and the Panda! Go, Panda! films in 1972 and 1973, and in 1978, Suzuki became an editor at Tokuma Shoten's Animage manga magazine, where the first film he chose was Horus. A year after his phone call with Takahata and his first encounter with Miyazaki, both about Horus, he made a phone call about the first film Miyazaki ever directed: The Castle of Cagliostro.</p>
                                    <p class="text-center">The studio was founded after the success of the 1984 film Nausicaä of the Valley of the Wind, written and directed by Miyazaki for Topcraft and distributed by Toei Company. The origins of the film lie in the first two volumes of a serialized manga written by Miyazaki for publication in Animage as a way of generating interest in an anime version. Suzuki was part of the production team on the film and founded Studio Ghibli with Miyazaki, who also invited Takahata to join the new studio.</p>
                                    <p class="text-center">The studio has mainly produced films by Miyazaki, with the second most prolific director being Takahata (most notably with Grave of the Fireflies). Other directors who have worked with Studio Ghibli include Yoshifumi Kondō, Hiroyuki Morita, Gorō Miyazaki, and Hiromasa Yonebayashi. Composer Joe Hisaishi has provided the soundtracks for most of Miyazaki's Studio Ghibli films. In their book Anime Classics Zettai!, Brian Camp and Julie Davis made note of Michiyo Yasuda as "a mainstay of Studio Ghibli's extraordinary design and production team". At one time the studio was based in Kichijōji, Musashino, Tokyo.</p>
                                    <p class="text-center">In August 1996, The Walt Disney Company and Tokuma Shoten formed a partnership wherein Walt Disney Studios would be the sole international distributor for Tokuma Shoten's Studio Ghibli animated films. Under this agreement, Disney also agreed to finance 10% of the studio's production costs. Since then, all three aforementioned films by Miyazaki at Studio Ghibli that were previously dubbed by Streamline Pictures have been re-dubbed by Disney. On June 1, 1997, Tokuma Shoten Publishing consolidated its media operations by merging Studio Ghibli, Tokuma Shoten Intermedia software and Tokuma International under one location.</p>
                                    <p class="text-center">Over the years, there has been a close relationship between Studio Ghibli and the magazine Animage, which regularly runs exclusive articles on the studio and its members in a section titled "Ghibli Notes." Artwork from Ghibli's films and other works are frequently featured on the cover of the magazine. Saeko Himuro's novel Umi ga Kikoeru was serialised in the magazine and subsequently adapted into Ocean Waves, Studio Ghibli's first animated feature-length film created for television. It was directed by Tomomi Mochizuki.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div class="text-center">
                                        <img className='d-block w-100' src='https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/My-Neighbor-Totoro-Studio-Ghibli.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5'></img>
                                        <h3 class="mt-4">The Story Behind The Name</h3>
                                        <p>The term Ghibli is an Italian word for a summer wind coming from the Sahara, affecting several countries in North Africa and Southern European countries. There was also a World War II aircraft from the same country which garnered the same nickname. Its name indicated the studio's ambitions to be a force within the animation industry. Judging by their catalog of respected works, it is safe to say they accomplished their goal.</p>
                                        
                                        <h3 class="mt-4">No Cuts Policy</h3>
                                        <p>When bringing their films to foreign markets, the studio has a strict policy against cuts and re-edits. This includes the translations needing to be as close to the original words and ideas as possible. This came to a head when Miramax distributed Princess Mononoke and the now-disgraced Harvey Weinstein insisted on making cuts to the movie. In response, he was sent a katana with the message "no cuts." Talk about getting a point across.</p>
                                        
                                        <h3 class="mt-4">Why Miyazaki Is Coming Out Of Retirement</h3>
                                        <p>The Wind Rises was announced as Miyazaki's final feature film. It seems like you cannot keep a good artist down, however, and the almost eighty-year-old director is currently working on another film titled How do You Live? which is intended as a gift to his grandson. The movie has been in the works since 2016, though less than a quarter of it is said to be completed at this point. His increased age has slowed his pace of work down significantly, where he gets about one minute of animation done a month versus the ten minutes he used to accomplish.</p>
                                        
                                        <h3 class="mt-4">A Worm Is Named After Totoro</h3>
                                        <p>The titular character from My Neighbor Totoro is the studio's mascot as well as an enduring pop culture figure. He's so ubiquitous, he got a newly discovered species named after him. Eoperipatus Totoro, uncovered in 2013, is a velvet worm hailing from Vietnam. It took its namesake from the popular movie at the behest of the scientists who discovered the creature. Some might say the greatest joy about finding something previously unknown to mankind is the contribution one just made to science and knowledge, but we are pretty sure it is the ability to give it anytime you desire.</p>
                                        
                                        <h3 class="mt-4">Nausicaa Of The Valley Of The Wind</h3>
                                        <p>Despite this film often getting lumped in with Ghibli's works, it wasn't actually produced by the studio. In fact, it came out in 1984, a year before the production company even opened its doors. Topcraft was the animation studio responsible for it, though it was still directed by Hayao Miyazaki. It is easy to see why one often thinks of it as a Studio Ghibli work. Many of the themes present in it would be further explored by the director in later films, making it feel like a part of the family and essential to understanding the whole catalog.</p>
                                        
                                        <h3 class="mt-4">Why Hayao Miyazaki Boycotted The Oscars</h3>
                                        <p>When Spirited Away was nominated for the Academy Award for best animated film, Miyazaki refused to attend the ceremonies because of the country's involvement in the Iraq War. It wasn't just a one-time thing, either. The legendary filmmaker didn't set foot in the United States until 2009 when he went to the San Diego Comic-Con at the behest of his friend John Lasseter. The boycott isn't too surprising when analyzing the pacifistic ideals from his films.</p>
                                        
                                        <h3 class="mt-4">How They Came To Be</h3>
                                        <p>The studio rose from the ashes of Topcraft, which produced the aforementioned Nausicaa of the Valley of the Wind. Despite the movie's success, the company went bankrupt, prompting directors Hayao Miyazaki, Toshio Suzuki, and Isao Takahata to buy it and change its name to Studio Ghibli. Everything afterward is already history, as the studio's films elevated the medium to new heights with projects some consider several of the greatest films ever made, regardless of the medium.</p>
                                        
                                        <h3 class="mt-4">All The People They've Influenced</h3>
                                        <p>Their impact extends far beyond other animators. Shigeru Miyamoto, creator of Super Mario, The Legend of Zelda, and many other legendary Nintendo properties, has cited the studio's works as an influence. The aesthetic and story of Nausicaa of the Valley of the Wind greatly inspired Hironobu Sakaguchi when he first made Final Fantasy. Directors whose main focus is live-action filmmaking have also paid tribute to Miyazaki and the studio, acknowledging the impact it has had on their projects.</p>
                                        
                                        <h3 class="mt-4">The Founders Survived Bombing Raids</h3>
                                        <p>Hayao Miyazaki was born in 1941, while Isao Takahata is a few years older, having been born in 1935. They were both alive to see World War II as children and both of them lived through bombing raids, which were events that had a massive effect on them and their work. This can be more directly seen in Takahata's Grave of the Fireflies, which is about a brother and sister surviving in Japan after losing their mother and home to a bombing raid. It is an incredibly moving film that brings one to tears literally within its first three minutes.</p>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
