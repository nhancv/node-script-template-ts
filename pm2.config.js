module.exports = {
  apps: [
    {
      name: 'script-template-ts',
      script: 'dist/index.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV: 'production',
      },
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
