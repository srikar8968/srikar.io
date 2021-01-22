import { createGlobalStyle } from 'styled-components'
import defaultStyles from './defaultStyles'

const mediaScreens = () => { 
    let content = '';
    for(const screen in defaultStyles.screens) {
        content += `@media (min-width: ${defaultStyles.screens[screen]}px) {
            .container { max-width: ${ defaultStyles.screens[screen] }px; padding: 0 ${ defaultStyles.gutter }px }
        }`
    }
    return content;
}

const GlobalStyle = createGlobalStyle`
    * {
        transition: background-color 0.3s, border 0.3s, opacity 0.3s;
        transition-timing-function: linear;
    }
    html {line-height: 1.15;-webkit-text-size-adjust: 100%;}body {margin: 0;}main {display: block;}h1 {font-size: 2em;margin: 0.67em 0;}hr {box-sizing: content-box;height: 0;overflow: visible;}pre {font-family: monospace, monospace;font-size: 1em;}a {background-color: transparent;}abbr[title] {border-bottom: none;text-decoration: underline;text-decoration: underline dotted;}b,strong {font-weight: bolder;}code,kbd,samp {font-family: monospace, monospace;font-size: 1em;}small {font-size: 80%;}sub,sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}sub {bottom: -0.25em;}sup {top: -0.5em;}img {border-style: none;}button,input,optgroup,select,textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0;}button,input {overflow: visible;}button,select {text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {-webkit-appearance: button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {border-style: none;padding: 0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring {outline: 1px dotted ButtonText;}fieldset {padding: 0.35em 0.75em 0.625em;}legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal;}progress {vertical-align: baseline;}textarea {overflow: auto;}[type="checkbox"],[type="radio"] {box-sizing: border-box;padding: 0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {height: auto;}[type="search"] {-webkit-appearance: textfield;outline-offset: -2px;}[type="search"]::-webkit-search-decoration {-webkit-appearance: none;}::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}details {display: block;}summary {display: list-item;}template {display: none;}[hidden] {display: none;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {margin: 0;}button {background-color: transparent;background-image: none;padding: 0;}input:focus,textarea:focus,select:focus,button:focus {outline: none;}fieldset {margin: 0;padding: 0;}ol,ul {list-style: none;margin: 0;padding: 0;}html {font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";line-height: 1.5;}*,::before,::after {box-sizing: border-box;border-width: 0;border-style: solid;border-color: #e2e8f0;}hr {border-top-width: 1px;}img {border-style: solid;}textarea {resize: vertical;}input::placeholder,textarea::placeholder {color: #a0aec0;}button,[role="button"] {cursor: pointer;}table {border-collapse: collapse;}h1,h2,h3,h4,h5,h6 {font-size: inherit;font-weight: inherit;}a {color: inherit;text-decoration: inherit;}button,input,optgroup,select,textarea {padding: 0;line-height: inherit;color: inherit;}pre,code,kbd,samp {font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}img,svg,video,canvas,audio,iframe,embed,object {display: block;vertical-align: middle;}img,video {max-width: 100%;height: auto;}
    body {
        background-color: ${({theme}) => theme.bg.default};
        color: ${props => props.theme.text.default};
        font-size: ${({theme}) => theme.fontSize.lg[0]};
    }
    ::-webkit-scrollbar { width: 0.75rem }
    ::-webkit-scrollbar-track { background: ${({theme}) => theme.bg.default}; }
    ::-webkit-scrollbar-thumb { background: ${({theme}) => theme.bg.secondary}; border: 2px solid ${({theme}) => theme.bg.default}; border-radius: .75rem }
    ::-moz-selection { background: ${({theme}) => theme.bg.invert}; color: ${({theme}) => theme.text.invert} }
    ::selection { background: ${({theme}) => theme.bg.invert}; color: ${({theme}) => theme.text.invert} }
    .overflow-hidden { overflow: hidden }
    .relative{ position: relative }
    .semibold{ font-weight: 500; }
    .bold{ font-weight: 700; }
    .exbold{ font-weight: 900; }
    .flex { display: flex }
    .block { display: block }
    .inline-block { display: inline-block }
    .hide { display: none }
    .w-full { width: 100%; }
    .h-full { height: 100%; }
    .items-center { align-items: center }
    .items-stretch { align-items: stretch }
    .text-center { text-align: center }
    .justify-between { justify-content: space-between }
    .justify-end { justify-content: flex-end }
    .flex-wrap {flex-wrap: wrap}
    .mb { margin-bottom: .5rem }
    .mt { margin-top: .5rem }
    .ml { margin-left: .5rem }
    .mr { margin-right: .5rem }
    .m { margin: .5rem }
    .mx-auto { margin-left: auto!important; margin-right: auto!important}
    .pd { padding: .5rem }
    .pr { padding-right: .5rem }
    .pl { padding-left: .5rem }
    .pt { padding-top: .5rem }
    .pb { padding-bottom: .5rem }
    .bg-primary { background-color: ${({theme}) => theme.bg.primary} }
    .bg-secondary { background-color: ${({theme}) => theme.bg.secondary} }
    .bg-default { background-color: ${({theme}) => theme.bg.default} }
    .text-light { color: ${({theme}) => theme.text.light} }
    .text-primary { color: ${({theme}) => theme.text.primary} }
    .text-secondary { color: ${({theme}) => theme.text.secondary} }
    .text-md { font-size: ${({theme}) => theme.fontSize.base[0]} }
    .rounded { border-radius: 0.25rem }
    .border { border: 1px solid ${({theme}) => theme.border.default} }
    .border-b { border-bottom: 1px solid ${({theme}) => theme.border.default} }
    a:hover { color: ${({theme}) => theme.text.primary} };
    .app-content{position: relative;width:100%;}
    .app { width: 100%; overflow: hidden; position: relative }
    .container { width: 100%; margin: 0 auto; padding: 0 ${ defaultStyles.gutter }px };
    ${ mediaScreens() }
`;

export default GlobalStyle;