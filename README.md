# The Pikala Website

This repository works both as a Content Management System (CMS) and source code for the website.
Below is a guide for both administrators who wish to edit text + images on the website, and developers who modify the source code.

## For administrators

We use GitHub itself as a way to edit text and add images. All content on the website is organised as text files (`.mdx` file extension) and images (`.jpg` or `.png`) in the [admin](https://github.com/pikalabikes/website/tree/main/admin) folder. Here are the basic steps to edit content:

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



## For developers
