var bio = {
  "name": "Ameen Demidem",
  "role": "Front-End Web Developer",
  "welcomeMessage": "Oh you dear visitor, be welcome !",
  "contacts": {
    "mobile": "555-555-5555",
    "email": "anonymous-coward@mail.com",
    "github": "ameen-demidem",
    "location": "Victoria, BC, Canada"
  },
  "biopic": "images/ameen.png",
  "skills": ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
  "display": function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    var textToReplace = {
      "mobile": HTMLmobile, "email": HTMLemail, "github": HTMLgithub,
      "twitter": HTMLtwitter, "blog": HTMLblog, "location": HTMLlocation
    };

    for (var c in bio.contacts)
      if (c in textToReplace) {
        $("#topContacts").append(textToReplace[c].replace("%data%", bio.contacts[c]));
        $("#footerContacts").append(textToReplace[c].replace("%data%", bio.contacts[c]));
      };

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length != 0) {
      $("#header").append(HTMLskillsStart);
      for (var i=0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      };
    };

  }
};

var work = {
  "jobs": [
    {
      "employer": "Huawei Telecommunications",
      "title": "Wireless BSS Engineer",
      "location": "Algiers, Algeria",
      "dates": "May 2004 - June 2007",
      "description": "CDMA wireless networks roll-out and maintenance"
    },
    {
      "employer": "Hewlett-Packard",
      "title": "Customer Support Representative",
      "location": "Algiers, Algeria",
      "dates": "June 2007 - October 2011",
      "description": "HP Enterprise solutions implementation and on-site hardware support"
    },
    {
      "employer": "Hewlett-Packard",
      "title": "Customer Support Representative",
      "location": "Kamloops, BC, Canada",
      "dates": "December 2011 - May 2015",
      "description": "HP Enterprise solutions implementation and on-site hardware support"
    }
  ],
  "display": function() {
    work.jobs.forEach(function(w) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", w.employer) + HTMLworkTitle.replace("%data%", w.title));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", w.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", w.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", w.description));
    });
  }
};

var projects = {
  "projects": [
    {
      "title": "Top List",
      "dates": "April 2016",
      "description": "Replicate a mock featured-work pdf file in HTML/CSS",
      "images": ["http://lorempixel.com/300/200", "http://lorempixel.com/301/200"]
    },
    {
      "title": "Online Resume",
      "dates": "May 2016",
      "description": "Build a a online resume from an HTML template with JavaScript/jQuery",
      "images": ["http://lorempixel.com/302/200", "http://lorempixel.com/303/200"]

    }
  ],
  "display": function() {
    for (p of projects.projects) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", p.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", p.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", p.description));
      for (img of p.images) $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
    };
  }
};

var education = {
  "schools": [
    {
      "name": "Ecole Nationale Superieure d'Informatique",
      "location": "Algiers, Algeria",
      "degree": "Bachelor",
      "majors": ["CS"],
      "dates": "1998 - 2003",
      "url": "http://www.esi.dz"
    },
    {
      "name": "Ecole Nationale Superieure d'Informatique",
      "location": "Algiers, Algeria",
      "degree": "Bachelor",
      "majors": ["CS"],
      "dates": "1998 - 2003",
      "url": "http://www.esi.dz"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity.com",
      "dates": "2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      "title": "Front-End Web Developer",
      "school": "Udacity.com",
      "dates": "2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ],
  "display": function() {
    for (s of education.schools) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", s.name)
                                      + HTMLschoolDegree.replace("%data%", s.degree));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", s.location));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", s.dates));
      for (m of s.majors) $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", m));
      };

    if (education.onlineCourses.length != 0) {
      $("#education").append(HTMLonlineClasses);
      for (o of education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", o.title)
                                        + HTMLonlineSchool.replace("%data%", o.school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", o.dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", o.url));
      };
    };
  }
};

$(document).click(function(loc) { logClicks(loc.pageX, loc.pageY); });

$("#main").append(internationalizeButton);

function inName(fullName) {
  var name = fullName.split(" ");
  var initial = name[0].charAt(0).toUpperCase();
  var firstName = name[0].slice(1).toLowerCase();
  var lastName = name[1].toUpperCase();

  return initial + firstName + " " + lastName;
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);