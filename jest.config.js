module.exports = {
  preset: 'ts-jest', //使用ts-jest预设，支持用js写单元测试
  testEnvironment: 'jsdom', //测试环境为jsdom
  roots: ['./src'], //测试根目录
  collectVoverage: true, //是否收集测试覆盖率
  coverageDirectory: 'coverage', //覆盖率文件夹
  transform: {
    '.(less|css)$': 'jest-less-loader', //支持less
  },
  //单元测试覆盖率统计的文件
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.ts',
    '!src/**/demo/*',
  ],
};
