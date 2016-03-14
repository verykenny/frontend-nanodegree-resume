
var bio = {
	"name" : "Kenneth Donahue",
	"role" : "Web Developer",
	"contacts" : {
		"email" : "verykenny@gmail.com",
		"mobile" : "720-468-8648",
		"github" : "verykenny",
		"twitter" : "verykenny",
		"location" : "Boulder, CO"
	},
	"picutreUrl" : "images/fry.jpg ",
	"welcomeMessage" : "Hi there!",
	"skills" : [
		"music", "programming", "web-site design"
	]
}

var work = {
	"jobs" : [{
		"title" : "Advanced Teleservices Representative",
		"employer" : "IBM",
		"dates" : "2014 - present",
		"location" : "Boulder, CO",
		"description" : " Worked as a thing "
	}, {
		"title" : "Administrative Assistant",
		"employer" : "Graduate School of Banking at Colorado",
		"dates" : "2012",
		"location" : "Boulder, CO",
		"description" : "Did other stuff. "
	}]
}

var projects = {
	"projects" : [{
		"title" : "Portfolio",
		"dates" : "Feb, 2016",
		"description" : "Porfolio project for Front End Web Development",
		"images" : ["images/197x148.gif"]
	}, {
		"title" : "Resume",
		"dates" : "Mar, 2016",
		"description" : "Resume project for Front End Web Development",
		"images" : ["images/197x148.gif"]
	}]
}

var education = {
	"schools" : [{
		"name" : "University of Colorado at Boulder",
		"location" : "Boulder, CO",
		"degree" : "BM",
		"major" : "Music Performance, Vocal",
		"dates" : "09 - 12"
	}, {	
		"name" : "Northern State University",
		"location" : "Aberdeen, SD",
		"degree" : "BA",
		"major" : "Music",
		"dates" : "07 - 09"
	}],
	"onlineCourses" : [{
		"school" : "Udacity",
		"title" : "JavaScript Basics",
		"dates" : "Mar, 2016",
		"url" : "https://www.udacity.com/course/progress#!/c-ud804-nd"
	}, {
		"school" : "Udacity",
		"title" : "Responsive Images",
		"dates" : "Mar, 2016",
		"url" : "https://www.udacity.com/course/progress#!/c-ud882-nd"
	}, {
		"school" : "Udacity",
		"title" : "Responsive Web Design Fundamentals",
		"dates" : "Mar, 2016",
		"url" : "https://www.udacity.com/course/progress#!/c-ud893-nd"
	}, {
		"school" : "Udacity",
		"title" : "Intro to HTML and CSS",
		"dates" : "Mar, 2016",
		"url" : "https://www.udacity.com/course/progress#!/c-ud304-nd"
	}, {
		"school" : "Udacity",
		"title" : "How to Use Git and GitHub",
		"dates" : "Mar, 2016",
		"url" : "https://www.udacity.com/course/progress#!/c-ud775-nd"
	}]	
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.picutreUrl);
	$("#header").append(formattedbioPic);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedMessage);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill)
	}
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription)
	}
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace ("%data%", education.schools[school].dates);
		var formattedNameDegree = formattedName + formattedDegree;

		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
	
	$("#education").append(HTMLonlineClasses);
	
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedDate = HTMLonlineDates.replace ("%data%", education.onlineCourses[course].dates);
		var formattedTitleSchool = formattedTitle + formattedSchool;

		$(".education-entry:last").append(formattedTitleSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedUrl)
	}
}





projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$("#mapDiv").append(googleMap);

bio.display();
work.display();
education.display();
projects.display();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

//International Name Button
//$("#main").append(internationalizeButton);

//function inName() {
//	var name = bio.name.split(" ");
//	var firstName = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//	var lastName = name[1].toUpperCase();
//	var internationalName = firstName + " " + lastName;
//
//	return internationalName;
//}
