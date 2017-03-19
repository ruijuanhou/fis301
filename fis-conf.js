/**
 * Created by ruijuanhou.
 */

/**
 * 编译产出
 */



// fis
//     .match('**.less', {
//     parser: fis.plugin('less'), // invoke `fis-parser-less`,
//     rExt: '.css'
// })
// .match('**.sass', {
//     parser: fis.plugin('sass'), // invoke `fis-parser-sass`,
//     rExt: '.css'
// });

// // widget源码目录下的资源被标注为组件
// fis.match('/widget/**/*', {
//     isMod: true
// });
// fis.match('/static/**/*', {
//     isMod: true
// });
// //声明依赖
// fis.match('*.html',{
//     useMap:true
// });
// // widget下的 js 调用 jswrapper 进行自动化组件化封装
// fis.match('/widget/**/*.js', {
//     postprocessor: fis.plugin('jswrapper', {
//         type: 'commonjs'
//     })
// });
//
// // test 目录下的原封不动产出到 test 目录下
// fis.match('/test/**/*', {
//     release: '$0'
// });
// fis.match('**.tmpl', {
//     parser: fis.plugin('utc'), // invoke `fis-parser-utc`
//     isJsLike: true
// });
// 所有的文件产出到 static/ 目录下
// fis.match('*', {
//     release: '/static/$0'
// });
//
// // 所有模板放到 tempalte 目录下
// fis.match('*.html', {
//     release: '/template/$0'
// });

// optimize
// fis.media('prod')
//     .match('*.js', {
//         optimizer: fis.plugin('uglify-js', {
//             mangle: {
//                 expect: ['require', 'define', 'some string'] //不想被压的
//             }
//         })
//     })
//     .match('*.css', {
//         optimizer: fis.plugin('clean-css', {
//             'keepBreaks': true //保持一个规则一个换行
//         })
//     });
//
// // pack
// fis.media('prod')
// // 启用打包插件，必须匹配 ::package
//     .match('::package', {
//         packager: fis.plugin('map'),
//         spriter: fis.plugin('csssprites', {
//             layout: 'matrix',
//             margin: '15'
//         })
//     })
//     .match('*.js', {
//         packTo: '/static/all_others.js'
//     })
//     .match('*.css', {
//         packTo: '/staitc/all_others.css'
//     })
//     .match('/widget/**/*.js', {
//         packTo: '/static/all_comp.js'
//     })
//     .match('/widget/**/*.css', {
//         packTo: '/static/all_comp.css'
//     });
// fis
//     .match('/page/**',{
//     uesSameNameRequire:true /*开启同名依赖*/
// })
//
//     .match('*.{html,js,css}',{
//     useHash:true
// })
//     .match('*.html',{
//         useMap:true
//     })
//     .match('::package',{
//         postpackager:fis.plugin('loader',{
//             allInOne:true
//         })
//     })
//     .match('*.js',{
//         optimizer:fis.plugin('uglify-js')
//     })
//     .match('*.css',{
//         optimizer:fis.plugin('clean-css')
//     });
    // .match("::package",{
    //     postpackager:[fis.plugin('loader',{
    //         resourceType:'mod',
    //         obtainScript:false,
    //         allInOne:true,
    //         useInlineMap:true
    //     })]
    // });

// fis
//     .match('{*.{md, sh, tmpl}, BCLOUD}', {
//         release: false
//     })
//
//     .match('::package', {
//         packager: fis.plugin('deps-pack', pkgMap)
//     })
//
//     .match('*map.json', {
//         release: '${configs}$0'
//     })
//
//     .match('**/*.scss', {
//         rExt: '.css',
//         parser: fis.plugin('node-sass', {}),
//         release: '${statics}/$0'
//     })
//
//     .match('*.{js,css,scss,png,jpg,gif,html}', {
//         release: '${statics}/$0'
//     })
//
//     .match('*.tpl', {
//         release: '${templates}/$0',
//         url: '${namespace}/$0'
//     })
//     .match('page/pc/mod/**.js', {
//         isMod: true,
//         useSameNameRequire: true
//     })
//     .match('/test/(**/*.*)', {
//         release: '/test/${namespace}/$1'
//     });
