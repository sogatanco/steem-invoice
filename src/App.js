import React from 'react';
import {Container, Form, Button, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import QRCode from "react-qr-code";

class App extends React.Component {

  constructor(){
    super();
    this.state={
      link:"",
      user:"",
      amount:"",
      kind:"steem",
      memo:""
    }
  }

  close=()=>{
    this.setState({link:''})
  }

  onSubmit = () =>{
    // console.log(this.state)
    this.setState({link:"https://steemlogin.com/sign/transfer?to="+this.state.user+"&amount="+this.state.amount+"%20"+this.state.kind+"&memo="+this.state.memo})
  }
  render(){
    if(this.state.link){
      return(
        <Container>
          <Row className="justify-content-md-center mt-3">
            <Col lg="6" className="text-center">
              <h3>Your Invoice</h3>
              <p>Please Send {this.state.amount} {this.state.kind} to @{this.state.user} with memo : <br/> <pre>{this.state.memo}</pre></p>
              <small>or you can scan here !!!</small><br/>
              <QRCode value={this.state.link} />

              <br/>
              <br/>

              <Button variant="primary" type="button" onClick={this.close}>Close</Button>
              
            </Col>
          </Row>
        </Container>
        
      )
    }else{
      return (
        <Container >
            <Form>
            <Row className="justify-content-md-center mt-3">
              <Col lg="6">
              <Form.Group >
                <Form.Label>Steemit Username</Form.Label>
                <Form.Control type="text" placeholder="Your Account" defaultValue={this.state.user} onChange={e => this.setState({ user:e.target.value })}/>
              </Form.Group>
              </Col>
            </Row>
    
            <Row className="justify-content-md-center mt-3">
              <Col lg="6">
              <Form.Group>
                <Form.Label>Amount</Form.Label>
    
                <InputGroup className="mb-2">
                <Form.Control id="inlineFormInputGroup" placeholder="Amount"  defaultValue={this.state.amount} onChange={e => this.setState({ amount:e.target.value })}/>
                  <InputGroup.Prepend>
                    <Form.Control as="select" defaultValue={this.state.kind} onChange={e => this.setState({ kind:e.target.value })}>
                      <option key="steem" value="steem">STEEM</option>
                      <option key="sbd" value="sbd">SBD</option>
                    </Form.Control>
                  </InputGroup.Prepend>
                 
                </InputGroup>
    
              </Form.Group>
              </Col>
            </Row>
    
            <Row className="justify-content-md-center mt-3">
              <Col lg="6">
              <Form.Group >
                <Form.Label>Memo</Form.Label>
                <Form.Control type="text" placeholder="Transfer Memo" defaultValue={this.state.memo} onChange={e => this.setState({ memo:e.target.value })}/>
              </Form.Group>
              </Col>
            </Row>
    
            <Row className="justify-content-md-center mt-3">
              <Col lg="6">
                <Button variant="primary" type="button" onClick={this.onSubmit}>
                  Generate
                </Button>
              </Col>
            </Row>
          </Form>
    
         
    
        </Container>
        )
    }
  }
}

export default App;
