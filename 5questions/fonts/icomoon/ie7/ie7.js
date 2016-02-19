/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'sbu-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'sbuicon-sbu-shield': '&#xe600;',
		'sbuicon-yammer': '&#xe601;',
		'sbuicon-home': '&#xe900;',
		'sbuicon-home2': '&#xe901;',
		'sbuicon-newspaper': '&#xe90b;',
		'sbuicon-magazine': '&#xe90c;',
		'sbuicon-pencil': '&#xe90e;',
		'sbuicon-pencil6': '&#xe913;',
		'sbuicon-music3': '&#xe94c;',
		'sbuicon-play': '&#xe957;',
		'sbuicon-play2': '&#xe958;',
		'sbuicon-presentation': '&#xe95c;',
		'sbuicon-video-camera': '&#xe962;',
		'sbuicon-video-camera2': '&#xe963;',
		'sbuicon-video-camera3': '&#xe965;',
		'sbuicon-connection': '&#xe97c;',
		'sbuicon-connection2': '&#xe97d;',
		'sbuicon-connection3': '&#xe97e;',
		'sbuicon-connection4': '&#xe97f;',
		'sbuicon-station': '&#xe981;',
		'sbuicon-file-empty': '&#xe99d;',
		'sbuicon-file-empty2': '&#xe99e;',
		'sbuicon-file-download': '&#xe9a5;',
		'sbuicon-file-download2': '&#xe9a6;',
		'sbuicon-file-upload': '&#xe9a7;',
		'sbuicon-file-upload2': '&#xe9a8;',
		'sbuicon-file-check': '&#xe9a9;',
		'sbuicon-file-check2': '&#xe9aa;',
		'sbuicon-file-eye': '&#xe9ab;',
		'sbuicon-file-eye2': '&#xe9ac;',
		'sbuicon-file-text2': '&#xe9ad;',
		'sbuicon-file-text3': '&#xe9ae;',
		'sbuicon-file-picture': '&#xe9af;',
		'sbuicon-file-picture2': '&#xe9b0;',
		'sbuicon-file-play': '&#xe9b3;',
		'sbuicon-file-play2': '&#xe9b4;',
		'sbuicon-file-xml': '&#xe9bb;',
		'sbuicon-file-xml2': '&#xe9bc;',
		'sbuicon-file-presentation': '&#xe9bf;',
		'sbuicon-file-presentation2': '&#xe9c0;',
		'sbuicon-file-stats': '&#xe9c1;',
		'sbuicon-file-stats2': '&#xe9c2;',
		'sbuicon-folder': '&#xe9d0;',
		'sbuicon-folder2': '&#xe9db;',
		'sbuicon-folder-open': '&#xe9dc;',
		'sbuicon-folder5': '&#xe9e7;',
		'sbuicon-folder-open2': '&#xe9e8;',
		'sbuicon-price-tag2': '&#xe9ee;',
		'sbuicon-price-tags': '&#xe9ef;',
		'sbuicon-price-tag3': '&#xe9f0;',
		'sbuicon-price-tags2': '&#xe9f1;',
		'sbuicon-phone2': '&#xea1d;',
		'sbuicon-phone-wave': '&#xea1f;',
		'sbuicon-address-book': '&#xea2b;',
		'sbuicon-at-sign': '&#xea2f;',
		'sbuicon-envelop': '&#xea30;',
		'sbuicon-envelop2': '&#xea31;',
		'sbuicon-envelop3': '&#xea32;',
		'sbuicon-envelop4': '&#xea33;',
		'sbuicon-pushpin': '&#xea36;',
		'sbuicon-location': '&#xea38;',
		'sbuicon-compass': '&#xea3f;',
		'sbuicon-compass2': '&#xea40;',
		'sbuicon-compass3': '&#xea41;',
		'sbuicon-map4': '&#xea48;',
		'sbuicon-map5': '&#xea49;',
		'sbuicon-direction': '&#xea4a;',
		'sbuicon-clock': '&#xea4d;',
		'sbuicon-clock2': '&#xea4e;',
		'sbuicon-display': '&#xea70;',
		'sbuicon-mobile': '&#xea75;',
		'sbuicon-tablet': '&#xea77;',
		'sbuicon-tv': '&#xea79;',
		'sbuicon-disk2': '&#xea8c;',
		'sbuicon-usb-stick': '&#xea8d;',
		'sbuicon-server': '&#xea8f;',
		'sbuicon-database': '&#xea90;',
		'sbuicon-database2': '&#xea91;',
		'sbuicon-bubbles': '&#xeac2;',
		'sbuicon-bubbles2': '&#xeac3;',
		'sbuicon-bubble2': '&#xeac4;',
		'sbuicon-bubbles3': '&#xeac5;',
		'sbuicon-bubbles4': '&#xeac6;',
		'sbuicon-bubble-notification': '&#xeac7;',
		'sbuicon-bubble6': '&#xead1;',
		'sbuicon-bubbles7': '&#xead2;',
		'sbuicon-bubble7': '&#xead3;',
		'sbuicon-bubbles8': '&#xead4;',
		'sbuicon-bubble8': '&#xead5;',
		'sbuicon-bubble-dots3': '&#xead6;',
		'sbuicon-bubble-lines3': '&#xead7;',
		'sbuicon-bubble9': '&#xead8;',
		'sbuicon-bubble-dots4': '&#xead9;',
		'sbuicon-bubble-lines4': '&#xeada;',
		'sbuicon-bubbles10': '&#xeadc;',
		'sbuicon-user': '&#xeaf4;',
		'sbuicon-users': '&#xeaf5;',
		'sbuicon-user-plus': '&#xeaf6;',
		'sbuicon-user-minus': '&#xeaf7;',
		'sbuicon-user-cancel': '&#xeaf8;',
		'sbuicon-user-block': '&#xeaf9;',
		'sbuicon-user-lock': '&#xeafa;',
		'sbuicon-user-check': '&#xeafb;',
		'sbuicon-users2': '&#xeafc;',
		'sbuicon-users4': '&#xeb09;',
		'sbuicon-user-tie': '&#xeb0a;',
		'sbuicon-vcard': '&#xeb0e;',
		'sbuicon-quotes-left': '&#xeb18;',
		'sbuicon-quotes-right': '&#xeb19;',
		'sbuicon-search': '&#xeb2d;',
		'sbuicon-lock2': '&#xeb4e;',
		'sbuicon-wrench': '&#xeb55;',
		'sbuicon-wrench2': '&#xeb56;',
		'sbuicon-wrench3': '&#xeb57;',
		'sbuicon-equalizer': '&#xeb58;',
		'sbuicon-equalizer2': '&#xeb59;',
		'sbuicon-cogs': '&#xeb5d;',
		'sbuicon-cog2': '&#xeb5e;',
		'sbuicon-cog3': '&#xeb5f;',
		'sbuicon-pulse2': '&#xeb6d;',
		'sbuicon-bug2': '&#xeb76;',
		'sbuicon-construction': '&#xeb7a;',
		'sbuicon-traffic-cone': '&#xeb7b;',
		'sbuicon-traffic-lights': '&#xeb7c;',
		'sbuicon-pie-chart': '&#xeb7d;',
		'sbuicon-rating2': '&#xeb97;',
		'sbuicon-rating3': '&#xeb98;',
		'sbuicon-paw': '&#xebd5;',
		'sbuicon-atom': '&#xebe8;',
		'sbuicon-atom2': '&#xebe9;',
		'sbuicon-magnet': '&#xebea;',
		'sbuicon-magnet2': '&#xebeb;',
		'sbuicon-lamp4': '&#xebf3;',
		'sbuicon-lamp5': '&#xebf4;',
		'sbuicon-lamp6': '&#xebf5;',
		'sbuicon-lamp7': '&#xebf6;',
		'sbuicon-lamp8': '&#xebf7;',
		'sbuicon-puzzle3': '&#xec1e;',
		'sbuicon-puzzle4': '&#xec1f;',
		'sbuicon-power-cord': '&#xec4a;',
		'sbuicon-more': '&#xec58;',
		'sbuicon-more2': '&#xec59;',
		'sbuicon-grid': '&#xec5a;',
		'sbuicon-grid2': '&#xec5b;',
		'sbuicon-lan': '&#xec64;',
		'sbuicon-menu': '&#xec67;',
		'sbuicon-menu3': '&#xec6a;',
		'sbuicon-menu7': '&#xec6e;',
		'sbuicon-cloud': '&#xec72;',
		'sbuicon-cloud-download': '&#xec73;',
		'sbuicon-cloud-upload': '&#xec74;',
		'sbuicon-cloud-check': '&#xec75;',
		'sbuicon-cloud2': '&#xec76;',
		'sbuicon-cloud-download2': '&#xec77;',
		'sbuicon-cloud-upload2': '&#xec78;',
		'sbuicon-cloud-check2': '&#xec79;',
		'sbuicon-link': '&#xec96;',
		'sbuicon-link2': '&#xec98;',
		'sbuicon-link4': '&#xec9c;',
		'sbuicon-flag': '&#xeca1;',
		'sbuicon-flag2': '&#xeca2;',
		'sbuicon-warning': '&#xed4c;',
		'sbuicon-warning2': '&#xed4d;',
		'sbuicon-notification': '&#xed4e;',
		'sbuicon-notification2': '&#xed4f;',
		'sbuicon-question': '&#xed50;',
		'sbuicon-question2': '&#xed51;',
		'sbuicon-question3': '&#xed52;',
		'sbuicon-question4': '&#xed53;',
		'sbuicon-plus3': '&#xed5a;',
		'sbuicon-plus-circle': '&#xed5c;',
		'sbuicon-minus-circle': '&#xed5d;',
		'sbuicon-plus-circle2': '&#xed5e;',
		'sbuicon-minus-circle2': '&#xed5f;',
		'sbuicon-info': '&#xed60;',
		'sbuicon-info2': '&#xed61;',
		'sbuicon-cancel-circle': '&#xed62;',
		'sbuicon-cancel-circle2': '&#xed63;',
		'sbuicon-blocked': '&#xed64;',
		'sbuicon-cross2': '&#xed6a;',
		'sbuicon-checkmark3': '&#xed6e;',
		'sbuicon-arrow-up3': '&#xedb6;',
		'sbuicon-arrow-right3': '&#xedba;',
		'sbuicon-arrow-down3': '&#xedbe;',
		'sbuicon-arrow-left3': '&#xedc2;',
		'sbuicon-arrow-up5': '&#xedc4;',
		'sbuicon-arrow-right5': '&#xedc5;',
		'sbuicon-arrow-down5': '&#xedc6;',
		'sbuicon-arrow-left5': '&#xedc7;',
		'sbuicon-arrow-up-left': '&#xedc8;',
		'sbuicon-arrow-up6': '&#xedc9;',
		'sbuicon-arrow-up-right': '&#xedca;',
		'sbuicon-arrow-right6': '&#xedcb;',
		'sbuicon-arrow-down-right': '&#xedcc;',
		'sbuicon-arrow-down6': '&#xedcd;',
		'sbuicon-arrow-down-left': '&#xedce;',
		'sbuicon-arrow-left6': '&#xedcf;',
		'sbuicon-arrow-up-left3': '&#xedd8;',
		'sbuicon-arrow-up8': '&#xedd9;',
		'sbuicon-arrow-up-right3': '&#xedda;',
		'sbuicon-arrow-right8': '&#xeddb;',
		'sbuicon-arrow-down-right3': '&#xeddc;',
		'sbuicon-arrow-down8': '&#xeddd;',
		'sbuicon-arrow-down-left3': '&#xedde;',
		'sbuicon-arrow-left8': '&#xeddf;',
		'sbuicon-battery-6': '&#xee51;',
		'sbuicon-battery-5': '&#xee52;',
		'sbuicon-battery-4': '&#xee53;',
		'sbuicon-battery-2': '&#xee55;',
		'sbuicon-battery-1': '&#xee56;',
		'sbuicon-battery-0': '&#xee57;',
		'sbuicon-battery-charging': '&#xee58;',
		'sbuicon-embed': '&#xeec9;',
		'sbuicon-embed2': '&#xeeca;',
		'sbuicon-google-drive': '&#xeee7;',
		'sbuicon-facebook': '&#xeee8;',
		'sbuicon-facebook2': '&#xeee9;',
		'sbuicon-facebook3': '&#xeeea;',
		'sbuicon-twitter': '&#xeeed;',
		'sbuicon-twitter2': '&#xeeee;',
		'sbuicon-twitter3': '&#xeeef;',
		'sbuicon-feed2': '&#xeef0;',
		'sbuicon-feed3': '&#xeef1;',
		'sbuicon-youtube': '&#xeef3;',
		'sbuicon-youtube2': '&#xeef4;',
		'sbuicon-youtube3': '&#xeef5;',
		'sbuicon-youtube42': '&#xeef6;',
		'sbuicon-dropbox': '&#xef0b;',
		'sbuicon-onedrive': '&#xef0c;',
		'sbuicon-blogger': '&#xef15;',
		'sbuicon-blogger2': '&#xef16;',
		'sbuicon-tux': '&#xef1a;',
		'sbuicon-apple2': '&#xef1b;',
		'sbuicon-android': '&#xef1d;',
		'sbuicon-windows': '&#xef1e;',
		'sbuicon-windows8': '&#xef1f;',
		'sbuicon-paypal2': '&#xef32;',
		'sbuicon-git': '&#xef3e;',
		'sbuicon-chrome': '&#xef41;',
		'sbuicon-firefox': '&#xef42;',
		'sbuicon-IE': '&#xef43;',
		'sbuicon-opera': '&#xef44;',
		'sbuicon-safari': '&#xef45;',
		'sbuicon-glass': '&#xf000;',
		'sbuicon-music': '&#xf001;',
		'sbuicon-search2': '&#xf002;',
		'sbuicon-envelope-o': '&#xf003;',
		'sbuicon-heart': '&#xf004;',
		'sbuicon-star': '&#xf005;',
		'sbuicon-star-o': '&#xf006;',
		'sbuicon-user2': '&#xf007;',
		'sbuicon-film': '&#xf008;',
		'sbuicon-th-large': '&#xf009;',
		'sbuicon-th': '&#xf00a;',
		'sbuicon-th-list': '&#xf00b;',
		'sbuicon-check': '&#xf00c;',
		'sbuicon-close': '&#xf00d;',
		'sbuicon-search-plus': '&#xf00e;',
		'sbuicon-search-minus': '&#xf010;',
		'sbuicon-power-off': '&#xf011;',
		'sbuicon-signal': '&#xf012;',
		'sbuicon-cog': '&#xf013;',
		'sbuicon-trash-o': '&#xf014;',
		'sbuicon-home3': '&#xf015;',
		'sbuicon-file-o': '&#xf016;',
		'sbuicon-clock-o': '&#xf017;',
		'sbuicon-road': '&#xf018;',
		'sbuicon-download': '&#xf019;',
		'sbuicon-arrow-circle-o-down': '&#xf01a;',
		'sbuicon-arrow-circle-o-up': '&#xf01b;',
		'sbuicon-inbox': '&#xf01c;',
		'sbuicon-play-circle-o': '&#xf01d;',
		'sbuicon-repeat': '&#xf01e;',
		'sbuicon-refresh': '&#xf021;',
		'sbuicon-list-alt': '&#xf022;',
		'sbuicon-lock': '&#xf023;',
		'sbuicon-flag3': '&#xf024;',
		'sbuicon-headphones': '&#xf025;',
		'sbuicon-volume-off': '&#xf026;',
		'sbuicon-volume-down': '&#xf027;',
		'sbuicon-volume-up': '&#xf028;',
		'sbuicon-qrcode': '&#xf029;',
		'sbuicon-barcode': '&#xf02a;',
		'sbuicon-tag': '&#xf02b;',
		'sbuicon-tags': '&#xf02c;',
		'sbuicon-book': '&#xf02d;',
		'sbuicon-bookmark': '&#xf02e;',
		'sbuicon-print': '&#xf02f;',
		'sbuicon-camera': '&#xf030;',
		'sbuicon-font': '&#xf031;',
		'sbuicon-bold': '&#xf032;',
		'sbuicon-italic': '&#xf033;',
		'sbuicon-text-height': '&#xf034;',
		'sbuicon-text-width': '&#xf035;',
		'sbuicon-align-left': '&#xf036;',
		'sbuicon-align-center': '&#xf037;',
		'sbuicon-align-right': '&#xf038;',
		'sbuicon-align-justify': '&#xf039;',
		'sbuicon-list': '&#xf03a;',
		'sbuicon-dedent': '&#xf03b;',
		'sbuicon-indent': '&#xf03c;',
		'sbuicon-video-camera4': '&#xf03d;',
		'sbuicon-image': '&#xf03e;',
		'sbuicon-pencil2': '&#xf040;',
		'sbuicon-map-marker': '&#xf041;',
		'sbuicon-adjust': '&#xf042;',
		'sbuicon-tint': '&#xf043;',
		'sbuicon-edit': '&#xf044;',
		'sbuicon-share-square-o': '&#xf045;',
		'sbuicon-check-square-o': '&#xf046;',
		'sbuicon-arrows': '&#xf047;',
		'sbuicon-step-backward': '&#xf048;',
		'sbuicon-fast-backward': '&#xf049;',
		'sbuicon-backward': '&#xf04a;',
		'sbuicon-play3': '&#xf04b;',
		'sbuicon-pause': '&#xf04c;',
		'sbuicon-stop': '&#xf04d;',
		'sbuicon-forward': '&#xf04e;',
		'sbuicon-fast-forward': '&#xf050;',
		'sbuicon-step-forward': '&#xf051;',
		'sbuicon-eject': '&#xf052;',
		'sbuicon-chevron-left': '&#xf053;',
		'sbuicon-chevron-right': '&#xf054;',
		'sbuicon-plus-circle3': '&#xf055;',
		'sbuicon-minus-circle3': '&#xf056;',
		'sbuicon-times-circle': '&#xf057;',
		'sbuicon-check-circle': '&#xf058;',
		'sbuicon-question-circle': '&#xf059;',
		'sbuicon-info-circle': '&#xf05a;',
		'sbuicon-crosshairs': '&#xf05b;',
		'sbuicon-times-circle-o': '&#xf05c;',
		'sbuicon-check-circle-o': '&#xf05d;',
		'sbuicon-ban': '&#xf05e;',
		'sbuicon-arrow-left': '&#xf060;',
		'sbuicon-arrow-right': '&#xf061;',
		'sbuicon-arrow-up': '&#xf062;',
		'sbuicon-arrow-down': '&#xf063;',
		'sbuicon-mail-forward': '&#xf064;',
		'sbuicon-expand': '&#xf065;',
		'sbuicon-compress': '&#xf066;',
		'sbuicon-plus': '&#xf067;',
		'sbuicon-minus': '&#xf068;',
		'sbuicon-asterisk': '&#xf069;',
		'sbuicon-exclamation-circle': '&#xf06a;',
		'sbuicon-gift': '&#xf06b;',
		'sbuicon-leaf': '&#xf06c;',
		'sbuicon-fire': '&#xf06d;',
		'sbuicon-eye': '&#xf06e;',
		'sbuicon-eye-slash': '&#xf070;',
		'sbuicon-exclamation-triangle': '&#xf071;',
		'sbuicon-plane': '&#xf072;',
		'sbuicon-calendar': '&#xf073;',
		'sbuicon-random': '&#xf074;',
		'sbuicon-comment': '&#xf075;',
		'sbuicon-magnet3': '&#xf076;',
		'sbuicon-chevron-up': '&#xf077;',
		'sbuicon-chevron-down': '&#xf078;',
		'sbuicon-retweet': '&#xf079;',
		'sbuicon-shopping-cart': '&#xf07a;',
		'sbuicon-folder3': '&#xf07b;',
		'sbuicon-folder-open3': '&#xf07c;',
		'sbuicon-arrows-v': '&#xf07d;',
		'sbuicon-arrows-h': '&#xf07e;',
		'sbuicon-bar-chart': '&#xf080;',
		'sbuicon-twitter-square': '&#xf081;',
		'sbuicon-facebook-square': '&#xf082;',
		'sbuicon-camera-retro': '&#xf083;',
		'sbuicon-key': '&#xf084;',
		'sbuicon-cogs2': '&#xf085;',
		'sbuicon-comments': '&#xf086;',
		'sbuicon-thumbs-o-up': '&#xf087;',
		'sbuicon-thumbs-o-down': '&#xf088;',
		'sbuicon-star-half': '&#xf089;',
		'sbuicon-heart-o': '&#xf08a;',
		'sbuicon-sign-out': '&#xf08b;',
		'sbuicon-linkedin-square': '&#xf08c;',
		'sbuicon-thumb-tack': '&#xf08d;',
		'sbuicon-external-link': '&#xf08e;',
		'sbuicon-sign-in': '&#xf090;',
		'sbuicon-trophy': '&#xf091;',
		'sbuicon-github-square': '&#xf092;',
		'sbuicon-upload': '&#xf093;',
		'sbuicon-lemon-o': '&#xf094;',
		'sbuicon-phone': '&#xf095;',
		'sbuicon-square-o': '&#xf096;',
		'sbuicon-bookmark-o': '&#xf097;',
		'sbuicon-phone-square': '&#xf098;',
		'sbuicon-twitter4': '&#xf099;',
		'sbuicon-facebook4': '&#xf09a;',
		'sbuicon-github': '&#xf09b;',
		'sbuicon-unlock': '&#xf09c;',
		'sbuicon-credit-card': '&#xf09d;',
		'sbuicon-rss': '&#xf09e;',
		'sbuicon-hdd-o': '&#xf0a0;',
		'sbuicon-bullhorn': '&#xf0a1;',
		'sbuicon-bell-o': '&#xf0a2;',
		'sbuicon-certificate': '&#xf0a3;',
		'sbuicon-hand-o-right': '&#xf0a4;',
		'sbuicon-hand-o-left': '&#xf0a5;',
		'sbuicon-hand-o-up': '&#xf0a6;',
		'sbuicon-hand-o-down': '&#xf0a7;',
		'sbuicon-arrow-circle-left': '&#xf0a8;',
		'sbuicon-arrow-circle-right': '&#xf0a9;',
		'sbuicon-arrow-circle-up': '&#xf0aa;',
		'sbuicon-arrow-circle-down': '&#xf0ab;',
		'sbuicon-globe': '&#xf0ac;',
		'sbuicon-wrench4': '&#xf0ad;',
		'sbuicon-tasks': '&#xf0ae;',
		'sbuicon-filter': '&#xf0b0;',
		'sbuicon-briefcase': '&#xf0b1;',
		'sbuicon-arrows-alt': '&#xf0b2;',
		'sbuicon-group': '&#xf0c0;',
		'sbuicon-chain': '&#xf0c1;',
		'sbuicon-cloud3': '&#xf0c2;',
		'sbuicon-flask': '&#xf0c3;',
		'sbuicon-cut': '&#xf0c4;',
		'sbuicon-copy': '&#xf0c5;',
		'sbuicon-paperclip': '&#xf0c6;',
		'sbuicon-floppy-o': '&#xf0c7;',
		'sbuicon-square': '&#xf0c8;',
		'sbuicon-bars': '&#xf0c9;',
		'sbuicon-list-ul': '&#xf0ca;',
		'sbuicon-list-ol': '&#xf0cb;',
		'sbuicon-strikethrough': '&#xf0cc;',
		'sbuicon-underline': '&#xf0cd;',
		'sbuicon-table': '&#xf0ce;',
		'sbuicon-magic': '&#xf0d0;',
		'sbuicon-truck': '&#xf0d1;',
		'sbuicon-pinterest': '&#xf0d2;',
		'sbuicon-pinterest-square': '&#xf0d3;',
		'sbuicon-google-plus-square': '&#xf0d4;',
		'sbuicon-google-plus': '&#xf0d5;',
		'sbuicon-money': '&#xf0d6;',
		'sbuicon-caret-down': '&#xf0d7;',
		'sbuicon-caret-up': '&#xf0d8;',
		'sbuicon-caret-left': '&#xf0d9;',
		'sbuicon-caret-right': '&#xf0da;',
		'sbuicon-columns': '&#xf0db;',
		'sbuicon-sort': '&#xf0dc;',
		'sbuicon-sort-desc': '&#xf0dd;',
		'sbuicon-sort-asc': '&#xf0de;',
		'sbuicon-envelope': '&#xf0e0;',
		'sbuicon-linkedin': '&#xf0e1;',
		'sbuicon-rotate-left': '&#xf0e2;',
		'sbuicon-gavel': '&#xf0e3;',
		'sbuicon-dashboard': '&#xf0e4;',
		'sbuicon-comment-o': '&#xf0e5;',
		'sbuicon-comments-o': '&#xf0e6;',
		'sbuicon-bolt': '&#xf0e7;',
		'sbuicon-sitemap': '&#xf0e8;',
		'sbuicon-umbrella': '&#xf0e9;',
		'sbuicon-clipboard': '&#xf0ea;',
		'sbuicon-lightbulb-o': '&#xf0eb;',
		'sbuicon-exchange': '&#xf0ec;',
		'sbuicon-cloud-download3': '&#xf0ed;',
		'sbuicon-cloud-upload3': '&#xf0ee;',
		'sbuicon-user-md': '&#xf0f0;',
		'sbuicon-stethoscope': '&#xf0f1;',
		'sbuicon-suitcase': '&#xf0f2;',
		'sbuicon-bell': '&#xf0f3;',
		'sbuicon-coffee': '&#xf0f4;',
		'sbuicon-cutlery': '&#xf0f5;',
		'sbuicon-file-text-o': '&#xf0f6;',
		'sbuicon-building-o': '&#xf0f7;',
		'sbuicon-hospital-o': '&#xf0f8;',
		'sbuicon-ambulance': '&#xf0f9;',
		'sbuicon-medkit': '&#xf0fa;',
		'sbuicon-fighter-jet': '&#xf0fb;',
		'sbuicon-beer': '&#xf0fc;',
		'sbuicon-h-square': '&#xf0fd;',
		'sbuicon-plus-square': '&#xf0fe;',
		'sbuicon-angle-double-left': '&#xf100;',
		'sbuicon-angle-double-right': '&#xf101;',
		'sbuicon-angle-double-up': '&#xf102;',
		'sbuicon-angle-double-down': '&#xf103;',
		'sbuicon-angle-left': '&#xf104;',
		'sbuicon-angle-right': '&#xf105;',
		'sbuicon-angle-up': '&#xf106;',
		'sbuicon-angle-down': '&#xf107;',
		'sbuicon-desktop': '&#xf108;',
		'sbuicon-laptop': '&#xf109;',
		'sbuicon-tablet2': '&#xf10a;',
		'sbuicon-mobile2': '&#xf10b;',
		'sbuicon-circle-o': '&#xf10c;',
		'sbuicon-quote-left': '&#xf10d;',
		'sbuicon-quote-right': '&#xf10e;',
		'sbuicon-spinner': '&#xf110;',
		'sbuicon-circle': '&#xf111;',
		'sbuicon-mail-reply': '&#xf112;',
		'sbuicon-github-alt': '&#xf113;',
		'sbuicon-folder-o': '&#xf114;',
		'sbuicon-folder-open-o': '&#xf115;',
		'sbuicon-smile-o': '&#xf118;',
		'sbuicon-frown-o': '&#xf119;',
		'sbuicon-meh-o': '&#xf11a;',
		'sbuicon-gamepad': '&#xf11b;',
		'sbuicon-keyboard-o': '&#xf11c;',
		'sbuicon-flag-o': '&#xf11d;',
		'sbuicon-flag-checkered': '&#xf11e;',
		'sbuicon-terminal': '&#xf120;',
		'sbuicon-code': '&#xf121;',
		'sbuicon-mail-reply-all': '&#xf122;',
		'sbuicon-star-half-empty': '&#xf123;',
		'sbuicon-location-arrow': '&#xf124;',
		'sbuicon-crop': '&#xf125;',
		'sbuicon-code-fork': '&#xf126;',
		'sbuicon-chain-broken': '&#xf127;',
		'sbuicon-question5': '&#xf128;',
		'sbuicon-info3': '&#xf129;',
		'sbuicon-exclamation': '&#xf12a;',
		'sbuicon-superscript': '&#xf12b;',
		'sbuicon-subscript': '&#xf12c;',
		'sbuicon-eraser': '&#xf12d;',
		'sbuicon-puzzle-piece': '&#xf12e;',
		'sbuicon-microphone': '&#xf130;',
		'sbuicon-microphone-slash': '&#xf131;',
		'sbuicon-shield': '&#xf132;',
		'sbuicon-calendar-o': '&#xf133;',
		'sbuicon-fire-extinguisher': '&#xf134;',
		'sbuicon-rocket': '&#xf135;',
		'sbuicon-maxcdn': '&#xf136;',
		'sbuicon-chevron-circle-left': '&#xf137;',
		'sbuicon-chevron-circle-right': '&#xf138;',
		'sbuicon-chevron-circle-up': '&#xf139;',
		'sbuicon-chevron-circle-down': '&#xf13a;',
		'sbuicon-html5': '&#xf13b;',
		'sbuicon-css3': '&#xf13c;',
		'sbuicon-anchor': '&#xf13d;',
		'sbuicon-unlock-alt': '&#xf13e;',
		'sbuicon-bullseye': '&#xf140;',
		'sbuicon-ellipsis-h': '&#xf141;',
		'sbuicon-ellipsis-v': '&#xf142;',
		'sbuicon-rss-square': '&#xf143;',
		'sbuicon-play-circle': '&#xf144;',
		'sbuicon-ticket': '&#xf145;',
		'sbuicon-minus-square': '&#xf146;',
		'sbuicon-minus-square-o': '&#xf147;',
		'sbuicon-level-up': '&#xf148;',
		'sbuicon-level-down': '&#xf149;',
		'sbuicon-check-square': '&#xf14a;',
		'sbuicon-pencil-square': '&#xf14b;',
		'sbuicon-external-link-square': '&#xf14c;',
		'sbuicon-share-square': '&#xf14d;',
		'sbuicon-compass4': '&#xf14e;',
		'sbuicon-caret-square-o-down': '&#xf150;',
		'sbuicon-caret-square-o-up': '&#xf151;',
		'sbuicon-caret-square-o-right': '&#xf152;',
		'sbuicon-eur': '&#xf153;',
		'sbuicon-gbp': '&#xf154;',
		'sbuicon-dollar': '&#xf155;',
		'sbuicon-inr': '&#xf156;',
		'sbuicon-cny': '&#xf157;',
		'sbuicon-rouble': '&#xf158;',
		'sbuicon-krw': '&#xf159;',
		'sbuicon-bitcoin': '&#xf15a;',
		'sbuicon-file': '&#xf15b;',
		'sbuicon-file-text': '&#xf15c;',
		'sbuicon-sort-alpha-asc': '&#xf15d;',
		'sbuicon-sort-alpha-desc': '&#xf15e;',
		'sbuicon-sort-amount-asc': '&#xf160;',
		'sbuicon-sort-amount-desc': '&#xf161;',
		'sbuicon-sort-numeric-asc': '&#xf162;',
		'sbuicon-sort-numeric-desc': '&#xf163;',
		'sbuicon-thumbs-up': '&#xf164;',
		'sbuicon-thumbs-down': '&#xf165;',
		'sbuicon-youtube-square': '&#xf166;',
		'sbuicon-youtube4': '&#xf167;',
		'sbuicon-xing': '&#xf168;',
		'sbuicon-xing-square': '&#xf169;',
		'sbuicon-youtube-play': '&#xf16a;',
		'sbuicon-dropbox2': '&#xf16b;',
		'sbuicon-stack-overflow': '&#xf16c;',
		'sbuicon-instagram': '&#xf16d;',
		'sbuicon-flickr': '&#xf16e;',
		'sbuicon-adn': '&#xf170;',
		'sbuicon-bitbucket': '&#xf171;',
		'sbuicon-bitbucket-square': '&#xf172;',
		'sbuicon-tumblr': '&#xf173;',
		'sbuicon-tumblr-square': '&#xf174;',
		'sbuicon-long-arrow-down': '&#xf175;',
		'sbuicon-long-arrow-up': '&#xf176;',
		'sbuicon-long-arrow-left': '&#xf177;',
		'sbuicon-long-arrow-right': '&#xf178;',
		'sbuicon-apple': '&#xf179;',
		'sbuicon-windows2': '&#xf17a;',
		'sbuicon-android2': '&#xf17b;',
		'sbuicon-linux': '&#xf17c;',
		'sbuicon-dribbble': '&#xf17d;',
		'sbuicon-skype': '&#xf17e;',
		'sbuicon-foursquare': '&#xf180;',
		'sbuicon-trello': '&#xf181;',
		'sbuicon-female': '&#xf182;',
		'sbuicon-male': '&#xf183;',
		'sbuicon-gittip': '&#xf184;',
		'sbuicon-sun-o': '&#xf185;',
		'sbuicon-moon-o': '&#xf186;',
		'sbuicon-archive': '&#xf187;',
		'sbuicon-bug': '&#xf188;',
		'sbuicon-vk': '&#xf189;',
		'sbuicon-weibo': '&#xf18a;',
		'sbuicon-renren': '&#xf18b;',
		'sbuicon-pagelines': '&#xf18c;',
		'sbuicon-stack-exchange': '&#xf18d;',
		'sbuicon-arrow-circle-o-right': '&#xf18e;',
		'sbuicon-arrow-circle-o-left': '&#xf190;',
		'sbuicon-caret-square-o-left': '&#xf191;',
		'sbuicon-dot-circle-o': '&#xf192;',
		'sbuicon-wheelchair': '&#xf193;',
		'sbuicon-vimeo-square': '&#xf194;',
		'sbuicon-try': '&#xf195;',
		'sbuicon-plus-square-o': '&#xf196;',
		'sbuicon-space-shuttle': '&#xf197;',
		'sbuicon-slack': '&#xf198;',
		'sbuicon-envelope-square': '&#xf199;',
		'sbuicon-wordpress': '&#xf19a;',
		'sbuicon-openid': '&#xf19b;',
		'sbuicon-bank': '&#xf19c;',
		'sbuicon-graduation-cap': '&#xf19d;',
		'sbuicon-yahoo': '&#xf19e;',
		'sbuicon-google': '&#xf1a0;',
		'sbuicon-reddit': '&#xf1a1;',
		'sbuicon-reddit-square': '&#xf1a2;',
		'sbuicon-stumbleupon-circle': '&#xf1a3;',
		'sbuicon-stumbleupon': '&#xf1a4;',
		'sbuicon-delicious': '&#xf1a5;',
		'sbuicon-digg': '&#xf1a6;',
		'sbuicon-pied-piper': '&#xf1a7;',
		'sbuicon-pied-piper-alt': '&#xf1a8;',
		'sbuicon-drupal': '&#xf1a9;',
		'sbuicon-joomla': '&#xf1aa;',
		'sbuicon-language': '&#xf1ab;',
		'sbuicon-fax': '&#xf1ac;',
		'sbuicon-building': '&#xf1ad;',
		'sbuicon-child': '&#xf1ae;',
		'sbuicon-paw2': '&#xf1b0;',
		'sbuicon-spoon': '&#xf1b1;',
		'sbuicon-cube': '&#xf1b2;',
		'sbuicon-cubes': '&#xf1b3;',
		'sbuicon-behance': '&#xf1b4;',
		'sbuicon-behance-square': '&#xf1b5;',
		'sbuicon-steam': '&#xf1b6;',
		'sbuicon-steam-square': '&#xf1b7;',
		'sbuicon-recycle': '&#xf1b8;',
		'sbuicon-automobile': '&#xf1b9;',
		'sbuicon-cab': '&#xf1ba;',
		'sbuicon-tree': '&#xf1bb;',
		'sbuicon-spotify': '&#xf1bc;',
		'sbuicon-deviantart': '&#xf1bd;',
		'sbuicon-soundcloud': '&#xf1be;',
		'sbuicon-database3': '&#xf1c0;',
		'sbuicon-file-pdf-o': '&#xf1c1;',
		'sbuicon-file-word-o': '&#xf1c2;',
		'sbuicon-file-excel-o': '&#xf1c3;',
		'sbuicon-file-powerpoint-o': '&#xf1c4;',
		'sbuicon-file-image-o': '&#xf1c5;',
		'sbuicon-file-archive-o': '&#xf1c6;',
		'sbuicon-file-audio-o': '&#xf1c7;',
		'sbuicon-file-movie-o': '&#xf1c8;',
		'sbuicon-file-code-o': '&#xf1c9;',
		'sbuicon-vine': '&#xf1ca;',
		'sbuicon-codepen': '&#xf1cb;',
		'sbuicon-jsfiddle': '&#xf1cc;',
		'sbuicon-life-bouy': '&#xf1cd;',
		'sbuicon-circle-o-notch': '&#xf1ce;',
		'sbuicon-ra': '&#xf1d0;',
		'sbuicon-empire': '&#xf1d1;',
		'sbuicon-git-square': '&#xf1d2;',
		'sbuicon-git2': '&#xf1d3;',
		'sbuicon-hacker-news': '&#xf1d4;',
		'sbuicon-tencent-weibo': '&#xf1d5;',
		'sbuicon-qq': '&#xf1d6;',
		'sbuicon-wechat': '&#xf1d7;',
		'sbuicon-paper-plane': '&#xf1d8;',
		'sbuicon-paper-plane-o': '&#xf1d9;',
		'sbuicon-history': '&#xf1da;',
		'sbuicon-circle-thin': '&#xf1db;',
		'sbuicon-header': '&#xf1dc;',
		'sbuicon-paragraph': '&#xf1dd;',
		'sbuicon-sliders': '&#xf1de;',
		'sbuicon-share-alt': '&#xf1e0;',
		'sbuicon-share-alt-square': '&#xf1e1;',
		'sbuicon-bomb': '&#xf1e2;',
		'sbuicon-futbol-o': '&#xf1e3;',
		'sbuicon-tty': '&#xf1e4;',
		'sbuicon-binoculars': '&#xf1e5;',
		'sbuicon-plug': '&#xf1e6;',
		'sbuicon-slideshare': '&#xf1e7;',
		'sbuicon-twitch': '&#xf1e8;',
		'sbuicon-yelp': '&#xf1e9;',
		'sbuicon-newspaper-o': '&#xf1ea;',
		'sbuicon-wifi': '&#xf1eb;',
		'sbuicon-calculator': '&#xf1ec;',
		'sbuicon-paypal': '&#xf1ed;',
		'sbuicon-google-wallet': '&#xf1ee;',
		'sbuicon-cc-visa': '&#xf1f0;',
		'sbuicon-cc-mastercard': '&#xf1f1;',
		'sbuicon-cc-discover': '&#xf1f2;',
		'sbuicon-cc-amex': '&#xf1f3;',
		'sbuicon-cc-paypal': '&#xf1f4;',
		'sbuicon-cc-stripe': '&#xf1f5;',
		'sbuicon-bell-slash': '&#xf1f6;',
		'sbuicon-bell-slash-o': '&#xf1f7;',
		'sbuicon-trash': '&#xf1f8;',
		'sbuicon-copyright': '&#xf1f9;',
		'sbuicon-at': '&#xf1fa;',
		'sbuicon-eyedropper': '&#xf1fb;',
		'sbuicon-paint-brush': '&#xf1fc;',
		'sbuicon-birthday-cake': '&#xf1fd;',
		'sbuicon-area-chart': '&#xf1fe;',
		'sbuicon-pie-chart2': '&#xf200;',
		'sbuicon-line-chart': '&#xf201;',
		'sbuicon-lastfm': '&#xf202;',
		'sbuicon-lastfm-square': '&#xf203;',
		'sbuicon-toggle-off': '&#xf204;',
		'sbuicon-toggle-on': '&#xf205;',
		'sbuicon-bicycle': '&#xf206;',
		'sbuicon-bus': '&#xf207;',
		'sbuicon-ioxhost': '&#xf208;',
		'sbuicon-angellist': '&#xf209;',
		'sbuicon-cc': '&#xf20a;',
		'sbuicon-ils': '&#xf20b;',
		'sbuicon-meanpath': '&#xf20c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/sbuicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
