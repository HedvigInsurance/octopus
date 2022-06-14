# octopus 🐙

Octopus is an Apollo Gateway instance to support [Apollo Federation](https://www.apollographql.com/docs/federation/).

## Using Apollo Router

You can easily use the official Docker image like this:

```bash
docker run -p 4000:4000 \
        --env APOLLO_GRAPH_REF="<REPLACE>" \
        --env APOLLO_KEY="<REPLACE>" \
        --mount "type=bind,source=/router.yaml,target=/dist/config/router.yaml" \
        --rm \
        ghcr.io/apollographql/router:v0.9.4
```
