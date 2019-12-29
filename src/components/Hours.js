import React from 'react'

function Hours() {
    return (
        <div id="hours">
            <div id="hours-container" className="animated fadeInUp">
                <h1>OPENING HOURS</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>9am - 10pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>9am - 10pm</td>
                        </tr>
                        <tr>
                            <td>Wednsday</td>
                            <td>9am - 10pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>9am - 10pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>9am - 10pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>9am - 10pm</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>CLOSED</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Hours
