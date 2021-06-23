import '../styles/recommended.css';
import React, {useState} from 'react';
import Axios from 'axios';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_ID = process.env.REACT_APP_API_ID;
// const handleFetch = async () => {
//     const response = await fetch (
//         `https://api.data.charitynavigator.org/v2/Organizations?app_id=42522c52&app_key=b7069e568f80ed5b08a1857d797719f4&search=Animals&rated=true&sort=RATING%3ADESC`
//     )
//     const data = await response.json();
//     return data;
    
// }

// const [data, setData] = useState([]);

{/* <div>
	{api ? api.map((item, index) => {
		return (
			<div key={index}>
				<p>{item.charityName}</p>
			</div>
		)
	}) : null}
</div> */}

const star_rating = (rating) => {
    if (rating === 1) {
        return(<p>&#9734;</p>)
    };
    if (rating === 2) {
        return(<p>&#9734; &#9734;</p>)
    }
    if (rating === 3) {
        return(<p>&#9734; &#9734; &#9734;</p>)
    }
    if (rating === 4) {
        return(<p>&#9734; &#9734; &#9734; &#9734;</p>)
    }
    if (rating === 5) {
        return(<p>&#9734; &#9734; &#9734; &#9734; &#9734;</p>)
    }
};



class Charity {
    constructor(name, cause, rating) {
        this.name = name;
        this.cause = cause;
        this.rating = rating;
    }
}



const Recommended = () => {
    // let [api, setApi] = useState([]);
    // let data =  handleFetch();
    // setApi(api = data);
    // console.log(data[0]);
    // return (
    //     <div>
    //         {api ? api.map((item) => {
	// 	return (
	// 		<div className="textbox">
	// 			<p>{item.charityName}</p>
    //             <p>{item.cause.causeName}</p>
    //             <p>{item.currentRating.rating}</p>
	// 		</div>
	// 	)
	// }) : null}
    //     </div>
    // )
    
    
    let charity1 = new Charity("orang utan sanctuary", "orang utan", 4);
    let charity2 = new Charity("tiger charity", "tigers", 3);
    let charity3 = new Charity("panda conservation", "pandas", 1);
    let charity4 = new Charity("Rhino conservation project", "rhinos", 2);
    let charity5 = new Charity("tapirs R Us", "tapirs", 4);
    let charity6 = new Charity("stop the ivory trade", "elephants", 3);
    let charity7 = new Charity("save the ice caps", "polar bears", 4);
    let charity8 = new Charity("ethiopian wolf project", "exotic wolves", 4);
    console.log(charity1.rating)
    return (
        <div className="recommend_layout">
            <div className="upper_and_lower_boxes">
                <img src="https://www.orangutan.org.au/static/media/uploads/adoption/mary_adoption727x727.jpg" />
                <div className="textbox">
                    <p>{charity1.name}</p>
                    <p>{charity1.cause}</p>
                    <p>{star_rating(charity1.rating)}</p>
                </div>
            </div>
            <div className="upper_and_lower_boxes">
                <img src="data:image/webp;base64,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" />
                <div className="textbox">
                    <p>{charity2.name}</p>
                    <p>{charity2.cause}</p>
                    <p>{star_rating(charity2.rating)}</p>
                </div>
            </div>
            <div className="upper_and_lower_boxes">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/26/3c/87.jpg" />
                <div className="textbox">
                    <p>{charity3.name}</p>
                    <p>{charity3.cause}</p>
                    <p>{star_rating(charity3.rating)}</p>
                </div>
            </div>
            <div className="middle_boxes">
                <img src="https://www.eurekalert.org/multimedia/pub/web/221627_web.jpg" />
                <div className="textbox">
                    <p>{charity4.name}</p>
                    <p>{charity4.cause}</p>
                    <p>{star_rating(charity4.rating)}</p>
                </div>
            </div>
            <div className="middle_boxes">
                <img src="https://www.ran.org/wp-content/uploads/2020/06/Malayan-Tapir-SMALL.jpg" />
                <div className="textbox">
                    <p>{charity5.name}</p>
                    <p>{charity5.cause}</p>
                    <p>{star_rating(charity5.rating)}</p>
                </div>
            </div> 
            
            <div className="upper_and_lower_boxes">
                <img src="https://images.theconversation.com/files/230552/original/file-20180803-41366-8x4waf.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" />
                <div className="textbox">
                    <p>{charity6.name}</p>
                    <p>{charity6.cause}</p>
                    <p>{star_rating(charity6.rating)}</p>
                </div>
            </div>
            <div className="upper_and_lower_boxes">
                <img src="https://c402277.ssl.cf1.rackcdn.com/photos/18694/images/carousel_small/Polar_bear_with_cubs_in_Wapusk_WW266666.jpg?1582733801" />
                <div className="textbox">
                    <p>{charity7.name}</p>
                    <p>{charity7.cause}</p>
                    <p>{star_rating(charity7.rating)}</p>
                </div>
            </div>
            <div className="upper_and_lower_boxes">
                <img src="https://www.awf.org/sites/default/files/public/media/gallery_0/wildlife/Ethiopian%2520Wolf/EthiopiaWolfConservation.jpg" />
                <div className="textbox">
                    <p>{charity8.name}</p>
                    <p>{charity8.cause}</p>
                    <p>{star_rating(charity8.rating)}</p>
                </div>
            </div>
        
            {/* {handleFetch == [] ? displayPage(charities[0]) : pageLoading()} */}
        </div>
    )
    
    
}

export default Recommended;
