import axios from "axios";
import React, { useState } from "react";

export default function Home(props) {
  const { token, dataUser } = props;
  const [listUser, setListUser] = useState([]);
  const handleGetUsers = () => {
    axios({
      url: "http://localhost:3000/users",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setListUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <section style={{ backgroundColor: "#9de2ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-md-9 col-lg-7 col-xl-5">
            <div className="card mb-4" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src={dataUser.avatar}
                      alt="Generic placeholder image"
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">
                      {dataUser.firstName + " " + dataUser.lastName}
                    </h5>
                    <div
                      className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: "#efefef" }}
                    >
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      {/* <button
                        type="button"
                        className="btn btn-outline-primary me-1 flex-grow-1 "
                      >
                        Chat
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary flex-grow-1 "
                      >
                        Follow
                      </button> */}
                      <button
                        type="button"
                        className="btn btn-danger flex-grow-1 ms-1"
                        onClick={handleGetUsers}
                      >
                        Get List User
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {listUser.map((item) => (
              <div
                className="card mb-4"
                style={{ borderRadius: 15 }}
                key={item.id}
              >
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt="Generic placeholder image"
                        className="img-fluid"
                        style={{ width: 180, borderRadius: 10 }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">
                        {item.firstName + " " + item.lastName}
                      </h5>
                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-1">Articles</p>
                          <p className="mb-0">41</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">Followers</p>
                          <p className="mb-0">976</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">Rating</p>
                          <p className="mb-0">8.5</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <button
                          type="button"
                          className="btn btn-outline-primary me-1 flex-grow-1"
                        >
                          Chat
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary flex-grow-1"
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
