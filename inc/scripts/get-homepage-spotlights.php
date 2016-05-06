<?php

function removeBOM($data) {
    if (0 === strpos(bin2hex($book_data), 'efbbbf')) {
       return substr($book_data, 3);
    }
}

function printBooks($path, $pathForContent, $content, $sbu_site_url) {
	/* Obtains WP data from JSON and creates HTML */

	$wp_posts_url = "http://www.stonybrook.edu/happenings/wp-json/wp/v2/posts?categories=163";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $wp_posts_url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$wp_post_data = curl_exec($ch);
	curl_close($ch);

	$wp_post_data = json_decode($wp_post_data);

	function sort_position($a, $b) {
	    if ($a->acf->homepage_spotlight_position < $b->acf->homepage_spotlight_position) {
	        return -1;
	    } else if ($a->acf->homepage_spotlight_position > $b->acf->homepage_spotlight_position) {
	        return 1;
	    } else {
	        return 0; 
	    }
	}

	usort($wp_post_data, 'sort_position');

	$posts = $wp_post_data;

	$mainHtml = '';

	//for each post
	$i = 0;
	foreach ($posts as $post) {
		if(++$i > 6) break; // limit to 6
		$post_cat = $post->acf->homepage_spotlight_category;
		$delim_pos = strpos($post_cat,',');
		$spotlight_category = substr($post_cat,0,$delim_pos);
		$spotlight_slug = substr($post_cat,$delim_pos+1);

		$cat_link = $sbu_site_url['happenings'] . 'category/' . $spotlight_slug;

		$post_link = $post->link . '?spotlight=' . $i;

		$spotlight_image = preg_replace('/\s+/', '', $post->acf->homepage_spotlight_image);


		$html .= '
	        <div class="boldMovesBox gtm-home-spotlight" style="background-image: url(\''.$spotlight_image.'\')">
				<a href="'.$post_link.'" class="boldMovesBox-title">
					<h3>'.$post->acf->homepage_spotlight_title.' <i class="fa fa-angle-right"></i></h3>
				</a>
				<a href="'.$post_link.'" class="boldMovesBox-story">
					<p>'.$post->acf->homepage_spotlight_sub.'</p>
					<span class="boldMovesBox-fullStory">Read Story</span>
					<span href="javascript:void(0);" class="close-boldMovesBox"><span class="close-boldMovesBox-x">Back to story</span></span>
				</a>
				<a href="'.$cat_link.'" class="boldMovesBox-link gtm-category-link"><span>All </span>'.$spotlight_category.'<span> News <i class="fa fa-long-arrow-right"></i></span></a>
			</div>
		';
	}

    $mainHtml .= $html;

	echo $mainHtml;

}

printBooks($path, $pathForContent, $content,$sbu_site_url);

?>