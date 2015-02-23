<form class="course-search-form" method="GET" action="summer-session/courses/results">

    <label class="clearfix one-half">Keywords
        <input type="text" class="rounded-input" name="keywords" />
    </label>

    <label class="clearfix one-half">Department
        <select class="rounded-input" name="department">
            <option value="">All</option>
            <?=$render->getDepartmentSelectOptions()?>
        </select>
    </label>

    <label class="clearfix one-half">Course Level
        <select class="rounded-input" name="course_level">
            <option value="">All</option>
            <?=$render->getCourseLevelOptions()?>
        </select>
    </label>

    <label class="clearfix one-half">Location
        <select class="rounded-input" name="location">
            <option value="">All</option>
            <?=$render->getLocationSelectOptions()?>
        </select>
    </label>

    <label class="clearfix whole">SBC
        <select class="rounded-input" name="SBC">
            <option value="">All</option>
            <?=$render->getSBCSelectOptions()?>
        </select>
    </label>

    <label class="clearfix whole">DEC
        <select class="rounded-input" name="DEC">
            <option value="">All</option>
            <?=$render->getDECSelectOptions()?>
        </select>
    </label>

    <input class="sbu-cta white sbu-cta-2 sbu-cta-1a clearfix search-button" type="submit" value="Search Courses" />

</form>