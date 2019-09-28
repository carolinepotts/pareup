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
            company_sizes: COMPANY_SIZES,
            job_title: "",
            company_size: "",
            salary: "",
            equity: "",
            negotiated: "",
            one_time: "",
            lat: "",
            long: "",
            ed_level: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleDropDown(event) {
        this.setState((event.target.value.length > 0) ? { ed_levels: event.target.value } : { ed_levels: ED_LEVELS })

        console.log(this.state)
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState(() => ({
            [name]: value
        }))

        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.post('http://localhost:3001/api/putData', {
            job_title: this.state.job_title,
            company_size: this.state.company_size,
            salary: this.state.salary,
            equity: this.state.equity,
            negotiated: this.state.negotiated,
            one_time: this.state.one_time,
            lat: this.state.lat,
            long: this.statelong
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    render() {
        return (
            <div className='App'>
                <h1>Submit Your Offer</h1>
                <p>We understand that talking about money and salaries is sometimes considered taboo, but the more transparent we become about our offers, the more fair and equal will compensation become.</p>
                <h4>Thank you for your help!</h4>

                <div className="form-container">
                    <Form className='filter-list'>
                        <h3>Company Information (Required)</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Company Location</Form.Label>
                                <br></br>
                                <input class="text-input" placeholder="City, State (i.e. Seattle, WA)" required="true" onChange={value => this.setState((value.length > 0) ?
                                        { ed_levels: value } : { ed_levels: ED_LEVELS }, () => console.log(this.state))} />
                                <br></br>
                            </Col>
                            <Col>
                                <Form.Label>Company Size</Form.Label>
                                <br></br>
                                <div class='btn-group'>
                                    <button name="company_size" value={this.state.company_size} onClick={this.handleChange}>&#60; 100</button>
                                    <button>100-1,000</button>
                                    <button>1,000-10,000</button>
                                    <button>10,000+</button>
                                </div>
                                <br></br>
                            </Col>
                        </Form.Row>
                        <br></br>
                        <h3>Compensation Information (Required)</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Base Salary</Form.Label>
                                <br></br>
                                <input class="number-input" placeholder="$ Yearly Salary (i.e. XXXXXX)" required="true" name='salary' onChange={this.handleChange}/>
                                <br></br>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Bonus</Form.Label>
                                        <br></br>
                                        <input class="number-input" placeholder="(i.e. XXXX)" required="true"/>
                                        <br></br>
                                    </Col>

                                    <Col>
                                        <Form.Label>Equity</Form.Label>
                                        <br></br>
                                        <input class="percent-input" placeholder="(i.e. X.XX)" required="true"/>
                                        <br></br>
                                    </Col>
                                </Row>
                                
                                <br></br>
                                <Form.Label>Did you negotiate this offer?</Form.Label>
                                <br></br>
                                <div class="btn-group">
                                    <button>Yes</button>
                                    <button>No</button>
                                </div>
                                <br></br>
                            </Col>
                            <Col>
                                <Form.Label>Job Title</Form.Label>
                                <DropdownList className="filter" data={JOB_TITLES} name='job_title' textField='name'
                                    placeholder='All Job Titles'
                                    valueField='name'
                                    onChange={value => this.setState((value.length > 0) ?
                                        { job_titles: value } : { job_titles: JOB_TITLES }, () => this.handleChange)} />

                                <Form.Label>Education Level</Form.Label>
                                <DropdownList className="filter" data={ED_LEVELS} textField='name'
                                    name='ed_level'
                                    placeholder='All Education Levels'
                                    valueField='name'
                                    onChange={this.handleChange} />
                            </Col>
                        </Form.Row>
                        <br></br>
                        <h3>Personal Information (Optional)</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Race</Form.Label>
                                <DropdownList className="filter" data={COMPANY_SIZES} textField='name'
                                    placeholder='i.e. White, African American, Asian etc.'
                                    valueField='name'
                                    onChange={value => this.setState((value.length > 0) ?
                                        { company_sizes: value } : { company_sizes: COMPANY_SIZES }, () => console.log(this.state))} />

                                <Form.Label>Do you identify as Hispanic or Latinx?</Form.Label>
                                <br></br>
                                <div class="btn-group">
                                    <button>Yes</button>
                                    <button>No</button>
                                </div>
                                <br></br>
                            </Col>
                            <Col>
                                <Form.Label>Personal Pronouns</Form.Label>
                                <DropdownList className="filter" data={COMPANY_SIZES} textField='name'
                                    placeholder='i.e. she/her, he/him, they/them etc.'
                                    valueField='name'
                                    onChange={value => this.setState((value.length > 0) ?
                                        { company_sizes: value } : { company_sizes: COMPANY_SIZES }, () => console.log(this.state))} />
                            </Col>

                        </Form.Row>
                        <Form.Row style={{ marginTop: '50px' }}>
                            <Button class="main-btn" align="center" onClick={this.handleSubmit}>
                            Submit
                            </Button>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        )
    }
}

export default SurveyPage;