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

// Finder Profile Page
var nameTemplate = Handlebars.compile(
  `<div class="impactFinderDiv impactFinderName">
      {{profile.[0].finder_name}}
      {{#if profile.[0].vetted}}
      <i class="fas fa-check vetted"></i>
      {{/if}}
    </div>
  `
);

// Handlebars template for main profile info
var profileTemplate = Handlebars.compile(
  `
  <div class="profileInfo" id="FinderInfo">
  <h2>Basic information</h2>
  <hr>
  <p>{{profile.[0].finder_description}}</p>
  <p style="display:inline-block;width:100px">Size:</p>
  {{profile.[0].finder_size}}
  <br>
  <p style="display:inline-block;width:100px">Telephone:</p>
  {{profile.[0].telephone_number}}
  <br>
   <p style="display:inline-block;width:100px">Mobile:</p>
  {{profile.[0].mobile_number}}
  <br>
   <p style="display:inline-block;width:100px">Email:</p>
  {{profile.[0].email}}
  <br>
</div>
  `
);

var buttonTemplate = Handlebars.compile(
  `
      <div id="changebutton">
        {{#if profile.[0].finder_name}}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
            Edit
          </button>  
        {{else}}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Create
          </button> 
        {{/if}} 
      </div>
  `
)

var bottomButtonTemplate = Handlebars.compile(
  `
  <div id="bottomButton">
    {{#if profile.[0].finder_description}}
    <button data-bs-dismiss="modal"  class="btn btn-primary" id="SaveProfileEdits">Save</button>
    {{else}}
    <button data-bs-dismiss="modal" class="btn btn-primary" id="CreateProfileEdits">Create</button>
    {{/if}}
  </div>
  `
)

var customFieldNameTemplate  = Handlebars.compile(
  `
  <h2 id="customFieldName" style="display: inline-block;">More About {{profile.[0].finder_name}}</h2>
  `
)

var customFieldButtonTemplate = Handlebars.compile(
  `
  <div id="customFieldButton">
    {{#if profile.[1]}}
    <button type="button" class="editcustomfinder btn bg-light" data-bs-toggle="modal" data-bs-target="#modalCustomfieldsEdit">edit</button>
    {{/if}}
  </div>
  `
)

// Handlebars template for custom profile info
var profileCustomfieldTemplate = Handlebars.compile(
  `{{#each profile.[1]}}
    <div>
      <h3>{{customfield_title}}</h3>
      <p>{{customfield_content}}</p>
    </div>
  {{/each}}`
);

var  profileCustomfieldEditTemplate = Handlebars.compile(
  `
  <div id="customFieldEdit">
    {{#each profile.[1]}}
    <div class="customfielddiv" data-id="{{customfield_id}}">
        <label for="customeFill">
    </label>
        <input type="text" class="customFillTitleEdit" name="customFillTitleEdit" value="{{customfield_title}}">
    <br>
    <textarea type="text" class="customFillTitleEdit" name="customFillTextEdit" required>{{customfield_content}}</textarea>
    <button type="button" class="removecustomfinder btn bg-light" data-id="{{customfield_id}}">remove</button>
    </div>
    {{/each}}
  </div>
  `
)

var jobButtonTemplate = Handlebars.compile(
  `
  <div id="jobButton">
    {{#if profile.[2].job_id}}
    <button type="button" class="editjob btn bg-light" data-bs-toggle="modal" data-bs-target="#modaljobBoard">edit</button>
    {{/if}}
  </div>
  `
)


const reloadName = (profile) => {
  console.log(`reload name function:`);
  console.log(profile);
  $("#impactFinderName").html(nameTemplate({ profile }));
};

const reloadFinderProfileInfo = (profile) => {
  console.log(`reload profile function:`);
  console.log(profile);
  $("#FinderInfo").html(profileTemplate({ profile }));
};

const reloadButton = (profile)=>{
  console.log(`reload button function`)
  console.log()
  $('#changebutton').html(buttonTemplate({ profile }))
}

const reloadBottomButton = (profile)=>{
  console.log(`reload bottom button function`)
  $('#bottomButton').html(bottomButtonTemplate({ profile }))
}

const reloadCustomFieldName = (profile)=>{
  console.log(`reload custom field name`)
  $('#customFieldName').html(customFieldNameTemplate({profile}))

}

const reloadCustomFieldButton = (profile)=>{
  console.log(`reload custom field button`)
  $('#customFieldButton').html(customFieldButtonTemplate({profile}))

}

const reloadFinderCustomInfo = (profile) => {
  $("#FinderCustomField").html(profileCustomfieldTemplate({ profile }));
};

const reloadProfileCustomFieldEdit = (profile) => {
  $("#customFieldEdit").html(profileCustomfieldEditTemplate({profile}))
}

const reloadJobButton = (profile) => {
  $('#jobButton').html(jobButtonTemplate({profile}))
}

$(() => {
  // Add an event listener on the add button, such then when we press the button we grab the value from our text box and then send that value to our server in our post request, then we receive the new data from our server and reload all of our notes.
  $(document).on("click", "#SaveProfileEdits", (e) => {
    console.log("Save button pressed");
    e.preventDefault();
    let profileInfo = {
      finder_name: $("input[name=impactFinderName]").val(),
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
        reloadName(res.data);
        reloadFinderProfileInfo(res.data);
        console.log(res.data);
      });
  });

  $(document).on("click", "#CreateProfileEdits", (e) => {
    console.log("Create button pressed");
    e.preventDefault();
    let profileInfo = {
      finder_name: $("input[name=impactFinderName]").val(),
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
        reloadButton(res.data);
        reloadBottomButton(res.data);
        reloadName(res.data);
        reloadCustomFieldName(res.data);
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
    $("input[name=customFillTitle]").val("");
    $("textarea[name=customFillText]").val("")
    axios
      .post("https://localhost:3000/api/newfindercustomfield", {
        customInfo: customAdd,
      })
      .then((res) => {
        reloadCustomFieldButton(res.data);
        reloadFinderCustomInfo(res.data);
        reloadProfileCustomFieldEdit(res.data)
        console.log(res.data);
      });
  });

  $(document).on("click", "#SaveFinderJobPost", (e) => {
    console.log("Save Finder Job Post button pressed");
    e.preventDefault();
    let newJobPost = {
      jobTitle: $("input[name=newJobTitle]").val(),
      jobLocation: $("input[name=newJobLocation]").val(),
      jobDescription: $("textarea[name=newJobDetails]").val(),
    };
    console.log(newJobPost);
    $("input[name=newJobTitle]").val("");
    $("input[name=newJobLocation]").val("");
    $("textarea[name=newJobDetails]").val("")
    axios
      .post("https://localhost:3000/api/newjobpost", {
        newJobPost: newJobPost,
      })
      //set template
      .then((res) => {
        //addtemplate
        reloadJobButton(res.data)

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

// Stopping logout button from appearing on signing up
// $(".signupButton").on('click',()=>{
//   let req.isAuthenticated()= false
// })