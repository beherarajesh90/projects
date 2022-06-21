###   DROPDOWN APP

### Installing the dependencies
use command `npm install`

### Running the app
use command `npm run start`

### folder structure

/public -> contains all the static files like index.html,favi.co,etc.
/src -> all the code resides here 
  /components -> contains App and Dropdown components
  /styles -> contains corresponding css files

### Building the app for deployment
use command `npm run build`

### Deployment using Firebase Hosting
#Step-1: NAvigate to the project and build the app 
#Step-2: Create a project on firebase (https://firebase.google.com/)
#Step-3: Install firebase CLI `npm install -g firebase-tools`
#Step-4: Login into firebase using google `firebase login`
#Step-5: Initialize firebase `firebase init` -> select hosting -> expose the build folder -> select yes when promted for configure as single page app
#Step-6: Finally Deploy the app `firebase deploy`

### Note: To stop the hosting `firebase hosting:disable --project <projectId> --site <siteName>` 
### Note: Deleting site `firebase hosting:sites:delete <siteId>`
