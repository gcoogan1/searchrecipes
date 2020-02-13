import React from 'react';
import style from './Recipe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


const Recipe = ({title, source, image, ingredients, url, time, serving}) => {
    return (
        <div className={style.recipe}>
            <div className={style.image}>
                <img  src={image} alt=""/>   
            </div>
            <div className={style.text}>
                <h1>{title.toUpperCase()}</h1>
            <div>
                    <ul className={style.details}>
                       <li className={style.item}>
                            <FontAwesomeIcon className={style.icon} icon={faClock} /> 
                            <span className={style.value}>{time}</span> <br/>
                            <span className={style.title}>Minutes</span>
                        </li>
                       <li className={style.item}>
                            <FontAwesomeIcon icon={faBookOpen}/>  
                            <span className={style.value}>{ingredients.length}</span> 
                            <span className={style.title}>Ingredients</span>
                        </li>
                       <li className={style.item}>
                            <FontAwesomeIcon icon={faUsers} /> 
                            <span className={style.value}>{serving}</span>
                            <span className={style.title}>Serving</span>
                        </li> 
                    </ul>
            </div>
            <p>{source}</p>
            <button className={style.link}><a href={url} target="_blank" rel="noopener noreferrer">View Recipe</a></button>
               {/* <ul>         //to diplay ingredients
                     {ingredients.map(ingredient => (   //bc ingredints is an array it must be mapped through
                        <h1>{ingredient.length}</h1>
                    ))}
                     </ul>*/}
                
            </div>
        </div>
    );
}

export default Recipe;