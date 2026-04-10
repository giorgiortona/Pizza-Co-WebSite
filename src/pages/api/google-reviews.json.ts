import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.GOOGLE_MAPS_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return new Response(JSON.stringify({ error: "Variabili ambiente mancanti (GOOGLE_MAPS_API_KEY o GOOGLE_PLACE_ID)" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&reviews_sort=newest&fields=name,rating,user_ratings_total,reviews,url&key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  
  if (data.result) {
    data.result.place_id = placeId;
  } else if (data.error_message) {
    console.warn("⚠️ [API endpoint] ERRORE API Google Reviews:", data.error_message);
  }

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json"
    }
  });
};
