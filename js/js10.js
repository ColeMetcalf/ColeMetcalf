var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
"On a peculiar 80 fahrenheit day, in Seashellville, eccentric :insertx: embarked on his daily beach stroll, donning a vibrant :inserty: and mismatched socks, as usual. During his wander, he discovered a shimmering seashell that weighs 20 pounds, appeared to :insertz:. To his amazement, the seashell turned out to be Hermy, a hermit crab with dreams of stardom. Fred, being kind-hearted and equally whimsical, transformed Hermy into a singing sensation, complete with a peanut butter jar microphone and seashell stage. The beach transformed into a stage, and Hermy's captivating rendition of 'Under The Sea' drew a crowd, including an enthusiastic tap-dancing seagull. With newfound fame, Hermy became a touring seashell band sensation, and Fred, his quirky manager. From then on, their beach walks were filled with laughter, music, and delightful silliness in Seashellville."

var insertX = ["Fred", "Steve", "Max"];

var insertY = ["Hawaiian shirt", "pink Tank top", "Sko-buff shirt"];

var insertZ = ["sing a melodic tune", "do the moon-walk", "drank the entire ocean"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Fred', name);

  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(20 * 0.0714286) + ' stone';
    var temperature = Math.round((80 - 32) * (5/9)) + ' centigrade';
    var newStory = newStory.replace('80 fahrenheit', temperature);
    var newStory = newStory.replace('20 pounds', weight);

  }

 
  story.textContent = newStory;
  story.style.visibility = 'visible';
}