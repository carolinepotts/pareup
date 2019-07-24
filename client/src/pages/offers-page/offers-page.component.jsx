import React from 'react';
// import Multiselect from 'multiselect-dropdown-react';
import { Multiselect } from 'react-widgets'
import ED_LEVELS from '../../fields/ed_levels';
import JOB_TITLES from '../../fields/job_titles';
import NEGOTIATED from '../../fields/negotiated';
import COMPANY_SIZES from '../../fields/company_sizes';
import 'react-widgets/dist/css/react-widgets.css'


class OffersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ed_levels: ED_LEVELS.map(item=>item.name),
            job_titles: JOB_TITLES.map(item=>item.name),
            negotiated: NEGOTIATED.map(item=>item.name),
            company_sizes: COMPANY_SIZES.map(item=>item.name)
        }

        console.log(this.state)
    }

   
    render() {
        return (
            <div className='App'>

                <Multiselect data={ED_LEVELS} textField={item => item.name}
                    placeholder='All Education Levels'
                    valueField={item => item.value} 
                    onChange={value => this.setState({ ed_levels: value }, () => console.log(this.state))} />

                <Multiselect data={JOB_TITLES} textField={item => item.name}
                    placeholder='All Job Titles'
                    valueField={item => item.value} 
                    onChange={value => this.setState({ job_titles: value }, () => console.log(this.state))} />

                <Multiselect data={NEGOTIATED} textField={item => item.name}
                    placeholder='All Negotiation Statuses'
                    valueField={item => item.value} 
                    onChange={value => this.setState({ negotiated: value }, () => console.log(this.state))} />
                <Multiselect data={COMPANY_SIZES} textField={item => item.name}
                    placeholder='All Company Sizes'
                    valueField={item => item.value} 
                    onChange={value => this.setState({ company_sizes: value }, () => console.log(this.state))} />

            </div>
        );
    }
}

export default OffersPage;