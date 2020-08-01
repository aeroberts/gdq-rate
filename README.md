hi

I did some stuff

-   login persists and refreshes better
-   there is a basic rating form (if you're signed in)
    -   this needs lots of love still
-   oauth working
-   deployed to https://sgdq.shaneschulte.com/
    -   if you want to deploy, go to console and run this mutation:

```graphql
# Deploy the head of 'master' branch to prod server
mutation DeployFrontend {
    deploy {
        result
    }
}
```

-   console moved to https://sgdq.shaneschulte.com/hasura/console
