import * as THREE from "three";
import gsap from "gsap";

import vertex from "../glsl/vertex.glsl";

export default class Tile {
  constructor(el, scene, tileIndex, shader) {
    this.domEl = el;
    this.domElTitle = el.querySelectorAll(".tile__title span span");
    this.domElCta = el.querySelectorAll(".tile__cta span span");
    this.detailDom = document.querySelector(".detail");
    this.domButton = document.querySelector(".close__detail");
    this.domContent = document.querySelector(".content");

    this.detail = scene.detail;
    this.scene = scene.scene;
    this.lenis = scene.lenis;

    // この部分では、tilesDom 配列の各要素とそのインデックスを取り出して、アロー関数に渡しています。アロー関数内では、tileIndex と i を比較して、tileIndex と異なる場合のみ要素を残すようにフィルタリングしています。結果として、tileIndex と異なるタイルの要素だけを含む新しい配列が作成されます。
    // このコードの目的は、tileIndex で指定されたタイルを除外して、他のタイルの要素だけを保持することです。その後、これらの要素を操作したり、処理したりするために使用できます。
    this.tilesDom = scene.tilesDom.filter((_, i) => tileIndex !== i);
    this.tilesMaterial = scene.tilesMaterial;
    this.tileIndex = tileIndex;
    this.shader = shader;

    this.domImage = this.domEl.querySelector(".tile__image");
    this.domLink = this.domEl.querySelector("a");

    this.image = scene.textures[this.domImage.dataset.src];
    this.hoverImage = scene.textures[this.domImage.dataset.hover];
    this.shape = scene.textures["shape.jpg"];

    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);
    this.mouse = new THREE.Vector2(0, 0);
    this.hover = 0;
    this.delta = 0;
    this.isHover = false;
    this.isZoomed = false;

