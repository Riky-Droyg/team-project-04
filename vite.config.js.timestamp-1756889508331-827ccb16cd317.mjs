// vite.config.js
import { defineConfig } from "file:///C:/Users/ponomarenko/Dropbox/GOIT_%D0%BA%D1%83%D1%80%D1%81%D0%B8/goit_projects/team-project-04/node_modules/vite/dist/node/index.js";
import { glob } from "file:///C:/Users/ponomarenko/Dropbox/GOIT_%D0%BA%D1%83%D1%80%D1%81%D0%B8/goit_projects/team-project-04/node_modules/glob/dist/esm/index.js";
import injectHTML from "file:///C:/Users/ponomarenko/Dropbox/GOIT_%D0%BA%D1%83%D1%80%D1%81%D0%B8/goit_projects/team-project-04/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/Users/ponomarenko/Dropbox/GOIT_%D0%BA%D1%83%D1%80%D1%81%D0%B8/goit_projects/team-project-04/node_modules/vite-plugin-full-reload/dist/index.js";
import SortCss from "file:///C:/Users/ponomarenko/Dropbox/GOIT_%D0%BA%D1%83%D1%80%D1%81%D0%B8/goit_projects/team-project-04/node_modules/postcss-sort-media-queries/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === "commonHelpers") {
              return "commonHelpers.js";
            }
            return "[name].js";
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith(".html")) {
              return "[name].[ext]";
            }
            return "assets/[name]-[hash][extname]";
          }
        }
      },
      outDir: "../dist",
      emptyOutDir: true
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      SortCss({
        sort: "mobile-first"
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwb25vbWFyZW5rb1xcXFxEcm9wYm94XFxcXEdPSVRfXHUwNDNBXHUwNDQzXHUwNDQwXHUwNDQxXHUwNDM4XFxcXGdvaXRfcHJvamVjdHNcXFxcdGVhbS1wcm9qZWN0LTA0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwb25vbWFyZW5rb1xcXFxEcm9wYm94XFxcXEdPSVRfXHUwNDNBXHUwNDQzXHUwNDQwXHUwNDQxXHUwNDM4XFxcXGdvaXRfcHJvamVjdHNcXFxcdGVhbS1wcm9qZWN0LTA0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9wb25vbWFyZW5rby9Ecm9wYm94L0dPSVRfJUQwJUJBJUQxJTgzJUQxJTgwJUQxJTgxJUQwJUI4L2dvaXRfcHJvamVjdHMvdGVhbS1wcm9qZWN0LTA0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJztcclxuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xyXG5pbXBvcnQgRnVsbFJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1mdWxsLXJlbG9hZCc7XHJcbmltcG9ydCBTb3J0Q3NzIGZyb20gJ3Bvc3Rjc3Mtc29ydC1tZWRpYS1xdWVyaWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIFtjb21tYW5kID09PSAnc2VydmUnID8gJ2dsb2JhbCcgOiAnX2dsb2JhbCddOiB7fSxcclxuICAgIH0sXHJcbiAgICByb290OiAnc3JjJyxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIGlucHV0OiBnbG9iLnN5bmMoJy4vc3JjLyouaHRtbCcpLFxyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogY2h1bmtJbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKGNodW5rSW5mby5uYW1lID09PSAnY29tbW9uSGVscGVycycpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJ2NvbW1vbkhlbHBlcnMuanMnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnW25hbWVdLmpzJztcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+IHtcclxuICAgICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIGFzc2V0SW5mby5uYW1lLmVuZHNXaXRoKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICdbbmFtZV0uW2V4dF0nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV0nO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBpbmplY3RIVE1MKCksXHJcbiAgICAgIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qKi5odG1sJ10pLFxyXG4gICAgICBTb3J0Q3NzKHtcclxuICAgICAgICBzb3J0OiAnbW9iaWxlLWZpcnN0JyxcclxuICAgICAgfSksXHJcbiAgICBdLFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdhLFNBQVMsb0JBQW9CO0FBQ3JjLFNBQVMsWUFBWTtBQUNyQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7QUFFcEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxRQUFRLE1BQU07QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sQ0FBQyxZQUFZLFVBQVUsV0FBVyxTQUFTLEdBQUcsQ0FBQztBQUFBLElBQ2pEO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsUUFDYixPQUFPLEtBQUssS0FBSyxjQUFjO0FBQUEsUUFDL0IsUUFBUTtBQUFBLFVBQ04sYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsVUFDQSxnQkFBZ0IsZUFBYTtBQUMzQixnQkFBSSxVQUFVLFNBQVMsaUJBQWlCO0FBQ3RDLHFCQUFPO0FBQUEsWUFDVDtBQUNBLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0EsZ0JBQWdCLGVBQWE7QUFDM0IsZ0JBQUksVUFBVSxRQUFRLFVBQVUsS0FBSyxTQUFTLE9BQU8sR0FBRztBQUN0RCxxQkFBTztBQUFBLFlBQ1Q7QUFDQSxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztBQUFBLE1BQy9CLFFBQVE7QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
