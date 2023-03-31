import { netRequest2 } from "..";

netRequest2
  .request({
    url: "xxx",
  })
  .then(res => {
    console.log(res);
  });
