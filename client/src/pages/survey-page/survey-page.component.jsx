import React from 'react';
import { DropdownList } from 'react-widgets'
import { Multiselect } from 'react-widgets';
import ED_LEVELS from '../../fields/ed_levels';
import JOB_TITLES from '../../fields/job_titles';
import NEGOTIATED from '../../fields/negotiated';
import COMPANY_SIZES from '../../fields/company_sizes';
import RACES from '../../fields/races';
import PRONOUNS from '../../fields/pronouns';
import 'react-widgets/dist/css/react-widgets.css'
import { Jumbotron, Row, Col, Container, Form, Button } from "react-bootstrap"
import './survey-page.component.css';

import axios from 'axios';

class SurveyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalIsSet: false,
            job_titles: JOB_TITLES,
            ed_levels: ED_LEVELS,
            company_sizes: COMPANY_SIZES,
            negotiated_statuses: NEGOTIATED,
            race_ops: RACES,
            pronoun_ops: PRONOUNS,

            job_title: "",
            ed_level: "",
            company_size: "",
            salary: 0,
            equity: 0,
            negotiated: "",
            one_time: 0,
            lat: "",
            long: "",
            race: "",
            ethnicity: "",
            pronouns: "",
            data: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
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

        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            job_title: this.state.job_title,
            company_size: this.state.company_size,
            salary: this.refs.salary.value,
            equity: this.refs.equity.value,
            negotiated: this.state.negotiated,
            one_time: this.refs.bonus.value,
            lat: this.state.lat,
            long: this.state.long,
            race: this.state.race,
            ethnicity: this.state.ethnicity,
            pronouns: this.state.pronouns
        })
        .then(function (response) {
            console.log(this.state);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        this.handleClearForm(event);
    }

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
            job_title: "",
            ed_level: "",
            company_size: "",
            salary: 0,
            equity: 0,
            negotiated: "",
            one_time: 0,
            lat: "",
            long: ""
        })
    }


    render() {
        return (
            <div style={{ paddingTop: 70 }} className='App'>
                <h1 style={{ color: `#007788`, textAlign: "left", display: "inline" }}> Submit your Offer</h1>
                <h4 style={{ color: `#007788`, textAlign: "left", display: "inline" }}> <i>by filling in the survey below</i></h4><br />
                <h5>We understand that talking about money and salaries is sometimes considered taboo, but the more transparent we all become about our offers, the closer we will get to achieveing pay equity for all. Your response will remain completely anonymous. We thank you for your help and encourage you to join the fight for pay equity!</h5>
                <br />
                <div className="form-container">
                    <Form className='filter-list'>
                        <h3>Company Information (Required)</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Company Location</Form.Label>
                                <br></br>
                                <input  class="text-input" 
                                        type="text" 
                                        name='location-field'
                                        placeholder="Enter City, State (i.e. Seattle, WA)" required="true" 
                                        ref="location-field" />
                                <br></br>
                            </Col>
                            <Col>
                                <Form.Label>Company Size</Form.Label>
                                <DropdownList   className="filter" 
                                                data={COMPANY_SIZES} 
                                                textField='name'
                                                name='company_size'
                                                placeholder='Select the company size'
                                                valueField='name'
                                                onChange={value => this.setState((value.length > 0) ?
                                                    { company_sizes: value } : { company_sizes: COMPANY_SIZES }, () => this.handleDropDown)} />
                            </Col>
                        </Form.Row>
                        <br></br>
                        <h3>Compensation Information (Required)</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Base Salary</Form.Label>
                                <br></br>
                                <input  class="number-input" 
                                        type="number"
                                        name="salary"
                                        placeholder="Enter yearly salary offered (i.e. XXXXXX)" 
                                        required="true" 
                                        ref="salary" />
                                <br></br>
                                <br></br>
                                <Row>
                                    <Col>
                                        <Form.Label>Bonus</Form.Label>
                                        <br></br>
                                        <input  class="number-input" 
                                                type="number"
                                                name="bonus"
                                                placeholder="i.e. XXXX, 0 if N/A" 
                                                required="true"
                                                ref="bonus" />
                                        <br></br>
                                    </Col>

                                    <Col>
                                        <Form.Label>Equity</Form.Label>
                                        <br></br>
                                        <input  class="percent-input" 
                                                type="number"
                                                name="equity"
                                                placeholder="X.XX, 0 if N/A" 
                                                required="true"
                                                ref="equity" />
                                        <br></br>
                                    </Col>
                                </Row>
                                
                                <br></br>
                                <Form.Label>Did you negotiate this offer?</Form.Label>
                                <DropdownList   className="filter" 
                                                data={NEGOTIATED} 
                                                name='negotiated' 
                                                textField='name'
                                                placeholder='Select one from the following'
                                                valueField='name'
                                                onChange={value => this.setState((value.length > 0) ?
                                        { negotiated_statuses: value } : { negotiated_statuses: NEGOTIATED }, () => this.handleChange)} />
                                <br></br>
                            </Col>
                            <Col>
                                <Form.Label>Job Title</Form.Label>
                                <DropdownList  className="filter" 
                                                data={JOB_TITLES} 
                                                name='job_title' 
                                                textField='name'
                                                placeholder='Select your job title'
                                                valueField='name'
                                                onChange={value => this.setState((value.length > 0) ?
                                        { job_titles: value } : { job_titles: JOB_TITLES }, () => this.handleChange)} />

                                <Form.Label>Education Level</Form.Label>
                                <DropdownList   className="filter" 
                                                data={ED_LEVELS} 
                                                textField='name'
                                                name='ed_level'
                                                placeholder='Select your current or most recent level of education'
                                                valueField='name'
                                                onChange={value => this.setState((value.length > 0) ?
                                        { ed_levels: value } : { ed_levels: ED_LEVELS }, () => this.handleChange)} />
                            </Col>
                        </Form.Row>
                        <h3>Personal Information (Optional)</h3>
                        <Form.Row>
                            <Col>
                                <Form.Label>Race</Form.Label>
                                <Multiselect    className="filter" 
                                                data={RACES}   
                                                name='race'
                                                textField='name'
                                                placeholder='Select the race you identify with'
                                                valueField='name'
                                                onChange={value => this.setState((value.length > 0) ?
                                                    { race_ops: value } : { race_ops: RACES }, () => this.handleChange)} />

                                <Form.Label>Do you identify as Hispanic or Latinx?</Form.Label>
                                <br></br>
                                <div class="btn-group">
                                    <button     name="ethnicity"
                                                onChange={this.handleChange}>
                                        Yes</button>
                                    <button     name="ethnicity"
                                                onChange={this.handleChange}>
                                        No</button>
                                </div>
                                <br></br>
                            </Col>
                            <Col>
                                <Form.Label>Personal Pronouns</Form.Label>
                                <DropdownList   className="filter" 
                                                data={PRONOUNS}
                                                name='pronouns'
                                                textField='name'
                                                placeholder='Select your personal pronouns'
                                                valueField='name'
                                                onChange={value => this.setState((value.length > 0) ?
                                                    { pronoun_ops: value } : { pronoun_ops: PRONOUNS }, () => this.handleChange)} />
                            </Col>

                        </Form.Row>
                        <Form.Row style={{ marginTop: '50px'}}>
                            <Button class="main-btn" 
                                    align="center" 
                                    onClick={this.handleClearForm}>
                                    Clear
                            </Button>
                            <Button class="main-btn" 
                                    align="center" 
                                    onClick={this.handleSubmit}>
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