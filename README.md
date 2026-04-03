# Fix Biome Formatting (Docker Container)

Docker container running script that fixes code files with right formatting using the `Biome Formatter`.

Creating the biome formatter image using the **Dockerfile** present in this repo:

```bash
docker build -t rocketman02/biome-file-formatter:v1 .
```

Running the biome container to format the files places in the mounted folder:

```bash
docker run --rm --mount type=bind,source=$HOME/Documents/docker-mounted-folder,target=/biome-files-formatter/files rocketman02/biome-file-formatter:v1
```

Pushing the image to docker hub:

```bash
docker push rocketman02/biome-file-formatter:v1
```

You can view the image [here](https://hub.docker.com/layers/rocketman02/biome-file-formatter)
