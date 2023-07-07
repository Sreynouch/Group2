import React from 'react';

class About extends React.Component{
    render(){
        return(
        <div className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center"><br/>
                    <h3>About Cambodia</h3>
                    <img src= {require('../assets/img/aboutImg.jfif')} style={{height: 480}}/>
                    <h6><br/><br/>Languages</h6>
                    <p style={{fontSize: 15}}>Khmer is the official language of Cambodia. The Cambodian language is derived from the Mon-Khmer (Austro-Asiatic) language family. Khmer is renowned for possessing one of the largest sets of alphabets; it consists of 33 consonants, 23 vowels, and 12 independent vowels.</p>
                    <h6>Climate of Cambodia</h6>
                    <p style={{fontSize: 15}}>Cambodia has a tropical climate with warm temperatures throughout the year. There are two seasons in Cambodia. The northeast monsoon season runs from December through April, bringing sunny, dry weather especially in January and February. The wet season runs from May until September, with the heaviest rainfall occurring generally in August & September.</p>
                    <h6>Angkor Wat Kingdom</h6>
                    <p style={{fontSize: 15}}>The most famous period in the history of Cambodia is the time of the Khmer empire from the 9th to the 15th century, with its most-imposing monument of Angkor Wat, acting an a spectacular main temple and city at the same time. <br/><br/>Interesting Fact - In the 1100's when the Khmer Kingdom was at its peak and of Angkor Wat built, there were 1 million inhabitants in the city. At the same time, London had only 70,000 inhabitants.</p>
                    <h6>Khmer Rouge</h6>
                    <p style={{fontSize: 15}}>The Khmer Rouge, under the Marxist leader Pol Pot, who was in power from 1975-79, caused the deaths of up to two million people - one of the worst mass killings in the 20th century. They forced millions of Cambodians from the cities to work on communal farms in the countryside. Entire families died from overwork, starvation, disease, and executions. Doctors, teachers, and anyone wearing glasses were killed en masse. The effects of wiping out the entire educated class are still felt today. <br/><br/>Even though the Khmer Rouge was finally overthrown in 1979, the civil war continued for 20 more years. Each Cambodian family has stories to share of their suffering.</p>
                    <h6>Cambodia Today</h6>
                    <p style={{fontSize: 15}}>Today, tourism and manufacturing are booming. Cambodia is becoming one of the travel destinations in Asia and the garment industry represents the largest portion of Cambodia's manufacturing sector, accounting for 80% of the country's exports.<br/><br/>Yet in the countryside poverty is still widespread. the Cambodians being very proud and hardworking, do whatever it takes to make ends meet. But many families in the rural areas earn less than $2 per day and cannot afford to build their own drinking water wells or even to buy uniforms to send their children to school.</p>

                </div>
            </div>
        </div>
        );
    }
}
export default About;
