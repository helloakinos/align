// Handlebars template for Seeker Name
var seekerNameTemplate = Handlebars.compile(
  `<div class="impactSeekerDiv" id="impactSeekerName">
  {{profile.[0].first_name}} {{profile.[0].surname}}
</div>`
);

// Handlebars template for main profile info
var seekerProfileTemplate = Handlebars.compile(
  `
    <div class="profileInfo" id="SeekerInfo">
    <h2>Basic information</h2>
    <hr>
    <p style="display:inline-block;width:200px">Current Company: </p>
    {{profile.[0].current_company}}
    <br>
    <p style="display:inline-block;width:200px">Mobile:</p>
    {{profile.[0].mobile_number}}
    <br>
    <p style="display:inline-block;width:200px">Email:</p>
    {{profile.[0].email1}}
    </div>
    `
);

// Handlebars template for custom profile info
var seekerProfileCustomfieldTemplate = Handlebars.compile(
  `{{#each profile.[1]}}
        <div style="margin-bottom:10px">
         <h4>{{customfield_title}}</h4>
         <p>{{customfield_content}}</p>
        </div>
    {{/each}}`
);

const reloadSeekerName = (profile) => {
  console.log(`reload seeker name function:`);
  console.log(profile);
  $("#impactSeekerName").html(seekerNameTemplate({ profile }));
};

const reloadSeekerProfileInfo = (profile) => {
  console.log(`reload seeker profile function:`);
  console.log(profile);
  $("#SeekerInfo").html(profileTemplate({ profile }));
};

const reloadFinderCustomInfo = (profile) => {
  $("#SeekerCustomField").html(seekerProfileCustomfieldTemplate({ profile }));
};

$(() => {
  $(document).on("click", "#SaveSeekerProfileEdits", (e) => {
    console.log("Save button pressed");
    e.preventDefault();
    let seekerProfileInfo = {
      first_name: $("input[name=impactSeekerFirstName]").val(),
      surname: $("input[name=impactSeekerSurname]").val(),
      home_number: $("input[name=impactSeekerHomeNumber]").val(),
      mobile_number: $("input[name=impactSeekerMobileNumber]").val(),
      email1: $("input[name=impactSeekerEmail]").val(),
      link: $("input[name=impactSeekerLink]").val(),
    };
    axios
      .put("https://localhost:3000/api/seekerprofile", {
        seekerProfileInfo: seekerProfileInfo,
      })
      .then((res) => {
        reloadSeekerName(res.data);
        reloadSeekerProfileInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#CreateSeekerProfileEdits", (e) => {
    console.log("Create button pressed");
    e.preventDefault();
    let seekerProfileInfo = {
      first_name: $("input[name=impactSeekerFirstName]").val(),
      surname: $("input[name=impactSeekerSurname]").val(),
      home_number: $("input[name=impactSeekerHomeNumber]").val(),
      mobile_number: $("input[name=impactSeekerMobileNumber]").val(),
      email1: $("input[name=impactSeekerEmail]").val(),
      link: $("input[name=impactSeekerLink]").val(),
    };
    axios
      .post("https://localhost:3000/api/newseekerprofile", {
        seekerProfileInfo: seekerProfileInfo,
      })
      .then((res) => {
        reloadSeekerName(res.data);
        reloadSeekerProfileInfo(res.data);
        console.log(res.data);
      });
  });
});
