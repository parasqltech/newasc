import React, { Component } from 'react';
import {Container,Tab,Nav} from 'react-bootstrap'
import ResourceAll from '../Resources/Resource-all'
import ResourceVideos from '../Resources/Resource-videos'
import ResourceGuides from '../Resources/Resource-guides'
import ResourceFlyers from '../Resources/Resource-flyers'

class ResourceSection2 extends Component {
   
    
    render() {      
        return (
            <>
            <section className="Resource-section-2">
                <Container>
                    <div className="Resource-Section-2-data">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="All">
                        <div className="p-0 border-0 justify-content-center d-flex mb-30">
                            <Nav variant="pills" className="">
                                <Nav.Item>
                                    <Nav.Link eventKey="All" className="uppercase font-bold">All</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Videos" className="uppercase font-bold">Videos</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Guides" className="uppercase font-bold">Guides</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="flyer" className="uppercase font-bold">Camp flyer</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content className="text-left">
                            <Tab.Pane eventKey="All">
                                <ResourceAll/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Videos">
                                <ResourceVideos/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Guides">
                                <ResourceGuides/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="flyer">
                                <ResourceFlyers/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                
                    </div>
                </Container>
            </section>
            </>
        );
    }
}

export default ResourceSection2;