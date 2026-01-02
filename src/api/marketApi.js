const BASE_URL = "http://localhost:8000/api/market"

export async function getMarketData(ticker) {
  const res = await fetch(`${BASE_URL}/overview?ticker=${ticker}`)
  return res.json()
}