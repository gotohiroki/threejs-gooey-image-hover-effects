// fragmentShader.glsl
#pragma glslify: snoise2 = require('glsl-noise/simplex/2d')
#pragma glslify: snoise3 = require('glsl-noise/simplex/3d')

varying vec2 vUv;

uniform vec2 u_mouse;
uniform vec2 u_res;
uniform float u_time;
uniform sampler2D u_image;
uniform sampler2D u_imagehover;

float circle(in vec2 _st, in float _radius, in float blurriness) {
  vec2 dist  = _st;
  return 1. -smoothstep(_radius - (_radius * blurriness), _radius + (_radius * blurriness), dot(dist, dist) * 4.0);
}

void main() {
  // PR定数を渡すことでデバイスの比率を管理する。
  vec2 res = u_res * PR;
  vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);

  // ヒント：座標の良い比率を保つには、以下の式を使う。
  st.y *= u_res.y / u_res.x;

  // マウス座標を再調整する
  vec2 mouse = u_mouse * -0.5;

  // ヒント2：マウスも同じようにする
  mouse.y *= u_res.y / u_res.x;
  mouse *= -1.0;

  // サークル
  vec2 circlePos = st + mouse;
  float c = circle(circlePos, 0.15, 2.0) * 2.5;

  // ノイズ
  float offx = vUv.x + sin(vUv.y + u_time * 1.0);
  float offy = vUv.y - u_time * 0.1 - cos(u_time * 0.001) * 0.01;
  // float n = snoise2(vec2(offx, offy) * 5.0) * 1.0;
  float n = snoise3(vec3(offx, offy, u_time * .1) * 8.0) - 2.0;

  float finalMask = smoothstep(0.4, 0.5, n + pow(c, 2.0));

  // テクスチャー
  vec4 image = texture2D(u_image, vUv);
  vec4 hover = texture2D(u_imagehover, vUv);
  vec4 finalImage = mix(image, hover, finalMask);

  // gl_FragColor = vec4(vec3(c), 1.0);
  // gl_FragColor = vec4(vec3(n), 1.0);
  // gl_FragColor = vec4(vec3(finalMask), 1.0);
  gl_FragColor = finalImage;

}

