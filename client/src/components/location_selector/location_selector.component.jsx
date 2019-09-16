// import { Dropdown } from 'semantic-ui-react';
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import STATES from '../../fields/states';
// import STATE_CITY_LIST from '../../fields/states_cities';

// class LocationSelector extends React.Component {
//     state = {
//         selected_state: 'Alabama',
//         selected_city: ''
//     }

//     render() {
//         return (
//             <div>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <Dropdown placeholder='State' search selection options={STATES.map(dat => ({ key: dat, value: dat, text: dat }))} 
//                             onChange={(event,val)=>this.setState({selected_state:val.value}, ()=>console.log(val.value))}/>
//                         </Col>
//                         <Col>
//                             <Dropdown placeholder='City' search selection options={STATE_CITY_LIST[this.state.selected_state].map(dat => ({ key: dat.city, value: dat.city, text: dat.city }))} />
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default LocationSelector;
