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

// Handlebars template for main profile info
var profileTemplate = Handlebars.compile(
  `
  <div class="profileInfo" id="FinderInfo">
    <label for="impactFinderInfo">Impact Finder information</label>
    <br>
    <p>{{profile.[0].finder_description}}</p>
    <p style="display:inline-block">Size:</p>
    {{profile.[0].finder_size}}
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

// Handlebars template for custom profile info
var profileCustomfieldTemplate = Handlebars.compile(
  `{{#each profile.[1]}}
  <div>
      <h3>{{customfield_title}}</h3>
      <p>{{customfield_content}}</p>
  </div>
  {{/each}}`
);

const reloadFinderProfileInfo = (profile) => {
  console.log(`reload profile function:`);
  console.log(profile);
  $("#FinderInfo").html(profileTemplate({ profile }));
};

const reloadFinderCustomInfo = (profile) => {
  $("#FinderCustomField").html(profileCustomfieldTemplate({ profile }));
};

$(() => {
  // Add an event listener on the add button, such then when we press the button we grab the value from our text box and then send that value to our server in our post request, then we receive the new data from our server and reload all of our notes.
  $(document).on("click", "#SaveProfileEdits", (e) => {
    console.log("Save button pressed");
    e.preventDefault();
    let profileInfo = {
      finder_name: $("textarea[name=impactFinderName").val(),
      finder_description: $("textarea[name=impactFinderInfo]").val(),
      finder_size: $("#impactFinderSize").val(),
      telephone_number: $("input[name=impactFinderPhone]").val(),
      mobile_number: $("input[name=impactFinderMobile]").val(),
      email: $("input[name=impactFinderEmail]").val(),
      role: $("input[name=impactFinderRole").val(),
    };
    axios
      .put("https://localhost:3000/api/finderprofile", {
        profile: profileInfo,
      })
      .then((res) => {
        reloadFinderProfileInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#CreateProfileEdits", (e) => {
    console.log("Create button pressed");
    e.preventDefault();
    let profileInfo = {
      finder_name: $("textarea[name=impactFinderName]").val(),
      finder_description: $("textarea[name=impactFinderInfo]").val(),
      finder_size: $("#impactFinderSize").val(),
      telephone_number: $("input[name=impactFinderPhone]").val(),
      mobile_number: $("input[name=impactFinderMobile]").val(),
      email: $("input[name=impactFinderEmail]").val(),
      role: $("input[name=impactFinderRole]").val(),
    };
    axios
      .post("https://localhost:3000/api/newfinderprofile", {
        profile: profileInfo,
      })
      .then((res) => {
        reloadFinderProfileInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#SaveFinderCustomField", (e) => {
    console.log("Save customfield button pressed");
    e.preventDefault();
    let customAdd = {
      infoTitle: $("input[name=customFillTitle]").val(),
      infoContent: $("textarea[name=customFillText]").val(),
    };
    console.log(customAdd);
    axios
      .post("https://localhost:3000/api/newfindercustomfield", {
        customInfo: customAdd,
      })
      .then((res) => {
        reloadFinderCustomInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#editFinderCustomField", (e) => {
    e.preventDefault();
    let infoArray = [];
    $(".customfielddiv").each((i, obj) => {
      console.log(`this is obj: `, obj);
      let customEdit = {};
      customEdit.customfieldId = $(obj).data("id");
      customEdit.infoTitle = $(obj)
        .children("input[name=customFillTitleEdit]")
        .val();
      customEdit.infoContent = $(obj)
        .children("textarea[name=customFillTextEdit]")
        .val();
      infoArray.push(customEdit);
    });
    console.log(infoArray);
    axios
      .put("https://localhost:3000/api/editfindercustomfield", {
        customInfo: infoArray,
      })
      .then((res) => {
        reloadFinderCustomInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", ".removecustomfinder", (e) => {
    e.preventDefault();
    let divId = $(event.target).data("id");
    console.log(divId);
    axios
      .delete(`https://localhost:3000/api/deletefindercustomfield/${divId}`)
      .then((res) => {
        reloadFinderCustomInfo(res.data);
        console.log(res.data);
        $(`div[data-id=${divId}]`).remove();
      });
  });
});
