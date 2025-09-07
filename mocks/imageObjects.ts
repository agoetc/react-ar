import type { ImageObject } from '@/types';

/**
 * Returns 10 mock ImageObject items for development/testing.
 * - latitude/longitude: various real-world-ish coords
 * - height: meters
 * - direction: degrees (0–360)
 * - imagePath: paths under `/public`
 */
export function getMockImageObjects(): ImageObject[] {
  const images = [
    '/image/bg-head-main-is-shooting.jpg',
    '/image/car_magichand.png',
    '/image/cooking04_niru.png',
    '/image/euohonium.jpg',
    '/image/houchou_reitou.png',
    '/image/mainimg03.png',
  ];

  // Base coordinates: 34.469591, 135.436995 (User location)
  // 1 degree latitude ≈ 111km, 1 degree longitude ≈ 91km (at this latitude)
  // 1 meter latitude ≈ 0.000009 degrees, 1 meter longitude ≈ 0.000011 degrees
  const baseLat = 34.469591;
  const baseLon = 135.436995;
  
  const base: ImageObject[] = [
    // 5 meters north
    { latitude: baseLat + 0.000045, longitude: baseLon, height: 1.6, direction: 180, imagePath: images[0], name: "北の絵画" },
    // 3 meters northeast  
    { latitude: baseLat + 0.000027, longitude: baseLon + 0.000033, height: 2.0, direction: 225, imagePath: images[1], name: "北東の絵画" },
    // 4 meters east
    { latitude: baseLat, longitude: baseLon + 0.000044, height: 1.2, direction: 270, imagePath: images[2], name: "東の絵画" },
    // 6 meters southeast
    { latitude: baseLat - 0.000054, longitude: baseLon + 0.000066, height: 1.8, direction: 315, imagePath: images[3], name: "南東の絵画" },
    // 3 meters south
    { latitude: baseLat - 0.000027, longitude: baseLon, height: 2.5, direction: 0, imagePath: images[4], name: "南の絵画" },
    // 7 meters southwest
    { latitude: baseLat - 0.000063, longitude: baseLon - 0.000077, height: 1.0, direction: 45, imagePath: images[5], name: "南西の絵画" },
    // 2 meters west
    { latitude: baseLat, longitude: baseLon - 0.000022, height: 1.4, direction: 90, imagePath: images[0], name: "西の絵画" },
    // 8 meters northwest
    { latitude: baseLat + 0.000072, longitude: baseLon - 0.000088, height: 2.2, direction: 135, imagePath: images[1], name: "北西の絵画" },
    // 1.5 meters up close north
    { latitude: baseLat + 0.000014, longitude: baseLon, height: 1.7, direction: 180, imagePath: images[2], name: "目の前の絵画" },
    // 10 meters far northeast
    { latitude: baseLat + 0.000090, longitude: baseLon + 0.000110, height: 3.0, direction: 225, imagePath: images[3], name: "遠くの絵画" },
  ];

  return base;
}

export default getMockImageObjects;
