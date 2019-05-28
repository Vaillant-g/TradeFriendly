import React, { Component } from 'react';
import { Results } from '../src/Results'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class TradeFriendlySearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "1",
            sock: props.test,
            res: 0
        };
        this.SendSerchedItem.bind(this);
        this.GetResult.bind(this);
        this.GetLocalData.bind(this);
        this.tmp = "";

    }


    SendSerchedItem(event, data, ToFind) {
        event.preventDefault();
        console.log("to find : " + ToFind.current.value);

        if (localStorage.getItem("login"))
            var toFind2 = [ToFind.current.value, localStorage.getItem("login")];
        console.log("toFind2 : " + toFind2[1]);
        this.props.test.emit('WeaponSearched', toFind2);
        console.log(this.state.data);
        /*this.props.test.on('FriendsWithWeapon', function(data) {
            console.log(data);
        });*/
    }

    GetResult(test) {
        console.log("Before timeout");
        setTimeout((() => {
            test.on('FriendsWithWeapon', (data) => {
                console.log("data received : " + data);
                console.log("res : " + this.state.res);


                this.setState({
                    data: data,
                    res: 1
                }, localStorage.setItem("Data", JSON.stringify(data)));
            });
        }), 1000);
        console.log("After timeout");
        console.log(test);
    }

    timer() {
        if (this.state.res === 1) {
            this.setState({
                res: 0
            }, () => { window.location.reload(); })
        }
    }

    GetLocalData() {
        if (localStorage.hasOwnProperty("Data")) {
            let value = localStorage.getItem("Data");
            console.log("Data from storage " + value);
            console.log("Login from storage " + localStorage.getItem("login"));

            try {
                value = JSON.parse(value);
                this.setState({ data: value });
            } catch (e) {
                this.setState({ data: value });
            }
        }
    }

    componentDidMount() {
        this.GetLocalData();
        console.log("data : " + this.state.data);
        if (this.state.res === 0)
            this.GetResult(this.props.test);
        setInterval(this.timer.bind(this), 3000);
    }

    render() {
        var ToFind = React.createRef();
        return (
            <Container>
                <form onSubmit={e => (this.SendSerchedItem(e, this.props, ToFind))}>
                    <Row noGutters>
                        <Col md={{ span: 9 }}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="" placeholder="ex: Karambit | Fade (Factory New)" ref={ToFind} />
                            </Form.Group>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Button variant="primary" type="submit" >
                                Search in your friends' inventories
                    </Button>
                        </Col>
                    </Row>
                </form>
                <Results props={this.state.data} />
            </Container>

        );
    }
}

export default TradeFriendlySearchBar;

/*
function SendSerchedItem(data, ToFind) {
    e.preventDefault();
    console.log(data.test);
    console.log("to find : " + ToFind.current.value);
    console.log("testFN");
    data.test.emit('WeaponSearched', ToFind.current.value);
    data.test.on('FriendsWithWeapon', function(data) {
        console.log("OAKAKAKAK");
    });
    return false;
}


export function TradeFriendlySearchBar(data) {
    var ToFind = React.createRef();
    return (

        <Container>
        <form onSubmit={e => {e.preventDefault(); /*SendSerchedItem(data, ToFind);}}>
            <Row noGutters>
                <Col md={{ span: 9 }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="" placeholder="ex: Karambit | Fade (Factory New)" ref={ToFind}/>
                    </Form.Group>
                </Col>
                <Col md={{ span: 3 }}>
                    <Button variant="primary"  type="submit" >
                        Submit
                    </Button>
                </Col>
            </Row>
                </form>
        </Container>

    );
}*/

