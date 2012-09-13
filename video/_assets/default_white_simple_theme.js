
//<script src="media/js/libs/jquery.overlabel.js"></script>
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Version 1.0
*
* Based on Making Compact Forms More Accessible by Mike Brittain (http://alistapart.com/articles/makingcompactformsmoreaccessible)
*/

(function($){

$.fn.overlabel = function() {
    this.each(function() {
        var $label = $(this),
            $input = $('#' + $label.attr('for'));

        $label
            .addClass('overlabel')
            .bind('click', function(event) {
                $input.focus();
            });

        $input
            .bind('focus blur change', function(event) {
                $label.css('display', (event.type == 'blur' && !$input.val() ? '' : 'none'));
            }).trigger('blur');
    });
};



})(jQuery);

//<script src="media/js/libs/jquery.carousel.js"></script>	
(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);

// <script src="jquery.zrssfeed.min.js">
(function(h){h.fn.rssfeed=function(q,f,r){f=h.extend({limit:10,header:!0,titletag:"h4",date:!0,content:!0,snippet:!0,media:!0,showerror:!0,errormsg:"",key:null,ssl:!1,linktarget:"_blank"},f);return this.each(function(s,l){var p=h(l),d="";f.ssl&&(d="s");p.hasClass("rssFeed")||p.addClass("rssFeed");if(null==q)return!1;d="https"+d+"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(q);null!=f.limit&&(d+="&num="+f.limit);null!=f.key&&(d+="&key="+f.key);h.getJSON(d+"&output=json_xml",
function(b){if(200==b.responseStatus){var e=b.responseData,b=f,g=e.feed;if(g){var a="",d="odd";if(b.media){var j=e.xmlString;"Microsoft Internet Explorer"==navigator.appName?(e=new ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(j)):e=(new DOMParser).parseFromString(j,"text/xml");j=e.getElementsByTagName("item")}b.header&&(a+='<div class="rssHeader"><a href="'+g.link+'" title="'+g.description+'">'+g.title+"</a></div>");a+='<div class="rssBody"><ul>';for(e=0;e<g.entries.length;e++){var c=
g.entries[e],i;c.publishedDate&&(i=new Date(c.publishedDate),i=i.toLocaleDateString()+" "+i.toLocaleTimeString());a+='<li class="rssRow '+d+'"><'+b.titletag+'><a href="'+c.link+'" title="View this feed at '+g.title+'">'+c.title+"</a></"+b.titletag+">";b.date&&i&&(a+="<div>"+i+"</div>");b.content&&(a+="<p>"+(b.snippet&&""!=c.contentSnippet?c.contentSnippet:c.content)+"</p>");if(b.media&&0<j.length){c=j[e].getElementsByTagName("enclosure");if(0<c.length){for(var a=a+'<div class="rssMedia"><div>Media files</div><ul>',
k=0;k<c.length;k++)var m=c[k].getAttribute("url"),n=c[k].getAttribute("type"),o=c[k].getAttribute("length"),m='<li><a href="'+m+'" title="Download this media">'+m.split("/").pop()+"</a> ("+n+", ",n=Math.floor(Math.log(o)/Math.log(1024)),o=(o/Math.pow(1024,Math.floor(n))).toFixed(2)+" "+"bytes,kb,MB,GB,TB,PB".split(",")[n],a=a+(m+o+")</li>");a+="</ul></div>"}a+="</li>"}d="odd"==d?"even":"odd"}h(l).html(a+"</ul></div>");h("a",l).attr("target",b.linktarget)}h.isFunction(r)&&r.call(this,p)}else f.showerror&&
(g=""!=f.errormsg?f.errormsg:b.responseDetails),h(l).html('<div class="rssError"><p>'+g+"</p></div>")})})}})(jQuery);
 
