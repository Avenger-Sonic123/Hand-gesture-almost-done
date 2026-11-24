# Hand Gesture to Emoji — Model Setup

A webcam hand-gesture prototype with model loading and speech-output scaffolding.

**Repository created:** 2022-02-20  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2022-02-20

## Features and implementation

- Webcam snapshot capture.
- Hosted ml5 image classifier.
- Speech synthesis helper for two predictions.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, ml5.js, WebcamJS, Teachable Machine (hosted model).

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `main.js`: `take_snapshot()`, `speak()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/Hand-gesture-almost-done.git
cd Hand-gesture-almost-done
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Allow camera access and test snapshot capture.

## Current status and limitations

The image classification and emoji-mapping callbacks are not yet implemented.

## Related project snapshots

Other repositories in this project family:
- [Hand-gesture-done](https://github.com/Avenger-Sonic123/Hand-gesture-done) — repository created 2022-02-20
- [Hand-gesture_Not_done](https://github.com/Avenger-Sonic123/Hand-gesture_Not_done) — repository created 2022-02-20
- [Hand-gesture_done](https://github.com/Avenger-Sonic123/Hand-gesture_done) — repository created 2022-02-24

---

Source reference: [`ef7124b5`](https://github.com/Avenger-Sonic123/Hand-gesture-almost-done/tree/ef7124b5d5c1ea75b3d3d09cb2ccb4eb39c544e6) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
