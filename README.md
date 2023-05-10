# Next.js Performance Benchmark on DigitalOcean App Platform

This repository contains a simple Next.js application and a k6 script for
performance benchmarking. The Next.js application includes an API that sleeps
for 50ms and then generates a random number. The k6 script measures the
application's performance on a DigitalOcean App Platform server.

**Benchmark results are at the bottom of this README.**

## Prerequisites

You need to have Node.js and npm installed on your machine to create the Next.js
application. Install k6 for the performance testing.

## Next.js Application

The Next.js application contains a single API at `pages/api.js`. This API waits
for 50ms, generates a random number, and returns it in a JSON response.

## Deploying the Application

Follow these steps to deploy the Next.js application to the DigitalOcean App
Platform:

1. Sign up for DigitalOcean App Platform and click 'Create App'
2. Select your repo and branch, then hit 'Deploy'

Your Next.js application should now be live on DigitalOcean.

## Performance Testing with k6

We use k6 for performance testing due to its flexibility in defining performance
test scenarios. The k6 script (`bench.js`) included in this repository ramps up
the load to 50 virtual users (VUs), holds it for 3 minutes, and then ramps down.

To run the k6 script, use the following command:

```bash
k6 run bench.js
```

The script will stop if more than 1% of the requests result in an HTTP error or
if the 95th percentile response time exceeds 1 second.

## Understanding the Results

The k6 output includes several useful metrics, such as the number of total
requests, the number of failed requests, and the average response time. By
reviewing these metrics, you can understand how many requests per second your
Next.js app can handle on a single DigitalOcean server before it starts to slow
down.

### Results and Summary

- The k6 output shows that our server handled 78.9 requests per second (RPS) on
  average, with a maximum of 50 concurrent users.
- CPU usage hovered around 63% during the test.
- Memory usage was constantly at 100%. This indicates that our application is
  memory-bound.
- The average response time was 507.82ms.
- The 95th percentile response time was 793.04ms. This means that 95% of
  requests were processed within this time, but 5% of requests took longer.
- No HTTP requests failed, indicating that the server was able to handle the
  load without dropping requests.
