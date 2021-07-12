import React from "react";
import PropTypes from 'prop-types';
import './Statistics.css';
   
const Statistics = ({ title , stats }) => {
    return (
        <section className="statistics">
            {title ? (<h2 className="title">{title}</h2>) :  null }
            <ul className="stat-list">
                {stats.map(stat => {
                    let color = randomcolor();
                    return (
                    <li className="item" style={{backgroundColor: color}} key={stat.id} >
                        <span className="label">{stat.label}  </span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                 )
                })}
            </ul>
        </section>
    );
 };
Statistics.defaultProps = {
    title: ''
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}
function randomcolor() { 
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
}
export default Statistics;
