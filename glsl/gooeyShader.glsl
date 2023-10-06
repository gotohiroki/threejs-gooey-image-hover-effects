precision mediump float;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

uniform sampler2D uImage;
uniform sampler2D uImageHover;
uniform vec2 uMouse;
uniform float uTime;
uniform vec2 uRes;
uniform float uHover;
uniform float uAlpha;
uniform float uZoomed;

varying vec2 vUv;

//
// この関数を使用することで、円形の形状を生成し、ぼかし効果を調整できます。
// 通常、シェーダープログラム内で図形を描画する際に、特に円形の領域を表現するのに役立ちます。
//

// createCircle 関数は、3つの引数を受け取ります：
// vec2 _st: 2次元の座標ベクトル（通常、テクスチャ座標として使用されます）。
// float _radius: 生成する円の半径。
// float blurriness: 円の境界部分をぼかすための係数。
float createCircle(in vec2 _st, in float _radius, in float blurriness) {
	// 指定された座標 _st を dist という変数にコピーしています。
	// これは、円の中心から各ピクセルまでの距離を計算するために使用されます。
	vec2 dist = _st;

	// dot(dist, dist) は、dist ベクトルの長さを計算しています。これにより、各ピクセルまでの距離の二乗が得られます。通常、円の中心からの距離の二乗を表すために使用されます。

	// dot(dist, dist) * 4.0 は、距離の二乗を4倍しています。これにより、円の半径の2乗に対する比較が行われます。

	// smoothstep 関数は、指定された範囲内での滑らかなトランジションを提供します。具体的には、指定された境界値 _radius-(_radius*blurriness) から _radius+(_radius*blurriness) の間での値を、0から1に線形に変化させます。この値は、円の境界部分におけるぼかし効果を制御します。

	// 1. - smoothstep(...) は、上記で計算された smoothstep の結果を反転させています。これにより、円の内部では1（白）の値が得られ、外部では0（黒）の値が得られるようになり、円形の形状が生成されます。
	return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist) * 4.0);
}

