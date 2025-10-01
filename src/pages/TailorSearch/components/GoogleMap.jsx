import { APIProvider, Map } from "@vis.gl/react-google-maps";

function GoogleMap() {
  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      onLoad={() => console.log("Maps API has loaded")}
    >
      <Map
        defaultZoom={6}
        defaultCenter={{ lat: -42.48101284616512, lng: 172.16160268498984 }}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
        onCameraChanged={(ev) => {
          console.log("Camera changed:", ev);
          console.log("center:", ev.detail.center);
          console.log("zoom", ev.detail.zoom);
        }}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      ></Map>
    </APIProvider>
  );
}

export default GoogleMap;
