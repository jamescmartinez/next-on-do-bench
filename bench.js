import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 50 }, // ramp up to 50 VUs
    { duration: "3m", target: 50 }, // stay at 50 VUs for 3 minutes
    { duration: "1m", target: 0 }, // ramp down
  ],
  thresholds: {
    http_req_failed: [{ threshold: "rate<0.01", abortOnFail: true }], // http errors should be less than 1%
    http_req_duration: [{ threshold: "p(95)<1000", abortOnFail: true }], // 95% of requests should be below 1s
  },
};

export default function () {
  http.get("https://dolphin-app-uklwa.ondigitalocean.app/api");
}
