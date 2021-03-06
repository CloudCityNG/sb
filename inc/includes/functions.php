<?php
    /**
     * Credit: http://blog.amnuts.com/2011/04/08/sorting-an-array-of-objects-by-one-or-more-object-property/comment-page-1/
     * 
     * Sort an array of objects.
     *
     * You can pass in one or more properties on which to sort.  If a
     * string is supplied as the sole property, or if you specify a
     * property without a sort order then the sorting will be ascending.
     *
     * If the key of an array is an array, then it will sorted down to that
     * level of node.
     *
     * Example usages:
     *
     * osort($items, 'size');
     * osort($items, array('size', array('time' => SORT_DESC, 'user' => SORT_ASC));
     * osort($items, array('size', array('user', 'forname'))
     *
     * @param array $array
     * @param string|array $properties
     */
    function osort(&$array, $properties)
    {
        if (is_string($properties)) {
            $properties = array($properties => SORT_ASC);
        }
        uasort($array, function($a, $b) use ($properties) {
            foreach($properties as $k => $v) {
                if (is_int($k)) {
                    $k = $v;
                    $v = SORT_ASC;
                }
                $collapse = function($node, $props) {
                    if (is_array($props)) {
                        foreach ($props as $prop) {
                            $node = (!isset($node->$prop)) ? null : $node->$prop;
                        }
                        return $node;
                    } else {
                        return (!isset($node->$props)) ? null : $node->$props;
                    }
                };
                $aProp = $collapse($a, $k);
                $bProp = $collapse($b, $k);
                if ($aProp != $bProp) {
                    return ($v == SORT_ASC)
                        ? strnatcasecmp($aProp, $bProp)
                        : strnatcasecmp($bProp, $aProp);
                }
            }
            return 0;
        });
    }

    function printBreadcrumbs($showHome) {
        $crumbs = explode("/",$_SERVER["REQUEST_URI"]);
        if($showHome != false) {
            $crumbsOut .= "<a class='breadcrumbs__crumb' href='/' title='Breadcrumb link: SBU Home'>Home</a>";
        }
        foreach($crumbs as $crumb){
            if($crumb!='') {
                $crumbLink = $crumbLink . '/' . $crumb;
                if($crumb!='sb' && $crumb!='development' && $crumb!='far-beyond') {
                    if(substr($crumb,0,1)=='?') {
                        break;
                    }
                    $thisCrumb = ucwords(str_replace(array(".php","_","-"),array(""," "," "),$crumb));
                    $hasQuerystring = strpos($thisCrumb, "?") > 0;
                    if($hasQuerystring) {
                        $thisCrumb = substr($thisCrumb, 0, strpos($thisCrumb, "?"));
                    }
                    $crumbsOut .= "<a class='breadcrumbs__crumb' href='{$crumbLink}' title='Breadcrumb link: {$thisCrumb}'>{$thisCrumb}</a>";
                    //echo $thisCrumb.'<br />';
                    //echo $crumb.'<br />';
                    //echo $crumbLink.'<br />';
                    //echo $thisCrumbOut;
                    //echo '<br />-------<br />';
                }
            }
        }
        echo('<div class="breadcrumbs"><div class="breadcrumbs__wrapper wrapper">'.$crumbsOut.'</div></div>');
    }

    function makeHTTPS($url) {
        //return(str_replace('http://','https://',$url));
        return(str_replace('http://','//',$url));
    }

    function makeProtocolRelative($url) {
        return(str_replace('http://','//',$url));
    }
?>