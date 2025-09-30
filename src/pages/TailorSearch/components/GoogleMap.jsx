import { APIProvider } from "@vis.gl/react-google-maps";

function GoogleMap() {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded")}
    >
      <h1>Test</h1>
    </APIProvider>
  );
}

export default GoogleMap;
