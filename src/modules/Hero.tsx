import React, { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Hero(){
    const [scrollY, setScrollY] = useState(0);

    const track = useRef(0);
    const prevPercent = useRef(0);
    const prevScroll = useRef(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        track.current = e.clientY;
    }

    const handleMouseGone = (e: React.MouseEvent<HTMLDivElement>) => {
        track.current = 0;
        prevPercent.current = prevScroll.current;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if(track.current === 0) return;

        const diff = track.current - e.clientY;
        const maxDiff = window.innerHeight * 2;

        const newPercent = (diff / maxDiff) * 100;
        const nextPercent = Math.max(0, Math.min(75.5, prevPercent.current + newPercent));

        prevScroll.current = nextPercent;

        setScrollY(nextPercent);
    }

    return(
        <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseGone}
            onMouseLeave={handleMouseGone}
            className={`max-w-96 min-w-96 pt-[7%] min-h-full bg-red-200 float-right mr-[20%] pb-[5%] flex flex-col items-center space-y-8 duration-[1200ms] animate-forward`}
            style={{ transform: `translateY(-${scrollY}%)` }}
        >
            <div draggable={false} className="bg-green-300 min-h-[480px] max-w-80 min-w-80">
                1
            </div>
            <div draggable={false} className="bg-green-300 min-h-[480px] max-w-80 min-w-80">
                2
            </div>
            <div draggable={false} className="bg-green-300 min-h-[480px] max-w-80 min-w-80">
                3
            </div>
            <div draggable={false} className="bg-green-300 min-h-[480px] max-w-80 min-w-80">
                4
            </div>
            <div draggable={false} className="bg-green-300 min-h-[480px] max-w-80 min-w-80">
                5
            </div>
        </div>
    )
}