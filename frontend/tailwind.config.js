/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'primary'    : '#18181B',
            'secondary'  : '#2DD4BF',
            'borderColor': '#3f3f4666',
          
            'title': 'rgb(244 244 245)',
            'subtitle': 'rgb(161 161 170)',
        
            'bgHeader': 'rgb(39, 39, 42)',
            'blue': 'rgb(93, 188, 252)',
        
            'icon-hover': '#d4d4d8',
            'darkGreen': '#14b8a6',
          
        //     --container-padding: 4.8rem;
        //   }
          
        //   .light {
        //     --primary: #fff;
        //   }
            
          },
      },
    },
    plugins: [
        require('tailwindcss-animated'),
    ],
    darkMode: 'class',
  }