    this.initTile();
    this.onMouseMove();
    this.onHover();
    this.onClick();
  }

  initTile() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.material = new THREE.RawShaderMaterial({
      uniforms: {
        uImage: { value: this.image },
        uImageHover: { value: this.hoverImage },
        uMouse: { value: this.mouse },
        uTime: { value: 0 },
        uHover: { value: this.hover },
        uRes: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
        uShape: { value: this.shape },
        uAlpha: { value: 1 },
        uZoomed: { value: 0 },
      },
      defines: {
        PR: window.devicePixelRatio.toFixed(1),
      },
      vertexShader: vertex,
      fragmentShader: this.shader,
      transparent: true,
    });

    this.tilesMaterial.push(this.material);
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.setTile();
    this.scene.add(this.mesh);
  }

  setPosition() {
    this.getSizes();
    this.mesh.position.x = this.offset.x;
    const delta = this.delta > 40 ? 1 : this.delta;

    gsap.to(this.mesh.scale, {
      x: this.sizes.x - delta,
      y: this.sizes.y - delta,
      duration: 0.3,
    });
  }

  setTile() {
    this.getSizes();
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 0);
    this.mesh.position.set(this.offset.x, this.offset.y, 1);
  }

  getSizes() {
    const { width, height, top, left } = this.domImage.getBoundingClientRect();

    if (this.isZoomed) {
      this.sizes.set(window.innerWidth * 0.44, window.innerHeight - 140);
      this.offset.set(
        window.innerWidth / 2 - window.innerWidth * 0.05 - width * 0.95,
        -20
      );
    } else {
      this.sizes.set(width, height);
      this.offset.set(
        left - window.innerWidth / 2 + width / 2,
        -top + window.innerHeight / 2 - height / 2
      );
    }
  }

  onScroll({ scroll, previousScroll }) {
    this.delta = Math.abs(scroll - previousScroll);
    if (this.isZoomed) return;
    this.setPosition();
  }

  onResize() {
    this.setTile();

    this.material.uniforms.uRes.value = new THREE.Vector2(
      window.innerWidth,
      window.innerHeight
    );
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      gsap.to(this.mouse, {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
        duration: 0.75,
      });
    });
  }

  onHover() {
    this.domLink.addEventListener("mouseenter", () => {
      this.hover = 1;
      document.documentElement.style.setProperty(
        "--color-bg",
        `var(--color-bg${this.tileIndex + 1})`
      );
      document.documentElement.style.setProperty(
        "--color-text",
        `var(--color-text${this.tileIndex + 1})`
      );

      gsap.to(this.material.uniforms.uHover, { value: 1 });
      this.isHover = true;
    });

    this.domLink.addEventListener("mouseleave", () => {
      this.hover = 0;
      gsap.to(this.material.uniforms.uHover, { value: 0 });
      this.isHover = false;
    });
  }

  onClick() {
    this.domLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.isZoomed) return;
      this.zoomIn();
    });

    this.domButton.addEventListener("click", () => {
      this.zoomOut();
    });
  }

  zoomIn() {
    const topTile = this.domElTitle[0].innerText;
    const bottomTile = this.domElTitle[1].innerText;

    // uAlphaMaterial という変数に、this.tilesMaterial 配列から特定の条件を満たす要素を抽出し、それらの要素の uniforms.uAlpha プロパティを取得して格納するためのコードです。
    // this.tilesMaterial 配列は、タイルに関連する材質（マテリアル）の配列です。
    // .filter((_, i) => i !== this.tileIndex) は、filter 関数を使用して、条件を満たす要素だけを取得します。この条件は、要素のインデックス i が this.tileIndex と等しくない場合、つまり i が this.tileIndex と異なるタイルの材質を取得するためのものです。
    // .map((material) => material.uniforms.uAlpha) は、取得した材質の配列に対して map 関数を使用して、各材質の uniforms.uAlpha プロパティを取得します。これにより、各材質の透明度に関する情報が格納された配列が生成されます。
    // 結果として、uAlphaMaterial には、this.tileIndex と異なるタイルの材質の透明度に関する情報が配列として格納されます。この情報は、アニメーションなどで使用される可能性があります。たとえば、タイルをクリックしたときに他のタイルの透明度を変更する際に使用できます。

    const uAlphaMaterial = this.tilesMaterial
      .filter((_, i) => i !== this.tileIndex)
      .map((material) => material.uniforms.uAlpha);

    const tl = gsap.timeline({
      onStart: () => {
        this.lenis.stop();
        this.detail.showDetail(topTile, bottomTile);
        this.isZoomed = true;
        this.domContent.classList.add("hide");
      },
      onComplete: () => {
        this.material.uniforms.uZoomed.value = 1;
      },
    });

    tl.to(this.tilesDom, { opacity: 0, ease: "power2.in" }, 0)
      .to(uAlphaMaterial, { value: 0, ease: "power2.in" }, 0)
      .to(
        [this.domElTitle, this.domElCta],
        {
          yPercent: 110,
          ease: "expo.inOut",
          duration: 1,
          stagger: 0.1,
        },
        0
      )
      .to(this.mesh.position, {
        x:
          window.innerWidth / 2 -
          window.innerWidth * 0.05 -
          this.sizes.x * 0.95,
        y: -20,
        ease: "expo.inOut",
        duration: 1,
      })
      .to(
        this.mesh.scale,
        {
          x: window.innerWidth * 0.44,
          y: window.innerHeight - 140,
          ease: "expo.inOut",
          duration: 1,
        },
        "<"
      );
  }

  zoomOut() {
    const uAlphaMaterial = this.tilesMaterial
      .filter((_, i) => i !== this.tileIndex)
      .map((material) => material.uniforms.uAlpha);
    const tl = gsap.timeline({
      onStart: () => {
        this.detail.hideDetail();
      },
      onComplete: () => {
        this.lenis.start();
        this.material.uniforms.uZoomed.value = 0;
        this.isZoomed = false;
        this.detailDom.classList.remove("visible");
        this.domContent.classList.remove("hide");
      },
    });

    tl.to(
      this.mesh.position,
      {
        x: this.offset.x,
        y: this.offset.y,
        ease: "expo.inOut",
        duration: 1,
      },
      1
    )
      .to(
        this.mesh.scale,
        {
          x: this.sizes.x,
          y: this.sizes.y,
          ease: "expo.inOut",
          duration: 1,
        },
        "<"
      )
      .to(
        [this.domElTitle, this.domElCta],
        {
          yPercent: 0,
          ease: "expo.inOut",
          duration: 1,
          stagger: 0.1,
        },
        "<"
      )
      .to(uAlphaMaterial, { value: 1, ease: "power2.in" }, "-=0.5")
      .to(this.tilesDom, { opacity: 1, ease: "power2.in" }, "<");
  }

  update() {
    if (this.hover) {
      this.material.uniforms.uTime.value += 0.01;
    }
  }
}
