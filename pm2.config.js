module.exports = {
  apps: [
    {
      name: 'script-template-ts',
      script: 'dist/index.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      time: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    // {
    //   name: 'worker',
    //   script: 'dist/index.js',
    //   watch: true,
    //   time: true,
    //   env: {
    //     ENABLE_WORKER: true,
    //   },
    // },
  ],
};
