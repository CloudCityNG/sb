<section class="hero-sb animated-preload_background clearfix">
	<img class="align-image-top" src="img/home-apr15/roy-lacey.jpg" alt="A vascular simulator is revolutionizing neurosurgery" />    
	<div class="hero-sb_text" >
		<div>
			<h1 class="clearfix">Far Beyond Maximum Impact</h1>
			<p class="clearfix">Stony Brook faculty at the forefront of discovery</p> 
			<a class="clearfix video-link nivo-lightbox" href="http://www.youtube.com/watch?v=v81rG43NfM8" data-options="autoplay=1&amp;modestbranding=1&amp;rel=0">Watch the video&nbsp;<i class="fa fa-play-circle"></i></a>
			<a class="clearfix video-link" href="http://www.stonybrook.edu/magazine/2016-spring/roy-lacey-an-accelerating-career-in-nuclear-chemistry">Read the Story&nbsp;<i class="fa fa-long-arrow-right"></i></a>
		</div>  
	</div>
</section>
<!--<div class="optionalCallout clearfix">
	<p class="clearfix">
		<a class="clearfix" href="#">
			<span class="optionalCallout_text"><i class="fa fa-thumb-tack fa-floatleft"></i><strong>Sign up for classes!</strong> Spring registration begins October 3rd, 2016&nbsp;<i class="fa fa-long-arrow-right"></i></span>
		</a>
	</p>
</div>--><!-- /.optionalCallout -->
<div class="seawolfStrip">
	<div class="wpb_wrapper"> 
		<h2 class="clearfix">Become a Seawolf</h2>
		<h3 class="clearfix"><span>Want to change the great big world?</span> <span><strong>So&nbsp;do we.</strong> Join our community of explorers.</span></h3>
		<!--<ul class="clearfix">
			<li class="btn"><a href="http://www.stonybrook.edu/undergraduate-admissions/visit/">Visit us</a></li>
			<li class="btn"><a href="http://m.stonybrook.edu/sb/undergraduate-admissions/virtual-tour/">Take a virtual tour</a></li>
			<li class="btn"><a href="http://www.stonybrook.edu/sb/far-beyond/admissions/">Apply</a></li>
			<li class="btn"><a href="http://stonybrook.edu/summer/">Summer Sessions</a></li>
		</ul>-->
		<?php
			/* Apply flow, saving for home 2.0, if that ever comes. ran into issues with how the schools are devided, namely grad vs spd and hsc as its own entity. for now simply linking to the admissions page */
		?>
			<ul class="clearfix">
				<li class="btn"><a href="">Visit us</a></li>
				<li class="btn"><a href="">Take a virtual tour</a></li>
				<li class="btn"><a class="apply-form-trigger" href="http://www.stonybrook.edu/admissions/">Apply</a></li>
			</ul>
			<div class="apply-form apply-form-1 clearfix hide-accessible">
				<h3 class="clearfix"><span>Take the next step to greatness.</span></h3>
					<h4 class="clearfix"><span>Which best describes you?</span></h4>
				<ul class="clearfix">
					<li class="btn"><a href="">Undergraduate</a></li>
					<li class="btn"><a href="">Graduate</a></li>
					<li class="btn"><a href="">Health Sciences</a></li>
					<li class="btn"><a href="">School of Professional Development</a></li>
				</ul>
				<!--
				<div class="apply-form clearfix">
					<h4 class="clearfix"><span>What level?</span></h4>
					<ul class="clearfix">
					<li class="btn"><a href="">Freshman</a></li>
					<li class="btn"><a href="">Transfer</a></li>
					<li class="btn"><a href="">International</a></li>
					<li class="btn"><a href="">Second Degree</a></li>
					<li class="btn"><a href="">Readmission</a></li>
					</ul>
				</div>
				-->
			</div>
	</div><!-- /.wpb_wrapper -->	
</div><!-- /.seawolfStrip -->	
<div class="boldMoves">
	<div class="wpb_wrapper">   
		<h2>We&rsquo;re Making <span>Bold Moves</span></h2>
		<p class="jumpAwayLink"><a href="http://stonybrook.edu/happenings/">See All Stories&nbsp;<i class="fa fa-long-arrow-right"></i></a></p>

		<?php
			/* Outputs the spotlights from Happenings */
			/* --- TEMPLATE --- */
			/*
				<div class="boldMovesBox">
					<a href="javascript:void(0);" class="boldMovesBox-title">
						<h3>Research Headline Goes Here Lorum Ipsum Sit Research Headline Goes Here Lorum Ipsum Sit</h3>
					</a>
					<div class="boldMovesBox-story">
						<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat eda faucibus, tortor neque</p>
						<a href="" class="boldMovesBox-fullStory">Read Story</a>
						<a href="javascript:void(0);" class="close-boldMovesBox">Back to story</a>
					</div>
					<a href="#" class="boldMovesBox-link"><span>All </span>Athletics<span> News <i class="fa fa-long-arrow-right"></i></span></a>
				</div>
			 */
            $file = "scripts/get-homepage-spotlights.php";
            include($path . $file);
        ?>

	</div><!-- /.wpb_wrapper -->	      
</div><!-- /.boldMoves -->
<div class="whatsComingUp">
	<div class="wpb_wrapper"> 
		<h2>What&rsquo;s Coming Up?</h2>
		<ul class="clearfix">
			<?php 
                /*
                // PHP will transform event data from RSS feed in following format
                //
                <!--
				<li>
					<a class="clearfix" href="#">
						<div class="eventDate"><span class="eventDate_day">14</span><span class="eventDate_month">Sep</span></div>
						<div class="eventTitle"><span class="item">Art Crawl: A Guided Tour of Campus Galleries</span></div>
					</a>
				</li>
                -->
                */
                $file  = "feed/active-data-calendar_v2.php";
                $rss   = "http://calendar.activedatax.com/stonybrook/RSSSyndicator.aspx?type=N&category=43-0&ihc=y&sortorder=ASC";
                $count = 4;
                $end = 4;
                include($path . $file);
            ?>
		</ul>
		<p class="jumpAwayLink"><a href="<?php echo $sbu_site_url['calendar_next_month']; ?>">See All Events&nbsp;<i class="fa fa-long-arrow-right"></i></a></p>
	</div><!-- /.wpb_wrapper -->	
</div><!-- /.whatsComingUp -->
<div class="changingWorld clearfix">
	<div class="wpb_wrapper clearfix"> 
		<img src="img/home-apr15/Campaign_LockUp_white.png" alt="The Campaign for Stony Brook" />  
		<div class="pitch"><h3>Through research and discovery, we are changing the world.</h3>
			<a href="http://stonybrook.edu/campaign">Join Us</a></div>
	</div><!-- /.wpb_wrapper -->	  
</div><!-- /.changingWorld -->