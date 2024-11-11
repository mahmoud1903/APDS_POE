module.exports = {
    presets: [
      '@babel/preset-env',  // Transpile modern JavaScript to compatible version for Jest
      '@babel/preset-react', // Transpile React JSX syntax
    ],
    plugins: [
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
    ],
  };

  