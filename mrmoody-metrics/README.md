### Metrics for Mr.Moody

### Build application

```
docker run -it --rm -v "$PWD":/go/src/github.com/keremgocen/mrmoody-metrics -w /go/src/github.com/keremgocen/mrmoody-metrics -e GOOS=linux -e GOARCH=386 -e CGO_ENABLED=0 golang:1.6 bash -c "go get . && go build ."
```

### Requirements

#### Config

```
{
    "msg": "config data",
    "target_url" : "<firebase-url-here>",
    "api_key" : "Bearer <your-user-id>",
    "update_period_minutes" : 5,
    "db_address" : "http://localhost:8086",
    "db_name": "",
    "db_user": "",
    "db_pass": ""
}
```

The app will try to connect to the InfluxDB running at specified target URL(`db_address`) in config.

##### Grafana (for metrics visualization)

Run a local grafana image and add influxdb as a datasource.

`docker run -i -p 3000:3000 grafana/grafana`

http://docs.grafana.org/datasources/influxdb/#using-influxdb-in-grafana

##### InfluxDB (storage)

Run an InfluxDB docker image, make sure the `db_user` in config is priviliged with necessary read/write access.
**for demo purposes, usage of explicit user and password is omitted for now**

`docker run -p 8083:8083 -p 8086:8086
      -v influxdb:/var/lib/influxdb
      influxdb`

### TODOs
- Add more graphs
- Set default settings
- Add tests and benchmarks
- Merge a stack file using 3 docker images. The app, influx as storage and a grafana image.
- Automate the process of system setup so that a one liner can bring the whole thing up and running on docker.
- Automate the deployment process. (Pushing to main branch should trigger a build and deployment on live)
