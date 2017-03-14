/**
 * Created by ruijuanhou.
 */

/**
 * 编译产出
 */
fis
    .match('/page/**',{
    uesSameNameRequire:true /*开启同名依赖*/
})

    .match('*.{html,js,css}',{
    useHash:true
})
    .match('*.html',{
        useMap:true
    })
    .match('::package',{
        postpackager:fis.plugin('loader',{
            allInOne:true
        })
    })
    .match('*.js',{
        optimizer:fis.plugin('uglify-js')
    })
    .match('*.css',{
        optimizer:fis.plugin('clean-css')
    });
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
