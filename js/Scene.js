import * as THREE from "three";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Tile from "./Tile";

import gooeyShader from "../glsl/gooeyShader.glsl";
import trippyShader from "../glsl/trippyShader.glsl";
import revealShader from "../glsl/revealShader.glsl";
import waveShader from "../glsl/waveShader.glsl";
import shapeShader from "../glsl/shapeShader.glsl";

import Detail from "./Detail";

gsap.registerPlugin(ScrollTrigger);

const shaders = [
  trippyShader,
  shapeShader,
  gooeyShader,
  waveShader,
  revealShader,
];

export default class Scene {
  constructor(container, textures) {
    this.textures = textures;
    this.container = container;
    [...this.tilesDom] = document.querySelectorAll(".slideshow__list__element");

    this.scroll = 0;
    this.scrollInit = false;

    this.start();
  }

  start() {
    // scene
    this.scene = new THREE.Scene();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scroll = 0;
    this.previousScroll = 0;
    this.tilesMaterial = [];

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.container,
      antialias: true,
      alpha: true,
    });

    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.detail = new Detail(this);

    this.initCamera();
    this.initScroll();
    this.initTiles();
    this.initScrollAnimation();
    this.onResize();
    this.update();
  }

  initCamera() {
    this.perspective = 800;
    const fov =
      2 * Math.atan(this.height / 2 / this.perspective) * (180 / Math.PI);

    this.camera = new THREE.PerspectiveCamera(
      fov,
      this.width / this.height,
      1,
      1000
    );
    this.camera.position.z = this.perspective;
  }

  initScroll() {
    const lenis = new Lenis({
      // lerp: 0.05,
      // duration: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.scrollTo(0);

    this.lenis = lenis;

    this.onScroll();
  }

  initTiles() {
    this.tiles = this.tilesDom.map(
      (el, i) => new Tile(el, this, i, shaders[i])
    );
  }

  initScrollAnimation() {
    const container = document.querySelector(".slideshow__container");
    const pageTile = document.querySelector(".page__title");
    const progressBar = document.querySelector(".slideshow__progress--bar");

    // this.tilesDom 配列内の各要素の offsetWidth（要素の幅）を合計して、this.hozizonalScrollX 変数に代入するためのコードです。また、条件に応じて合計に補正を加えています。

    // .reduce メソッドを使用して、this.tilesDom 配列の各要素に対して処理を行います。

    // .reduce メソッドのコールバック関数内で、acc は累積の合計値を表し、curr は現在の要素を表します。
    // コールバック関数では、各要素の offsetWidth を累積に加えていきます。

    // 最初の reduce メソッドの引数で、初期値として条件に応じて幅の補正値を設定しています。
    // 条件は、this.width が 768 ピクセルより大きい場合には this.width * 0.1 を初期値として設定し、
    // それ以外の場合には -this.width * 0.1 を初期値として設定します。この初期値が最初の acc の値として使われます。

    // 結果として、this.hozizonalScrollX には、this.tilesDom 配列内の各要素の幅を合計した値が格納され、
    // 条件に応じて補正が加えられています。この値は、水平方向のスクロールなどの計算に使用される可能性があります。

    this.hozizontalScrollX = this.tilesDom.reduce(
      (acc, curr) => {
        return acc + curr.offsetWidth;
      },
      this.width > 768 ? this.width * 0.1 : -this.width * 0.1
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: true,
        // refresh()が発生するたびに（通常はリサイズ時）invalidate()メソッドが呼び出される。
        // invalidate()メソッドは、内部に記録されている開始値や終了値を全て消去します。
        invalidateOnRefresh: true,
      },
    });

    tl.to(container, {
      ease: "none",
      x: () => -this.hozizontalScrollX,
    })
      .to(pageTile, { x: -100 }, 0)
      .to(progressBar, { x: 0 }, 0);
  }

  onResize() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;

      const fov =
        2 * Math.atan(this.height / 2 / this.perspective) * (180 / Math.PI);
      this.camera.aspect = this.width / this.height;

      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      this.hozizontalScrollX = this.tilesDom.reduce(
        (acc, curr) => {
          return acc + curr.offsetWidth;
        },
        this.width > 768 ? this.width * 0.1 : -this.width * 0.1
      );

      ScrollTrigger.refresh();

      for (const tile of this.tiles) {
        tile.onResize();
      }
    });
  }

  onScroll() {
    this.lenis.on("scroll", (e) => {
      // イベントハンドラ内で、ScrollTrigger.update() を呼び出しています。
      // これはおそらくスクロールに関連するアニメーションやトリガーの更新を行うための処理です。
      ScrollTrigger.update();

      // e.scroll を取得し、これはスクロール位置を表します。この値はスクロールが発生するたびに更新されます。
      this.scroll = e.scroll;

      // for ループを使用して、this.tiles 配列内の各要素（タイルオブジェクト）に対して onScroll 関数を呼び出しています。
      // この関数にはオブジェクトが渡されており、それには現在のスクロール位置 scroll と前回のスクロール位置 previosScroll が含まれています。
      for (const tile of this.tiles) {
        tile.onScroll({
          scroll: this.scroll,
          previousScroll: this.previousScroll,
        });
      }

      // previosScroll を scroll の値で更新しています。
      // これにより、次回のスクロール時に前回のスクロール位置を正確に追跡できます。
      this.previousScroll = this.scroll;
    });
  }

  update() {
    this.renderer.render(this.scene, this.camera);
    for (const tile of this.tiles) {
      tile.update();
    }
    requestAnimationFrame(this.update.bind(this));
  }
}
