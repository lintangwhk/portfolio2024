/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#fff",
          "secondary": "#000",
          "accent": "#fff",
          "neutral": "#000",
          "--rounded-box": "0rem",
          "--rounded-btn": "0rem",
          "--rounded-badge": "0rem"
        }
      }
    ]
  }
}

