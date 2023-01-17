import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Items() {
    const ITEM_API_URL = `/api/itemData`;
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(ITEM_API_URL)
            .then(type => type.json())
            .then(result => {
                setItems(result)
            })
    },[])
    let circumference = Math.round(100 * Math.PI * 2);
    return (
        <div className="biz-items">
            {
                items.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <h4>{item.itemname}</h4>
                            <div className="pop">
                                <h5>{item.itemname}</h5>
                                <p>{item.description}</p>
                                <p className="progress">
                                    Progress stage: <strong>{item.step}</strong>
                                </p>
                                <div className="pie-chart">
                                    <svg>
                                        <circle className="" cx="100" cy="100" r="100"></circle>
                                        <circle className="" cx="100" cy="100" r="100" strokeDashoffset={`calc(${circumference}px - (${circumference}px*${item.process}/102)`}></circle>
                                    </svg>
                                    <div className="process">
                                        <p>PROCESS</p>
                                        <h2> {item.process}<span>%</span></h2>
                                        <div className="arrow" style={{transform: `rotate(${item.process * 3.6}deg)`}}>→</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <style jsx>{`
                .pie-chart {
                    position: relative;
                    margin: 20px auto;
                    width: 200px;
                    height: 200px;
                }
                .pie-chart svg {
                    position: relative;
                    width: 210px;
                    height: 210px;
                }
                .pie-chart svg circle {
                    width: 100%;
                    height: 100%;
                    fill: none;
                    stroke-width: 10;
                    stroke: rgba(255,255,255,1);
                    transform: translate(5px, 5px);
                    stroke-linecap: round;
                }
                .pie-chart svg circle:nth-child(2) {
                    stroke: var(--sub-color);
                    stroke-dasharray: ${circumference};
                    // transform: rotate(-90deg);
                }
                .arrow {
                    position: absolute;
                    width: 180px;
                    text-align: end;
                }
                .biz-items {
                    display: flex;
                    gap: 20px;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .card {
                    width: 240px;
                    height: 240px;
                    // min-width: 25%;
                    padding: 20px;
                    border: var(--border);
                    border-radius: var(--border-radius);
                    transition: box-shadow .3s ease-in-out;
                }
                .card h4 {
                    text-align: center;
                    line-height: 200px;
                }
                .card:hover {
                    box-shadow: var(--box-shadow);
                }
                .pop {
                    display: none;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    width: 50%;
                    heigh: 400px;
                    min-width: 260px;
                    background-color: var(--glass-color);
                    padding: 24px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    backdrop-filter: blur(20px);
                    transform: translate(-50%, -50%);
                }
                .card:hover .pop {
                    display: block;
                }
                .card p {
                    margin: 12px 20px 0;
                }
                .process {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: var(--main-color);
                    transform: translateX(5px);
                }
                .process p {
                    font-weight: 400;
                }
                .process h2 {
                    font-size: 40px;
                }
                .process h2 span {
                    font-size: 16px;
                }
                .card .process .tooltip {
                    display: inline;
                }
                .card:hover .process .tooltip {
                    display: inline;
                }
                .bar-chart {
                    position: relative;
                    margin: 10px auto;
                    width: 100%;
                    height: 16px;
                    background-color: var(--light-shadow);
                    border-radius: 8px;
                    padding: 2px;
                }
                .bar-chart span.bar {
                    display: block;
                    height: 12px;
                    background-color: var(--main-color);
                    border-radius: 6px;
                }
                @media screen and  (max-width: 480px) {
                    .card {
                        min-width: 100%;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .card li img {
                        box-shadow: 0 0 8px 4px rgba(255,255,255,.25);
                    }
                }
            `}</style>
        </div>
    );
}