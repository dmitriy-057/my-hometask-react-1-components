import React from "react";
import "./Statistics.css";

function Statistics (props) {
    const {title,stats} = props;
return(
<section className="statistics">
    {title.length > 0 ? <h2 className="title">{title}</h2> : null}

    <ul className="statList">
        {stats.map(stat => 
         <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
         </li>    
        )}
    </ul>
</section>
)
};

export default Statistics;