
# component-testling-ci-example

[![browser support](https://ci.testling.com/jb55/component-testling-ci-example.png)](https://ci.testling.com/jb55/component-testling-ci-example)

## Step 1

Make a package.json like so:

```json
{
  "name": "component-testling-ci-example",
  "description": "component testling ci example",
  "devDependencies": {
    "mocha": "*",
    "component": "*"
  },
  "testling": {
    "harness": "mocha",
    "browsers": [
      "ie/6..latest",
      "chrome/22..latest",
      "firefox/16..latest",
      "safari/latest",
      "opera/11.0..latest",
      "iphone/6",
      "ipad/6",
      "android-browser/latest"
    ],
    "preprocess": "make build",
    "scripts": ["build/*.js", "test/*.js"]
  }
}
```

You don't have to use mocha but it seems the most common harness.

## Step 2

Add `http://git.testling.com` to your projects' webhooks (`Settings` -> `Webhooks and Services`)

## Step 3

Add a badge to your Readme.md:

```
[![browser support](https://ci.testling.com/<username>/<project>.png)](https://ci.testling.com/<username>/<project>)
```

## Step 4

Type `make build` and commit your `build/build.js`

*Step 4 is temporary step until substack supports scripts built from preprocess*

## Step 5

Push to Github, check out your test run at:

`https://ci.testling.com/<username>/<project>`


