## Shechduling_plugins guide 
This project uses Hexabot open Source to create a plugin to  schedule meetings /event using Hexabot , the goal is to automate the scheduling of event and meetin

## Runing the project 
1.clone the project 
2.run 'npm i'
3.run 'hexabot init'
4.run 'hexabot dev'
5.access to "localhost:8080"

## Needed resources for the plugin to be used as a devekopper 
Auth-token : you can generate an access token for testing Calendly : on this link https://developer.calendly.com/api-docs/ after making an account 
## Created Plugings

# JustPlugin
Plugin Description: 
  This plugin is the conversation entry point , it's goal is to specify what type of meetings the use is looking for .
Features: 
   the plugin uses: 
   'https://api.calendly.com/event_types/{uuid}' to fetch all the types availabale
   context_variables to transder the type value from plugin to plugin
   

# CalendlyPlugin
Plugin Description: 
  This plugin is the conversation entry point , it's goal is to secify what type of meetings the use is looking for .
Features: 
   the plugin uses: 
   'https://api.calendly.com/event_types' : to fetch event types to use later to extrat the needed event 
   'https://api.calendly.com/event_type_available_times':'to fetch the available dates 
    context_variables to transder the type value from plugin to plugin


   
