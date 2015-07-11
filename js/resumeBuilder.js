var bio = {
	"name": "Roberto Guiotto",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "+39 347 5143800",
		"email": "guiottor@gmail.com",
		"github": "robertoguiotto",
		"twitter": "robertoguiotto",
		"location": "Vicenza, Italy"
	},
	"welcomeMessage": "My name is Roberto, I am an entrepreneur. With some partners and friends of mine, I am running In Risalto, a small digital agency based not too far from Venice, Italy. Actually, I love to code, too. I am looking forward to improve my design and code skills.",
	"skills": ["Entrepreneurship", "Project Management", "Marketing Management", "Web design", "Front End Web Development"],
	"bioPic": "images/me.jpg",
	"display": function displayBio() {

		var formattedName = HTMLheaderName.replace ("%data%", bio.name);
		$("#header").append (formattedName);
		var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
		$("#header").append (formattedRole);
		var formattedHTMLbioPic = HTMLbioPic.replace ("%data%", bio.bioPic);
		$("#header").append (formattedHTMLbioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace ("%data%", bio.welcomeMessage);
		$("#header").append (formattedwelcomeMsg);
		var formattedHTMLmobile = HTMLmobile.replace ("%data%", bio.contacts.mobile);
		$("#header").append (formattedHTMLmobile);
		$("#letsConnect").append (formattedHTMLmobile);
		var formattedHTMLemail = HTMLemail.replace ("%data%", bio.contacts.email);
		$("#header").append (formattedHTMLemail);
		$("#letsConnect").append (formattedHTMLemail);
		var formattedHTMLtwitter = HTMLtwitter.replace ("%data%", bio.contacts.twitter);
		$("#header").append (formattedHTMLtwitter);
		$("#letsConnect").append (formattedHTMLtwitter);
		var formattedHTMLgithub = HTMLgithub.replace ("%data%", bio.contacts.github);
		$("#header").append (formattedHTMLgithub);
		$("#letsConnect").append (formattedHTMLgithub);
		var formattedHTMLlocation = HTMLlocation.replace ("%data%", bio.contacts.location);
		$("#header").append (formattedHTMLlocation);
		$("#letsConnect").append (formattedHTMLlocation);
		$("#header").append(HTMLskillsStart);

		if(bio.skills.length > 0) {
			for (skill in bio.skills) {
				var formattedSkill = HTMLskills.replace ("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var work = {
	"jobs": [
	{
		"employer" : "In Risalto",
		"title" : "Partner",
		"location": "Vicenza, Italy",
		"dates": "2013 ‐ present",
		"description": "Partner of the company, I lead the Digital Marketing branch, for which I also have Sales and Project Manager responsibilities."
	},
	{
		"employer" : "Studio Guiotto",
		"title" : "Digital marketing consultant",
		"location": "Vicenza, Italy",
		"dates": "2010 ‐ 2013",
		"description": "Self-employed consultant, I managed and realized several digital marketing projects as an one-man-army. "
	},
	{
		"employer" : "Ars Medica Italia",
		"title" : "Marketing and sales manager",
		"location": "Vicenza, Italy",
		"dates": "2008 ‐ 2010",
		"description": "Developed and managed the sales and marketing division of the start-up from scratch."
	},
	{
		"employer" : "Vicenza Fiera International",
		"title" : "Sales Manager / Project Manager",
		"location": "Vicenza, Italy",
		"dates": "2005 ‐ 2008",
		"description": "Researched, organized and marketed to Italian companies trade fair events abroad in several sectors."
	},
	{
		"employer" : "Fiera di Vicenza",
		"title" : "Web account",
		"location": "Vicenza, Italy",
		"dates": "2003 ‐ 2005",
		"description": "Managed the web asset of the company, dealt with suppliers and managed multimedia projects with the help of a supervisor."
	}
	],
	"display": function displayWork() {

		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var education = {
	"schools": [
	{
		"name": "IULM University",
		"location": "Milan, Italy",
		"degree": "Certificate of Accomplishment",
		"majors": ["Social Media Marketing", "Web Communication"],
		"dates": 2012,
		"url": "http://www.iulm.it"
	},
	{
		"name": "European School of Economics / Nottingham Trent University",
		"location": "Vicenza, Italy",
		"degree": "BA in Marketing Management",
		"majors": ["Marketing Management", "Economics"],
		"dates": 2002,
		"url": "http://www.ese.edu"
	},
	{
		"name": "Istituto Tecnico Vittorio Emanuele Marzotto",
		"location": "Valdagno, Italy",
		"degree": "High School Diploma",
		"majors": ["Textile Industry"],
		"dates": 1998,
		"url": "http://www.itismarzotto.it"
	}
	],
	"onlineCourses": [
	{
		"title": "Front End Web Development Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.udacity.com"
	},
	{
		"title": "Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship",
		"school": "Coursera",
		"dates": 2014,
		"url": "www.coursera.org"
	},
	{
		"title": "Learning How to Learn: Powerful mental tools to help you master tough subjects",
		"school": "Coursera",
		"dates": 2014,
		"url": "www.coursera.org"
	}
	],
	"display": function displayEducation()  {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace ("%data%", education.schools[school].name);
			$(".education-entry:last").append(formattedschoolName);
			var formattedschoolDate = HTMLschoolDates.replace ("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolDate);
			var formattedschoolMajor = HTMLschoolMajor.replace ("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedschoolMajor);
		}
		for (onlineCourse in education.onlineCourses) {
			$("#onlinecourses").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace ("%data%", education.onlineCourses[onlineCourse].title);
			$(".education-entry:last").append(formattedonlineTitle);
			var formattedonlineDates = HTMLonlineDates.replace ("%data%", education.onlineCourses[onlineCourse].dates);
			$(".education-entry:last").append(formattedonlineDates);
			var formattedonlineSchool = HTMLonlineSchool.replace ("%data%", education.onlineCourses[onlineCourse].school);
			$(".education-entry:last").append(formattedonlineSchool);
		}
	}
};

var projects = {
	"projects": [
	{
		"title" : "Opensymbol",
		"dates": "2014",
		"description": "Opensymbol is the first italian CRM company. I took part in the visual design and HTML/CSS development of the website, which was built with Wordpress. The company was looking for a way to emphasize its team, which in the end has been chosen as the main graphical subject for the website.",
		"images" : ['images/opensymbol.jpg'],
		"url": "www.opensymbol.it"
	},
	{
		"title" : "Macreport",
		"dates": "2013",
		"description": "Macreport serves as a B2C touchpoint for Attiva Spa, a leading technology wholesaler based in Italy. Though not yet responsive, the project was really challenging since it required to accomodate a lot of information in the product details section. My role in the team was the visual design of the platform.",
		"images" : ['images/macreport.jpg'],
		"url": "www.macreport.it"
	},
	{
		"title" : "Euroventilatori",
		"dates": "2015",
		"description": "Entirely built on Microsoft technologies (ASP/.NET), Euroventilatori's website was recently reworked from scratch. I was in charge for the whole design process (concept, wireframing, web design) and for the copywriting in Italian language.",
		"images" : ['images/euroventilatori.jpg'],
		"url": "www.euroventilatori-int.com"
	}
	],
	"display" : function displayProjects () {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace ("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDate = HTMLprojectDates.replace ("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDate);
			var formattedProjectDescription = HTMLprojectDescription.replace ("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDescription);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedProjectImage = HTMLprojectImage.replace ("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};

bio.display();
work.display();
education.display();
projects.display();

$("mapDiv").append(googleMap)