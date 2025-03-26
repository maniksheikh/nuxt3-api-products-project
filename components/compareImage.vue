<template>
    <ClientOnly>
      <div class="image-container">
        <VueCompareImage :left-image="inputImage" :right-image="outputImage" />
      </div>
    </ClientOnly>
  </template>
  
  <script setup>
  import { VueCompareImage } from "vue3-compare-image";
  
  import inputImage from "../assets/project-img.jpg";
  import outputImage from "../assets/my-best-img.JPG";
  </script>
  
  <style scoped>
  .image-container {
    border-radius: 1.5rem;
    overflow: hidden;
    width: 100%;
    height: 620px;
  }
  
  .compare-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 1024px) { 
    .image-container {
      width: 95%;
      height: auto;
    }
  }
  
  @media (max-width: 768px) {
    .image-container {
      width: 100%;
      height: auto;
    }
  }
  </style>
  