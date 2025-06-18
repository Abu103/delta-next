import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const apiKey = process.env.YOUTUBE_API_KEY;
  console.log("Loaded API key:", apiKey ? "Yes" : "No");

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "YOUTUBE_API_KEY is missing!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!query) {
    return new Response(
      JSON.stringify({ error: "Missing query parameter 'q'" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: apiKey,
        q: query,
        part: "snippet",
        maxResults: 10,
        type: "video",
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("YouTube API error", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch from YouTube API" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
