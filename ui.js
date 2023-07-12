class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }
  showUi(user) {
    this.profile.innerHTML = ` <div class="card card-body">
          <div class="row">
            <div class="col-md-3">
              <img src="${user.avatar_url}" class="img-fluid" alt="img" />
              <a
                href="${user.html_url}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary mt-2 btn btn-block"
                >View Profile</a
              >
            </div>
            <div class="col-md-9">
              <span class="badge bg-info">Pubic Repo:${user.public_repos}</span>
              <span class="badge bg-warning">followers:${user.followers}</span>
              <span class="badge bg-success">following:${user.following}</span>
              <span class="badge bg-info">Public Gist:${user.public_gists}</span>
              <div class="mt-5"></div>
              <ul class="list-group">
                <li class="list-group-item">company:${user.company}</li>
                <li class="list-group-item">Location:${user.location}</li>
                <li class="list-group-item">Email:${user.email}</li>
                <li class="list-group-item">type:${user.type}</li>
              </ul>
            </div>
          </div>
        </div>`;
  }
}
