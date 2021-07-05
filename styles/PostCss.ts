import styled from 'styled-components'

const mediaScreens = () => { 
    let content = '';
    return content;
}

const PostStyle = styled.div`
    box-sizing: border-box;
    min-width: 200px;
    margin: 2rem auto;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: ${({theme}) => theme.text.secondary};
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;

    & .remark-highlight {
        margin-bottom: 1rem;
        padding: .125rem;
        background-color: ${({theme}) => theme.bg.light};
        border 1px solid ${({theme}) => theme.border.light};
        border-radius: 0.25rem;
        overflow: hidden;
        font-size: 16px
    }
    & code.language-unknown {
        border 1px solid ${({theme}) => theme.border.secondary};
        padding: 0 .5em;
        white-space: nowrap;
        font-size: 1rem;
        color: rgb(202, 108, 154);
    }
    & .remark-highlight pre[class*="language-"] {
        margin: 0;
        padding: 1em
    }
    & h1 {
        font-size: 2em;
        margin: .67em 0
    }
    & img {
        border-style: none
    }
    & * {
        box-sizing: border-box
    }
    & a {
        color: ${({theme}) => theme.text.primary};
        text-decoration: none
    }
    & a:hover {
        text-decoration: underline
    }
    & strong {
        font-weight: 600
    }
    & hr:after,
    & hr:before {
        display: table;
        content: ""
    }
    & hr:after {
        clear: both
    }
    & table {
        border-spacing: 0;
        border-collapse: collapse
    }
    & td,
    & th {
        padding: 0
    }
    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        color: ${({theme}) => theme.text.default};
        margin-top: 0;
        margin-bottom: 0
    }
    & h1 {
        font-size: 32px
    }
    & h1,
    & h2 {
        font-weight: 600
    }
    & h2 {
        font-size: 24px
    }
    & h3 {
        font-size: 20px
    }
    & h3,
    & h4 {
        font-weight: 600
    }
    & h4 {
        font-size: 16px
    }
    & h5 {
        font-size: 14px
    }
    & h5,
    & h6 {
        font-weight: 600
    }
    & h6 {
        font-size: 12px
    }
    & p {
        margin-top: 0;
        margin-bottom: 10px
    }
    & blockquote {
        margin: 0
    }
    & dd {
        margin-left: 0
    }
    &:after,
    &:before {
        display: table;
        content: ""
    }
    &:after {
        clear: both
    }
    &>:first-child {
        margin-top: 0!important
    }
    &>:last-child {
        margin-bottom: 0!important
    }
    & a:not([href]) {
        color: inherit;
        text-decoration: none
    }
    & blockquote,
    & details,
    & dl,
    & ol,
    & p,
    & pre,
    & table,
    & ul {
        margin-top: 0;
        margin-bottom: 16px
    }
    & blockquote {
        padding: 0 1em;
        color: ${({theme}) => theme.text.secondary};
        border-left: .25em solid ${({theme}) => theme.border.secondary}
    }
    & blockquote>:first-child {
        margin-top: 0
    }
    & blockquote>:last-child {
        margin-bottom: 0
    }
    & h1,
    & h2,
    & h3,
    & h4,
    & h5,
    & h6 {
        position: relative;
        margin-top: 32px;
        margin-bottom: 8px;
        font-weight: 600;
        line-height: 1.25
    }
    & h1 > a,
    & h2 > a,
    & h3 > a,
    & h4 > a,
    & h5 > a,
    & h6 > a {
        position: absolute;
        right: 100%;
        top: 0;
        width: 1rem;
        height: 100%;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItaGFzaCI+PGxpbmUgeDE9IjQiIHkxPSI5IiB4Mj0iMjAiIHkyPSI5Ij48L2xpbmU+PGxpbmUgeDE9IjQiIHkxPSIxNSIgeDI9IjIwIiB5Mj0iMTUiPjwvbGluZT48bGluZSB4MT0iMTAiIHkxPSIzIiB4Mj0iOCIgeTI9IjIxIj48L2xpbmU+PGxpbmUgeDE9IjE2IiB5MT0iMyIgeDI9IjE0IiB5Mj0iMjEiPjwvbGluZT48L3N2Zz4=");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
        margin-right: .25rem;
        filter: ${({theme}) => theme.mode == 'dark' ? 'invert(1)' : 'none'};
        opacity: 0;
    }
    & h1:hover > a,
    & h2:hover > a,
    & h3:hover > a,
    & h4:hover > a,
    & h5:hover > a,
    & h6:hover > a {
        opacity: 0.5;
    }
    & h1 {
        font-size: 2em
    }
    & h2 {
        font-size: 1.25em
    }
    & h3 {
        font-size: 1.15em
    }
    & h4 {
        font-size: 1em
    }
    & h5 {
        font-size: .875em
    }
    & h6 {
        font-size: .85em;
        color: #6a737d
    }
    & ol,
    & ul {
        list-style: initial;
        padding-left: 2em
    }
    & ul {
        list-style: circle;
    }
    & ol ol,
    & ol ul,
    & ul ol,
    & ul ul {
        margin-top: 0;
        margin-bottom: 0
    }
    & li {
        word-wrap: break-all
    }
    & li>p {
        margin-top: 16px
    }
    & li+li {
        margin-top: .25em
    }
    & dl {
        padding: 0
    }
    & dl dt {
        padding: 0;
        margin-top: 16px;
        font-size: 1em;
        font-style: italic;
        font-weight: 600
    }
    & dl dd {
        padding: 0 16px;
        margin-bottom: 16px
    }
    & table {
        display: block;
        width: 100%;
        overflow: auto
    }
    & table th {
        font-weight: 600
    }
    & table td,
    & table th {
        padding: 6px 13px;
        border: 1px solid ${({theme}) => theme.border.secondary}
    }
    & table tr {
        background-color: #fff;
        border-top: 1px solid ${({theme}) => theme.border.secondary}
    }
    & img {
        max-width: 100%;
        box-sizing: initial;
        background-color: #fff
    }
    & img[align=right] {
        padding-left: 20px
    }
    & img[align=left] {
        padding-right: 20px
    }
    #table-of-contents + ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        & > li {
            width: 50%;
        }
    }
    ${ mediaScreens() }
`;

export default PostStyle;