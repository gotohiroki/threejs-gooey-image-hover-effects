// vertexShader.glsl
// position (vec3): メッシュの各頂点の座標
// uv (vec2): テクスチャの座標
// normals (vec3): メッシュが持つ各頂点の法線。

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}