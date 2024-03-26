const fs = require('fs');
const sourceMap = require('source-map');

async function extractSourceMap(sourceMapFile, outputDir) {
    const rawSourceMap = JSON.parse(fs.readFileSync(sourceMapFile, 'utf8'));

    const consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);

    consumer.sources.forEach((source) => {
        const content = consumer.sourceContentFor(source);
        // Удаление специального префикса из пути и замена нестандартных символов
        const normalizedPath = source.replace(/^webpack:\/\/\//, '').replace(/:/g, '');
        const outputPath = `${outputDir}/${normalizedPath}`;
        const outputDirPath = outputPath.substring(0, outputPath.lastIndexOf('/'));

        try {
            // Создание директорий, если они не существуют
            fs.mkdirSync(outputDirPath, { recursive: true });
            // Запись исходного файла
            fs.writeFileSync(outputPath, content, 'utf8');
            console.log(`Исходный файл ${source} был извлечен.`);
        } catch (error) {
            console.error(`Ошибка при создании файла ${outputPath}:`, error);
        }
    });

    consumer.destroy();
}

// Использование функции
extractSourceMap('./main.js.map', 'output');
