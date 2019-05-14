Process for publishing a new release:

Sync local copy to latest source:
```
git checkout master
git pull
```

Clean any old artifacts:
```
cd src
npm run ngc.clean
```

Bump version in `package.json`:
```
cd src
npm version patch|minor|major -m "chore(): ver bump"
```

Update `CHANGELOG.md` as necessary and add it to the commit:
```
git add package.json
git add ../CHANGELOG.md
```

Sync to `git`:
```
git push
```

Publish the release to `npm`:
```
./publish.sh
```

Create a new github release at https://github.com/triniwiz/nativescript-stripe/releases.
Upload `./package/nativescript-stripe.<version>.tgz` to the release.
