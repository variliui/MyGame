<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { onMounted } from 'vue'
onMounted(() => {
  createMyScene()
})

const createMyScene = () => {
  //创建场景
  const scene = new THREE.Scene()
  //添加背景颜色
  // scene.background = new THREE.Color(0x000000)
  //添加背景图片
  // scene.background = new THREE.CubeTextureLoader()
  //   .setPath('/')
  //   .load(['1.jpg', '1.jpg', '1.jpg', '1.jpg', '1.jpg', '1.jpg'])

  //雾添加
  scene.fog = new THREE.Fog(0xcccccc, 10, 15)
  //创建相机
  const camera = new THREE.PerspectiveCamera()
  camera.position.z = 10
  camera.position.y = 2
  //创建立方体
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  //网格
  const cube = new THREE.Mesh(geometry, material)
  cube.position.set(2, 3, 0)
  scene.add(cube)
  //创建渲染器
  const renderer = new THREE.WebGLRenderer()
  //调整渲染器窗口大小
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('container')?.appendChild(renderer.domElement)

  //添加网格地面
  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)
  //添加轨道控制器
  const controller = new OrbitControls(camera, renderer.domElement)
  //对轨道控制器改变的时候进行监听
  controller.addEventListener('change', function () {
    // console.log('触发change')
  })
  //添加阻尼效果
  controller.enableDamping = true
  controller.dampingFactor = 0.05
  //自动旋转
  // controller.autoRotate = true
  // controller.autoRotateSpeed = 0.5
  //添加坐标轴
  const axesHelper = new THREE.AxesHelper(5)
  axesHelper.position.y = 3
  scene.add(axesHelper)

  //动画
  const animate = () => {
    //告诉浏览器希望执行一个动画，要求浏览器在下次重绘之前调用指定的回调函数更新动画，该方法需要传入一个回调函数作为参数，该回调函数
    requestAnimationFrame(animate)
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // 轨道控制器更新
    controller.update()
    renderer.render(scene, camera)
  }
  animate()
}
</script>

<template>
  <div id="container"></div>
</template>
