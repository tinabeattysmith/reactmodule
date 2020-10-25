import React from 'react';
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col} from 'reactstrap';

 
// TODO:  Add more information using dl, dd, dt tags.  See 3.4 Challenge
// TODO: Figure out how to style
const FunctionComponentDemo =  () => {
    return (
        <Container className="main">
            <Row>
                <Col xs="12">
                    <h1>Functional Component</h1>
                        <dl>
                            <dd>Function components are the main tool in React.  Allows us to build small, but modular pieces of a page</dd>
                            <dt>Can use state</dt>
                            <dd>With the 'useState' hook, functional components can bother render a page and update the information on the page</dd>
                            <dt>No 'this' keyword</dt>
                            <dt>Can use effects</dt>
                            <dd>With the useEffect hook, functional components can perform side effect with any props or state changes</dd>
                            <dt>return()</dt>
                            <dd>Must return a single element, but this element may have nexted elements</dd>
                                <h3>Arrow Functions</h3>
                                    <dd>Also referred to as Fat Arrow Functions</dd>
                                    <dd>Compact alternative to a traditional functional expression.</dd>
                                    <dd>Can not be used in all situations</dd>
                                    
                                <h4>Arrow Function vs. Traditional Functional Expression</h4>
                                    <dt>Differences</dt>
                                    <dd>Do not use 'this' or 'super'</dd>
                                    <dd>Not used as methods</dd>
                                    <dd>No arguments or 'new' keywords</dd>
                                    <dt>Limitations</dt>
                                    <dd>Is not used as a constructor</dd>
                                    <dd>Do not use yield within body</dd>
                                    
                                <h4>Arrow Function Syntax</h4>
                                    <dt>One parameter</dt>
                                    <dd>For a simple expression, return is not needed</dd>
                                    <dd>For multiline statements, body brackets and return are required</dd>
                                    {/* TODO: codepen for syntax*/}

                                    <dt>Mulitiple parameters</dt>
                                    <dd>Parentheses required</dd>
                                    <dd>For a simple expression, return is not needed</dd>
                                    <dd>For multiline statements, body brackets and return are required</dd>
                                    {/* TODO: codepen for syntax*/}
                        </dl>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            {/* TODO:  Make my own. See 3.5 Challenge */}
            <Row>
                <Col md-6>
                    <HelloWorldFatArrow className="logo" />
                </Col>
                <Col md-6>
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionComponentDemo;

const HelloWorld = function () {
    return (
        <div>
            <Card>
                <img width='100%' height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                    <CardBody body inverse color="success">
                        <CardTitle>Traditional Function</CardTitle>
                        <CardSubtitle>A JS Library</CardSubtitle>
                        <CardText><pre>const HelloWorld = function()</pre>.</CardText>
                        <Button color="secondary">This will go somewhere</Button>
                    </CardBody>
            </Card>
        </div>
    )
};

const HelloWorldFatArrow = function () {
    return (
        <div>
            <Card>
                <img width='100%' height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
                    <CardBody body inverse color="warning">
                        <CardTitle>(Fat) Arrow Function</CardTitle>
                        <CardSubtitle>A JS Library</CardSubtitle>
                        <CardText><pre>const HelloWorld = function()</pre>.</CardText>
                        <Button color="secondary">This will go somewhere too</Button>
                    </CardBody>
            </Card>
        </div>
    )
};