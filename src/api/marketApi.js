const BASE_URL = "http://localhost:8000/api/market"

export async function getMarketData(ticker) {
  const res = await fetch(`${BASE_URL}/overview?ticker=${ticker}`)
  return res.json()
}

export async function getHistoricalVolume(ticker){
  const data = await getMarketData(ticker);
  const{date,volume} = data;
  return  date.map((d,i)=>({date:d,volume:volume[i]}));
}
export async function getHistoricalClosePrice(ticker){
  const data = await getMarketData(ticker);
  const{date,close} = data;
  return  date.map((d,i)=>({date:d,close:close[i]}));
}