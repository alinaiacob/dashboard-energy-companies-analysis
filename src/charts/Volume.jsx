import React, {useEffect, useState} from 'react';
import {getHistoricalVolume} from "../api/marketApi.js";
import {Bar, BarChart, Tooltip, XAxis, YAxis} from "recharts";

const Volume = ({ticker="NXT"}) => {
    const[volumeData, setVolumeData]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await getHistoricalVolume(ticker);
                setVolumeData(data);
                setLoading(false);
                console.log(volumeData);
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[ticker]);
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <BarChart width={600} height={300} data={volumeData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="volume" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Volume;