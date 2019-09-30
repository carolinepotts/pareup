import React from 'react';
import { Multiselect } from 'react-widgets';
import ED_LEVELS from '../../fields/ed_levels';
import JOB_TITLES from '../../fields/job_titles';
import NEGOTIATED from '../../fields/negotiated';
import COMPANY_SIZES from '../../fields/company_sizes';
import 'react-widgets/dist/css/react-widgets.css'
import Card from '../../components/card/card.component';
import SorryMessage from '../../components/sorry_message/sorry_message.component';
import { Jumbotron, Row, Col, Container, Form, Button } from "react-bootstrap"
import './offers-page.component.css';
import STATE_CITY_LIST from '../../fields/states_cities';
import STATES from '../../fields/states';
import { Dropdown } from 'semantic-ui-react'


function calcDist(lat1, lon1, lat2, lon2) {
    // console.log(lat1, lon1, lat2, lon2);
    var a1 = lat1 * Math.PI / 180;
    // console.log('a1',a1);
    var a2 = lat2 * Math.PI / 180;
    // console.log('a2',a2);
    var del_lon = (lon2 - lon1) * Math.PI / 180;
    var R = 6371*Math.pow(10,3); // gives d in metres
    var d = Math.acos(Math.sin(a1) * Math.sin(a2) + Math.cos(a1) * Math.cos(a2) * Math.cos(del_lon)) * R;
    var miles = d / 1609.344;
    // console.log(miles);
    if (isNaN(miles)) {
        return 99999;//will be in if you don't care about location at all, otherwise out 
    }
    return miles;
}

class OffersPage extends React.Component {
    constructor(props) {
        super(props);

        this.num_entries_needed = 1;

        this.state = {
            intervalIsSet: false,
            ed_levels: ED_LEVELS,
            job_titles: JOB_TITLES,
            negotiated: NEGOTIATED,
            company_sizes: COMPANY_SIZES,
            radius: 100000, //1 more than if you don't care about location at all number in calcDist
            selected_state: "Alabama",
            selected_city: "Abanda",
            selected_lat: 0,
            selected_long: 0,
            data: []
        }

        // console.log(this.state)
    }

