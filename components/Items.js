import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Items(){
    const ITEM_API_URL = `/api/itemData`;
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(ITEM_API_URL)
        .then(type=>type.json())
        .then(result => {
            setItems(result)
        })
    })
    
    return (
        <div className="biz-items">
            {
                items.map((item)=>{
                    return (
                        <div className="card" key={item.id}>
                            <h4>{item.itemname}</h4>
                            <div className="pop">
                                <p>{item.description}</p>
                                <p className="process">
                                    PROCESS : <span className="tooltip">{item.process}%</span><br/>
                                    진행단계: {item.step}
                                </p>
                                <div className="bar-chart">
                                    <span className="bar" style={{"width":`${item.process}%`}}></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <style jsx>{`
                .biz-items {
                    display: flex;
                    gap: 20px;
                    flex-direction: row;
                    align-items: stretch;
                    justify-content: center;
                }
                .card {
                    padding: 20px;
                    border: var(--border);
                    border-radius: var(--border-radius);
                    transition: box-shadow .3s ease-in-out;
                }
                .card:hover {
                    box-shadow: var(--box-shadow);
                }
                .pop {
                    display: none;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 50%;
                    heigh: 300px;
                    background-color: var(--light-color);
                    padding: 24px;
                    border-radius: var(--border-radius);
                    box-shadow: var(--box-shadow);
                    transform: translate(-50%, -50%);
                }
                .card:hover .pop {
                    display: block;
                }
                .card p {
                    margin: 12px 20px 0;
                }
                .process {
                    position: relative;
                    margin-left: 40px;
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
                    background-color: #ccc;
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