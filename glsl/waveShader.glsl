precision mediump float;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

uniform sampler2D uImage; // メインの画像テクスチャ。
uniform sampler2D uImageHover; // ホバー状態の画像テクスチャ。
uniform float uTime; // シェーダー内の時間の経過を制御するための時間変数。
uniform float uHover; // ホバー状態の強さを制御する変数。
uniform float uAlpha; // アルファ値（透明度）を制御する変数。
uniform float uZoomed; // ズーム状態を制御する変数。

varying vec2 vUv; // フラグメントシェーダーに渡されるUV座標。

void main(){
	float time = uTime * 0.05; // シェーダー内で使用する時間を計算します。

	// custom noise effect
	float offx = vUv.x * 0.3 - time * 0.3; // カスタムノイズエフェクトを生成するために、UV座標 (vUv) を基に offx と offy を計算しています。これらの値はノイズを生成するために使用されます。
	float offy = vUv.y + sin(vUv.x * 5.0) * 0.1 - sin(time * 0.5) + snoise3(vec3(vUv.x, vUv.y, time) * 0.5);

	// snoise3() 関数を使用して、カスタムノイズを生成しています。
	// ノイズの生成には offx、offy、および time の組み合わせが使用されます。
	offx += snoise3(vec3(offx, offy, time) * 5.0) * 0.3;
	offy += snoise3(vec3(offx, offy, time) * 0.3) * 0.1;

	// nc と nh という変数にそれぞれ異なるノイズが格納されます。
	float nc = snoise3(vec3(offx, offy, time * 0.5) * 8.0) * uHover;
	float nh = snoise3(vec3(offx, offy, time * 0.5) * 2.0) * 0.03;

	nh *= smoothstep(nh, 0.5, 0.6);

	// 画像ブレンディング:
	// vec4 image と vec4 imageHover に、それぞれメイン画像テクスチャとホバー画像テクスチャの色情報が格納されます。
	vec4 image = texture2D(uImage, vUv + vec2(nc + nh) * uHover);
	vec4 imageHover = texture2D(uImageHover, vUv + vec2(nc + nh) * uHover);

	// 最終的な画像ブレンディング:
	// mix() 関数を使用して、メイン画像 (image) とホバー画像 (imageHover) の間でブレンディングが行われ、finalImage に格納されます。clamp() 関数を使用して、値が 0 から 1 までの範囲に制限されます。
	vec4 finalImage = mix(image, imageHover, clamp(nh + uHover + uZoomed, 0.0, 1.0));

	// gl_FragColor には、最終的なピクセルの色情報が設定されます。
	// vec4(finalImage.rgb, uAlpha) を使用して、RGBの色情報にアルファ値を適用しています。
	gl_FragColor = vec4(finalImage.rgb, uAlpha);


	// このシェーダーは、ホバー状態やカスタムノイズエフェクトなどを使用して、テクスチャをブレンディングして最終的なピクセルの色を生成します。このシェーダーを使用するコンテキストに応じて、異なるテクスチャやパラメータを設定することで、さまざまな視覚効果を実現できます。
}