import React from 'react';

class AboutModal extends React.Component{

    render() {
        return (
            <div id="aboutModal" className="modal" role="dialog">
                <div className="modal-content" style={{background: "#fff"}}>
                    <div className="modal-header">
                        <center />
                        <h3 id="abc" className="modal-title closeBtn"><b>About Dota Logger</b></h3>
                        
                        <div>
                            <button id="modalClose" className="close" onClick={this.props.toggleAboutOpen}>&times;</button>
                        </div>
                    </div>
                    
                    <div className="modal-body">
                        <center>
                        <img
                        src="dota1.jpg"
                        height="200" width="200" />
                        <h3>Authentic. Original. Dota Character Logger</h3>
                        <p style={{fontStyle: "italic"}}>
                        &copy; Puthypor Sengkeo. Cambodia. Borned and Raised.
                        </p>
                        </center>
                    </div>

                    <div className="modal-footer">
                            <button id="aaa" className="close" onClick={this.props.toggleAboutOpen}>
                            OK</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutModal;