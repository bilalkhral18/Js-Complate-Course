let submitbtn = document.querySelector("#submitbtn");
let inputname = document.querySelector("#SGP_1");
let profile_detail = document.querySelector("#profile_detail");
let loader = document.querySelector("#loader");
const url = "https://api.github.com/users/";
const profurl = "https://api.github.com/";
const userProfile = (profile) => {
  return `<div class="card-container" id = "card-container">
            <div class="header-portion">
              <div class="imgae-profName">
                <span class="img-container">
                  <img
                    src="${profile.avatar_url}"
                    alt="error"
                    id="profileimg"
                  />
                </span>
                <span class="name-container">
                  <h2 id="realname">${profile.name}</h2>
                  <h6 id="username">${"@" + profile.login}</h6>
                </span>
              </div>
              <div class="Profile_btn">
                <button>
                  <a id="check_prof" href="${profile.html_url}" target="_blank">Check Profile</a>
                </button>
              </div>
            </div>
            <div class="about-section">
              <h2>About</h2>
              <span id="about_content">
                ${profile.bio}
              </span>
            </div>
            <div class="count-container">
              <span class="followers-container">
                <h6>Followers</h6>
                <number id="followers">${profile.followers}</number>
              </span>
              <span class="following-container">
                <h6>Following</h6>
                <number id="followings">${profile.following}</number>
              </span>
              <span class="repos">
                <h6>Repos</h6>
                <number id="repos">${profile.public_repos}</number>
              </span>
            </div>
          </div>`;
};
async function fetchgitprofile() {
  let finalusername = inputname.value;
  loader.innerText = "loading...";
  try {
    const response = await fetch(`${url}${finalusername}`);
    const data = await response.json();

    if (data.login) {
      profile_detail.innerHTML = userProfile(data);
      inputname.innerText = " ";
      loader.innerText = "";
    } else {
      loader.innerText = "User Not Found";
      profile_detail.innerHTML = "";
    }
  } catch (error) {
    console.log(error);
  }
}
submitbtn.addEventListener("click", fetchgitprofile);
inputname.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    fetchgitprofile();
  }
});

// let name = document.querySelector("#realname");
// let username = document.querySelector("#username");
// let profileimg = document.querySelector("#profileimg");
// let checkprobtn = document.querySelector("#check_prof");
// let about_content = document.querySelector("#about_content");
// let followers = document.querySelector("#followers");
// let followings = document.querySelector("#followings");
// let repos = document.querySelector("#repos");
// let imgsrc = profileimg.getAttribute("src");
// console.log(profileimg.setAttribute("src"));
//  profileimg.setAttribute("src", data.avatar_url);
//     name.innerHTML = data.name;
//     username.innerHTML = "@" + data.login;
//     checkprobtn.setAttribute("href", data.html_url);
//     about_content.innerHTML = data.bio;
//     followers.innerHTML = data.followers;
//     followings.innerHTML = data.following;
//     repos.innerHTML = data.public_repos;
