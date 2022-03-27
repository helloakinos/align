// LoginForm
let toggleTimes = 0;
let toggleTimes1 = 0;

$("#loginUserType").on("change", function () {
  let selectedUserType = document.querySelector("#loginUserType").value;
  console.log(selectedUserType);
  if (toggleTimes == 0) {
    if (selectedUserType == "impactFinder") {
      $("#loginFormFinder").toggleClass("hide");
      toggleTimes++;
    } else if (selectedUserType == "impactSeeker") {
      $("#loginFormSeeker").toggleClass("hide");
      toggleTimes++;
    }
  } else if (toggleTimes > 0) {
    if (selectedUserType == "impactFinder") {
      $("#loginFormFinder").toggleClass("hide");
      $("#loginFormSeeker").toggleClass("hide");
    } else if (selectedUserType == "impactSeeker") {
      $("#loginFormFinder").toggleClass("hide");
      $("#loginFormSeeker").toggleClass("hide");
    }
  }
});

$(".signupButton").on("click", function () {
  $("#loginDiv").toggleClass("hide");
  $("#signupDiv").toggleClass("hide");
});

$("#signupUserType").on("change", function () {
  let selectedUserType = document.querySelector("#signupUserType").value;
  console.log(selectedUserType);
  if (toggleTimes1 == 0) {
    if (selectedUserType == "impactFinder") {
      $("#signupFormFinder").toggleClass("hide");
      toggleTimes1++;
    } else if (selectedUserType == "impactSeeker") {
      $("#signupFormSeeker").toggleClass("hide");
      toggleTimes1++;
    }
  } else if (toggleTimes1 > 0) {
    if (selectedUserType == "impactFinder") {
      $("#signupFormFinder").toggleClass("hide");
      $("#signupFormSeeker").toggleClass("hide");
    } else if (selectedUserType == "impactSeeker") {
      $("#signupFormFinder").toggleClass("hide");
      $("#signupFormSeeker").toggleClass("hide");
    }
  }
});

var profileTemplate = Handlebars.compile(
  `
  <div class="profileInfo" id="FinderInfo">
  <label for="impactFinderInfo">Impact Finder information</label>
  <br>
  <p>{{profile.[0].finder_description}}</p>
  <p style="display:inline-block">Size:</p>
  {{profile.[0].finder_size}}
{{!-- </div>
<div class="profileElement"> --}}
  <br>
  <label for="impactFinderContact">Impact Finder Contact</label>
  <br>
  <p style="display:inline-block">Telephone:</p>
  {{profile.[0].telephone_number}}
  <br>
   <p style="display:inline-block">Mobile:</p>
  {{profile.[0].mobile_number}}
  <br>
   <p style="display:inline-block">Email:</p>
  {{profile.[0].email}}
  <br>
</div>
  `
);

const reloadProfileInfo = (profile) => {
  // code here
  $("#profileInfo").html(profileTemplate({ profile }));
};

$(() => {
  // Add an event listener on the add button, such then when we press the button we grab the value from our text box and then send that value to our server in our post request, then we receive the new data from our server and reload all of our notes.
  $("#saveProfile").submit((e) => {
    e.preventDefault();
    console.log("Save button pressed");
    // after grabbing the value from the textbox, use axios to make a post request and send the value
    // Example: axios.post("/api/notes", {note: value})
    // code here
    let info = {
      profile:{
        finder_description:$("textarea[name=impactFinderInfo]").val(),
        finder_size:$("#impactFinderSize").val(),
        telephone_number:$("input[name=impactFinderPhone]").val(),
        mobile_number:$("input[name=impactFinderMobile]").val(),
        email:$("input[name=impactFinderEmail]").val(),
      }}
    axios.put("/finderprofile/", {info:info}).then((res) => {
      reloadProfileInfo(res.data);
      console.log(res.data);
    });
  });
});
