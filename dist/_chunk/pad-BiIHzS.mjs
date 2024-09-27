function capitalize(str) {
    return (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}

const CASE_SPLIT_PATTERN = /[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])|\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{L}+/gu;
function getWords(str) {
    return Array.from(str.match(CASE_SPLIT_PATTERN) ?? []);
}

function camelCase(str) {
    const words = getWords(str);
    if (words.length === 0) {
        return '';
    }
    const [first, ...rest] = words;
    return `${first.toLowerCase()}${rest.map(word => capitalize(word)).join('')}`;
}

function snakeCase(str) {
    const words = getWords(str);
    return words.map(word => word.toLowerCase()).join('_');
}

function kebabCase(str) {
    const words = getWords(str);
    return words.map(word => word.toLowerCase()).join('-');
}

function upperCase(str) {
    const words = getWords(str);
    let result = '';
    for (let i = 0; i < words.length; i++) {
        result += words[i].toUpperCase();
        if (i < words.length - 1) {
            result += ' ';
        }
    }
    return result;
}

function lowerCase(str) {
    const words = getWords(str);
    return words.map(word => word.toLowerCase()).join(' ');
}

function pascalCase(str) {
    const words = getWords(str);
    return words.map(word => capitalize(word)).join('');
}

function constantCase(str) {
    const words = getWords(str);
    return words.map(word => word.toUpperCase()).join('_');
}

function trimStart(str, chars) {
    if (chars === undefined) {
        return str.trimStart();
    }
    let startIndex = 0;
    switch (typeof chars) {
        case 'string': {
            while (startIndex < str.length && str[startIndex] === chars) {
                startIndex++;
            }
            break;
        }
        case 'object': {
            while (startIndex < str.length && chars.includes(str[startIndex])) {
                startIndex++;
            }
        }
    }
    return str.substring(startIndex);
}

function trimEnd(str, chars) {
    if (chars === undefined) {
        return str.trimEnd();
    }
    let endIndex = str.length;
    switch (typeof chars) {
        case 'string': {
            while (endIndex > 0 && str[endIndex - 1] === chars) {
                endIndex--;
            }
            break;
        }
        case 'object': {
            while (endIndex > 0 && chars.includes(str[endIndex - 1])) {
                endIndex--;
            }
        }
    }
    return str.substring(0, endIndex);
}

function trim(str, chars) {
    if (chars === undefined) {
        return str.trim();
    }
    return trimStart(trimEnd(str, chars), chars);
}

function upperFirst(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

function lowerFirst(str) {
    return str.substring(0, 1).toLowerCase() + str.substring(1);
}

const deburrMap = new Map(Object.entries({
    Æ: 'Ae',
    Ð: 'D',
    Ø: 'O',
    Þ: 'Th',
    ß: 'ss',
    æ: 'ae',
    ð: 'd',
    ø: 'o',
    þ: 'th',
    Đ: 'D',
    đ: 'd',
    Ħ: 'H',
    ħ: 'h',
    ı: 'i',
    Ĳ: 'IJ',
    ĳ: 'ij',
    ĸ: 'k',
    Ŀ: 'L',
    ŀ: 'l',
    Ł: 'L',
    ł: 'l',
    ŉ: "'n",
    Ŋ: 'N',
    ŋ: 'n',
    Œ: 'Oe',
    œ: 'oe',
    Ŧ: 'T',
    ŧ: 't',
    ſ: 's',
}));
function deburr(str) {
    str = str.normalize('NFD');
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if ((char >= '\u0300' && char <= '\u036f') || (char >= '\ufe20' && char <= '\ufe23')) {
            continue;
        }
        result += deburrMap.get(char) ?? char;
    }
    return result;
}

const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
};
function escape(str) {
    return str.replace(/[&<>"']/g, match => htmlEscapes[match]);
}

function escapeRegExp(str) {
    return str.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}

const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
};
function unescape(str) {
    return str.replace(/&(?:amp|lt|gt|quot|#(0+)?39);/g, match => htmlUnescapes[match] || "'");
}

function pad(str, length, chars = ' ') {
    return str.padStart(Math.floor((length - str.length) / 2) + str.length, chars).padEnd(length, chars);
}

export { capitalize as a, constantCase as b, camelCase as c, trimStart as d, trimEnd as e, upperFirst as f, lowerFirst as g, deburr as h, escape as i, escapeRegExp as j, kebabCase as k, lowerCase as l, unescape as m, pad as n, getWords as o, pascalCase as p, snakeCase as s, trim as t, upperCase as u };
