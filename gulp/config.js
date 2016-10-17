var publicAssets = "./public/assets";
var sourceFiles  = "./client";

module.exports = {
  publicAssets: publicAssets,
  publicAssetsGlob: publicAssets + "/**/*(*.css|*.js|*.png|*.eot|*.woff|*.ttf)",
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**'],
    ui: {
      port: 3001
    }
  },
  sass: {
    src: sourceFiles + "/stylesheets/**/*.{sass,scss}",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
      imagePath: '/assets/images' // Used by the image-url helper
    }
  },
  images: {
    src: sourceFiles + "/images/**",
    dest: publicAssets + "/images"
  },
  iconFont: {
    name: 'Gulp Rails Icons',
    src: sourceFiles + "/icons/*.svg",
    dest: publicAssets + '/fonts',
    sassDest: sourceFiles + '/stylesheets/base',
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
  browserify: {
    bundleConfigs: [{
      entries: sourceFiles + '/javascripts/global.coffee',
      dest: publicAssets + '/javascripts',
      outputName: 'global.js',
      extensions: ['.js','.coffee']
    }]
  }
};
