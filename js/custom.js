// JavaScript Document
$(document).ready(function() {
    
    tinymce.init({
        selector: '.tinyeditor',
        height: 250,
        plugins: [
            'autolink lists link image charmap  preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media  contextmenu paste code'
        ],
        language: 'ar',
        toolbar: 'insertfile undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image media',
        content_css: [
            '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
            '//www.tinymce.com/css/codepen.min.css'
        ],
        force_br_newlines: true,
        force_p_newlines: false,
        forced_root_block: ''
    });
    tinymce.init({
        selector: '.tinyeditor_comment',
        height: 150,
        plugins: [
            'autolink lists link image charmap  preview anchor',
            'searchreplace visualblocks code fullscreen',
            'media   paste '
        ],
        menu: {} ,
        language: 'ar',
        toolbar: 'insertfile undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image media',
        content_css: [
            '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
            '//www.tinymce.com/css/codepen.min.css'
        ],
        force_br_newlines: true,
        force_p_newlines: false,
        forced_root_block: ''
    });
    
    
$('#currency_converter_result input').addClass('.sendBtn');
    //----- Search Btn -----
    $('.search a').click(function() {
        $('.drop-search').slideToggle(200);
        return false;
    });

    // ------ Member Menu ------
    $('.aDiv').click(function() {
        $('.dropMenu').slideToggle(300).addClass('active');
        $('.dropmessage').hide(300).removeClass('activemessage');
        $('.dropnotification').hide(300).removeClass('activenotification');
        return false;
    });
    
    $('.anotification').click(function() {
        $('.dropnotification').slideToggle(300).addClass('activenotification');
        $('.dropmessage').hide(300).removeClass('activemessage');
        $('.dropMenu').hide(300).removeClass('active');
        return false;
        
    });
    
    $('.amessage').click(function() {
        $('.dropmessage').slideToggle(300).addClass('activemessage');
        $('.dropnotification').hide(300).removeClass('activenotification');
        $('.dropMenu').hide(300).removeClass('active');
        return false;
    });
    
    $('html').on('click','body',function(e){
        var s = $('.dropMenu');
        if(!s.is(e.target) && s.has(e.target).length === 0){
            if(s.hasClass('active')){
                s.slideUp(200);
                s.removeClass('active');             
            }
        }
    }) ;
    
    $('html').on('click','body',function(e){
        var s = $('.dropnotification');
        if(!s.is(e.target) && s.has(e.target).length === 0){
            if(s.hasClass('activenotification')){
                s.slideUp(200);
                s.removeClass('activenotification');                
            }
        }
    }) ;
    
    $('html').on('click','body',function(e){
        var s = $('.dropmessage');
        if(!s.is(e.target) && s.has(e.target).length === 0){
            if(s.hasClass('activemessage')){
                s.slideUp(200);
                s.removeClass('activemessage');
                
            }
        }
    }) ;

    //------ Custom Selext ------
    $('.custom-select').fancySelect();
    // -------- Product Tabs --------
    $('.quizcontent').hide();
    $('#question-tab').show();
    $('.questionsTab ul li a').click(function() {
        var rely = $(this).attr("rel");
        $('.quizcontent').hide();
        $('#' + rely).fadeIn(200);
        $('.questionsTab ul li a').removeClass('menu-act');
        $(this).addClass("menu-act");
        return false;
    });
    
    
    $('.quizcontent_index').hide();
    $('#question-tab_index').show();
    $('.questionsTab_index ul li a').click(function() {
        var rely = $(this).attr("rel");
        $('.quizcontent_index').hide();
        $('#' + rely).fadeIn(200);
        $('.questionsTab_index ul li a').removeClass('info-act');
        $(this).addClass("info-act");
        return false;
    });
    // -------- I-Check --------

   $('input[type="checkbox"]').iCheck({
       checkboxClass: 'icheckbox_flat'      
    });
    $('.advice_message').iCheck({
       checkboxClass: 'icheckbox_flat'      
    });            
     $('.advice_kind').iCheck({    
       radioClass: 'icheckbox_flat'
    });

    //-------- Occordion -----------
    $('div.occordion ul li:first-child a').addClass('accActiv');
    $('div.occordion ul li:first-child a').children(".plus").addClass("minus");
    $('div.occordion ul li:first-child div').css('display', 'block');
    $('div.occordion li a').click(function() {
        if ($(this).hasClass('accActiv')) {
            return false;
        }
        var par = $(this).parents('div.occordion').filter(':first');
        par.find('li .inner').slideUp();
        par.find('li a.accActiv').removeClass('accActiv');
        par.find('li a.ll').children(".plus").removeClass("minus");
        $(this).addClass('accActiv').next('.inner').slideDown();
        $(this).children(".plus").addClass("minus");
        return false;
    });

    // ------ Follow Tabs ------
    $('.contents').hide();
    $('#f-tab').show();
    $('.follow_tabs ul li a').click(function() {
        flows_search_resrt();
        var rely = $(this).attr("rel");
        $('.contents').hide();
        $('#' + rely).fadeIn(500);
        $('.follow_tabs ul li a').removeClass('menu-act');
        $(this).addClass("menu-act");
        return false;
    });

$('.contents_s').hide();
    $('#s-tab').show();
    $('.follows_tabs ul li a').click(function() {
        flows_search_resrt();
        var rely = $(this).attr("rel");
        $('.contents_s').hide();
        $('#' + rely).fadeIn(500);
        $('.follows_tabs ul li a').removeClass('menus-act');
        $(this).addClass("menus-act");
        return false;
    });

    // ------ more_questions ------
    var mor_questions = $('.more_questions');
    var questions_result = $('#questions_result');
    load_and_view_more_questions(mor_questions,questions_result,6);
    mor_questions.click(function(e){
        e.preventDefault();
        var questions_result = $('#questions_result');
        load_and_view_more_questions($(this),questions_result,6);

    });
    
     var comment_more_questions = $('.comment_more_questions');
    var questions_result_comment_more = $('#questions_result_comment_more');
    load_and_view_more_questions(comment_more_questions,questions_result_comment_more,6);
    comment_more_questions.click(function(e){
        e.preventDefault();
        var questions_result_comment_more = $('#questions_result_comment_more');
        load_and_view_more_questions($(this),questions_result_comment_more,6);

    });
    
    // ------ main_questions ------
       var main_questions = $('.main_questions');
        var questions_result = $('#questions_result');
        load_and_view_more_questions(main_questions,questions_result,6);

        main_questions.click(function(e){
            e.preventDefault();
            var questions_result = $('#questions_result');
            load_and_view_more_questions($(this),questions_result,6);

        });
        
        
        var most_comment_questions = $('.most_comment_questions');
        var questions_most_comment = $('#questions_most_comment');
        load_and_view_more_questions(most_comment_questions,questions_most_comment,6);

        most_comment_questions.click(function(e){
            e.preventDefault();
            var questions_most_comment = $('#questions_most_comment');
            load_and_view_more_questions($(this),questions_most_comment,6);

        });
        // ------ fav_questions ------
       var fav_questions = $('.fav_questions');
        var questions_result = $('#questions_result');
        load_and_view_more_questions(fav_questions,questions_result,6);

        fav_questions.click(function(e){
            e.preventDefault();
            var questions_result = $('#questions_result');
            load_and_view_more_questions($(this),questions_result,6);

        });

         // ------ my_questions ------
       var my_questions = $('.my_questions');
        var questions_result = $('#questions_result');
        load_and_view_more_questions(my_questions,questions_result,6);

        my_questions.click(function(e){
            e.preventDefault();
            var questions_result = $('#questions_result');
            load_and_view_more_questions($(this),questions_result,6);

        });


    // ------ inbox message ------
    var inbox_msg = $('.msg_inbox');
    var inbox_msg_result = $('#inbox_result');
    load_and_view_more_questions(inbox_msg,inbox_msg_result,6);

    inbox_msg.click(function(e){
        e.preventDefault();
        var inbox_msg_result = $('#inbox_result');
        load_and_view_more_questions($(this),inbox_msg_result,6);

    });
      
     // ------ inbox consult ------
 var inbox_notification = $('.notification_inbox');
    var inbox_notification_result = $('#inbox_result_notification');
    load_and_view_more_questions(inbox_notification,inbox_notification_result,6);

    inbox_notification.click(function(e){
        e.preventDefault();
        var inbox_notification_result = $('#inbox_result_notification');
        load_and_view_more_questions($(this),inbox_notification_result,6);

    });
    
    // ------ inbox consult ------
    var inbox_consult = $('.consult_inbox');
    var inbox_consult_result = $('#inbox_result_consult');
    load_and_view_more_questions(inbox_consult,inbox_consult_result,6);

    inbox_consult.click(function(e){
        e.preventDefault();
        var inbox_consult_result = $('#inbox_result_consult');
        load_and_view_more_questions($(this),inbox_consult_result,6);

    });
    // ------ outbox message ------
    var outbox_msg = $('.msg_outbox');
    var outbox_msg_result = $('#outbox_result');
    load_and_view_more_questions(outbox_msg,outbox_msg_result,6);

    outbox_msg.click(function(e){
        e.preventDefault();
        var outbox_msg_result = $('#outbox_result');
        load_and_view_more_questions($(this),outbox_msg_result,6);

    });
 // ------ outbox consult ------
  var outbox_consult = $('.consult_outbox');
    var outbox_consult_result = $('#outbox_result_consult');
    load_and_view_more_questions(outbox_consult,outbox_consult_result,6);

    outbox_consult.click(function(e){
        e.preventDefault();
        var outbox_consult_result = $('#outbox_result_consult');
        load_and_view_more_questions($(this),outbox_consult_result,6);

    });


    // ------ more_flowers ------
    var more_flowers = $('.get_flowers');
    var flowers_result = $('#flowers_result');
    load_and_view_more_questions(more_flowers,flowers_result,6);

    more_flowers.click(function(e){
        e.preventDefault();
        var flowers_result = $('#flowers_result');
        load_and_view_more_questions($(this),flowers_result,6);

    });

    // ------ more_flows ------
    var more_flows = $('.get_flows');
    var flows_result = $('#flows_result');
    load_and_view_more_questions(more_flows,flows_result,6);

    more_flows.click(function(e){
        e.preventDefault();
        var flows_result = $('#flows_result');
        load_and_view_more_questions($(this),flows_result,6);

    });







    // ------ delete message ------

    $('html').on('click','.del_msg',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var id = $this.attr('msg_id');
        if(typeof url == 'undefined'){
            return false;
        }

        $.ajax({
            url:url,
            type:'post',
            data:{'msg_id':id},
            success: function(data){
                x = JSON.parse(data);
                if(x.result == 1){
                    $('a[msg_id="'+id+'"]').parents('.mem-row').remove();
                    $('#msg_content').hide();
                }
            }
        });
    });
    $('html').on('click','.del_consult',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var id = $this.attr('consult_id');
        if(typeof url == 'undefined'){
            return false;
        }

        $.ajax({
            url:url,
            type:'post',
            data:{'consult_id':id},
            success: function(data){
                x = JSON.parse(data);
                if(x.result == 1){
                    $('a[consult_id="'+id+'"]').parents('.mem-row').remove();
                    $('#consult_content').hide();
                }
            }
        });
    });
    $('html').on('click','.notification_del',function(){
    $(this).hide();
    $(this).next().removeClass('hide');
    });
    $('html').on('click','.cancel_delete',function(){
    $(this).parent().addClass('hide');
    $(this).parent().prev().show();
    });
    $('html').on('click','.del_notification',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var id = $this.attr('notification_id');
        if(typeof url == 'undefined'){
            return false;
        }

        $.ajax({
            url:url,
            type:'post',
            data:{'notification_id':id},
            success: function(data){
                x = JSON.parse(data);
                if(x.result == 1){
                    $('a[notification_id="'+id+'"]').parents('.mem-row').remove();
                    $('#notification_content').hide();
                }
            }
        });
    });


    // ------ get msg content ------

    $('html').on('click','.get_msg',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var type = $this.attr('msgtype');
        var msg_id = $this.attr('msg_id');
        if(typeof url == 'undefined'){
            return false;
        }
        $.ajax({
            url:url,
            type:'post',
            data:{type:type,msg_id:msg_id},
            success : function(data){
                $('#msg_content').show().html(data);
            }
        });
    });

 $('html').on('click','.get_consult',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var type = $this.attr('msgtype');
        var status = $this.attr('consulttype');
        var consult_id = $this.attr('consult_id');
        if(typeof url == 'undefined'){
            return false;
        }
        $.ajax({
            url:url,
            type:'post',
            data:{type:type,consult_id:consult_id},
            success : function(data){
                if(status == 'open'){
                 $('.get_consult').html('فتح الاستشارة');   
                }
                else if(status == 'close'){
                 $('.get_consult').html('غلق الاستشارة');   
                }
            }
        });
    });
