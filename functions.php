<?php
function child_js() {
    echo '<script src="http://www.cmhss-np.org/wp-content/themes/blackbird-child/javascripts/js.js" type="text/javascript"></script>';
}

add_action( 'wp_footer', 'child_js' );
?>
