import recipe from './recipe.png';
import recipe2 from './recipe2.png';
import portfolio from './portfolio.png';
import mentor from './mentor.png';
import burger from './Burger.png';
import burger1 from './Burger1.png';
import ems from './ems.png';
import ems2 from './ems2.png';
import mentor2 from './mentor2.png';

import Slider from './Slider';

function images () {
    const images = [
        {
            image: <img src={recipe} alt=""/>
        },
    
        {
            image: <img src={recipe2} alt="" className="recipe"/>
        },
    
        {
            image: <img src={portfolio} alt=""/>
        },
    
        {
            image: <img src={mentor} alt=""/>
        },
    
        {
            image: <img src={mentor2} alt=""/>
        },
    
        {
            image: <img src={burger1} alt=""/>
        },
    
        {
            image: <img src={burger} alt=""/>
        },
    
        {
            image: <img src={ems} alt=""/>
        },
    
        {
            image: <img src={ems2} alt=""/>
        }
    ];

    return (
        <Slider slides={images} />
    );
}

export default images;