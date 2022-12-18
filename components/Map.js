import React, { useState, useEffect } from 'react';

const Map = () => {
    
    useEffect(() => {
        const $script = document.createElement("script");
        $script.async = true;
        $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false`;
        document.head.appendChild($script);

        $script.addEventListener("load", () => {
            window.kakao.maps.load(()=>{
                const seekerUrl = "https://map.kakao.com/link/to/시스어반,37.0123,127.0576"
                const content = 
                    `<div class="arrow_box">
                        <div class="box_logo">
                            <img src="/images/logo.png">
                        </div>
                        <div class="box_seeker">
                            <a href="${seekerUrl}" target="_blank">길찾기</a>
                        </div>
                    </div>
                    <style>
                    .arrow_box {
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        background: #fff;
                        border: 4px solid var(--sub-color);
                        border-radius: 10px;
                    }
                    .arrow_box::after, .arrow_box::before {
                        top: 100%;
                        left: 50%;
                        border: solid transparent;
                        content: "";
                        height: 0;
                        width: 0;
                        position: absolute;
                        pointer-events: none;
                    }
                    .arrow_box::after {
                        border-color: rgba(255,255,255,0);
                        border-top-color: #fff;
                        border-width: 20px;
                        margin-left: -20px;
                    }
                    .arrow_box::before {
                        border-color: rgba(255,255,255,0);
                        border-top-color: var(--sub-color);
                        border-width: 26px;
                        margin-left: -26px;
                    }
                    .box_logo {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        width: 100px;
                        height: 40px;
                        margin: 0 10px;
                    }
                    .box_logo img{
                        width: 100%;
                        height: 26px;
                    }
                    .box_seeker {
                        border-radius: 5px;
                        border: 1px solid var(--main-color);
                        margin: 0 10px;
                    }
                    .box_seeker a {
                        display: inline-block;
                        padding: 5px;
                        vertical-align: middle;
                        color: var(--main-color);
                        font-size: 12px;
                        text-decoration: none;
                    }
                    .box_seeker a:hover {
                        color: white;
                        background-color: var(--main-color);
                    }
                    </style>
                    `
                const position = new window.kakao.maps.LatLng(37.0123, 127.0576)
                const mapContainer = document.getElementById("map");
                const mapOption = {
                    center: position,
                    level: 3
                }
                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: new window.kakao.maps.LatLng(37.0126, 127.05785),
                    content: content,
                    xAnchor: 0.5,
                    yAnchor: 1.3
                });
                const map = new window.kakao.maps.Map(mapContainer, mapOption);
                customOverlay.setMap(map);
            })
        })
    }, []);

    return (
        <>
        <div id="map"></div>
        <style jsx>{`
                #map {
                    width: 800px;
                    height: 400px;
                    border-radius: 24px;
                    border: 1px solid rgba(0,0,0,.5);
                    box-shadow: 0 0 8px 4px rgba(0,0,0,.25);
                }
                @media screen and  (max-width: 480px) {
                    #map {
                        width: 280px;
                        height: 300px;
                        border-radius: 12px;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    #map {
                        border: 1px solid rgba(90,90,90,.5);
                        box-shadow: 0 0 8px 4px rgba(255,255,255,.5);
                    }
                }
            `}</style>
        </>
    );
}

export default Map;