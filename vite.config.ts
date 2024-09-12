import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Порт для сервера разработки
    },
    build: {
        outDir: 'dist', // Директория для сборки
    },
    resolve: {
        alias: {
            '@': '/src', // Пример алиаса для более удобного импорта
        },
    },
});
