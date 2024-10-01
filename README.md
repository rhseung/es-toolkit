# es-toolkit

## 새로운 버전이 뜨면:
- [es-toolkit](https://github.com/toss/es-toolkit)를 `sync` 브랜치로 포크한다.
- 다음 바벨 플러그인들을 설치한다.
  - `@babel/plugin-transform-named-capturing-groups-regex`
  - `@babel/preset-env`
  - `@rollup/plugin-babel`
  - `babel-plugin-object-values-to-object-keys`
  - `babel-plugin-transform-es2017-object-entries`
- [rollup config](rollup.config.mjs)의 `libBuildOptions` 함수의 `output.preserveModules`를 `esm`이 아니라 `cjs`에 맞춘다.
- 모든 `generatedCode`를 `es2015`에서 `es5`로 바꾼다.
- [rollup config](rollup.config.mjs) 위에 이걸 추가한다.
  ```js
  import { getBabelOutputPlugin } from '@rollup/plugin-babel';
  ```
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
- [package.json](package.json)에서 `npm run build` 커맨드를 `rollup -c rollup.config.mjs && python scripts/make_zip.py` 으로 수정한다.
- `npm run build` 하면 `dist` 폴더에 빌드된 js 파일들이 생긴다.
- 깃허브 푸쉬 후 태그로 버전을 정해주면 알아서 릴리즈됨.