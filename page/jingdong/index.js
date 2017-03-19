/**
 * Created by Administrator on 2017/3/16.
 */
$(function (){
    /*tab切换*/
    $('.dropdown').hover(
        function(){
            $(this).css('background-color','#fff');
            $(this).children('.drop-list').css('display','block');
            $(this).siblings('.dropdown').children('.drop-list').css('display','none')},
        function(){
            $(this).css('background-color','#e3e3e3');
            $(this).children('.drop-list').css('display','none');
           }
    );
    // /*轮播图*/
    // function slider(){
    //     var left = $('.bc').
    //     var count = 5;
    //
    // }



});