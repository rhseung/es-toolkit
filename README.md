# es-toolkit

## 새로운 버전이 뜨면:
- [es-toolkit](https://github.com/toss/es-toolkit)를 포크한다.
- [rollup config](rollup.config.mjs)의 `libBuildOptions` 함수의 `output.preserveModules`를 `esm`이 아니라 `cjs`에 맞춘다.
- 모든 `generatedCode`를 `es2015`에서 `es5`로 바꾼다.
- `libBuildOptions`의 플러그인에 바벨 플러그인을 추가한다. 그리고 아래 바벨 플러그인을 쓴다.
  ```js
  ...(isCJS
    ? [
        getBabelOutputPlugin({
          presets: ['@babel/preset-env'],
          plugins: [
            '@babel/plugin-transform-named-capturing-groups-regex',
            'babel-plugin-object-values-to-object-keys',
            'transform-es2017-object-entries',
          ],
        }),
      ]
    : []),
  ```
- `npm run build` 하면 `dist` 폴더에 빌드된 js 파일들이 생긴다.