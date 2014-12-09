# Level 0 DOM Training Test #

This test is designed to ensure you have an understanding of basic DOM manipulation and event handling.

## Instructions ##

Using vanilla JavaScript or jQuery to create an accordion. The generated-via-JS markup should mirror the example provided below. Clicking the (X) `.js-accordion-trigger` should toggle the visibility of the accordion body `.js-accordion-bd`.

The expected markup has been provided below. All the CSS has already been provided. jQuery and `accordion.js` are hooked up and ready to go.

### You May ###

- Use jQuery to do all the things.
- Use vanilla JavaScript to do all the things.
- Write in a non-OO fashion. No need to be pretty with this one, just get the job done.
- Reference the example markup to see what is expected.
- Put any content into the accordion-bd as long as it demonstrates that the accordion is toggleable.

### You May Not ###

- Use templating of any kind.
- Put anything into index.html that isn't generated via JavaScript.

## What The Finished Acoordion HTML Looks Like ##

```html
  <div class="accordion">
    <div class="accordion-hd">
      The Picture Toggler 5000
      <span class="accordion-hd-trigger js-accordion-trigger">X</span>
    </div>
    <div class="accordion-bd js-accordion-bd">
      <img src="http://www.fillmurray.com/300/360" alt="" />
    </div>
  </div>
```
