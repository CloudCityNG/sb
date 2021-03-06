# Stony Brook University
## Communications Web Repo

Code base for 2014-and-newer University web projects produced by the Office of Communications at SUNY Stony Brook.

## Folder Structure

_Each header below represents a category. Each category contains a list of folders in the root of the project._ 

### Resources and Assets

_Included assets throughout the template._

- /css
- /downloads
- /elements
- /fonts
- /img
- /js
- /plugins
- /video

### Sites and Pages

_Paths that are navigated to with front-facing URLs._

- /admissions
- /campus-safety
- /economic-development
- /faculty-staff
- /features
- /for-students
- /hsc-bulletin
- /jobs
- /search
- /social
- /summer-sesion
- /test
- /tutorials
- /undergraduate-admissions

### Includes

_The inc/ folder holds a variety of reusable content._

- Content
- Scripts
- Headers
- Footers
- Navigation elements
- Shared analytics

### Content

_The actual page content._

- /inc/content

This repo provides a separation of template structure from the page content.

Each folder within /inc/content/ denotes either (a) a page, (b) a site or (c) a collection of sites.

For example, /inc/content/seond-level/ contains a list of second-level sites. (Undergraduate admissions is an example of a second-level site.)

Within each site folder, there is a collection of php files that contain the content for each page. These content files are included in the associated index.php file within the site's folder within the root.

For example:

**/inc/content/second-level/undergraduate-admissions/academics/academics-study-abroad.php**

is included on

**/undergraduate-admissions/academics/study-abroad/index.php**