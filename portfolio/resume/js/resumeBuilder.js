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
  ]
};

work.jobs.forEach(function(w) {
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", w.employer) + HTMLworkTitle.replace("%data%", w.title));
  $(".work-entry:last").append(HTMLworkDates.replace("%data%", w.dates));
  $(".work-entry:last").append(HTMLworkLocation.replace("%data%", w.location));
  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", w.description));
});

var bio = {
  "name": "Ameen Demidem",
  "role": "Front-End Web Developer",
  "welcomeMsg": "Oh you dear visitor, be welcome !",
  "contacts": {
    "email": "ameen.demidem@gmail.com",
    "github": "ameen-demidem",
    "location": "Victoria, BC, Canada"
  },
  "picture": "images/ameen.png",
  "skills": ["HTLM", "CSS", "Bootstrap", "JavaScript", "jQuery"]
};

var education = {
  "schools": [
    {
      "name": "Ecole Nationale Superieure d'Informatique",
      "location": "Algiers, Algeria",
      "degree": "Bachelor",
      "majors": ["CS"],
      "dates": "September 1998 - December 2003",
      "url": "http://www.esi.dz"
    }
  ],

  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity.com",
      "dates": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
};

$("#header").prepend(HTMLheaderName.replace("%data%", "Ameen Demidem"));

if (bio.skills.length != 0) {
  $("#header").append(HTMLskillsStart);
  for (var i=0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
  }
}

$(document).click(function(loc) { logClicks(loc.pageX, loc.pageY); });

$("#main").append(internationalizeButton);

function inName(fullName) {
  var name = fullName.split(" ");
  var initial = name[0].charAt(0).toUpperCase();
  var firstName = name[0].slice(1).toLowerCase();
  var lastName = name[1].toUpperCase();

  return initial + firstName + " " + lastName;
}

var projects = [
  {
    "title": "Top List",
    "dates": "April 2016",
    "description": "Replicate a mock featured-work pdf file in HTML/CSS",
    "images": []
    // "images": ["http://lorempixel.com/300/200", "http://lorempixel.com/301/200"]
  }
];

projects.display = function() {
  for (p of projects) {
    $("#projects").append(HTMLprojectStart);
    // console.log(HTMLprojectTitle.replace("%data%", p.title));
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", p.title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", p.dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", p.description));
    for (img of p.images) $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
  }
}

projects.display();

$("#mapDiv").append(googleMap);