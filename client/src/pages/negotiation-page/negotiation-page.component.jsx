import React from 'react';
import Image from 'react-bootstrap/Image';
import ada_photo from '../../assets/ada_headshot_square.jpg';

import './negotiation-page.component.css';

class NegotiationPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> 10 Ways to Negotiate Your Best Offer </h1>
                <h4> Not sure what to do or say when negotiating?  Check out these helpful tips from Ada Gregory! </h4>

                
                <i>Ada Gregory is the Associate Director of the Kenan Institute for Ethics at Duke.  Ada graduated from Duke (BA/MA) and went on to work at the state and local levels for 20 years influencing policy and practice related to victims’ rights, violence against women, and criminal justice reform. She returned to Duke in 2006 and worked in several capacities, including as director of the Duke Women’s Center and chief administrator for the university’s signature institutes and initiatives, before joining the Kenan Institute for Ethics in 2018.</i>
                <ol>
                    <li> <b>NEVER</b> give the first number – counter, deflect, delay or be non-specific.</li>
                    <ul>
                        <li>“What do you think would be typical in this company for someone with my qualifications?”</li>
                        <li>"I’m sure we can agree on something if we’re sure I’m a match for your needs."" </li>
                        <li>"I would consider any fair market offer."</li>
                    </ul>
                    <li><b>NEVER</b> accept the first offer. <b>ALWAYS</b> ask for time to consider the offer.</li>
                    <ul>
                        <li>“I’m thrilled to hear from you and am grateful for the offer to be a part of your amazing team. I would like a little time as the offer isn’t quite in the range that I expected. Would it be okay if we set up a time to talk again soon when I’ve had a little time to consider the offer?”</li>
                    </ul>
                    <li>Do your research so you know what you must have (minimum), want to get (target), nice to get (aspirational goal).  Know the market rate for the type of position in that industry in that geographic region.</li>
                    <ul>
                        <li>In the majority of states, salary information for public employees is publicly accessible.</li>
                        <li>Ask friends, family, colleagues in the same industry for advice.</li>
                        <li>Use salary sites:  <a href="http://www.salary.com">salary.com</a>, <a href="http://www.glassdoor.com">glassdoor.com</a>, <a href="http://www.payscale.com">payscale.com</a>, <a href="http://www.indeed.com">indeed.com</a>, <a href="http://www.salarylist.com">salarylist.com</a>, <a href="http://www.pareuptech.com">pareuptech.com</a>, etc.</li>
                    </ul>
                    <li>Don’t make it personal. Sell yourself and what you can do – not what you need. Always base your request on your abilities, their needs or the market rates for the job.</li>
                    <li>Keep it positive – always express gratitude and enthusiasm for the offer.</li>
                    <ul>
                        <li>“I would love to be a part of your team. If you can get to X, then I’m on board.”</li>
                        <li>“This opportunity is incredible. I’m excited to be a part of your company, but I was expecting a more competitive base salary that would match the value that I know I can bring to your team.”</li>
                    </ul>
                    <li>Practice your pitch and how you will negotiate obstacles or questions before you respond. Have others read emails or listen to your pitch.</li>
                    <li>Make concessions an opportunity for an alternative gain.</li>
                    <ul>
                        <li>“If the salary increase isn’t possible, would you be willing to offer <i>[a one-time signing bonus, moving stipend, more flexibility with my schedule, etc.]</i>?”</li>
                    </ul>
                    <li><b>NEVER</b> suggest you have a higher offer unless you do and are willing to walk away from this offer.</li>
                    <li>Negotiate for and consider the <b>ENTIRE</b> offer package – salary + benefits + professional opportunities (training, projects, travel, network, mentors, etc.)</li>
                    <li>Get everything in writing!</li>
                </ol>
                <Image src={ada_photo} width="200px" roundedCircle />
            </div>
        )
    }
}

export default NegotiationPage;