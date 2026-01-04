import React, {useEffect, useState} from 'react';
import {getHistoricalClosePrice, getMarketData} from "../api/marketApi.js";
import {Line, LineChart, XAxis, YAxis, BarChart, Tooltip, Bar} from "recharts";

const ClosePrice = ({ticker="NXT"}) => {
    const [priceData, setPriceData]=useState([]);
    const [loading, setLoading] = useState(true);
   const getData=async()=>{
       const result = await getMarketData(ticker)
       console.log(result)
   }
   getData();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const data = await getHistoricalClosePrice(ticker);
                console.log("data from close price",data);
                setPriceData(data);
                setLoading(false);
                console.log("price data",priceData);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[ticker])
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <BarChart data={priceData} width={800} height={600}>
            <XAxis dataKey="date" />
                     <YAxis/>
                <Tooltip/>
                <Bar dataKey="close" fill="#8884d8" />
            </BarChart>
        </div>
            

    );
};

export default ClosePrice;