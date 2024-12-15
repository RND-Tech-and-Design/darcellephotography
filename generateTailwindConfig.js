import tailwindConfig from './tailwind.config.js';
import { writeFileSync } from 'fs';

// Ensure the file is written to the correct directory for Nuxt
writeFileSync('./build/tailwind-config.json', JSON.stringify(tailwindConfig, null, 2));

console.log('✅ Tailwind configuration successfully exported to ./build/tailwind-config.json');
