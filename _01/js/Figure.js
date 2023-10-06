import * as THREE from "three";
import gsap from "gsap";

import vertexShader from "../glsl/vertexShader.glsl";
import fragmentShader from "../glsl/fragmentShader.glsl";

export default class Figure {
  constructor(scene, cb) {
    this.$image = document.querySelector(".tile__image");
    this.scene = scene;
    this.callback = cb;

    this.loader = new THREE.TextureLoader();

    this.image = this.loader.load(this.$image.src, () => {
      this.start();
    });

    this.hover = this.loader.load(this.$image.dataset.hover);
    this.$image.style.opacity = 0;
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);

    this.mouse = new THREE.Vector2(0, 0);
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  start() {
    this.getSizes();
    this.createMesh();
    this.callback();
  }

  // DOMのサイズを取得
  getSizes() {
    const { width, height, top, left } = this.$image.getBoundingClientRect();
    this.sizes.set(width, height);
    this.offset.set(
      left - window.innerWidth / 2 + width / 2,
      -top + window.innerHeight / 2 - height / 2
    );
  }

  // MeshとDOMのサイズを合わせる
  createMesh() {
    this.unifoms = {
      u_image: { type: "t", value: this.image },
      u_imagehover: { type: "t", value: this.hover },
      u_mouse: { value: this.mouse },
      u_time: { value: 0 },
      u_res: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    };

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    this.material = new THREE.ShaderMaterial({
      uniforms: this.unifoms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      defines: {
        PR: window.devicePixelRatio.toFixed(1),
      },
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.position.set(this.offset.x, this.offset.y, 0);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

    this.scene.add(this.mesh);
  }

  // マウスムーブイベント
  onMouseMove(event) {
    gsap.to(this.mouse, {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
      duration: 0.5,
    });

    gsap.to(this.mesh.rotation, {
      x: -this.mouse.y * 0.3,
      y: this.mouse.x * (Math.PI / 6),
    });
  }

  update() {
    this.unifoms.u_time.value += 0.01;
  }
}
