// ======Javascript/jQuery for GIPHY API=====//

// Variables
var tngPeople = ["Captain Picard", "Counselor Troi", " Lt. Worf", "Data", "Dr. Crusher", "Commander Riker", "LCDR Geordi La Forge","Tasha Yar", "Guinan", "Miles O'Brien", "Q"]
var jQueryURL = "?api_key=MIDSIJdf7TGdUF7P3gBLcXrCUW4w1z03";

// AJAX Function
	$.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
    });

