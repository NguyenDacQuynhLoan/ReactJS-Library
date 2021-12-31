import React from 'react'
function showTime(){
    let temp = new Date()
    return temp
}
export default function Exercise01() {
    return (
        <div >
            <div class='d-flex timeline'>
                <div>
                    <p>India</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"Asia/Kolkata",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>
                <div>
                    <p>California</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"America/Los_Angeles",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>
                <div>
                    <p>New York</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"America/New_York",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>
                <div>
                    <p>London</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"Europe/London",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>

            </div>

            <div class='d-flex timeline'>
                <div>
                    <p>Sydney</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"Australia/Sydney",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'
                        }
                    )}</h4>
                </div>
                <div>
                    <p>China</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"Asia/Shanghai",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>
                <div>
                    <p>Tokyo</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"Asia/Tokyo",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>
                <div>
                    <p>Berlin</p>
                    <h4>{showTime().toLocaleString(
                        "en-US", 
                        {
                            timeZone:"Europe/Berlin",
                            timeStyle:'medium',
                            hourCycle:'h12',
                            timeStyle:'short'

                        }
                    )}</h4>
                </div>
            </div>
        </div>
    )
}
