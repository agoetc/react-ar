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

  const base: ImageObject[] = [
    { latitude: 35.681236, longitude: 139.767125, height: 1.6, direction: 10, imagePath: images[0] }, // Tokyo Station
    { latitude: 34.693738, longitude: 135.502165, height: 2.0, direction: 45, imagePath: images[1] }, // Osaka
    { latitude: 35.170915, longitude: 136.881537, height: 1.2, direction: 90, imagePath: images[2] }, // Nagoya
    { latitude: 43.061936, longitude: 141.354292, height: 3.0, direction: 135, imagePath: images[3] }, // Sapporo
    { latitude: 33.590355, longitude: 130.401716, height: 0.8, direction: 180, imagePath: images[4] }, // Fukuoka
    { latitude: 26.212401, longitude: 127.680932, height: 2.5, direction: 225, imagePath: images[5] }, // Naha
    { latitude: 35.011564, longitude: 135.768149, height: 1.0, direction: 270, imagePath: images[0] }, // Kyoto
    { latitude: 38.268839, longitude: 140.872103, height: 1.8, direction: 300, imagePath: images[1] }, // Sendai
    { latitude: 36.341813, longitude: 140.446793, height: 2.2, direction: 320, imagePath: images[2] }, // Mito
    { latitude: 34.385203, longitude: 132.455293, height: 1.4, direction: 350, imagePath: images[3] }, // Hiroshima
  ];

  return base;
}

export default getMockImageObjects;
