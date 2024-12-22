
# Scheduling Plugins Guide_Hexabot

This project leverages Hexabot Open Source to create a plugin for scheduling meetings and events. The primary goal is to automate the scheduling process and provide an efficient, user-friendly solution.  

-----

## Running the Project  

Follow these steps to set up and run the project:  

1. Clone the repository.  
2. Install dependencies:  
   ```bash
   npm i
   ```  
3. Initialize Hexabot:  
   ```bash
   hexabot init
   ```  
4. Start the development server:  
   ```bash
   hexabot dev
   ```  
5. Access the project at [localhost:8080](http://localhost:8080).  

---

## Resources Needed for Developers  

To use the plugin during development, you will need:  

### Auth Token  
Generate an access token for testing with Calendly by following these steps:  
1. Create an account on [Calendly](https://developer.calendly.com/api-docs/).  
2. Generate an access token from the API documentation section.  

---

## Created Plugins  

### **JustPlugin**  
**Description:**  
This plugin serves as the entry point for the conversation. Its purpose is to determine what type of meeting or event the user is looking to schedule.  

**Features:**  
- **Fetch Event Types:** Uses the endpoint:  
  ```plaintext
  https://api.calendly.com/event_types/{uuid}
  ```  
  to retrieve available event types.  
- **Context Variables:** Utilizes context variables to transfer the meeting type value to other plugins.  
---

## **Features**:

### PLugin 1: Gemini Plugin
* Processes and interprets the first user message.
* Seamlessly integrates with other plugins in the chatbot workflow.

### Plugin 2: Event-Types Plugin
* Integrates with the Calendly API to fetch available event types.
* Dynamically generates a list of event categories based on the user's ID.
* Displays quick-reply buttons for interactive selection of event types.
* Stores fetched event types in context variables for seamless interaction across plugins.

### Plugin 3: available-plugin-time
* Fetches specific event details from the Calendly API using the event name and user ID.
* Retrieves available time slots for a given event within a specified time range.
* Filters and displays unique dates for the available times, ensuring clarity and ease of selection.
* Provides error handling to inform users when event details or available times cannot be retrieved.
* Integrates context variables to enable smooth data sharing with other plugins.

### Plugin 4: Link-plugin
* Provides the Calendly link for final booking and confirmation.

---

### **CalendlyPlugin**  
**Description:**  
This plugin handles fetching available event types and scheduling meeting times based on user preferences.  

**Features:**  
- **Retrieve Event Types:** Uses the endpoint:  
  ```plaintext
  https://api.calendly.com/event_types
  ```  
  to fetch all available event types.  
- **Fetch Available Dates:** Uses the endpoint:  
  ```plaintext
  https://api.calendly.com/event_type_available_times
  ```  
  to retrieve available dates for scheduling.  
- **Context Variables:** Passes the meeting type value between plugins for seamless integration.  

---

## Notes  
- This project demonstrates the potential of Hexabot and Calendly APIs for automating scheduling processes.  
- Challenges like handling API responses and passing data between custom plugins were addressed with creative solutions.  

Feel free to contribute or provide feedback to improve the project!  


