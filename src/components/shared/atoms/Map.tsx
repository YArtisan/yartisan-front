import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  coords: { lon: number; lat: number };
}

function ChangeView ({
  center,
  zoom,
}: {
  center: LatLngExpression;
  zoom: number;
}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map ({ coords, className, ...props }: IProps) {
  return (
    <div id="map" className={className}>
      <MapContainer
        {...props}
        center={[coords.lat, coords.lon]}
        zoom={15}
        scrollWheelZoom
        style={{ height: "300px", width: "100%" }}
      >
        <ChangeView center={[coords.lat, coords.lon]} zoom={15} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords.lat, coords.lon]}></Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