void main() {
	// uRes は uniform 変数で、レンダリングの解像度（画面の幅と高さ）を表しています。
	// PR は定義されている別の変数で、通常はデバイスのピクセル比（Pixel Ratio）を表します（通常は1.0または2.0）。
	// この行は、uRes に PR を乗算して、res という新しい 2 次元ベクトルを生成しています。これにより、ピクセル比を考慮した解像度が得られます。
	vec2 res = uRes * PR;

	// gl_FragCoord はフラグメントシェーダー内で現在のフラグメントの画面座標（ピクセル単位）を表す変数です。
	// res は前述の計算で得られた解像度を表しています。
	// この行は、フラグメントの画面座標を解像度で正規化し、中央を原点とした座標系に変換しています。この変数 st はシェーダープログラム内で座標計算に使用されます。
	vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);

	// この行は、座標 st の y 成分に、uRes の縦横比（高さを幅で割った比率）を考慮して補正をかけています。通常、シェーダー内での座標計算は正規化されているため、アスペクト比を修正する必要があります。
	st.y *= uRes.y / uRes.x;

	// uMouse は uniform 変数で、マウスの現在位置を表す 2 次元ベクトルです。
	// この行は、マウス座標を -0.5 倍しています。これにより、マウスの座標が [-0.5, 0.5] の範囲に正規化されます。
	vec2 mouse = uMouse * -0.5;

	// この行は、マウス座標の y 成分にも、uRes の縦横比を考慮した補正をかけています。
	// これにより、アスペクト比が正しく処理されたマウス座標が得られます。
	mouse.y *= uRes.y / uRes.x;


	//
	// 丸みを帯びたコーナー形状
	//

	// uHover は uniform 変数で、通常は0から1の範囲でマウスホバーの状態を表す値です。
	// この行は、uHover の値を0.1倍して grd という新しい float 型の変数に代入しています。
	// この変数は、マウスホバー状態に応じて変化します。uHover の値が0の場合、grd も0になりますが、uHover の値が1に近づくほど grd も増加します。
	float grd = 0.1 * uHover;

	// smoothstep(a, b, x) は、xがaからbまでの範囲で滑らかなステップ関数を生成する関数で、通常、a < b の場合、xがa未満で0.0、xがb以上で1.0に収束します。
	// vUv は、フラグメントシェーダー内で使用される変数で、現在のフラグメントのテクスチャ座標（UV座標）を表します。
	// vUv.x と vUv.y はそれぞれテクスチャ座標の x 成分と y 成分です。
	
	// sqr の計算は次のようになっています：
	// (smoothstep(0., grd, vUv.x) - smoothstep(1.0, -grd, 1.0, vUv.x)) は、テクスチャ座標 vUv.x に関する条件に基づいて値を計算し、結果は -1 から 1 の範囲に収まります。
	// (smoothstep(0, grd, vUv.y)) は、テクスチャ座標 vUv.y に関する条件に基づいて値を計算し、結果は 0 から 1 の範囲に収まります。
	// これらの計算結果に 100 を掛けて sqr の値を調整し、最後に -10 を減算しています。
	float sqr = 100. * (smoothstep(0., grd, vUv.x) - smoothstep(1.0 - grd, 1.0, vUv.x)) * (smoothstep(0., grd, vUv.y)  - smoothstep(1. - grd, 1., vUv.y)) -10.0;



	//
	// 円
	//

	// st はフラグメントシェーダー内の変数で、現在のフラグメントのテクスチャ座標（UV座標）を表します。
	// mouse は、先前のコードで計算されたマウスの位置情報です。uMouse の値を調整し、テクスチャ上の位置に対するマウスの影響を制御します。
	// この行は、st と mouse を加算して、新しいベクトル circlePos を生成します。これにより、テクスチャ上での円形エフェクトの中心位置が決まります。
	vec2 circlePos = st + mouse;

	// createCircle 関数は、与えられた位置 (circlePos) に対して円形のエフェクトを生成し、そのエフェクトの強度を返す関数です。
	//	この行では、circlePos を中心として、半径が 0.005 * uHover の円形エフェクトを生成し、その強度を circle という変数に代入しています。
	// uHover の値により、円形エフェクトの強度が制御されます。uHover の値が0の場合、circle は0に近づき、uHover の値が1に近づくほど circle の値も増加します。
	float circle = createCircle(circlePos, 0.005 * uHover, 2.0);


	// この行は、同様に circlePos を中心として、半径が 0.04 * uHover の円形エフェクトを生成し、その強度を sqrCircle という変数に代入しています。
	// さらに、sqrCircle の値を50倍しています。これにより、より強力な円形エフェクトが生成され、その影響が増幅されます。
	float sqrCircle = createCircle(circlePos, 0.04 * uHover, 2.0) * 50.0;



	//
	// カスタムノイズエフェクト
	//
	// UV座標 (vUv) と時間 (uTime) 

	// offx は、元のUV座標 vUv.x に対して、さらに sin 関数を用いて新しいX座標を計算します。
	// sin(vUv.y + uTime * 0.01) の部分は、vUv.y に uTime * 0.01 を加えた値に対して正弦を計算しています。これにより、時間の経過に応じてX座標が振動します。
	// 結果として、offx は元のX座標に振動成分が加わった新しいX座標を持つことになります。
	float offx = vUv.x + sin(vUv.y + uTime * 0.01);

	// offy は、元のUV座標 vUv.y から時間 (uTime) に応じた変化と、余弦 (cos) 関数を用いた変化を引いたY座標を計算します。
	// uTime * 0.1 は、時間の経過に伴ってY座標が変化する要素で、時間が経過するとY座標が減少します。
	// cos(uTime * 0.001) * 0.01 は、時間に応じて余弦関数を計算し、その値をY座標に加えることで、Y座標にサイン波のような変化を与えます。
	// これらの要素により、offy は元のY座標から時間に応じた変動を持つことになります。
	float offy = vUv.y - uTime * 0.1 - cos(uTime * 0.001) * 0.01;

	
	// noiseCircle は、3次元ベクトル (offx, offy, uTime * 0.1) * 8.0 を引数としてノイズ関数 snoise3 を呼び出し、その結果を格納します。
	// 引数として渡されるベクトル (offx, offy, uTime * 0.1) * 8.0 は、X座標の offx、Y座標の offy、および時間 uTime を使用して計算されます。このベクトルに8.0を乗算しています。
	// snoise3 関数は、与えられた3次元ベクトルに対してノイズ値を計算し、それを noiseCircle に格納します。
	// 最後に、ノイズの強度を uHover でスケーリングしています。
	float noiseCircle = snoise3(vec3(offx, offy, uTime * 0.1) * 8.0) * uHover;


	// noiseHover は、3次元ベクトル (offx, offy, uTime * 0.1) * 2.0 を引数としてノイズ関数 snoise3 を呼び出し、その結果を格納します。
	// 引数として渡されるベクトル (offx, offy, uTime * 0.1) * 2.0 は、X座標の offx、Y座標の offy、および時間 uTime を使用して計算されます。このベクトルに2.0を乗算しています。
	// snoise3 関数は、与えられた3次元ベクトルに対してノイズ値を計算し、それを noiseHover に格納します。
	// 最後に、ノイズの強度を0.1でスケーリングしています。
	// （これらのノイズ値は、シェーダープログラム内でさまざまな効果やアニメーションに使用され、テクスチャの歪み、波紋、振動などをシミュレートするのに役立ちます。）
	float noiseHover = snoise3(vec3(offx, offy, uTime * 0.1) * 2.0) * 0.1;


	// これは以前に計算された円形の形状を表す値です。createCircle 関数または類似の方法で計算されたものと仮定します。
	// 通常、circle は0から1の範囲の値を取り、円形の形状がどれだけ含まれているかを示します。
	// これは以前に計算されたノイズの値を表す変数です。ノイズ関数によって計算された値と仮定します。
	// 通常、ノイズはランダムな値を含むため、時間の経過に伴う変動が含まれています。
	// この式は、circle と noiseCircle を組み合わせて最終的な値を計算します。
	// circle は5倍され、noiseCircle は3倍されています。これにより、それぞれの影響を調整できます。
	// 1.0 が引かれているため、最終的な値は -1.0 から始まります。
	circle = smoothstep(0.1, 0.8, circle * 5.0 + noiseCircle * 3.0 - 1.0);


	// sqr は以前のコードの一部として計算された値です。具体的な計算方法はコード内で示されていませんが、おそらく vUv と uTime に関連しています。通常、sqr は特定の条件に基づいて0から1の範囲の値を取ります。この値は形状やパターンを表します。
	// sqrCircle は以前のコードの一部として計算された値です。おそらく vUv、uTime、およびノイズに関連しています。通常、sqrCircle は特定の条件に基づいて0から1の範囲の値を取ります。この値は形状やパターンを表すノイズと関連しています。
	// smoothstep(0.0, 0.1, sqr - sqrCircle):
	// この式は、sqr と sqrCircle の差を計算し、その差を指定された範囲 [0.0, 0.1] にスムージング（滑らかに変化）します。
	// sqr から sqrCircle を減算し、差が [0.0, 0.1] の範囲内にある場合、finalMask の値は0から1の範囲にスムージングされます。範囲外の場合、finalMask の値は0または1に近づくことがあります。
	float finalMask = smoothstep(0.0, 0.1, sqr - sqrCircle);


	// custom uv for img 
	// imageUv は、2次元のテクスチャ座標（UV座標）を表す変数です。
	// 通常、この座標はテクスチャをサンプリングするために使用されます。
	vec2 imageUv = vUv;

	// imageUv の値から (0.5, 0.5) を減算しています。これにより、UV座標が中心を原点とする座標系に変換されます。つまり、テクスチャの中心が (0, 0) になります。
	imageUv -= vec2(0.5);

	// uHover という変数を使用して、UV座標のスケールを変更しています。
	// uHover の値に応じて、UV座標のスケールが変動します。uHover が0の場合、スケールは元のままです。uHover が1の場合、スケールは0.8倍になります。つまり、テクスチャが縮小されます。
	imageUv *= 1.0 - uHover * 0.2;

	// mouse という変数を使用して、UV座標にマウス位置の影響を加えています。
	// mouse の値に応じて、UV座標が変化します。uHover が0の場合、変化はありません。uHover が1の場合、mouse の値がUV座標に追加され、テクスチャがマウスに対応して移動します。
	imageUv += mouse * 0.1 * uHover;

	// imageUv の値に (0.5, 0.5) を加算しています。これにより、UV座標が元の座標系に戻され、テクスチャの中心が (0.5, 0.5) になります。
	imageUv += vec2(0.5);


	// imageHoverUv は、2次元のテクスチャ座標（UV座標）を表す変数です。通常、この座標はテクスチャをサンプリングするために使用されます。
	vec2 imageHoverUv = vUv;

	// imageHoverUv の値から (0.5, 0.5) を減算しています。これにより、UV座標が中心を原点とする座標系に変換されます。つまり、テクスチャの中心が (0, 0) になります。
	imageHoverUv -= vec2(0.5);

	// uHover と uZoomed という変数を使用して、UV座標のスケールを変更しています。
	// uHover は、通常のスケール変更に関与し、uZoomed はズーム効果に関与します。
	// 式 1.0 * uHover * 0.1 + uZoomed の結果に基づいて、UV座標のスケールが変動します。uHover と uZoomed の値に応じて、スケールが変化します。
	imageHoverUv *= 1.0 * uHover * 0.1 + uZoomed;

	// imageHoverUv の値に (0.5, 0.5) を加算しています。これにより、UV座標が元の座標系に戻され、テクスチャの中心が (0.5, 0.5) になります。
	imageHoverUv += vec2(0.5);

	vec4 color = vec4(0.0314, 0.0314, 0.2235, 1.0);

	// img

	// テクスチャ uImage から imageUv で指定された座標の色情報を取得し、image 変数に格納します。これにより、元のイメージが取得されます。
	vec4 image = texture2D(uImage, imageUv);

	// vec4 imageHover = texture2D(uImageHover, imageHover + vec2(noiceHover) * uHover);：テクスチャ uImageHover から imageHover 変数の座標に色情報を取得し、 imageHover 変数に格納します。uHover と noiseHover はアルファブレンディングや拡大などの操作に使用されます。
	vec4 imageHover = texture2D(uImageHover, imageHoverUv + vec2(noiseHover) * uHover);

	// mix(imageHover, imageHover * color, 0.8 * (1.0 - uZoomed));：imageHover 変数に対して、色情報に color を乗算することで、色を変更します。また、この変更を uZoomed によって制御し、拡大時に透明度を調整します。
	imageHover = mix(imageHover, imageHover * color, 0.8 * (1.0 - uZoomed));

	// ：最終的な合成を行います。元のイメージ image と処理済みの imageHover を、circle と uZoomed の値に基づいてブレンドします。clamp 関数は値の範囲を指定し、結果が0から1の範囲に収まるようにします。これにより、最終的なイメージが合成されます。
	vec4 finalImage = mix(image, imageHover, clamp(circle + uZoomed, 0., 1.0));


	// この行では、gl_FragColor に最終的な出力色を設定しています。vec4 は4つの浮動小数点数からなるベクトルを表します。
	// finalImage.rgb は、前のステップで計算された最終的なイメージのRGBカラーです。
	// uAlpha は透明度を表すユニフォーム変数で、この色に適用される透明度を指定します。
	// finalMask はマスク（0から1の値）で、通常はアルファブレンディングを制御するために使用されます。この値によって、ピクセルの透明度が変更されます。
	gl_FragColor = vec4(finalImage.rgb, uAlpha * finalMask);
}