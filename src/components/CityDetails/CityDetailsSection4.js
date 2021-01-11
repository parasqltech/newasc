import React, { Component  } from 'react';
import {Container,Table} from 'react-bootstrap'

class CityDetailsSection4 extends Component {
   
    render() {   
        return (
            <>
            <section className="City-details-section-4">
                <Container>
                    <div className="mb-4">
                        <div className="title-main mb-0">
                            <h2 className="text-white">NEW SOUTH WALES SCHOOL HOLIDAYS</h2>
                        </div>
                        <p className="font-15 font-medium text-center text-white">
                            ASC offers 3 day camps operating from 9am till 3pm across all New South Wales school holidays. New camps in Sydney and surrounding suburbs will become available closer to specific term holidays.
                        </p>
                        <p className="font-15 font-medium text-center text-white mb-0">
                            2019/2020 Summer School HolidaysSat 21 December – Mon 27 January.
                        </p>
                    </div>
                    
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>Period</th>
                                <th>Dates</th>
                                <th>Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Term 1 – Eastern</td>
                                <td>Fri 9 April</td>
                                <td>11 weeks</td>
                            </tr>
                            <tr>
                                <td>Term 1 – Western</td>
                                <td>Tue 4 February – Fri 9 April</td>
                                <td>10 weeks</td>
                            </tr>
                            <tr>
                                <td>School Holidays	</td>
                                <td>Sat 10 April – Sunday 26 April</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Term 2</td>
                                <td>Mon 27 April  – Fri 3 July</td>
                                <td>10 weeks</td>
                            </tr>
                            <tr>
                                <td>School Holidays	</td>
                                <td>Sat 4 July – Sun 19 July</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Term 3</td>
                                <td>Mon 20 July – Fri 25 September</td>
                                <td>10 weeks</td>
                            </tr>
                            <tr>
                                <td>School Holidays	</td>
                                <td>Sat 26 September – Sun 11 October</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Term 4</td>
                                <td>Mon 12 October – Fri 18 December</td>
                                <td>10 weeks</td>
                            </tr>
                            <tr>
                                <td>2019/2020 Summer School Holidays Eastern</td>
                                <td>Sat 19 December – Tue 27 January</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2019/2020 Summer School Holidays Western</td>
                                <td>Sat 19 December – Tue 2 February</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </section>
            </>
        );
    }
}

export default CityDetailsSection4;