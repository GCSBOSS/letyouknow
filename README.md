# [LetYouKnow](https://gitlab.com/GCSBOSS/letyouknow)

A highly configurable message broker supporting a plethora of delivering mechanisms

> Obs.: Still missing the plethora part

## Get Started with Docker

The official image repository in Docker Hub is `gcsboss/letyouknow`.

Run like this: `docker run -p 80:80 -v /your/routes.js:/usr/src/app/lib/routes.js gcsboss/letyouknow`

## API Reference

The following endpoints are supported so far:

- `POST /event/:name`: Post a new event and trigger it's logic in case it's defined in your routes file.

- `GET /events`: Returns a list of all the events supported by your routes file.

## Reporting Bugs
If you have found any problems with this module, please:

1. [Open an issue](https://gitlab.com/GCSBOSS/letyouknow/issues/new).
2. Describe what happened and how.
3. Also in the issue text, reference the label `~bug`.

We will make sure to take a look when time allows us.

## Proposing Features
If you wish to get that awesome feature or have some advice for us, please:
1. [Open an issue](https://gitlab.com/GCSBOSS/letyouknow/issues/new).
2. Describe your ideas.
3. Also in the issue text, reference the label `~proposal`.

## Contributing
If you have spotted any enhancements to be made and is willing to get your hands
dirty about it, fork us and
[submit your merge request](https://gitlab.com/GCSBOSS/letyouknow/merge_requests/new)
so we can collaborate effectively.
