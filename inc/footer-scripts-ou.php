<?php 
/*
echo $social_feed_channel["twitter"];
echo 'social_feed_num_items: '.$social_feed_num_items;
echo 'social_feed_widget: '.$social_feed_widget;
echo 'social_channel_id: '.$social_channel_id;
*/
if($social_feed_widget) { ?>
	<script type="text/javascript" src="/js/social/jquery.plugins.js"></script>
	<script type="text/javascript" src="/js/social/jquery.site.js"></script>
	<script type="text/javascript" src="/js/social/jquery.social.stream.ou.1.5.4.js"></script>
	<script type="text/javascript" src="/js/social/preload-messages.js"></script>

	<?php
		$social_feeds = '';
		for($i=1; $i<=$social_feed_widget_num; $i++) {

			if($social_channel[$i]=='twitter') { ?>
				<script type="text/javascript">
					$(document).ready(function($){
						$('#social-stream-<?=$i?>').dcSocialStream({
							feeds: {
								twitter: {
									id: '<?=$social_feed_channel[$i]?>',
									intro: '',
									search: '',
									out: 'intro,thumb,text',
									thumb: true
								}
							},
							rotate: {
								delay: 0
							},
							control: false,
							filter: false,
							wall: false,
							order: 'date',
							max: 'limit',
							limit: <?php echo($social_feed_num_items[$i]); ?>,
							iconPath: 'images/dcsns-dark/',
							imagePath: 'images/dcsns-dark/'
						});
									 
					});
				</script>
			<?php } else if($social_channel[$i]=='facebook') { ?>
				<script type="text/javascript">
					jQuery(document).ready(function($){
						$('#social-stream-<?=$i?>').dcSocialStream({
							feeds: {
								facebook: {
									id: '<?=$social_feed_channel[$i]?>',
									text: 'contentSnippet'
								}
							},
							rotate: {
								delay: 0
							},
							control: false,
							filter: false,
							wall: false,
							order: 'date',
							max: 'limit',
							limit: <?php echo($social_feed_num_items[$i]); ?>,
							iconPath: 'images/dcsns-dark/',
							imagePath: 'images/dcsns-dark/'
						});
									 
					});
				</script>
			<?php } else if($social_channel[$i]=='flickr') { ?>
				<script type="text/javascript">
					jQuery(document).ready(function($){
						$('#social-stream-<?=$i?>').dcSocialStream({
							feeds: {
								flickr: {
									id: '<?=$social_feed_channel[$i]?>'
								}
							},
							rotate: {
								delay: 0
							},
							control: false,
							filter: false,
							wall: false,
							order: 'date',
							max: 'limit',
							limit: <?php echo($social_feed_num_items[$i]); ?>,
							iconPath: 'images/dcsns-dark/',
							imagePath: 'images/dcsns-dark/'
						});
									 
					});
				</script>
			<?php } else if($social_channel[$i]=='instagram') { ?>
				<script type="text/javascript">
					jQuery(document).ready(function($){
						$('#social-stream-<?=$i?>').dcSocialStream({
							feeds: {
								flickr: {
									id: '<?=$social_feed_channel[$i]?>',
									accessToken: '46695629.992187b.160cb0d8518e4cb8ab72461002480d03',
									clientId: '992187b36560494abe8ea63eebf2c9c3',
									thumb: 'thumbnail',
									comments: 3,
									likes: 10
								}
							},
							rotate: {
								delay: 0
							},
							control: false,
							filter: false,
							wall: false,
							order: 'date',
							max: 'limit',
							limit: <?php echo($social_feed_num_items[$i]); ?>,
							iconPath: 'images/dcsns-dark/',
							imagePath: 'images/dcsns-dark/'
						});
									 
					});
				</script>
			<?php } 

		}
	?>
	
	<script type="text/javascript" src="/js/social/custom.js"></script>

<?php } ?>