module.exports = {
    style: {
      sass: {
        loaderOptions: {
          sourceMap: true,
        },
      },
      postcss: {
        mode: "extends",
        plugins: [require('autoprefixer')],
      },
    },
  };