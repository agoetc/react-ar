// Shared types for the app
// ImageObject: represents an image anchored to a geo/location context
export type ImageObject = {
  /** 緯度 */
  latitude: number;
  /** 経度 */
  longitude: number;
  /** 高さ (メートル想定) */
  height: number;
  /** 方位 (度: 0-360 を想定) */
  direction: number;
  /** 画像のパス */
  imagePath: string;
};