// $('html').on('click','.get_consult',function(e){
//        e.preventDefault();
//        var $this = $(this);
//        var url = $this.attr('href');
//        var type = $this.attr('msgtype');
//        var consult_id = $this.attr('consult_id');
//        if(typeof url == 'undefined'){
//            return false;
//        }
//        $.ajax({
//            url:url,
//            type:'post',
//            data:{type:type,consult_id:consult_id},
//            success : function(data){
//                $('#consult_content').show().html(data);
//            }
//        });
//    });

    // ------ focus reply form ------
    $('.reply_q').click(function(e){
        e.preventDefault();
        $('.reply_add_log').show();
        $('.reply_b').focus();
    });

    // ------ more answers ------
    var more_answers = $('.more_answers');
    var answers_result = $('#answers_result');
    load_and_view_answers(more_answers,answers_result);

    more_answers.click(function(e){
        e.preventDefault();
        var answers_result = $('#answers_result');
        load_and_view_answers($(this),answers_result);
    });



    // ------  lightbox  ------

    var win_height = $(window).height();
    var divlight_height = $('.lightbox_container_url').height();
    var margin = (parseInt(win_height)/2) - parseInt(divlight_height) ;
    $('.lightbox_container_url').css('margin-top',margin);
    
    var win_height = $(window).height();
    var divlight_height = $('.lightbox_container').height();
    var margin = (parseInt(win_height)/2) - parseInt(divlight_height) ;
    $('.lightbox_container').css('margin-top','0');                
                    
    
    $('.add_attach_url').submit(function(e){
        var validate = form_validate(e, $(this));
        if(validate){
            e.preventDefault();
            var attach_name = $('.attach_url_name_open').val();
            var attach_url = $('.attach_url_open').val();
            var attachShortcode = '[url href="'+ attach_url +'"]'+ attach_name +'[/url]';
            var child = $('.child_url').val();
            if(child == ''){
                var reply_old_val = $('#reply_urlShortcode').val();
                var urlShortcode_old_val = $('#urlShortcode').val();
                $('#reply_urlShortcode').val(reply_old_val + '\n' + attachShortcode);
                $('#urlShortcode').val(urlShortcode_old_val + '\n' + attachShortcode);
            }else{
                var reply_old_val = $('textarea[meta="'+ child +'"]').val();
                $('textarea[meta="'+ child +'"]').val(reply_old_val + '\n' + attachShortcode);
            }
            window.location.hash = '#';
        }
    });
    $('.add_video_url').submit(function(e){
        alert('video');return false;
    });


    // ------ add answer  ------

    $('#add_answer').submit(function(e){
        var answer = $(this).find('textarea');
        if(answer.val() == ''){
            answer.addClass('input_error');
            e.preventDefault();
        }
    });

    $('html').on('click','.attach_img',function(){
        var child = $('.child_url').val();
        if(child == ''){
            var attach_img = $('#attach_img');
        }else{
            var attach_img = $('input[img="'+ child +'"]');
        }
        attach_img.click();
        attach_img.off("change");
        attach_img.change(function(){
            //var file_name = $(this).val().replace(/C:\\fakepath\\/i, '');
            var url = uploadUrl;
            if(typeof url == 'undefined'){
                return false;
            }
            var files = !!this.files ? this.files : [];
            if (!files.length) return; // no file selected

            if (/^image/.test( files[0].type)){ // only image file

                var data = new FormData();

                $.each(files, function(key, value){
                    data.append(key, value);
                });
                $.ajax({
                    url:url,
                    type: 'POST',
                    data: data,
                    cache: false,
                    processData: false, // Don't process the files
                    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                    success: function(data){
                        var x = JSON.parse(data);
                        if(x.result == 1){
                            var img = '[img]'+ x.img +'[/img]';

                            var child = $('.child_url').val();
                            if(child == ''){
                                var reply_old_val = $('#reply_b').val();
                                $('#reply_b').val(reply_old_val + '\n' + img);
                                var addquestions_old_val = $('#addquestions').val();
                                $('#addquestions').val(addquestions_old_val + '\n' + img);
                            }else{
                                var reply_old_val = $('textarea[meta="'+ child +'"]').val();
                                $('textarea[meta="'+ child +'"]').val(reply_old_val + '\n' + img);
                            }

                        }
                    }
                });
            }

        });
    });


    // ------   video url clear add questions  ------


    $('.video_url_clear').click(function(e){
        e.preventDefault();
        $('#video_url').val('');
    });

    // ------   contact form  ------

    $('#contact_form').submit(function(e){
        form_validate(e, $(this));
    });

    // ------   login form   ------

    $('#login_form').submit(function(e){
        form_validate(e, $(this));
    });


    $('.showpass').next('ins.iCheck-helper').on('click',function (){
        var checked = $(this).parent('.icheckbox_flat').hasClass('checked');
        if (checked){
            $('#password').get(0).type = 'text';
        }else{
            $('#password').get(0).type = 'password';
        }

    });
    $('.showpass2').next('ins.iCheck-helper').on('click',function (){
        var checked = $(this).parent('.icheckbox_flat').hasClass('checked');
        if (checked){
            $('#password2').get(0).type = 'text';
        }else{
            $('#password2').get(0).type = 'password';
        }

    });


    // ------   register form   ------
    if ($.datepicker) {
        $( "#birthday" ).datepicker({
        });
    }
    $('#register_form').submit(function(e){
        form_validate(e, $(this));
        if(!$('#agree').is(':checked')){
            e.preventDefault();
            $('#agree').parents('.icheckbox_flat').addClass('input_error').css('BorderRadius','5px');
        }else{
            $('#agree').parents('.icheckbox_flat').removeClass('input_error').css('BorderRadius','0px');
        }
    });

    // ------  concerns   ------

    if(typeof concernsurl != 'undefined'){
        var url = concernsurl;
    }

    var concernsajax = getconcernsajax(url);

    var input = $('.concerns_input');
    var result = $('.concerns_result');

    $('.concerns').click(function(){
        input.focus();
    });

    input.on('keyup',function(e){
        var html_result = getconcernsresult(concernsajax);
        var search = $(this).val();

        result.html(html_result).slideDown(200);
        result.find('li:contains("'+ search +'")').show();
        if(e.keyCode == 40){

        }

    });

    $('html').on('click','.concerns_result li',function(){
        var cid = $(this).attr('cid');
        var name = $(this).text();
        putresult_view(cid,name);
        delete concernsajax[cid];
    });

    $('html').on('click','.delc',function(e){
        e.preventDefault();
        var cid = $(this).attr('cid');
        var text = $('#li_' + cid).text();
        var name = text.replace('x','');
        $('#li_' + cid).remove();
        $('#input_' + cid).remove();
        concernsajax[cid] = name;
        input.val('').focus();
    });

    // ------  like and unlike answers   ------

    $('html').on('click','a.like',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var aid = $this.attr('aid');
        $.ajax({
            url:url,
            type:'post',
            data:{aid:aid},
            success : function(data){
                $this.addClass('like_act');

                var unlike = $('a.unlike[aid = "'+ aid +'"]');
                var unlike_url = unlike.attr('href');

                get_likes(url,$this,aid);
                get_unlikes(unlike_url,unlike,aid);

            }
        });
    });

    $('html').on('click','a.unlike',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var aid = $this.attr('aid');
        $.ajax({
            url:url,
            type:'post',
            data:{aid:aid},
            success : function(data){
                $this.addClass('unlike_act');

                var like = $('a.like[aid = "'+ aid +'"]');
                var like_url = like.attr('href');

                get_likes(like_url,like,aid);
                get_unlikes(url,$this,aid);
            }
        });
    });

    // ------  answer report  ------

    $('html').on('click','a.areport',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var aid = $this.attr('aid');
        var otext = $this.text();
        $.ajax({
            url:url,
            type:'post',
            data:{aid:aid},
            success: function(data){
                var x = JSON.parse(data);
                if(x.result == 1){
                    $this.text('تم الأبلاغ');
                    $this.delay(1000).queue(function(){
                        $this.text(otext);
                    });
                }
            }
        });
    });

    $('html').on('click','a.areply',function(e){
        e.preventDefault();
        var form = $('#add_answer').html();
        var parent_id = $(this).attr('aid');
        var post_id = $(this).attr('pid');
        var form = '<div class="addPost quiz" id="add_answer">' + 
               ' <form class="form-group" method="post" action="" enctype="multipart/form-data">' +
                   
                    '<textarea class="form-control reply_b tinyeditor_reply" id="reply_b" name="message" placeholder="إبدأ بالكتابة"></textarea>' +
'                    <span class="shortcodes"></span>' +
                    '<textarea name="url_short_code" id="reply_urlShortcode" class="url-shortcode hidden"></textarea>'+
                    '<div class="addFile">'+
                        '<div class="input-file">'+
                            '<input type="hidden" name="attach_url" id="attach_url" value="">'+
                            '<input type="file" name="attach_img"  id="attach_img" accept="image/*">'+
                        '</div>'+
                        '<input type="hidden" name="add" value="comment" />'+
                        '<input type="hidden" name="current_post_id" value="'+post_id+'" />'+
                        '<input type="hidden" name="parent" value="'+ parent_id +'" />' +
                        '<input type="submit" name="submit" value="ارسال">'+                        
                        '<a href="#" class="attach_img" title="Add Image"></a>'+
                    '</div>'+
                '</form>'+
            '</div>';
   
        $('#add_answer').hide();
        
        $('.child_answer').hide().html('');
        $(this).parents('.answerBox').find('.child_answer').show().html(form);
        $(this).parents('.answerBox').find('textarea').attr({id:'',meta :parent_id});
        $(this).parents('.answerBox').find('input[name="attach_img"]').attr({id:'',img:parent_id});
        $('.child_url').val(parent_id);
        tinymce.init({
        selector: '.tinyeditor_reply',
        height: 150,
        plugins: [
            'autolink lists link image charmap  preview anchor',
            'searchreplace visualblocks code fullscreen',
            'media   paste '
        ],
        menu: {} ,
        language: 'ar',
        toolbar: 'insertfile undo redo  | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image media',
        content_css: [
            '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
            '//www.tinymce.com/css/codepen.min.css'
        ],
        force_br_newlines: true,
        force_p_newlines: false,
        forced_root_block: ''
    });
    });

    // ------  add fav  ------

    $('html').on('click','.add_fav',function(e){
        e.preventDefault();
        var $this = $(this);
        var otext = $this.text();
        var url = $this.attr('href');
        var qid = $this.attr('qid');
        if(typeof url == 'undefined'){
            return false;
        }
        $.ajax({
            url:url,
            type:'post',
            data:{qid:qid},
            success:function(data){
                var x = JSON.parse(data);
                if(x.result == 1){
                    $this.text(x.message);
                    $this.delay(1000).queue(function(){
                        $this.text(otext);
                    });
                }
            }
        });
    });


    // ------  dell fav  ------

    $('html').on('click','.del_fav',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var qid = $this.attr('qid');
        if(typeof url == 'undefined'){
            return false;
        }
        $.ajax({
            url:url,
            type:'post',
            data:{qid:qid},
            success:function(data){
                var x = JSON.parse(data);
                if(x.result == 1){
                    $this.parents('.questionRow').remove();
                }
            }
        });
    });

    // ------   auto complate send msg names  ------

    var s = '';
    var url = $('#getusers').attr('href');
    $('#to').focus(function (){
        if(typeof url == 'undefined'){
            return false;
        }
    
        $.ajax({
            url:url,
            success: function(data) {
                x = JSON.parse(data);
                s = '<ul>' ;
                $.each(x,function (id,name){
                  
                    s += '<li uid="' + id + '">'+ name +'</li>';
                });
                s += '</ul>'
                $('#result').html(s).slideDown(200).addClass('ropen');
            }
        })
    });

    $('#to').keyup(function (){
        //console.log(e.keyCode) ;
        var search = $(this).val();
        $('#toid').val('');
        if (search != ''){
            $('#result').html(s).slideDown(200).addClass('ropen');
            $('#result li').removeClass('cont');
            $('#result li:contains("'+ search +'")').addClass('cont');
            $('#result li').each(function (){
                if (!$(this).hasClass('cont')){
                    $(this).remove();
                }
                if (search == $(this).text()){
                    var uid = $(this).attr('uid');
                    $('#toid').val(uid);
                }
            });
        }else{
            //$('#result').fadeOut(200);
        }
    });

    $('html').on('click','#result li',function (e){
        var uid = $(this).attr('uid');
        var text = $(this).text();
        $('#to').val(text);
        $('#toid').val(uid);
        $('#result').fadeOut(200);
    });

    $('html').on('click','body',function(e){
        var t = $('#result');
        if(!t.is(e.target) && t.has(e.target).length === 0){
            if(t.hasClass('ropen')){
                t.fadeOut(200);
                t.removeClass('ropen');
            }
        }
    }) ;

    // ------   attach pdf file name   ------

    $('.add_pdf').click(function(e){
        e.preventDefault();
        $('#file_upload').click();
    });

    $('html').on('click','.add_pdfr',function(e){
        e.preventDefault();
        $('#file_uploadr').click();
    });

    $('#file_upload').change(function(){
        var file_name = $(this).val().replace(/C:\\fakepath\\/i, '');
        $('#files_show').show().find('h6').html(file_name);
    });

    $('html').on('change','#file_uploadr',function(){
        var file_name = $(this).val().replace(/C:\\fakepath\\/i, '');
        $('#files_showr').show().find('h6').html(file_name);
    });

    $('.remove_pdf').click(function(e){
        e.preventDefault();
        $('#file_upload').val('');
        $('#files_show').hide();
    });

    $('html').on('click','.remove_pdfr',function(e){
        e.preventDefault();
        $('#file_uploadr').val('');
        $('#files_showr').hide();
    });

    $('#send_msg_form').submit(function(e){
        form_validate(e, $(this));
    });


    // ------   replay on msg   ------

    $('html').on('click','.reply_msg',function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href');
        var msg_id = $this.attr('msg_id');
        if(typeof url == 'undefined'){
            return false;
        }
        $.ajax({
            url:url,
            type:'post',
            data:{type:'inbox',msg_id:msg_id,only:'data'},
            success: function(data){
               var x = JSON.parse(data);
               if(x.result == 1){
                    var html = $('.msg_send_form').html();
                   var reply = $('#reply_msg_content');

                   reply.html(html);
                   reply.find('form').attr('id','reply_msg_form');
                   reply.find('#getusers,#result').remove();
                   reply.find('#to').attr('id','tor');
                   reply.find('#toid').attr('id','toidr');
                   reply.find('#subject').attr('id','subjectr');
                   reply.find('#file_upload').attr('id','file_uploadr');
                   reply.find('#files_show').attr('id','files_showr');
                   reply.find('a.add_pdf').removeClass('add_pdf').addClass('add_pdfr');
                   reply.find('a.remove_pdf').removeClass('remove_pdf').addClass('remove_pdfr');
                   $('#tor').val(x.from_user_name);
                   $('#toidr').val(x.from_user_id);
                   $('#subjectr').val('RE: ' + x.subject);
                   reply.find('textarea[name="message"]').val('\n ----------------------------------------------- \n' + x.content);
                   texteara_resizable();
                   $('#reply_msg_form').submit(function(e){
                       form_validate(e, $(this));
                   });
               }
            }
        });
    });

    // ------   flow & unflow process   ------


    $('html').on('mouseenter','.flow',function(){
        var st = $(this).attr('flow');
        var txt = $(this).text();
        if(st != 'ok'){
            return false;
        }
        if(txt == 'متابع'){
            $(this).text('عدم المتابعة');
        }
    });
    $('html').on('mouseleave','.flow',function(){
        var st = $(this).attr('flow');
        var txt = $(this).text();
        if(st != 'ok'){
            return false;
        }
        if(txt == 'عدم المتابعة'){
            $(this).text('متابع');
        }
    });
    
    $('html').on('click','.flow',function(e){

        var $this = $(this);
        var url = $this.attr('href');
        var flow_id = $this.attr('flow_id');

        if(!url.match('login')){
            e.preventDefault();
        }
        if(typeof url == 'undefined'){
            return false;
        }

        $.ajax({
            url:url,
            type:'post',
            data:{flow_id:flow_id},
            success : function(data){
                var x = JSON.parse(data);
                if(x.result != 1){
                    return false;
                }

                if(x.process == 'flow'){
                    $this.attr('flow','ok');
                    $this.text('متابع');
                }

                if(x.process == 'unflow'){
                    $this.attr('flow','notok');
                    $this.text('تابع');
                }

            }
        });
    });
