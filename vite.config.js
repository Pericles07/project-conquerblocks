import { defineConfig } from "vite";
1

export default defineConfig({
  base: '/project-conquerbloks/',
  base: "./",
  build: {
            rollupOptions: {
              input: {
                index: 'index.html',
               avisolegal: '/html/aviso-legal.html',
                blog: '/html/blog.html',
                contacto: '/html/contacto.html',
                cursos: '/html/cursos.html',
                login: '/html/login.html',
                quienessomos: '/html/quienes-somos.html',
                registro: '/html/registro.html',
                blog1: '/html/blog/fullstack-roadmap.html',
                blog2: '/html/blog/que-es-fullstack-developer.html',
                cursos1: '/html/cursos/curso_ia.html',
                cursos2: '/html/cursos/curso-fullstack.html',
                // Agrega aquí todos tus archivos HTML
              },
            },
          },
});

 