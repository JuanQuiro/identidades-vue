<template>
  <h3
    className=" my-4  sm:text-4xl lg:text-6xl text-primary-focus text-white text-center text-3xl mb-0"
  >
    Identidades <span class="type-identidad text-yellow-400"></span>
  </h3>

  <div className="grid grid-cols-2  py-6">
    <div v-for="(el, index) in [...gatos.data]" :key="index">
      <div
        className="group mx-auto mt-4 h-24 w-24 sm:h-52 sm:w-52 [perspective:1000px]"
      >
        <div
          className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
        >
          <div className="absolute inset-0">
            <img
              :src="el.url"
              width="300"
              height="300"
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              alt=""
            />
          </div>
          <div
            className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]"
          >
            <div
              className="flex min-h-full flex-col items-center justify-center"
            >
              <h1
                className="text-yellow-500 whitespace-normal sm:whitespace-nowrap text-sm sm:text-xl font-bold"
              >
                {{ usuarios[index].name }}
              </h1>
              <p className=" whitespace-nowrap text-sm text-primary">
                Seudonimo - {{ usuarios[index].username }}
              </p>
              <p
                className="text-xs hidden sm:inline text-justify sm:text-center"
              >
                <small>Compañia : <br /></small
                >{{ usuarios[index].company.name }}
              </p>
              <button
                className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900"
              >
                {{ usuarios[index].website }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-yellow-500 left-0 bottom-0 h-8 w-full">
    <div class="text-center text-black font-semibold">
      <p>
        Creado en Vue 3
        <img
          class="inline"
          src="https://cdn.svgporn.com/logos/vue.svg"
          height="20"
          width="20"
          alt="Icon"
        />
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

let gatos = ref([{}]);
let usuarios = ref([{}]);

const idGatos =
  "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_fCTB4ScLOXoeNFEMJzHpvaLFBjADCT7gBHF0jhQi1sjtixyCCQJ6s5efp2RpOVl5";
fetch(idGatos)
  .then((res) => res.json())
  .then((data) => (gatos.value = { data }))
  .catch((err) => console.log("Error", err));

const idUsuario = "https://jsonplaceholder.typicode.com/users";
fetch(idUsuario)
  .then((res) => res.json())
  .then((data) => (usuarios.value = data));
</script>
