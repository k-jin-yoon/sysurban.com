import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Biz(){
    const [biz, setBiz] = useState([]);
    const API_URL = `/api/bizData`;
    let [bgMode, setBgMode] = useState(true)
    useEffect(() => {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setBgMode(systemPrefersDark)
    })
    
    useEffect(()=>{
        fetch(API_URL)
        .then(type=>type.json())
        .then(result => {
            setBiz(result)
        })
    },[])
    
    return (
        <div className="biz">
        {
            biz.map((item)=>{
                if(item.id % 2 == 0){
                    return (
                        <div className="biz-field" key={item.id}>
                            <h2>{item.title}</h2>
                            {
                            bgMode === true
                            ?<Image src={item.image_dark} alt={item.title} width={200} height={118} />
                            :<Image src={item.image_light} alt={item.title} width={200} height={118} />
                            }
                        </div>
                        )
                } else {
                    return (
                        <div className="biz-field" key={item.id}>
                            {
                            bgMode === true
                            ?<Image src={item.image_dark} alt="business image" width={200} height={118} />
                            :<Image src={item.image_light} alt="business image" width={200} height={118} />
                            }
                            <h2>{item.title}</h2>
                        </div>
                    )
                }
            })
        }
        <style jsx>{`
            .biz {
                display: flex;
                gap: 20px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .biz-field {
                display: flex;
                gap: 20px;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                padding: 24px;
                border: var(--border);
            }
            
            @media screen and  (max-width: 660px) {
                .biz-field {
                    flex-direction: column;
                }
            }
            @media (prefers-color-scheme: dark) {
                
            }
        `}</style>
        </div>
    );
}