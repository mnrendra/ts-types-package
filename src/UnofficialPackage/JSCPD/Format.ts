/**
 * list of formats for which to detect duplication (default: all);
 *
 * see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
 */
export type Format = Array<
// alfa
| 'abap'
| 'actionscript'
| 'ada'
| 'apacheconf'
| 'apl'
| 'applescript'
| 'arduino'
| 'arff'
| 'asciidoc'
| 'asm6502'
| 'aspnet'
| 'autohotkey'
| 'autoit'
// bravo
| 'bash'
| 'basic'
| 'batch'
| 'bison'
| 'brainfuck'
| 'bro'
// charlie
| 'c'
| 'c-header'
| 'clike'
| 'clojure'
| 'coffeescript'
| 'comments'
| 'cpp'
| 'cpp-header'
| 'crystal'
| 'csharp'
| 'csp'
| 'css'
| 'css-extras'
// delta
| 'd'
| 'dart'
| 'diff'
| 'django'
| 'docker'
// echo
| 'eiffel'
| 'elixir'
| 'elm'
| 'erb'
| 'erlang'
// foxtrot
| 'flow'
| 'fortran'
| 'fsharp'
// golf
| 'gedcom'
| 'gherkin'
| 'git'
| 'glsl'
| 'go'
| 'graphql'
| 'groovy'
// hotel
| 'haml'
| 'handlebars'
| 'haskell'
| 'haxe'
| 'hpkp'
| 'hsts'
| 'http'
// india
| 'ichigojam'
| 'icon'
| 'inform7'
| 'ini'
| 'io'
// juliet
| 'j'
| 'java'
| 'javascript'
| 'jolie'
| 'json'
| 'jsx'
| 'julia'
// kilo
| 'keymap'
| 'kotlin'
// london
| 'latex'
| 'less'
| 'liquid'
| 'lisp'
| 'livescript'
| 'lolcode'
| 'lua'
// mike
| 'makefile'
| 'markdown'
| 'markup'
| 'matlab'
| 'mel'
| 'mizar'
| 'monkey'
// november
| 'n4js'
| 'nasm'
| 'nginx'
| 'nim'
| 'nix'
| 'nsis'
// oscar
| 'objectivec'
| 'ocaml'
| 'opencl'
| 'oz'
// papa
| 'parigp'
| 'pascal'
| 'perl'
| 'php'
| 'plsql'
| 'powershell'
| 'processing'
| 'prolog'
| 'properties'
| 'protobuf'
| 'pug'
| 'puppet'
| 'pure'
| 'python'
// quebec
| 'q'
| 'qore'
// romeo
| 'r'
| 'reason'
| 'renpy'
| 'rest'
| 'rip'
| 'roboconf'
| 'ruby'
| 'rust'
// sierra
| 'sas'
| 'sass'
| 'scala'
| 'scheme'
| 'scss'
| 'smalltalk'
| 'smarty'
| 'soy'
| 'sql'
| 'stylus'
| 'swift'
// tango
| 'tap'
| 'tcl'
| 'textile'
| 'tsx'
| 'tt2'
| 'twig'
| 'typescript'
// uniform
| 'url'
// victor
| 'vbnet'
| 'velocity'
| 'verilog'
| 'vhdl'
| 'vim'
| 'visual-basic'
// whiskey
| 'wasm'
| 'wiki'
// x-ray
| 'xeora'
| 'xojo'
| 'xquery'
// yankee
| 'yaml'
>

export default Format
