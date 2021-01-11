import React, { Component } from 'react';
import { Container,Image,Row,Col,Modal} from 'react-bootstrap';
import playbutton from '../../images/play-button.png'
import Iframe from 'react-iframe'

class ModalSection extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            isOpen:false,
        }
        this.modalOpen = this.modalOpen.bind(this);
        this.modalClose = this.modalClose.bind(this);
    }
    modalOpen(){
        this.setState({
            isOpen:true,
        })
    }
    modalClose(){
        this.setState({
            isOpen:false,
        })
    }
    
    render() {
        return (
            <>
            <section className="Modal-section">
                <Container>
                    <div className="title">
                        <Row className="justify-content-center">
                            <Col xl={9} lg={11}>
                                <h2>{this.props.data.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: this.props.data.desc}} />
                            </Col>
                        </Row>
                    </div>
                </Container>

                <div className="Modal-section-data">
                    <Container>
                            <Image src={playbutton} className="img-fluid" alt="" width="60" height="60" 
                             onClick={this.modalOpen} />
                    </Container>
                </div>
            </section>
            {/* <ReactModal isOpen={this.state.isModalOpen} onRequestClose={this.handleModalClose} 
            className="modal d-block fade testimonial-view show">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content ">
                            <div className="modal-title">
                                <div className="title mb-0 d-flex justify-content-center align-items-top">
                                    <h2 className="text-center">Modal Title</h2>
                                        <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">x</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal-body p-0">
                                <div className="title">
                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </ReactModal> */}
            
            <Modal show={this.state.isOpen} onHide={this.modalClose} size="lg" className="video-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
                <Modal.Body className="p-0">
                    <button type="button" onClick={this.modalClose} class="close">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
                    <Iframe url={this.props.data.youtubeUrl} width="100%" height="400px" id="video_id" className=""  
                    display="initial" position="relative"/>
                </Modal.Body>
            </Modal>

            </>
        );
    }
}
      
export default ModalSection;
