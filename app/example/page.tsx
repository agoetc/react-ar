import type { ImageObject } from '@/types';
import { getMockImageObjects } from '@/mocks/imageObjects';

const TARGET = { latitude: 34.46956577518406, longitude: 135.43694934299967 };

function haversineKm(a: { latitude: number; longitude: number }, b: { latitude: number; longitude: number }) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 6371; // km
  const dLat = toRad(b.latitude - a.latitude);
  const dLon = toRad(b.longitude - a.longitude);
  const la1 = toRad(a.latitude);
  const la2 = toRad(b.latitude);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export default function ExamplePage() {
  const all: ImageObject[] = getMockImageObjects();
  const withDist = all
    .map((d) => ({ ...d, distanceKm: haversineKm(TARGET, { latitude: d.latitude, longitude: d.longitude }) }))
    .sort((a, b) => a.distanceKm - b.distanceKm);

  const nearby = withDist.filter((d) => d.distanceKm <= 100); // 100km以内
  const data = (nearby.length ? nearby : withDist).slice(0, 6); // 最大6件表示

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">Nearby ImageObjects Example</h1>
      <p className="text-sm text-gray-600">
        Target lat/long: {TARGET.latitude}, {TARGET.longitude}
      </p>
      <p className="text-sm text-gray-600 mb-6">Showing items within 100km (falling back to nearest).</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, idx) => (
          <div key={idx} className="rounded border p-4">
            <div className="mb-3 aspect-video w-full overflow-hidden rounded bg-gray-100">
              {/* Using img for simplicity to avoid specifying intrinsic sizes */}
              <img
                src={item.imagePath}
                alt={`mock-${idx}`}
                className="h-full w-full object-cover"
              />
            </div>
            <dl className="text-sm">
              <div className="flex justify-between"><dt className="font-medium">latitude</dt><dd>{item.latitude}</dd></div>
              <div className="flex justify-between"><dt className="font-medium">longitude</dt><dd>{item.longitude}</dd></div>
              <div className="flex justify-between"><dt className="font-medium">height</dt><dd>{item.height}</dd></div>
              <div className="flex justify-between"><dt className="font-medium">direction</dt><dd>{item.direction}</dd></div>
              <div className="flex justify-between"><dt className="font-medium">imagePath</dt><dd className="truncate max-w-[12rem]">{item.imagePath}</dd></div>
              {'distanceKm' in item && (
                <div className="flex justify-between"><dt className="font-medium">distance</dt><dd>{item.distanceKm.toFixed(1)} km</dd></div>
              )}
            </dl>
          </div>
        ))}
      </div>
    </main>
  );
}
