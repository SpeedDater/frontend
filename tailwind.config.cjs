const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}','./src/*.svelte' ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'Helvetica', 'sans-serif'],
        'adamina': ['Adamina', 'serif'],
        'abeezee': [ 'ABeeZee', 'Inter', 'sans-serif'],
        'roboto': ['Roboto','sans-serif'],
        'poppins':['Poppins', 'Inter', 'sans-serif']
      },
      fontSize: {
        'xxs': '0.625rem'
      },
      colors: {
        'redtag': '#EED3D3',
        'redborder': '#E2B6B6',
        'redtext': '#A92525',
        'yellowtag':'#F7EFD2',
        'yellowborder': '#F2E5B5',
        'yellowtext': '#D9B020',
        'greentag': '#CCE0D7',
        'greenborder': '#AACCBC',
        'greentext': '#006637',
        'bluetag': '#F7F5FF',
        'blueborder': '#BCB0F5',
        'bluetext': '#3B25A9',
        'navy': '#00274C',
        'dating-icon': '#E84393',
        'team-icon':'#1976D2',
        'profile-icon': '#A51BC8',
        'gray-1':'#333333',
        'gray-2':'#4f4f4f',
        'gray-3':'#828282',
        'gray-4':'#BDBDBD',
        'yellowbutton':'#FFCB05'
      } 
    }
  },
  safelist: ['bg-dating-icon', 'bg-team-icon', 'bg-profile-icon'],
  plugins: []
};
