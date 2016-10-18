var publicAssets = "./public/assets";
var sourceAssets  = "./client";

module.exports = {
  sourceAssets: sourceAssets,
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**'],
    ui: {
      port: 3001
    }
  },
  sass: {
    src: sourceAssets + "/stylesheets/**/*.{sass,scss}",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/assets/images' // Used by the image-url helper
    }
  },
  images: {
    src: sourceAssets + "/images/**",
    dest: publicAssets + "/images"
  },
  iconFont: {
    name: 'Gulp Rails Icons',
    src: sourceAssets + "/icons/*.svg",
    dest: publicAssets + '/fonts',
    sassDest: sourceAssets + '/stylesheets/base',
    template: './gulp/tasks/iconFont/template.sass',
    sassOutputName: '_iconFont.sass',
    fontPath: '/assets/fonts',
    className: 'icon',
    options: {
      fontName: 'gulp-rails-icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  javascripts: {
    src: sourceAssets + "/javascripts/**/*.{coffee,js}"
  }
};