    // when component mounts, first thing it does is fetch all existing data in our db
    // then we incorporate a polling logic so that we can easily see if our db has
    // changed and implement those changes into our UI
    componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
            let interval = setInterval(this.getDataFromDb, 1000);
            this.setState({ intervalIsSet: interval });
        }
    }

    // never let a process live forever
    // always kill a process everytime we are done using it
    componentWillUnmount() {
        if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
        }
    }

    // just a note, here, in the front end, we use the id key of our data object
    // in order to identify which we want to Update or delete.
    // for our back end, we use the object id assigned by MongoDB to modify
    // data base entries

    // our first get method that uses our backend api to
    // fetch data from our data base
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    applyFilters(data) {
        // console.log('applying filters')
        // console.log(this.state);
        return data.filter((doc) => {
            // console.log(this.state.ed_levels.map(item => item.name).includes(doc.ed_level));
            // console.log(this.state.job_titles.map(item => item.name).includes(doc.job_title));
            // console.log(this.state.negotiated.map(item => item.name).includes(doc.negotiated));
            // console.log(this.state.company_sizes.map(item => item.name).includes(doc.company_size));
            // console.log(doc.lat)
            // this.setState({doc_lat: doc.lat})
            // this.setState({doc_long: doc.long})
            // this.state.doc_lat = doc.lat;
            // this.state.doc_long = doc.long;
            // console.log(this.state);
            var dist = calcDist(doc.lat, doc.long, this.state.selected_lat, this.state.selected_long)
            console.log(dist)
            // console.log(this.state)
            return (this.state.ed_levels.map(item => item.value).includes(doc.ed_level) &&
                this.state.job_titles.map(item => item.value).includes(doc.job_title) &&
                this.state.negotiated.map(item => item.value).includes(doc.negotiated) &&
                this.state.company_sizes.map(item => item.value).includes(doc.company_size) &&
                dist <= this.state.radius)
        })
    };

    // findZipCodes = async (zip, radius) => {
    //     console.log('findZipCodes called');
    //     try {
    //         let j = await fetch(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${zip}&minimumradius=0&maximumradius=${radius}&key=DEMOAPIKEY`);

    //         let data = await j.json();
    //         // .then(data => {return data.json()})
    //         // .then(res=>console.log(res))
    //         // .catch(error=>console.log(error));
    //         // console.log('Printing state');
    //         console.log(data)
    //         this.setState({ valid_zips: data.DataList.map(entry => entry.Code) });
    //         // console.log(this.state.valid_zips);
    //     } catch (err) {
    //         console.log(err);
    //         this.setState({ valid_zips: [] });
    //     }
    // }


    render() {
        return (
            <div style={{ paddingTop: 70 }} className='App'>
                <h1 style={{ color: `#007788`, textAlign: "left", display: "inline" }}> Filter Results</h1>
                <h4 style={{ color: `#007788`, textAlign: "left", display: "inline" }}> <i>using the dropdown menus below</i></h4><br />
                {/* <h3 style={{ color: `#007788`, textAlign:"center"}}>View median, 25th percentile, and 75th percentile of offers.  Use the dropdowns below to filter results.</h3> */}
                <br />

                <Form className='filter-list '>
                    <Form.Row>
                        <Col>
                            <Form.Label>Education Level</Form.Label>
                            <Multiselect className="filter" data={ED_LEVELS} textField={item => item.name}
                                placeholder='All Education Levels'
                                valueField={item => item.value}
                                onChange={value => this.setState((value.length > 0) ?
                                    { ed_levels: value } : { ed_levels: ED_LEVELS }, () => console.log())} />
                        </Col>
                        <Col>
                            <Form.Label>Job Title</Form.Label>
                            <Multiselect className="filter" data={JOB_TITLES} textField={item => item.name}
                                placeholder='All Job Titles'
                                valueField={item => item.value}
                                onChange={value => this.setState((value.length > 0) ?
                                    { job_titles: value } : { job_titles: JOB_TITLES }, () => console.log())} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Negotiation Status</Form.Label>
                            <Multiselect className="filter" data={NEGOTIATED} textField={item => item.name}
                                placeholder='All Negotiation Statuses'
                                valueField={item => item.value}
                                onChange={value => this.setState((value.length > 0) ?
                                    { negotiated: value } : { negotiated: NEGOTIATED }, () => console.log())} />
                        </Col>
                        <Col>
                            <Form.Label>Company Size</Form.Label>
                            <Multiselect className="filter" data={COMPANY_SIZES} textField={item => item.name}
                                placeholder='All Company Sizes'
                                valueField={item => item.value}
                                onChange={value => this.setState((value.length > 0) ?
                                    { company_sizes: value } : { company_sizes: COMPANY_SIZES }, () => console.log())} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ marginTop: '5px' }}>
                        <Col lg={1} />
                        <Col lg={3.5}>
                            <Form.Label className="mt-auto">Show companies within</Form.Label>
                            <input
                                className="mt-auto"
                                type="text"
                                style={{ width: '40px', marginLeft: '10px', marginRight: '10px', borderRadius: '5px', borderWidth: '1px', height: '45px', textAlign: 'center' }}
                                onChange={(e) => this.setState(isNaN(parseFloat(e.target.value))? {radius: 100000} 
                               : { radius: parseFloat(e.target.value) })}
                                placeholder="#"
                            />


                            <Form.Label>miles of</Form.Label>
                        </Col>
                        <Col lg={3.25}>
                            <Dropdown placeholder='State' search selection options={STATES.map(dat => ({ key: dat, value: dat, text: dat }))}
                                onChange={(event, val) => this.setState({ selected_state: val.value }, () => console.log())} />
                        </Col>
                        <Col lg={3.25}>
                            <Dropdown placeholder='City' search selection options={STATE_CITY_LIST[this.state.selected_state].map(dat => ({ key: dat.city, value: dat.city, text: dat.city }))}
                                onChange={(event, val) => this.setState({
                                    selected_city: val.value,
                                    selected_lat: STATE_CITY_LIST[this.state.selected_state].filter(function getSelCityObject(object) {
                                        return object.city == val.value
                                    })[0].lat,
                                    selected_long: STATE_CITY_LIST[this.state.selected_state].filter(function getSelCityObject(object) {
                                        return object.city == val.value
                                    })[0].long
                                }, () => console.log(this.state))} />

                        </Col>
                        <Col lg={1} />
                        {/* <input
                                className="mt-auto"
                                type="text"
                                style={{ width: '100px', marginLeft: '10px', marginRight: '10px', borderRadius: '5px', borderWidth: '1px', height: '45px', textAlign: 'center' }}
                                onChange={(e) => this.setState({ zipcode_filter: e.target.value })}
                                placeholder="zipcode"
                            /> */}


                        {/* <Button onClick={(e) => {
                                e.preventDefault();
                                this.findZipCodes(this.state.zipcode_filter, this.state.radius).then(console.log("finished"))
                            }}
                                style={{ backgroundColor: '#007788', borderColor: '#007788', fontSize: '20px' }}>
                                View Offer Statistics
                                        </Button> */}

                    </Form.Row>
                </Form>
                <h1 style={{ color: `#007788`, textAlign: "left", display: "inline" }}> Offer Statistics</h1>
                <h4 style={{ color: `#007788`, textAlign: "left", display: "inline" }}> <i>25th percentile, median, 75th percentile</i></h4><br /><br />
                {
                    this.applyFilters(this.state.data).length < this.num_entries_needed ?
                        <div>
                            <SorryMessage />
                            {console.log(this.state)}
                        </div>

                        :

                        <div>
                            <div className="container-fluid justify-content-center">
                                <Row>
                                    <Col>
                                        <Card field='salary' data={this.applyFilters(this.state.data)}
                                            title='Base Salary' />
                                    </Col>
                                    <Col >
                                        <Card field='equity' data={this.applyFilters(this.state.data)}
                                            title='Equity' />
                                    </Col>
                                    <Col >
                                        <Card border="info" field='one_time' data={this.applyFilters(this.state.data)}
                                            title='One-Time Bonuses' />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                }
            </div >
        );
    }
}



export default OffersPage;