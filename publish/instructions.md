Process for publishing a new release:

Note: The `git` and `npm` commands are shown here using command line but can also be
performed in VS Code.

Sync local copy to latest source:
```
git checkout master
git pull
```

Update version in `package.json` and `CHANGELOG.md` then commit with commit message:
`chore(): ver bump`. Sync to `github`.
```
cd src
npm version patch|minor|major
git commit -a -m "chore(): ver bump"
git push
```

Build the release (consider first cleaning all build artifacts):
```
cd src
npm run build
```

Publish the release to `npm`:
```
./publish.sh
```

Create a new github release at https://github.com/triniwiz/nativescript-stripe/releases. Upload the build in `./package'.
