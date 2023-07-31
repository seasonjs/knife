const fs = require('fs');
const path = require('path');

// 设置要扫描的目录路径
const directoryPath = '../src';

// 扫描目录下的文件
const scanDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  const unqFileName = new Set()

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    // if (stats.isDirectory()) {
    //   // 递归扫描子目录
    //   // scanDirectory(filePath);
    // } else
      if (stats.isFile()) {
      // 获取文件名（不带扩展名）
      const fileName = path.parse(file).name;
      unqFileName.add(fileName);
    }
  });
  // 生成导出语句
  // unqFileName.forEach(fileName => {
  //   const exportStatement = `export * as ${fileName} from './${fileName}';`;
  //   console.log(exportStatement);
  // })

unqFileName.forEach(fileName => {
    const exportStatement = ` [${fileName}](./${fileName})`;
    console.log(exportStatement);
  })
};

scanDirectory(directoryPath);