//    $('html').on('click','.flow',function(e){
//
//        var $this = $(this);
//        var url = $this.attr('href');
//        var flow_id = $this.attr('flow_id');
//
//        if(!url.match('login')){
//            e.preventDefault();
//        }
//        if(typeof url == 'undefined'){
//            return false;
//        }
//
//        $.ajax({
//            url:url,
//            type:'post',
//            data:{flow_id:flow_id},
//            success : function(data){
//                var x = JSON.parse(data);
//                if(x.result != 1){
//                    return false;
//                }
//
//                if(x.process == 'flow'){
//                    $this.attr('flow','ok');
//                    $this.text('متابع');
//                }
//
//                if(x.process == 'unflow'){
//                    $this.attr('flow','notok');
//                    $this.text('تابع');
//                }
//
//            }
//        });
//    });


    // ------ search_flows ------

    $('#flows_search_form').submit(function(e){
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('action');
        var search = $('.flows_search').val();
        var limit = 6;

        $('#f-tab,#f-tab2').hide();
        $('#search_tab').show();
        if(typeof url == 'undefined' || search == ''){
            return false;
        }

        $.ajax({
            url:url,
            type:'post',
            data:{'flows_search':search},
            success: function(data){ console.log(data);
                $('#search_tab').find('.mem-row').remove();
                if(data == 'null'){
                    $('#search_result').before('<div class="mem-row"><div class="alert alert-danger text-center">عفوا لا يوجد نتيجة للبحث</div></div>');
                }else{
                    $('#search_result').before(data);
                    $('.moreFlows_search').attr('offset',limit);
                }

            }
        });




    });
    $('.moreFlows_search').click(function(e){
        var search = $('.flows_search').val();
        e.preventDefault();
        var search_result = $('#search_result');
        load_and_view_more_search_flow($(this),search_result,6,search);

    });


    // ------ change photo profile ------


    $('.profile_photo').hover(function(){
        $('.change_photo').show();
    },function(){
        $('.change_photo').hide();
    });

    $('.change_photo').click(function(){
        $('.change_photo_input').click();
    });

    $('.change_photo_input').change(function(e){
        var url  = $('.upload_avatar').attr('action');
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                $("#avatar").attr('src',this.result);

                // handel file before upload

                var data = new FormData();

                $.each(files, function(key, value){
                    data.append(key, value);
                });

                $.ajax({
                    url:url,
                    type: 'POST',
                    data: data,
                    cache: false,
                    dataType: 'json',
                    processData: false, // Don't process the files
                    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
                    success: function(data){;

                        if(data.success == 1){
                            var imgname = data.imgname;
                            $.ajax({
                                url:url,
                                type:'post',
                                data:{imgname:imgname},
                                success: function(data){

                                    if (data.success == 1){
                                        $('#avatar').attr('src',data.img);
                                    }
                                }
                            });
                        }
                    }
                });

            }

        }

    }); 
        }); // end ready function