//<script src="media/js/libs/jquery.tweet.js"></script>
// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2011 Todd Matthews & Steve Purcell
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); // AMD support for RequireJS etc.
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
      outro_text: null,                         // [string]   do you want text AFTER your tweets?
      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
      auto_join_text_default: "i said,",        // [string]   auto text for non verb: "i said" bullocks
      auto_join_text_ed: "i",                   // [string]   auto text for past tense: "i" surfed
      auto_join_text_ing: "i am",               // [string]   auto tense for present tense: "i was" surfing
      auto_join_text_reply: "i replied to",     // [string]   auto tense for replies: "i replied to" @someone "with"
      auto_join_text_url: "i was looking at",   // [string]   auto tense for urls: "i was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null ,                  // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join}{text}",   // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2["tweet_time"] - tweet1["tweet_time"];
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
      // You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
      //   "loaded" -- triggered when tweets have been fetched and rendered
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1@<a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+'">#$1</a>'),
      capAwesome: replacer(/\b(awesome)\b/gi, '<span class="awesome">$1</span>'),
      capEpic: replacer(/\b(epic)\b/gi, '<span class="epic">$1</span>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\" target=\"_blank\"   >"+escapeHTML(text)+"</a>";
      });
    }

    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function relative_time(date) {
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
      var r = '';
      if (delta < 1) {
        r = 'just now';
      } else if (delta < 60) {
        r = delta + ' seconds ago';
      } else if(delta < 120) {
        r = 'a minute ago';
      } else if(delta < (45*60)) {
        r = (parseInt(delta / 60, 10)).toString() + ' minutes ago';
      } else if(delta < (2*60*60)) {
        r = 'an hour ago';
      } else if(delta < (24*60*60)) {
        r = '' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        r = 'a day ago';
      } else {
        r = (parseInt(delta / 86400, 10)).toString() + ' days ago';
      }
      return 'about ' + r;
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .*/im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .*/i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }

    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&include_entities=1&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/favorites/"+s.username[0]+".json?page="+s.page+"&count="+count+common_params;
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
      o.retweet = typeof(item.retweeted_status) != 'undefined';
      o.tweet_time = parse_date(item.created_at);
      o.join_text = s.join_text == "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = relative_time(o.tweet_time);
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart().capAwesome().capEpic()[0];

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.join = s.join_text ? t(' <span class="tweet_join">{join_text}</span> ', o) : ' ';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
      return o;
    }

    return this.each(function(i, widget){
      var list = $('<ul class="tweet_list">');
      var intro = '<p class="tweet_intro">'+s.intro_text+'</p>';
      var outro = '<p class="tweet_outro">'+s.outro_text+'</p>';
      var loading = $('<p class="loading">'+s.loading_text+'</p>');

      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:load").bind("tweet:load", function(){
        if (s.loading_text) $(widget).empty().append(loading);
        $.getJSON(build_api_url(), function(data){
          $(widget).empty().append(list);
          if (s.intro_text) list.before(intro);
          list.empty();

          var tweets = $.map(data.results || data, extract_template_data);
          tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
          list.append($.map(tweets, function(o) { return "<li class='clearfix'>" + t(s.template, o) + "</li>"; }).join('')).
              children('li:first').addClass('tweet_first').end().
              children('li:odd').addClass('tweet_even').end().
              children('li:even').addClass('tweet_odd');

          if (s.outro_text) list.after(outro);
          $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
          if (s.refresh_interval) {
            window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
          }
        });
      }).trigger("tweet:load");
    });
  };
}));

/****** Start image_gallery_module */
	ModuleHandler.init_image_gallery_module = function(widget_element){
        var length = $(widget_element + " .image_gallery_inner li img").length;
		$( widget_element + " .image_gallery_inner:first").jCarouselLite({
	        btnNext: widget_element + " .image_gallery_next",
	        btnPrev: widget_element + " .image_gallery_prev",
            visible: (length >= 5) ? 5 : length
	    });		

	    // Change images in gallery when clicking thumbs
		$(widget_element + " .image_gallery_thumbs").delegate("img", "click", function() {
			var enlargeImage = $(this).attr("src");
	    	$(widget_element + " .image_gallery_view img").attr("src", enlargeImage).stop(true,true).hide().fadeIn();
	    	return false;
		});
	}

	//initialize image gallery
	ModuleHandler.init_image_gallery_modules = function(){
		$('.image_gallery_module').each(function(){
			element = '#' + $(this).attr('id');
			ModuleHandler.init_image_gallery_module(element)
		})		
	}
/****** END image_gallery_module */

