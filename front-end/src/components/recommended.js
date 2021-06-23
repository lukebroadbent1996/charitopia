import '../styles/recommended.css';
import React, {useEffect, useState} from 'react';
import Axios from 'react';

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_ID = process.env.REACT_APP_API_ID;
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

const Recommended = () => {
    let [api, setApi] = useState([]);

    useEffect(() => {
        const handleFetch = async () => {
            const response = await fetch (`https://api.data.charitynavigator.org/v2/Organizations?app_id=42522c52&app_key=b7069e568f80ed5b08a1857d797719f4&search=Animals&rated=true&sort=RATING%3ADESC`)
            const data = await response.json();
            setApi(data);
        }

        handleFetch();
    }, []);


    
    return (
        <div>
            {api.length > 0 ? api.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.charityName}</p>
                    </div>
                )
            }) : <h1>Loading...</h1>}
        </div>
    )
    
    
}

export default Recommended;
