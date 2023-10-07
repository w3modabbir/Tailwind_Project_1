tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primary': '#fff',
          'secondary': '#000',
          'pera': '#6C6C6C',
          'common-bg': '#F40404',
          'head-bg': '#282828',
          'footer-bg': '#1F1F1F',
          'overlay-bg': 'rgba(0, 0, 0, 0.60)',
          'about-bg': '#F0F0F0',
        },
        maxWidth: {
            'container': '1140px',
        },
        fontFamily: {
            'poppins': "Poppins, sans-serif"
        },
        backgroundImage: {
            'banner': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('images/banner.jpg')",
        },
      }
    }
  }
