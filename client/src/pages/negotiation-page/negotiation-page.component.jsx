import React from 'react';
import ReactDOM from "react-dom";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MDBContainer } from 'mdbreact'
import ada_photo from '../../assets/ada_headshot_square.jpg';
import ScrollSnap from "scroll-snap";
import { Stickyroll } from '@stickyroll/stickyroll';
import NavBar from '../../components/nav-bar/nav-bar.component';



import './negotiation-page.component.css';
import { red } from 'ansi-colors';


const snapConfig = {
    scrollSnapDestination: "0% 90%",
    scrollTimeout: 10,
    scrollTime: 300
};

const headlines = [
    "NEVER give the first number – counter, deflect, delay or be non-specific.",
    "NEVER accept the first offer. ALWAYS ask for time to consider the offer.",
    "Do your research so you know what you must have (minimum), want to get (target), nice to get (aspirational goal).",
    "Don’t make it personal. Sell yourself and what you can do – not what you need. Always base your request on your abilities, their needs or the market rates for the job.",
    "Keep it positive – always express gratitude and enthusiasm for the offer.",
    "Practice your pitch and how you will negotiate obstacles or questions before you respond. Have others read emails or listen to your pitch.",
    "Make concessions an opportunity for an alternative gain.",
    "NEVER suggest you have a higher offer unless you do and are willing to walk away from this offer.",
    "Negotiate for and consider the ENTIRE offer package – salary + benefits + professional opportunities (training, projects, travel, network, mentors, etc.)",
    "Get everything in writing!"
]

const content = [
    [],
    [],
    ["Know the market rate for the type of position in that industry in that geographic region.",
        "In the majority of states, salary information for public employees is publicly accessible.",
        "Ask friends, family, colleagues in the same industry for advice.",
        "Use salary sites:  salary.com, glassdoor.com, payscale.com, indeed.com, salarylist.com, pareuptech.com, etc."
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

const quotes = [
    [
        "What do you think would be typical in this company for someone with my qualifications?",
        "I’m sure we can agree on something if we’re sure I’m a match for your needs.",
        "I would consider any fair market offer."
    ],
    ["I’m thrilled to hear from you and am grateful for the offer to be a part of your amazing team. I would like a little time as the offer isn’t quite in the range that I expected. Would it be okay if we set up a time to talk again soon when I’ve had a little time to consider the offer?"],
    [],
    [],
    ["I would love to be a part of your team. If you can get to X, then I’m on board.",
        "This opportunity is incredible. I’m excited to be a part of your company, but I was expecting a more competitive base salary that would match the value that I know I can bring to your team."],
    [],
    ["If the salary increase isn’t possible, would you be willing to offer [a one-time signing bonus, moving stipend, more flexibility with my schedule, etc.]?"],
    [],
    [],
    []

]


class NegotiationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    // container = React.createRef();

    // bindScrollSnap() {
    //     function callback() {
    //       // optional callback
    //     }

    //     const element = this.container.current;
    //     const snapObject = new ScrollSnap(element, snapConfig);
    //     snapObject.bind(callback);
    //   }

    //   componentDidMount() {
    //     this.bindScrollSnap();
    //   }

    render() {
        return (
            <div id="container" ref={this.container} style={{ paddingTop:75 }} >
                <h1 style={{ color: `#007788`, fontSize: 65, textAlign: "center" }}> 10 Tips for Negotiating Your Best Offer </h1>
                <h2 style={{ textAlign: "center" }}> Not sure what to do or say when negotiating?  Check out these helpful tips! </h2>
                <Stickyroll pages={headlines} factor={0.25}>
                    {({ page, pageIndex, pages, progress }) => {
                        return (
                            <div classname="scrollpage" style={{
                                // paddingTop: 150,
                                minHeight: '90%',
                                // display: 'flex',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                            }} >
                                {pageIndex == 0 ?
                                    <div>
                                        {/* <h1 style={{ color: `#007788`, fontSize: 65, textAlign: "center" }}> 10 Tips for Negotiating Your Best Offer </h1> */}
                                        {/* <h2 style={{ textAlign: "center" }}> Not sure what to do or say when negotiating?  Check out these helpful tips! </h2> */}
                                    </div>
                                    :
                                    <br />}



                                {pageIndex % 2 == 0 ?
                                    <Row style={{
                                        // backgroundColor: `#FF0000`
                                        paddingTop: 150,
                                    }}>
                                        <Col classname="numcol" md={3} style={{
                                            textAlign: "center"
                                        }}>
                                            <span class="bignum" >{pageIndex + 1}</span>
                                        </Col>
                                        <Col md={9} style={{
                                            paddingTop: 100
                                        }}>
                                            <h1>{headlines[pageIndex]}</h1>
                                            <br />
                                            <div style={{ color: '#808080' }}>
                                                <ul>
                                                    {content[pageIndex].map((value) => {
                                                        return <li style={{ listStyleType: 'space-counter' }}><h4>{value}</h4></li>
                                                    })}
                                                </ul>
                                                {quotes[pageIndex].map((value) => {
                                                    return <div><h4><i>"{value}"</i></h4> <br /></div>
                                                })}
                                            </div>
                                        </Col>
                                    </Row>
                                    :
                                    <Row style={{
                                        // backgroundColor: `#FF0000`,
                                        textAlign: "right",
                                        paddingTop:150
                                    }}>
                                        <Col md={9} style={{
                                            paddingTop: 100
                                        }}>
                                            <h1>{headlines[pageIndex]}</h1>
                                            <br />
                                            {content[pageIndex].map((value) => {
                                                return <div><h5 style={{ color: '#808080' }}>{value}</h5> <br /></div>
                                            })}
                                            {quotes[pageIndex].map((value) => {
                                                return <div><h4 style={{ color: '#808080' }}><i>"{value}"</i></h4> <br /></div>
                                            })}
                                        </Col>
                                        <Col classname="numcol" md={3} style={{
                                            textAlign: "center"
                                        }}>
                                            <span class="bignum" >{pageIndex + 1}</span>
                                        </Col>
                                    </Row>
                                }
                            </div>

                        );
                    }}
                </Stickyroll>


                <MDBContainer className="align-middle">
                    <Row>
                        <Col lg="2">
                            <Image src={ada_photo} width="150px" roundedCircle />
                        </Col>
                        <Col lg="10" style={{ paddingTop: 15 }}>
                            <br></br>
                            <i>Ada Gregory is the Associate Director of the Kenan Institute for Ethics at Duke.  Ada graduated from Duke (BA/MA) and went on to work at the state and local levels for 20 years influencing policy and practice related to victims’ rights, violence against women, and criminal justice reform. She returned to Duke in 2006 and worked in several capacities, including as director of the Duke Women’s Center and chief administrator for the university’s signature institutes and initiatives, before joining the Kenan Institute for Ethics in 2018.</i>
                        </Col>
                    </Row>
                </MDBContainer>
            </div>

        )
    }
}

export default NegotiationPage;