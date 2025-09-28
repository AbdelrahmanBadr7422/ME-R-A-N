const http = require("http");
const fs = require("fs");
// add/2/3/4/5/sub/3/2/mul/10/div/9
// div/18/2/3/add/3/sub/5
// add/2/3/4/5/sub/3/2/mul/8/10/div/9
const server = http.createServer((req, res) => {
  inputs = req.url.split("/");
  let ans = parseInt(inputs[2]);
  let vals = [parseInt(inputs[2])];

  for (let i = 1; i < inputs.length; ++i) {
    switch (inputs[i]) {
      case "add":
        vals.push("add");
        for (let j = i + 1; j < inputs.length; ++j) {
          if (i == 1) ++j;
          if (isNaN(inputs[j])) break;
          ans += parseInt(inputs[j]);
          vals.push(parseInt(inputs[j]));
          i = j;
        }
        break;
      case "sub":
        vals.push("sub");
        for (let j = i + 1; j < inputs.length; ++j) {
          if (i == 1) ++j;
          if (isNaN(inputs[j])) break;
          vals.push(parseInt(inputs[j]));
          ans -= parseInt(inputs[j]);

          i = j;
        }
        break;
      case "mul":
        vals.push("mul");
        for (let j = i + 1; j < inputs.length; ++j) {
          if (i == 1) ++j;
          if (isNaN(inputs[j])) break;
          vals.push(parseInt(inputs[j]));
          ans *= parseInt(inputs[j]);
          i = j;
        }
        break;
      case "div":
        vals.push("div");
        for (let j = i + 1; j < inputs.length; ++j) {
          if (i == 1) ++j;
          if (isNaN(inputs[j])) break;
          if (parseInt(inputs[j]) == 0) {
            throw new Error("Divid by zero");
          }
          vals.push(parseInt(inputs[j]));
          ans /= parseInt(inputs[j]);
          i = j;
        }
        break;
      default:
        console.log("invalid operation");
    }
  }

  vals.push("result");
  vals.push(ans);
  [vals[0], vals[1]] = [vals[1], vals[0]];
  // ["add",2,3,4,5,"result",14]
  let obj = {};
  for (let i = 0; i < vals.length;) {
    if(isNaN(vals[i])){
        obj[vals[i]] = [];
        let operation = i;
        while(!isNaN(vals[++i])){
            obj[vals[operation]].push(vals[i]);
        }
    }
  }


  fs.writeFile("result.json", JSON.stringify(obj), (err) => {
    if (err) {
      console.log("there is an error");
    } else {
      console.log("DONE...!");
    }
  });

});
server.listen(3000);
