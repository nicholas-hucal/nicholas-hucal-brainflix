# BrainFlix - A Responsive App Prototype 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Sass CSS pre-processor module installed

## Sprint 1

In Sprint 1 we start by creating the layout of the site. Then we add functionality to hold the list of available videos in state for display and manipulation via site components. Currently local data is used for display purposes and no upload or comment submission capability is included. Dates are formatted through a utils file to provide both human readable and if not dd/mm/yyyy format for easy viewing.

### Layout
- Nav Component;
    - Logo(with anchor link to homepage)
    - A search form (not functional yet)
    - An upload button (not functional yet)
        - A Button Component
    - And a user avatar
- VideoHero Component
    - holding the current video in a video player that spans the width of the container
    - a default picture/poster is displayed in lieu of video
    - black background behind to cover an area not in the 16/9 ratio video area
- VideoDetails Component
    - Holds the details of the currently selected video
    - Title, Channel, Date, Likes and Views Counts
    - A description of the video follows
- CommentForm Component
    - Holds the current count of comments
    - The current user avatar
    - and the form to submit new comments (not functional yet)
        - Uses a Button Component
- CommentList Component
    - Holds the list of current comments for the current video
        - Uses the Comment Component to display comment
- VideoList Component
    - Holds the list of other videos available for viewing. On click updates the UI without page refresh to display selected video and details
        - Uses the Video Component to display a video

### Functionality
- State
    - Videos holds a list of current videos with few details
    - CurrentVideo holds the complete details of the currently selected video
    - VideosExtended holds the complete details of all available videos
- Utils
    - formatDateforSite provides a dd/mm/yyyy formated string date for the site
    - createHumanReadableDate provides a human readable date in '1 day ago', '2 months ago' etc.
- The buttons on site are current set to `e.preventDefault()` so as not to provide any current function
- Nav logo anchors to root
- Clicking a video in the videolist updates the UI with that videos details and updates the videolist with available options, while excluding the selected video from the list.
- Responsive, the site has 2 breakpoints past mobile to allow for seamless viewing on any device.