// functions
function load_and_view_more_questions($this,$before,limit){
    var offset = parseInt($this.attr('offset'));
    var url = $this.attr('href');
    var cat = $this.attr('cat');
    var user_id = $this.attr('user_id');

    if(typeof user_id == 'undefined'){
        user_id = '';
    }

    if (typeof url == 'undefined'){
        return false;
    }
    $.ajax({
        url:url,
        type:'post',
        data:{'offset':offset,'cat':cat,'user_id':user_id},
        success: function(data) {
            if (data != 'null') {
                $before.before(data);
                offset = parseInt(offset) + parseInt(limit);
                $this.attr('offset',offset);
            }else{
                $this.hide();
            }
        }
    });

}

function load_and_view_answers($this,$before){

    var url = $this.attr('href');
    var page_num = $this.attr('page');
    var q_id = $this.attr('q_id');

    if (typeof url == 'undefined'){
        return false;
    }

    $.ajax({
        url:url,
        type:'post',
        data:{'page':page_num,'q_id': q_id},
        success: function(data) {
            if (data != 'null') {
                $before.before(data);
                page_num = parseInt(page_num) + 1;
                $this.attr('page',page_num);
            }else{
                $this.hide();
            }
        }
    });

}

function load_and_view_more_search_flow($this,$before,limit,search){
    var offset = parseInt($this.attr('offset'));
    var url = $this.attr('href');
    if (typeof url == 'undefined'){
        return false;
    }
    $.ajax({
        url:url,
        type:'post',
        data:{'offset':offset,'flows_search':search},
        success: function(data) {
            if (data != 'null') {
                $before.before(data);
                offset = parseInt(offset) + parseInt(limit);
                $this.attr('offset',offset);
            }else{
                $this.hide();
            }
        }
    });

}

