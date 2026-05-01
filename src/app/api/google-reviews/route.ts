import { NextResponse } from "next/server";

export async function GET() {
  const cid = "CQ7zwz2MlpOLEAE"; // ton identifiant court
  const apiKey = process.env.GOOGLE_API_KEY;

  // 1) On convertit le CID en Place ID
  const lookupUrl = `https://maps.googleapis.com/maps/api/place/details/json?cid=${cid}&key=${apiKey}`;
  const lookupResponse = await fetch(lookupUrl);
  const lookupData = await lookupResponse.json();

  const placeId = lookupData.result?.place_id;

  if (!placeId) {
    return NextResponse.json({ error: "Impossible de récupérer le Place ID." });
  }

  // 2) On récupère les avis Google
  const reviewsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;
  const reviewsResponse = await fetch(reviewsUrl);
  const reviewsData = await reviewsResponse.json();

  return NextResponse.json(reviewsData.result?.reviews || []);
}
