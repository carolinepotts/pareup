import React from 'react';
// import Multiselect from 'multiselect-dropdown-react';
import { Multiselect } from 'react-widgets'
import ED_LEVELS from '../../fields/ed_levels';
import JOB_TITLES from '../../fields/job_titles';
import NEGOTIATED from '../../fields/negotiated';
import COMPANY_SIZES from '../../fields/company_sizes';
import 'react-widgets/dist/css/react-widgets.css'
import Card from '../../components/card/card.component';
import SorryMessage from '../../components/sorry_message/sorry_message.component';


class OffersPage extends React.Component {
    constructor(props) {
        super(props);

        this.num_entries_needed = 0;

        this.state = {
            intervalIsSet: false,
            ed_levels: ED_LEVELS,
            job_titles: JOB_TITLES,
            negotiated: NEGOTIATED,
            company_sizes: COMPANY_SIZES,
            data: []
        }

        console.log(this.state)
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
        console.log(this.state);
        return data.filter((doc) => {
            // console.log(this.state.ed_levels.map(item => item.name).includes(doc.ed_level));
            // console.log(this.state.job_titles.map(item => item.name).includes(doc.job_title));
            // console.log(this.state.negotiated.map(item => item.name).includes(doc.negotiated));
            // console.log(this.state.company_sizes.map(item => item.name).includes(doc.company_size));
            return (this.state.ed_levels.map(item => item.name).includes(doc.ed_level) &&
                this.state.job_titles.map(item => item.name).includes(doc.job_title) &&
                this.state.negotiated.map(item => item.name).includes(doc.negotiated) &&
                this.state.company_sizes.map(item => item.name).includes(doc.company_size))
        })
    };


    render() {
        return (
            <div className='App'>

                <Multiselect data={ED_LEVELS} textField={item => item.name}
                    placeholder='All Education Levels'
                    valueField={item => item.value}
                    onChange={value => this.setState((value.length>0) ? 
                        { ed_levels: value } : {ed_levels: ED_LEVELS} , () => console.log(this.state))} />

                <Multiselect data={JOB_TITLES} textField={item => item.name}
                    placeholder='All Job Titles'
                    valueField={item => item.value}
                    onChange={value => this.setState((value.length>0) ? 
                        { job_titles: value } : {job_titles: JOB_TITLES} , () => console.log(this.state))} />

                <Multiselect data={NEGOTIATED} textField={item => item.name}
                    placeholder='All Negotiation Statuses'
                    valueField={item => item.value}
                    onChange={value => this.setState((value.length>0) ? 
                        { negotiated: value } : {negotiated: NEGOTIATED} , () => console.log(this.state))} />
                <Multiselect data={COMPANY_SIZES} textField={item => item.name}
                    placeholder='All Company Sizes'
                    valueField={item => item.value}
                    onChange={value => this.setState((value.length>0) ? 
                        { company_sizes: value } : {company_sizes: COMPANY_SIZES} , () => console.log(this.state))} />

                {
                    this.applyFilters(this.state.data).length < this.num_entries_needed ?

                        <SorryMessage />
                        :
                        <Card field='salary' data={this.applyFilters(this.state.data)} />

                }

            </div>
        );
    }
}

export default OffersPage;