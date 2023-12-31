// この行では、投影行列を表す projectionMatrix という一様変数を宣言しています。
// 一様変数は、シェーダープログラム外部から提供される値であり、ここでは行列を受け取ります。
uniform mat4 projectionMatrix;

// 同様に、ビュー行列を表す viewMatrix という一様変数を宣言しています。
uniform mat4 viewMatrix;

// モデル行列を表す modelMatrix という一様変数を宣言しています。
// これは、オブジェクトの位置、回転、スケールなどの情報を持つ行列です。
uniform mat4 modelMatrix;

// シェーダーに頂点座標情報を提供する属性変数 position を宣言しています。
// 各頂点は3次元の位置情報を持っており、これは頂点の実際の位置を表します。
attribute vec3 position;

// シェーダーにテクスチャ座標情報を提供する属性変数 uv を宣言しています。
// 各頂点には2次元のテクスチャ座標情報があり、これはテクスチャマッピングに使用されます。
attribute vec2 uv;

// 頂点シェーダーからフラグメントシェーダーにデータを受け渡すための vUv という変数を宣言しています。ここではテクスチャ座標情報をフラグメントシェーダーに渡すために使用されます。
varying vec2 vUv;

void main() {

  // メインのシェーダー関数が始まります。この関数は各頂点ごとに呼び出され、頂点の位置情報やテクスチャ座標情報を処理します。
  vUv = uv;

  // 最後に、頂点の位置情報 position を投影行列、ビュー行列、モデル行列と乗算して、gl_Position に代入しています。
  // これにより、頂点の最終的なスクリーン座標が計算され、これを使って頂点が画面上でどの位置に描画されるかが決定されます。
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}