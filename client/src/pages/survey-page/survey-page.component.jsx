import React from 'react';
import { DropdownList } from 'react-widgets'
import ED_LEVELS from '../../fields/ed_levels';
import JOB_TITLES from '../../fields/job_titles';
import NEGOTIATED from '../../fields/negotiated';
import COMPANY_SIZES from '../../fields/company_sizes';
import 'react-widgets/dist/css/react-widgets.css'
import { Jumbotron, Row, Col, Container, Form, Button } from "react-bootstrap"
import './survey-page.component.css';

import axios from 'axios';

class SurveyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalIsSet: false,
            ed_levels: ED_LEVELS,
            job_titles: JOB_TITLES,
            negotiated: NEGOTIATED,
            company_sizes: COMPANY_SIZES,
            radius: 50,
            zipcode_filter: 80230,
            valid_zips: [],
            data: []
        }
    }


    // our put method that uses our backend api
    // to create new query into our data base
    putDataToDB = ({ location, salary, internships, equity, signing_bonus }) => {
        console.log(location);
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            location: location,
            salary: salary,
            internships: internships,
            equity: equity,
            signing_bonus: signing_bonus
        });
    };

    render() {
        return (
            <div className='App' style={{ paddingTop: 75 }} >
                <h1>Survey Page - Enter your offer info here!</h1>
                <Form className='filter-list'>
                    <Form.Row>
                        <Col>
                            <Form.Label>Education Level</Form.Label>
                            <DropdownList className="filter" data={ED_LEVELS} textField='name'
                                placeholder='All Education Levels'
                                valueField='name'
                                onChange={value => this.setState((value.length > 0) ?
                                    { ed_levels: value } : { ed_levels: ED_LEVELS }, () => console.log(this.state))} />
                        </Col>
                        <Col>
                            <Form.Label>Job Title</Form.Label>
                            <DropdownList className="filter" data={JOB_TITLES} textField='name'
                                placeholder='All Job Titles'
                                valueField='name'
                                onChange={value => this.setState((value.length > 0) ?
                                    { job_titles: value } : { job_titles: JOB_TITLES }, () => console.log(this.state))} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Negotiation Status</Form.Label>
                            <DropdownList className="filter" data={NEGOTIATED} textField='name'
                                placeholder='All Negotiation Statuses'
                                valueField='value'
                                onChange={value => this.setState((value.length > 0) ?
                                    { negotiated: value } : { negotiated: NEGOTIATED }, () => console.log(this.state))} />
                        </Col>
                        <Col>
                            <Form.Label>Company Size</Form.Label>
                            <DropdownList className="filter" data={COMPANY_SIZES} textField='name'
                                placeholder='All Company Sizes'
                                valueField='name'
                                onChange={value => this.setState((value.length > 0) ?
                                    { company_sizes: value } : { company_sizes: COMPANY_SIZES }, () => console.log(this.state))} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ marginTop: '5px' }}>
                        <Col>
                            <Form.Label className="mt-auto">Show companies within</Form.Label>
                            <input
                                className="mt-auto"
                                type="text"
                                style={{ width: '40px', marginLeft: '10px', marginRight: '10px', borderRadius: '5px', borderWidth: '1px', height: '45px', textAlign: 'center' }}
                                onChange={(e) => this.setState({ radius: e.target.value })}
                                placeholder="#"
                            />

                            <Form.Label>miles of the zipcode</Form.Label>
                            <input
                                className="mt-auto"
                                type="text"
                                style={{ width: '100px', marginLeft: '10px', marginRight: '10px', borderRadius: '5px', borderWidth: '1px', height: '45px', textAlign: 'center' }}
                                onChange={(e) => this.setState({ zipcode_filter: e.target.value })}
                                placeholder="zipcode"
                            />
                        </Col>
                        <Col>
                            <Button onClick={(e) => {
                                e.preventDefault();
                                // this.findZipCodes(this.state.zipcode_filter, this.state.radius).then(console.log("finished"))
                            }}
                                style={{ backgroundColor: '#1d60b8', borderColor: '#1d60b8', fontSize: '20px' }}>
                                Submit Offer Information
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default SurveyPage;