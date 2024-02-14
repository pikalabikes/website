# Guide for administrators

We use GitHub itself as a way to edit text and add images. All content on the website is organised as text files (`.mdx` file extension) and images (`.jpg` or `.png`) in the [admin](https://github.com/pikalabikes/website/tree/main/admin) folder. When you change any of the files, GitHub will "rebuild" the site and update it. This makes the website very fast, and means we don't need a full CMS like Wordpress or Joomla.

MDX files consist of a number of **fields** - key/value pairs and **content**.
Fields are found at the top of the file, between two divider lines `---`. The content is everything that's after the second `---` divider line. Some MDX files only contain fields, and some only content.

```mdx
---
title: 'My title'
image: 'some-image'
list-field:
  - 'list item 1'
  - 'list item 2'
  - 'list item 3'
another-field: 'some text'
---

# This is a heading

This is my paragraph. **This text is bold**. [This is a link](https://pikalabikes.com). Proident irure incididunt nulla amet fugiat sunt veniam non sit.
```

The admin folder is organised as follows:

* `site.mdx` is the file that controls site-wide content such as the website title
* `images` folder contains all images
* `pages` folder has a folder per each page
  * `home` is the homepage / front page
    * `home.mdx` controls which "hero image" we show on the homepage, and other page-wide content
    * `sections` contains one MDX file per homepage section. Each of the following fields has to be filled out:
      * `title` controls the section title
      * `id` is the unique ID of the section. This lets you "deep-link" to specific sections, e.g. `pikalabikes.com/#founder`.
      * `color` determines the background colour of the section (can be `azure`, `white`, `henna`, `marble` or `indigo`)
      * `image` is the section image (just the file name, without file extension). **Always upload `.jpg` files for section images.**
      * Everything below the `---` is the **section content**. The content is formatted using [Markdown](https://www.markdownguide.org/getting-started/).
      * To add hidden content that shows after clicking the "Learn more" button, add a line with `---` and write the hidden content below.
    * `stats` contains one MDX file per statistic. The statistics are shown both near the top of the homepage, and in their associated sections. Clicking on the statistic takes you to its associated section.
      * `value` is the number in the statistic
      * `label` is the text that describes the number
      * `section` is the ID of the associated section
  * `cafe` is the Pikala Cafe page
    * `cafe.mdx` controls the page-wide content such as the hero image, intro text and link to the menu PDF
    * `sections` contains the page sections, just like the homepage
  * `booking` controls all booking-related pages
    * `booking.mdx` contains the description text of each booking type (tours, bike rental)
    * `faq.mdx` contains the text of the Booking FAQ page (formatted using Markdown)
    * `tours` contains one MDX file per tour. Each tour has a:
      * `title` - the tour name
      * `id` - unique ID used to link to the tour
      * `images` - a list of images for the tour gallery. Each image should be on a new line and start with `  - ` (two spaces, hyphen, one space). **Always upload `.jpg` files for booking gallery images.**
      * `price` - price for adults; write both the number and the currency (DH)
      * `price_children` - price for children (optional)
      * `private_tour` - price and information for a private tour (optional)
      * `duration` - tour duration
      * `languages` - languages in which the tour is available
      * `times` - times in the day that the tour takes place
      * `start_address` - the address where the tour starts
      * `start_maps_link` - the Google Maps URL of the place where the tour starts
      * Everything below the `---` is the **tour description** (formatted using Markdown)
* `partners` contains one MDX file per partner which appears in the site footer
  * **Always upload `.png` files for partner logos.**

Here are the basic steps to edit the website in GitHub:

### Edit a text file

1. click on a text file - e.g. [site.mdx](https://github.com/pikalabikes/website/blob/main/admin/site.mdx)
2. click on the Edit icon:

![image](https://github.com/pikalabikes/website/assets/5719805/32ab8bb1-52c9-4749-9516-2f52a0691de8)

3. edit the text, changing either the file's "metadata" (these are the key-value pairs at the top of the file) or the actual content (this is everything below the `---`
4. Click on "Commit changes":

![image](https://github.com/pikalabikes/website/assets/5719805/1d9da8cd-8275-424c-96c2-24684457161e)

5. Change the commit message - this is to describe the changes you've made so that other people can understand what you did

![image](https://github.com/pikalabikes/website/assets/5719805/4ecd7340-cf5b-4fba-8089-d8fbf4b5bb7f)

6. Click "Commit changes" - Done! Github will rebuild the website and in a few moments it will be updated.

### Add a text file

You might need to add a new text file e.g. when adding a new homepage section, a partner logo or a bike rental option.

In MDX files, text formatting matters a lot - it's usually safer to copy the text from an existing file and change it, than write everything from scratch.

1. Go to the folder where you want to add the file (e.g. [admin/pages/home/sections](https://github.com/pikalabikes/website/tree/main/admin/pages/home/sections))
2. Click "Add file" in the top right, then "Create new file"
3. Name your file as needed, with the `.mdx` extension (e.g. `my-file.mdx`). It's often good to start the file name with a number to ensure the files are loaded in the right order (e.g. `3-my-file.mdx`).
4. Copy text from another file into the editor, then make your desired changes
5. Click "Commit changes" in the top right
6. Add a commit message describing your changes, then click "Commit"

### Add an image

1. Go to the [images](https://github.com/pikalabikes/website/tree/main/admin/images) admin folder.
2. Click "Add file" in the top right, then "Upload files"
3. Drag your file onto the drop area or choose from the file browser.
4. In the "Commit changes" section, add a commit message and click "Commit changes"
5. Your image will now be accessible in various `.mdx` files under its name (without the file extension). For example, if you want to add `pikala-team.jpg` as the section image, you can write `image: 'pikala-team'`