/****** Start video_gallery_module */
	ModuleHandler.init_video_gallery_module = function(widget_element){
        var length = $(widget_element + " .video_gallery_inner li img").length;
		$( widget_element + " .video_gallery_inner:first").jCarouselLite({
	        btnNext: widget_element + " .video_gallery_next",
	        btnPrev: widget_element + " .video_gallery_prev",
            visible: (length >= 5) ? 5 : length
	    });		

	    //change videos in gallery when clicking thumbs 
		$(widget_element + " .video_gallery_thumbs").delegate("a", "click", function() {
          var video_id = $(this).data('video-id');
          var htm = '<iframe width="646" height="358" src="https://www.youtube.com/embed/' + video_id + '?wmode=transparent" frameborder="0" allowfullscreen></iframe>';
			$(widget_element + ' .video_gallery_view').html(htm);
			
	    	return false;
		});
	}

	//initialize video gallery
	ModuleHandler.init_video_gallery_modules = function(){
		$('.video_gallery_module').each(function(){
			element = '#' + $(this).attr('id');
			ModuleHandler.init_video_gallery_module(element)
		})		
	}
/****** END video_gallery_module */

/****** Start product_gallery_module */
	ModuleHandler.init_product_gallery_module = function(widget_element){
        var length = $(widget_element + " .product_gallery_inner li img").length;
		$( widget_element + " .product_gallery_inner").jCarouselLite({
	        btnNext: widget_element + " .product_gallery_next",
	        btnPrev: widget_element + " .product_gallery_prev",
            visible: (length >= 5) ? 5 : length
	    });		
	}

	//initialize product gallery
	ModuleHandler.init_product_gallery_modules = function(){
		$('.product_gallery_module').each(function(){
			element = '#' + $(this).attr('id');
			ModuleHandler.init_product_gallery_module(element)
		})		
	}
/****** END product_gallery_module */

/****** Start rss_feed */
  ModuleHandler.init_rss_feed = function(widget_element) {
    var feed_url = $(widget_element + " input[name=feed_url]").val();
    var num_items = $(widget_element + " input[name=num_items]").val();
    $(widget_element + " .rss_feed").rssfeed(feed_url, { limit: num_items || 5 });
  }

  ModuleHandler.init_rss_feeds = function() {
    $('.rss_feed_widget').each(function() {
      element = '#' + $(this).attr('id');
      ModuleHandler.init_rss_feed(element);
    });
  }
/****** END rss_feed */

/****** Start twitter_feed */
  ModuleHandler.init_twitter_feed = function(widget_element) {
    var twitter_id = $(widget_element + " input[name=twitter_id]").val();
    var num_items = $(widget_element + " input[name=num_items]").val();
    $(widget_element + " .tweets").tweet({
      username: twitter_id, 
      join_text: 'auto',
      avatar_size: 50,
      count: num_items || 5,
      loading_text: "Loading tweets..."
    });
  }

  ModuleHandler.init_twitter_feeds = function() {
    $('.twitter_feed_module').each(function() {
      element = '#' + $(this).attr('id');
      ModuleHandler.init_twitter_feed(element);
    });
  }
/****** END twitter_feed */


window.INITIALIZE_THEME_JS = function(category, module_id ){
  $.getScript('https://www.google.com/jsapi');
  
  console.log('Initializing Theme JS is loaded');
  console.log( '-->category: ' + category );
  console.log( '-->parent_id: ' + module_id );
  
  //Initialize All the image_gallery_modules
  ModuleHandler.init_image_gallery_modules();
  ModuleHandler.init_video_gallery_modules();
  ModuleHandler.init_product_gallery_modules();
  ModuleHandler.init_rss_feeds();
  ModuleHandler.init_twitter_feeds();
  $('label.overlabel').overlabel();
}

$(document).ready(function(){
	if(window.disable_theme_auto_init == undefined || window.disable_theme_auto_init == true ){
		window.INITIALIZE_THEME_JS();
	}
  
  $('a.tweet').on('click', function(){
      newwindow=window.open($(this).attr('href'),'','height=400,width=600,x=200,y=200');
      if (window.focus) {newwindow.focus()}
      return false;
  });
});

//Ensure window fully loaded before finding image heights
$(window).load(function() {

	// Get the height of teh product image div. We'll use that in the
  // scaling computation below.
  $max_product_image_height = $('.product_image').first().height();

  // We need to get all of the product images and figure out how much
  // space we need to give them on the top and bottom.
	$('.product_image img').each(function() {

    // Get the height of the image.
		var h = $(this).height();

    // If the height of the image is less than the height 
    // of the image container, then add some padding. The
    // "/2" will center it.
		if (h < $max_product_image_height) {
			var vertFix = ($max_product_image_height - h) / 2;
			$(this).css('margin-top', vertFix);
		}
	});
});


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");	