function form_validate(e,elment){
    var validate = true;
    $.each(elment.find('input,textarea').not('.exclude'),function (){
        $(this).removeClass('input_error');
        if ($(this).val().length == 0){
            $(this).addClass('input_error');
            e.preventDefault();
            validate = false;
        }
    });

    if (validate === true){
        return true;
    }

    return false;

}

function getconcernsajax(url){
    if(typeof url == 'undefined'){
        return false;
    }
    var jqXHR = $.ajax({
        url:url,
        type:'post',
        async: false,
        success:function(data){
        }
    });
    var x = jqXHR.responseText;
    return JSON.parse(x);

//    var n =  jqXHR.responseText;
//    var x = JSON.parse(n);
//    var y = [];
//
//    for(var i in x ){
//        y[i] = x[i];
//    }
//    return y;

}

function getconcernsresult(obj){
    var r = '<ul>';
    if(obj == false){
        return false;
    }
    $.each(obj, function(id,name){
        r += '<li cid="'+ id +'">'+ name +'</li>';
    });
    r += '</ul>';

    return r;

}

function putresult_view(cid,name){
    var input = $('.concerns_input');
    var result = $('.concerns_result');
    var  li = $('.concerns_li');
    var output = '<li id="li_'+ cid +'"><a href="#" class="delc" cid="'+ cid +'">x</a>'+ name +'</li>'+'<input id="input_'+ cid +'" type="hidden" name="concerns[]" value="'+ cid +'">';
    li.before(output);
    input.val('');
    result.slideUp(200);
    input.focus();
}

function arrow_down(){

}

function get_likes(url,elment,aid){
    if(typeof url == 'undefined'){
        return false;
    }
    $.ajax({
        url:url,
        type:'post',
        data : {likes:'get',aid:aid},
        success:function(data){
            if(data == 0){
                elment.removeClass('like_act')
            }
            elment.text(data);
        }
    });
}

function get_unlikes(url,elment,aid){
    if(typeof url == 'undefined'){
        return false;
    }
    $.ajax({
        url:url,
        type:'post',
        data : {unlikes:'get',aid:aid},
        success:function(data){
            if(data == 0){
                elment.removeClass('unlike_act')
            }
        elment.text(data);
    }
});

}
function texteara_resizable(){
    $('textarea').each(function() {
        $(this).height(($(this).prop('scrollHeight') * 2));
    });
}
function flows_search_resrt(){
    $('.flows_search').val('');
    $('#search_tab').find('.mem-row').remove();
}
