<?php namespace Controllers;

class Render{


	function __construct(\Services\CourseData $courseData){
		$this->courseData = $courseData;
	}


	/**
	 * List all departments found in the course data along with
	 * their course count and link to see all courses in that department
	 * @return string $list_items HTML <li> elements
	 */
	function listAllDepartments(){

		$list_items = "";

		try{

			$departments = $this->courseData->getDepartmentsAndCourseCounts();

			if(count($departments) == 0){
				throw new \Exception("Could not get departments");
			}

			foreach ($departments as $key => $value) {
				$list_items .= "<li>
									<a href='summer-session/courses/results/?department={$value['department_code']}'>{$value['department_name']}</a>
									<span>({$value['course_count']})</span>
								</li>";
			}

		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $list_items;

	}


	/**
	 * Get department select options
	 * @return string $option_items HTML <option> elements
	 */
	function getDepartmentSelectOptions(){

		$option_items = "";
		
		try{

			$departments = $this->courseData->getDepartmentsAndCourseCounts();

			if(count($departments) == 0){
				throw new \Exception("Could not get departments");
			}

			foreach ($departments as $key => $value) {
				$option_items .= "<option value='{$value['department_code']}'>{$value['department_name']}</option>";
			}

		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $option_items;

	}


	/**
	 * Get course level select options
	 * @return string $option_items HTML <option> elements
	 */
	function getCourseLevelOptions(){

		$option_items = "";

		try{

			$course_levels = $this->courseData->getCourseLevels();

			if(count($course_levels) == 0){
				throw new \Exception("Could not get Course Levels");
			}

			foreach ($course_levels as $key => $value) {
				$option_items .= "<option value='{$key}'>{$value}</option>";
			}
		
		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $option_items;

	}


	/**
	 * Get location select options
	 * @return string $option_items HTML <option> elements
	 */
	function getLocationSelectOptions(){

		$option_items = "";

		try{

			$locations = $this->courseData->getLocations();

			if(count($locations) == 0){
				throw new \Exception("Could not get locations");
			}

			foreach ($locations as $key => $value) {
				$option_items .= "<option value='{$key}'>{$value}</option>";
			}
		
		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $option_items;

	}

	/**
	 * Get SBC select options
	 * @return string $option_items HTML <option> elements
	 */
	function getSBCSelectOptions(){

		$option_items = "";

		try{

			$sbc_codes = $this->courseData->getSBCCodes();

			if(count($sbc_codes) == 0){
				throw new \Exception("Could not get SBC Codes");
			}

			foreach ($sbc_codes as $key => $value) {
				$option_items .= "<option value='{$value['designator']}'>({$value['designator']}) {$value['title']}</option>";
			}
		
		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $option_items;

	}


	/**
	 * Get DEC select options
	 * @return string $option_items HTML <option> elements
	 */
	function getDECSelectOptions(){

		$option_items = "";

		try{

			$dec_codes = $this->courseData->getDECCodes();

			if(count($dec_codes) == 0){
				throw new \Exception("Could not get DEC Codes");
			}

			foreach ($dec_codes as $value) {
				$option_items .= "<option value='{$value['dec_code']}'>({$value['dec_code']}) {$value['dec_description']}</option>";
			}
		
		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $option_items;

	}


	/**
	 * Get the session information for a given session code
	 * @param  string $session_code The session code
	 * @return string               The session information
	 */
	function getSessionInformationForSessionCode($session_code){

		$information = "";

		try{

			$session_information = $this->courseData->getSessionInformation();
			
			if(count($session_information) == 0){
				throw new \Exception("Could not get session information");
			}

			foreach ($session_information as $key => $value) {
				if($session_code == $key){
					$information = $value;
				}
			}


		}catch(\Exception $e){
			ErrorHandling::logException($e);
		}

		return $information;

	}


	/**
	 * Expand the search query abbreviations for a more user-friendly formatting
	 * @param  array $query The user-entered search query
	 * @return array The search query with expanded values
	 */
	function expandSearchQueryValueAbbreviations(array $query){

		// Loop through the query
		foreach ($query as $query_parameter => $query_value) {
			
			// Format each value based on the parameter
			switch($query_parameter){

				case "department":
						$departments = $this->courseData->getDepartmentsAndCourseCounts();

						if(count($departments) == 0){
							throw new \Exception("Could not get departments");
						}

						foreach ($departments as $key => $value) {
							if($query_value == $value['department_code']){
								$query[$query_parameter] = $value['department_name'];
							}
						}
					break;
				case "course_level":
						$course_levels = $this->courseData->getCourseLevels();

						if(count($course_levels) == 0){
							throw new \Exception("Could not get course levels");
						}

						foreach ($course_levels as $key => $value) {
							if($query_value == $key){
								$query[$query_parameter] = $value;
							}
						}
					break;
				case "location":
						$locations = $this->courseData->getLocations();

						if(count($locations) == 0){
							throw new \Exception("Could not get locations");
						}

						foreach ($locations as $key => $value) {
							if($query_value == $key){
								$query[$query_parameter] = $value;
							}
						}
					break;

			}

		}

		return $query;

	}


	/**
	 * Display the query that the user searched with
	 * @param  array $query The user-entered search query
	 * @return string $html The query
	 */
	function displaySearchQuery(array $query){


		if(count($query) > 0){

			// Convert query values into a user-friendly format
			$query = $this->expandSearchQueryValueAbbreviations($query);

			$html = "Results for: ";

			$index = 1;
			$number_of_parameters = count($query);
			foreach ($query as $query_parameter => $query_value) {

				// Format query parameters
				$query_parameter = str_replace("_", " ", $query_parameter);
				$query_parameter = ucwords($query_parameter);

				$html .=  '<span class="filter-item">';
				$html .=  $query_parameter . ": <em>" . $query_value . "</em>";
				$html .= '</span>';

				if($index != $number_of_parameters){
					$html .= " and ";
				}

				$index++;
			}
		}else{
			$html = "";
		}

		return $html;

	}


	/**
	 * Expand abbreviated node values to their full length
	 * @return array $course_data Course Data
	 */
	function expandCourseDataAbbreviations($class_detail){

		$expansions = array(
				"CRSE_CAREER" => array("UGRD" => "Undergraduate",
									   "GRAD" => "Graduate",
									   ),
				"STND_MTG_PAT" => array("FLEX" => "Online",
										"APPT" => "Appointment",
										"HTBA" => "Hours to be arranged",
										"M" => "Monday",
										"TU" => "Tuesday",
										"W" => "Wednesday",
										"TH" => "Thursday",
										"F" => "Friday",
										"MT" => "Mon. & Tues.",
										"MW" => "Mon. & Weds.",
										"MTH" => "Mon. & Thurs.",
										"MF" => "Mon. & Fri.",
										"MTUTH" => "Mon., Tues., Thurs.",
										"MTF" => "Mon., Tues., Fri.",
										"MWTH" => "Mon., Weds., Thurs.",
										"MWF" => "Mon., Weds., Fri.",
										"MTHF" => "Mon., Thurs., Fri.",
										"MTWT" => "Mon., Tues., Weds., Thurs.",
										"TUTH" => "Tues. & Thurs.",
										"TWTF" => "Tues., Weds., Thurs., Fri.",
										"M-F" => "Mon., Tues., Weds., Thurs., Fri."
										),
				"ENRL_STAT" => array("O" => "Open",
									 "C" => "Closed",
									 "W" => "Waiting List"
									 )
				);

		// For each node in the class detail
		foreach ($class_detail as $key => $value) {

			// If the current node has a group of expansions for it in the expansions array
			if(array_key_exists($key, $expansions)){

				// Loop through each of the expansions for that node
				foreach ($expansions[$key] as $abbreviation => $expansion) {

					// If the abbreviation matches the node's current value then
					// replace the value of the node with the expansion
					if((string) $class_detail->$key == $abbreviation){
						$class_detail->$key = $expansion;
					}
				}
			}	

		}

		return $class_detail;

	}


	/**
	 * Display the search results in a readable format
	 * @param  array $search_results The search results
	 * @return string $html The search results in <li> format
	 */
	function displaySearchResults(array $search_results){

		if(count($search_results) > 0){
			$html = "";

			foreach ($search_results as $class_detail) {

				$class_detail = $this->expandCourseDataAbbreviations($class_detail);

				$course_name = (string) $class_detail->DESCR;
				$subject = (string) $class_detail->SUBJECT;
				$catalog_number = (string) $class_detail->CATALOG_NBR;
				$session_code = (string) $class_detail->SESSION_CODE;
				$course_level = (string) $class_detail->CRSE_CAREER;
				$credits = (string) $class_detail->UNITS;

				$hasDec = false;
				$dec = (string) $class_detail->RQMNT_DESIGNTN;
				
				// Add "DEC:" prefix if the value is not empty
				// Note that the "SBC:" prefix comes by default on SU_SBC
				if($dec != " "){
					$hasDec = true;
					$dec = "<span>DEC: " . $dec . "</span>";
				}

				$hasSbc = false;
				$sbc = (string) $class_detail->SU_SBC;

				if($sbc != " "){
					$hasSbc = true;
					$sbc =  "<span>" . $sbc . "</span>";
				}

				$description = (string) $class_detail->DESCRLONG;
				$session_information = $this->getSessionInformationForSessionCode($session_code);
				$class_number = (string) $class_detail->CLASS_NBR;
				$class_section = (string) $class_detail->CLASS_SECTION;
				$class_instructor = (string) $class_detail->INSTRUCTOR;
				$class_meeting_days = (string) $class_detail->STND_MTG_PAT;
				$class_meeting_times = (string) $class_detail->SU_MEETING_TIME;
				$location = (string) $class_detail->LOCATION_DESCR;
				$campus_description = (string) $class_detail->CAMPUS_DESCR;
				$enrollment_status = (string) $class_detail->ENRL_STAT;

				if($hasDec || $hasSbc) {
					$sbc_dec_html = "<p>$dec $sbc</p>";
				} else {
					$sbc_dec_html = '';
				}


				$html .= "<li>
							 <h5>$course_name</h5>
							 <p><span>$subject $catalog_number ($session_code)</span> <span>$course_level<span></p>
							 <p class=\"credits\">$credits</p>
							 $sbc_dec_html
							 <p class=\"description\">$description</p>
							 <p>$session_information</p>
							 <p>Class # $class_number (Section $class_section)</p>
							 <p>$class_instructor</p>
							 <p>$class_meeting_days $class_meeting_times</p>
							 <p>$campus_description ($location)</p>
							 <p>Status/$enrollment_status</p>
						 </li>";

			}

		}else{
			$html = "<li>No courses found.</li>";
		}

		return $html;
	
	}


}