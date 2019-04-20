import React from "react";

const Profile = props => {
  return (
    <div>
      <div class="card bg-primary">
        <div class="card-body profile-user-box">
          <div class="row">
            <div class="col-sm-8">
              <div class="media">
                {/* <span class="float-left m-2 mr-4"><img src="assets/images/users/avatar-2.jpg" style="height: 100px;" alt="" class="rounded-circle img-thumbnail"></span> */}
                <div class="media-body">
                  <h4 class="mt-1 mb-1 text-white">Michael Franklin</h4>
                  <p class="font-13 text-white-50"> Authorised Brand Seller</p>

                  <ul class="mb-0 list-inline text-light">
                    <li class="list-inline-item mr-3">
                      <h5 class="mb-1">$ 25,184</h5>
                      <p class="mb-0 font-13 text-white-50">Total Revenue</p>
                    </li>
                    <li class="list-inline-item">
                      <h5 class="mb-1">5482</h5>
                      <p class="mb-0 font-13 text-white-50">Number of Orders</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="text-center mt-sm-0 mt-3 text-sm-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
