<script setup>
import Navbar from "@/components/Navbar.vue";
import EducationView from "@/views/EducationView.vue";
</script>

<template>
  <navbar />
  <section id="home" class="pt-16 z-10 mb-9">
    <div class="container mx-auto">
      <div class="flex flex-wrap space-y-20 mx-auto">
        <div class="w-full flex flex-col">
          <div class="mx-auto inline-flex -mb-8">
            <div class="w-28">
              <img src="../assets/gambar/mahkota.png" />
            </div>
          </div>
          <div class="avatar mb-3">
            <div class="w-2/6 rounded-full mx-auto relative">
              <img src="../components/icons/FaviconLogo.png" />
            </div>
          </div>
          <div class="mx-auto">
            <a href="#" class="cursor-pointer group">
              <h1
                class="text-merah font-bold font-poppins text-xl group-hover:text-kuning"
              >
                Rahmad firdiansyah
              </h1>
            </a>
          </div>
        </div>
        <div class="w-full self-center px-4">
          <h1 class="font-semibold text-2xl text-merah font-poppins mb-3">
            BIODATA
          </h1>
          <p class="font-poppins font-normal leading-relaxed">
            Saya seorang mahasiswa Manajemen Informatika di Universitas Negeri
            Surabaya yang memiliki rasa ingin tahu tinggi, percaya diri, dan
            mudah beradaptasi. Saya memiliki minat besar dalam bidang Desain
            UI/UX, Pengembangan Situs Web Front End dan mengembangkan kemampuan fullstack, Pembuatan
            Konten, Manajemen Media Sosial, Pembuatan dan Editing Video & Foto.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
