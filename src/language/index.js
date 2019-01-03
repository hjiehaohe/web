let TOCLanguageData;
let language = localStorage.lang ? localStorage.lang :
    navigator.browserLanguage ? navigator.browserLanguage : navigator.language;
if (language.indexOf('en') > -1) {
    TOCLanguageData = require('./en').default;
} else {
    localStorage.lang = 'zh';
    TOCLanguageData = require('./zh-cn').default;
}

export default TOCLanguageData;