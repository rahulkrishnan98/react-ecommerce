import React from 'react';
import Options from '../components/Options'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import cardImage from '../assets/images/ripoff2.png'
import Guide from '../components/Guider'

class CardsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            button_name: "Matt_finish",
            headers: ["Quantity", "Single Sided", "Double Sided"],
            quantity: [100, 250, 500, 1000, 2000, 5000],
            single: ["15", "19", "23", "32", "54", "100"],
            double: ["16", "20", "27", "33", "56", "108"],
            button: 'Matt_finish',
            pricing: {
                Matt_finish: {
                    headers: ["Quantity", "Single Sided", "Double Sided"],
                    quantity: [100, 250, 500, 1000, 2000, 5000],
                    single: ["15", "19", "23", "32", "54", "100"],
                    double: ["16", "20", "27", "33", "56", "108"]
                },
                Gloss_finish: {
                    headers: ["Quantity", "Single Sided", "Double Sided"],
                    quantity: [100, 250, 500, 1000, 2000, 5000],
                    single: ["18", "20", "25", "35", "58", "101"],
                    double: ["19", "22", "29", "39", "59", "109"]
                },
                Another_finish: {
                    headers: ["Quantity", "Single Sided", "Double Sided"],
                    quantity: [100, 250, 500, 1000, 2000, 5000],
                    single: ["19", "23", "25", "31", "57", "111"],
                    double: ["22", "24", "29", "34", "58", "120"]
                }
            }
        }
    }
    handleClick(i) {
        const finish = i;
        if (finish == "Matt_finish") {
            this.setState({
                button_name: "Matt_finish",
                headers: this.state.pricing.Matt_finish.headers,
                quantity: this.state.pricing.Matt_finish.quantity,
                single: this.state.pricing.Matt_finish.single,
                double: this.state.pricing.Matt_finish.double
            })
        }
        if (finish == "Gloss_finish") {
            this.setState({
                button_name: "Gloss_finish",
                headers: this.state.pricing.Gloss_finish.headers,
                quantity: this.state.pricing.Gloss_finish.quantity,
                single: this.state.pricing.Gloss_finish.single,
                double: this.state.pricing.Gloss_finish.double
            })
        }
        if (finish == "Another_finish") {
            this.setState({
                button_name: "Another_finish",
                headers: this.state.pricing.Another_finish.headers,
                quantity: this.state.pricing.Another_finish.quantity,
                single: this.state.pricing.Another_finish.single,
                double: this.state.pricing.Another_finish.double
            })
        }
    }

    render() {
        return (
            <Container fluid={true} >
                <Row className="flex" >
                    <div class="col-md-2"></div>
                    <div class="col-md-5">
                        <span>
                            &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                        &nbsp;<br />
                            <h3 style={{ display: 'inline' }} className="display-7 font-weight-light">Business Cards </h3>
                        from <strong itemprop="price">15.00 rs</strong>
                        </span>

                    &nbsp;<br />
                    &nbsp;
                    &nbsp;
                    <p style={{ color: "grey", lineHeight: "15px" }}><strong>These premium business cards are our pride</strong></p>
                        <p style={{ lineHeight: "7px" }}><span class="highlightme">FREE delivery on all orders. Prices include VAT - <em>where applicable</em>.</span></p>
                        <SocialMediaIconsReact icon="twitter" url="" /> <SocialMediaIconsReact icon="facebook" url="" /> <SocialMediaIconsReact icon="instagram" url="" /> <SocialMediaIconsReact icon="pinterest" url="" />
                        <p></p>
                        <div>
                            <DropdownButton id="dropdown-item-button" title={this.state.button_name}>
                                <Dropdown.Item as="button" onClick={() => this.handleClick("Gloss_finish")}>Gloss Laminated</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => this.handleClick("Matt_finish")}>Matt Laminated</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => this.handleClick("Another_finish")}>Another Laminated</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <p>&nbsp;<br /></p>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-4">
                        <Options headers={this.state.headers} quantity={this.state.quantity} single={this.state.single} double={this.state.double} />
                    </div>
                    <div class="col-md-4">
                        <img style={{ width: "100%", align: "right" }} src={cardImage} alt="cardImage" />
                    </div>
                </Row>
                <Row>
                    <Guide />
                </Row>
            </Container>
        );
    }
}
export default CardsPage