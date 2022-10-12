A digital garden is different from a blog in the way that information is slowly nurtured over time instead of presenting all the information at once. The author does not feel any pressure to be perfect at the subject and can instead slowly iterate over his knowledge.

First, I push all the changes to the repo using, 
```
git add .
git commit -m "Add digital garden"
git push
```
Then I run the command to deploy the site to GitHub pages, 
```
USE_SSH=true yarn deploy
```
which will push the changes to the `gh-pages` branch.

`USE_SSH=true` is an environment variable that is used to tell Docusaurus to use SSH instead of HTTPS to push the changes to the `gh-pages` branch. This is because I have set up SSH authentication for GitHub. If you have not set up SSH authentication for GitHub, you can use HTTPS instead. `yarn deploy` is a script added to the `package.json` file. It is a simple script that runs the `gh-pages` command. `docusaurus deploy` is a command that is provided by Docusaurus. It will build the site and push the changes to the `gh-pages` branch. 