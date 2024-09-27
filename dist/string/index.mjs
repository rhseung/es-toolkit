import { o as getWords } from '../_chunk/pad-BiIHzS.mjs';
export { c as camelCase, a as capitalize, b as constantCase, h as deburr, i as escape, j as escapeRegExp, k as kebabCase, l as lowerCase, g as lowerFirst, n as pad, p as pascalCase, s as snakeCase, t as trim, e as trimEnd, d as trimStart, m as unescape, u as upperCase, f as upperFirst } from '../_chunk/pad-BiIHzS.mjs';

function startCase(str) {
    const words = getWords(str.trim());
    let result = '';
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (result) {
            result += ' ';
        }
        result += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return result;
}

export { startCase };
