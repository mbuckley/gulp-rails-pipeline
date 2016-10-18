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
  javascripts: {
    src: sourceAssets + "/javascripts/**/*.{coffee,js}"
  }
};
