import '../styles/recommended.css';
import React, {useEffect, useState} from 'react';
import Axios from 'react';




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
    
    
    let charity1 = new Charity("orangutan Foundation International", "wildlife conservation", 4);
    let charity2 = new Charity("Tiger Haven", "wildlife conservation", 2);
    let charity3 = new Charity("Pandas International", "protection of endangered species", 4);
    let charity4 = new Charity("International Rhino Foundation", "wildlife conservation", 4);
    let charity5 = new Charity("Diane Fossey Gorilla Fund International", "wildlife conservation", 4);
    let charity6 = new Charity("The Elephant Sanctuary", "wildlife conservation", 4);
    let charity7 = new Charity("Polar Bears International", "wildlife conservation", 4);
    let charity8 = new Charity("friends of the sea otter", "wildlife santuary", null);
    
    return (
        <div className="recommend_layout">
            <div className="upper_and_lower_boxes">
            <img alt = "orangutan" src="https://www.orangutan.org.au/static/media/uploads/adoption/mary_adoption727x727.jpg" />
            <a href="https://orangutan.org/">
                <div className="textbox">
                    <p>{charity1.name}</p>
                    <p>{charity1.cause}</p>
                    <p>{star_rating(charity1.rating)}</p>
                </div>
            </a>
            </div>
            <div className="upper_and_lower_boxes">
            <a href = "http://www.tigerhaven.org/index.asp">
                <img src="https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg" />
                <div className="textbox">
                    <p>{charity2.name}</p>
                    <p>{charity2.cause}</p>
                    <p>{star_rating(charity2.rating)}</p>
                </div>
                </a>
            </div>
            <div className="upper_and_lower_boxes">
            <a href = "https://www.pandasinternational.org/">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/26/3c/87.jpg" />
                <div className="textbox">
                    <p>{charity3.name}</p>
                    <p>{charity3.cause}</p>
                    <p>{star_rating(charity3.rating)}</p>
                </div>
            </a>
            </div>
            <div className="middle_boxes">
            <a href = "https://rhinos.org/">
                <img src="https://www.eurekalert.org/multimedia/pub/web/221627_web.jpg" />
                <div className="textbox">
                    <p>{charity4.name}</p>
                    <p>{charity4.cause}</p>
                    <p>{star_rating(charity4.rating)}</p>
                </div>
            </a>
            </div>
            <div className="middle_boxes">
            <a href = "https://gorillafund.org/">
                <img src="https://i.natgeofe.com/n/23a85f5b-32be-4bc1-af13-3e1a403b8557/mountain-gorilla_thumb.jpg" />
                <div className="textbox">
                    <p>{charity5.name}</p>
                    <p>{charity5.cause}</p>
                    <p>{star_rating(charity5.rating)}</p>
                </div>
            </a>
            </div> 
            
            <div className="upper_and_lower_boxes">
            <a href = "https://www.elephants.com/">
                <img src="https://images.theconversation.com/files/230552/original/file-20180803-41366-8x4waf.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" />
                <div className="textbox">
                    <p>{charity6.name}</p>
                    <p>{charity6.cause}</p>
                    <p>{star_rating(charity6.rating)}</p>
                </div>
            </a>
            </div>
            <div className="upper_and_lower_boxes">
            <a href = "https://polarbearsinternational.org/">
                <img src="https://c402277.ssl.cf1.rackcdn.com/photos/18694/images/carousel_small/Polar_bear_with_cubs_in_Wapusk_WW266666.jpg?1582733801" />
                <div className="textbox">
                    <p>{charity7.name}</p>
                    <p>{charity7.cause}</p>
                    <p>{star_rating(charity7.rating)}</p>
                </div>
            </a>
            </div>
            <div className="upper_and_lower_boxes">
            <a href = "https://www.facebook.com/friendsoftheseaotter/">
                <img src="https://cosmosmagazine.com/wp-content/uploads/2020/02/190624_sea_otters_full-1440x863.jpg" />
                <div className="textbox">
                    <p>{charity8.name}</p>
                    <p>{charity8.cause}</p>
                    <p>{star_rating(charity8.rating)}</p>
                </div>
            </a>
            </div>
        

        </div>
    )
    
    
}

export default Recommended
