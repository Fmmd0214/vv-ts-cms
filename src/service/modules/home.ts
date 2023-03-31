import netRequest from "..";

// 发送网络请求
netRequest
  .request({
    url: "/home/multidata",
  })
  .then(res => {
    console.log(res.data);
  });
