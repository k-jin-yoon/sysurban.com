import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Biz(){
    const [biz, setBiz] = useState([]);
    const API_URL = `/api/bizData`;
    
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
                            <Image src={item.image} alt="business image" width={300} height={206} />
                        </div>
                        )
                } else {
                    return (
                        <div className="biz-field" key={item.id}>
                            <Image src={item.image} alt="business image" width={300} height={206} />
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
                justify-content: center;
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