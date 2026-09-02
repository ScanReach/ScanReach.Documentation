# Product Usage & Operations

This section covers questions about day-to-day operations, safety procedures, and user interfaces for ScanReach products.

## Application & Usage

<br>

<details>
<summary>What is ConnectPOB and what is its primary purpose?</summary>
ConnectPOB is a system designed to manage people and their wearables on vessels. Its primary purpose is to provide an assistant for making quicker and better decisions in critical situations, particularly during emergencies. It gives an instant overview of onboard personnel, allowing immediate and high-precision rescue team involvement. The system is also valuable for training situations, muster training, fire drills, and other distress scenarios.
</details>

<details>
<summary>How do I activate a wearable device?</summary>
To activate a wearable device, press and hold the top of the wearable for 1-3 seconds. A green LED will blink to indicate that the wearable is active. Note that once activated, it's no longer possible to turn it off, and the average lifespan of an operational wearable is approximately 24 months.
</details>

<details>
<summary>How can someone trigger a distress alarm using their wearable?</summary>
To trigger a distress alarm, press and hold the top of the wearable for +1 seconds. A red LED will start blinking for 1 minute, and the triggered alarm will show up in the ConnectPOB Dashboard. It's recommended to test the alarm function when handing out wearables to crew members to ensure proper functionality.
</details>

<details>
<summary>What happens to the ConnectPOB system during a power blackout?</summary>
The ConnectPOB system features battery backup for continuous real-time data flow during potential vessel power blackouts. Additionally, it's recommended that the ScanReach system be connected to UPS (Uninterruptible Power Supply) power to assure access to the system during emergency situations.
</details>

<details>
<summary>Can ConnectPOB be used during training situations?</summary>
Yes, ConnectPOB is a valuable supplement in training situations, muster training, fire drills, and other distress situations. When starting a mustering process, there's an option to indicate that it's a drill rather than a real emergency by toggling the appropriate setting.
</details>

## Safety Dashboard

<br>

<details>
<summary>How do I start a mustering process?</summary>
To start a mustering process, in the "Top bar":
<ol>
<li>Toggle the "Mustering" button in the top right to "ON"</li>
<li>Select Mustering Type from the dropdown<ul>

<li>Optionally, add a note/comment about why the mustering is started</li>
<li>Optionally, toggle to indicate that this is a drill and not a real mustering</li>
</ul>
</li>
<li>Click the "YES, START" button to begin the mustering process</li>
<li>To view mustering status, navigate to the Safety page by clicking the "Handle now" button or the "Safety page" icon</li>
</ol>
</details>

<details>
<summary>Can I switch muster types during a mustering process?</summary>
Yes, it's possible to switch muster types during a mustering. To do this:
<ol>
<li>Click the Mustering Pill (toggle button)</li>
<li>Toggle on the Muster type you want to switch to</li>
<li>The system will update the mustering process to reflect the new type</li>
</ol>
</details>

<details>
<summary>How do I stop a mustering process?</summary>
To stop the system's mustering process:
<ol>
<li>In the "Top bar", click the Mustering Pill (toggle button)</li>
<li>Toggle OFF the Muster type that is currently active</li>
<li>A popup will appear where you can optionally write a comment</li>
<li>Press the "Yes, STOP" button to confirm and end the mustering process</li>
</ol>
</details>

<details>
<summary>What information is shown in the Muster stations overview?</summary>
The Muster stations overview in the "Safety" page displays:
<ul>
<li>Name of each muster station</li>
<li>Number of personnel accounted for at each station</li>
<li>Number of personnel not accounted for based on expected at station</li>
<li>Capacity of each muster station</li>
<li>Toggle for activating/deactivating a muster station</li>
<li>Status indicators (Default Active, Manually deactivated, Default deactivated, Manually activated)</li>
<li>You can click on a muster station name to view details about personnel at that specific station</li>
</ul>
</details>

<details>
<summary>What do the different location status colors mean in the mustering panel?</summary>
In the mustering panel in the "Safety" page, location status has different colors depending on where the wearable is detected and if it has any issues:
<ul>
<li>Orange + Node Icon: This person's wearable has an issue and the location is uncertain. It will show the time since last observed at that location.</li>
<li>Grey + Node Icon: Person is detected at a node that is not a Muster Station without any issues.</li>
<li>Green + Mustering Icon: Person is detected at a Muster station and will be automatically accounted for when "Auto Muster" is "ON". It also indicates who can be manually registered when "Auto Muster" is OFF.</li>
</ul>
</details>

## Tablet Usage

<br>

<details>
<summary>What should I ensure about the tablet at all times?</summary>
In case a crew member activates their distress alarm, it's important that the tablet is:
<ul>
<li>ON at all times</li>
<li>Within sight in the operation room/bridge or other 24/7 manned areas</li>
<li>Sound is ON</li>
</ul>

This ensures that any distress alarms are immediately visible and can be responded to quickly.

</details>

<details>
<summary>How do I set up the tablet?</summary>
To set up the tablet:
<ol>
<li>Ensure the tablet is connected to the same Wi-Fi network as the server that the gateway computer is connected to</li>
<li>Open the Chrome web browser pre-installed on the tablet</li>
<li>Enter the IP address in this format: http://your-vessel-domain-name.edge.scanreach.com/tablet<ul><li><strong>your-vessel-name</strong> is to be replaced with your vessels name</li></ul></li>
<li>Click on the icon with three dots, then choose "Add to Home screen" and proceed with the setup</li>
</ol>
</details>

<details>
<summary>What information does the tablet provide in regular situations?</summary>
In regular situations, the tablet provides a real-time overview of:
<ul>
<li>Number of people currently onboard</li>
<li>Number of people expected to be onboard</li>
<li>Mustering status</li>
<li>Distress alarms</li>
</ul>

The main view shows these elements, and you can click on the number of people onboard to get more detailed information.

</details>

<details>
<summary>What happens during a distress alarm on the tablet?</summary>
When a distress alarm is triggered:
<ol>
<li>The tablet enters an emergency state</li>
<li>It emits an alarm sound</li>
<li>It displays useful information about the distress, including:
   <ul>
   <li>Role of the person (rescuer, crew, captain, passenger)</li>
   <li>Name of the person</li>
   <li>Battery percentage of the wearable</li>
   <li>Signal strength (dB)</li>
   <li>Time elapsed since alarm</li>
   <li>Location onboard</li>
   <li>Last time seen</li>
   </ul>
</li>
<li>You can touch the center of the screen to silence the alarm</li>
<li>You can select individual distress alarms to show details of a single alarm</li>
<li>You can click "View in Map" to see the location on the vessel</li>
<li>You can mark the distress situation as "resolved" to remove it from the system</li>
</ol>
</details>

<details>
<summary>How do I view the location of a distress alarm on the tablet?</summary>
To view the location of a distress alarm on the tablet:
<ol>
<li>When a distress alarm is displayed, select the specific alarm you want to locate</li>
<li>Click the "View in Map" button to view the person's location with map view</li>
<li>The location from where the distress alarm was triggered will be indicated with a red icon</li>
<li>The map view will also show personnel grouped by: Not Accounted For, Accounted For, Distress Alarms, and Accounted For At Other Location</li>
</ol>
</details>

## Gangway Setup

<br>

<details>
<summary>What are the different versions of Gangway boxes available?</summary>
There are three versions of Gangway boxes available:
<ol>
<li>IP67 type box with LED on top - AC Powered</li>
<li>IP67 type box with LED on the front - AC Powered</li>
<li>EX box with external signal light - AC Powered</li>
</ol>

The boxes have different dimensions and features, with the newer versions having the LED light moved to the front and added sound when a person is registered.

</details>

<details>
<summary>How do I configure a gangway?</summary>
To configure a gangway:
<ol>
<li>Open the gangway page and click the "Plus" button in the right panel</li>
<li>Fill out the form with:
   <ul>
   <li>A name that identifies the gangway (e.g., Walk2Work, Boat landing)</li>
   <li>Mode (Auto or Manual) - how detections will be approved (Auto is recommended)</li>
   <li>Sensitivity - how sensitive the gangway will be when detecting wearables nearby</li>
   <li>The Embark box node's identifier (selecting multiple nodes is possible)</li>
   <li>The Drop-off box node's identifier (selecting multiple nodes is possible)</li>
   <li>Traffic-light system (if gangway is connected to traffic light hardware)</li>
   </ul>
</li>
<li>Choose whether to manually set the gangway's drop-off location</li>
<li>Click "Save" to confirm the configuration</li>
</ol>
</details>

<details>
<summary>How do personnel use the gangway system?</summary>
To use the gangway system, personnel should:
<ol>
<li>Have their wearables on their right hand</li>
<li>When leaving the vessel, hold their wearable up close to the "OFF box" - Wait for a light</li>
<li>When returning to the vessel, hold their wearable up close to the "ON box" - Wait for a light</li>
<li>When the green light lights up, it means they have been correctly registered by the system</li>
</ol>

For gangways connected to signal lights, the green light indicates correct registration, while a red light means either the Red traffic-light limit has been reached or the Emergency stop has been pressed.
Yellow light means that we have reached the yellow limit and are close to max personnel for that drop off location.

</details>

<details>
<summary>Why does the automatic gangway drop off location not work?</summary>
Make sure that Gangway is set ut with automatic drop off location:
<ol>
<li>Click the gangway item that is not dropping off to the correct location</li>
<li>Click the settings button</li>
<li>Make sure the "Manually set gangway's drop-off location" is set to <strong>OFF</strong></li>
</ol>

If the problem still persist, contact ScanReach support to make the desired drop off locations is added to the database.

</details>

<details>
<summary>What happens if the red light lights up on a gangway with traffic lights?</summary>
If the red light lights up on a gangway with traffic lights, it means either:
<ol>
<li>The Red traffic-light limit has been reached, or</li>
<li>The Emergency stop has been pressed</li>
</ol>

In this scenario, the user should walk to the opposing box and tap their wearable again to handle the situation. The system will then process the registration accordingly.

</details>

<details>
<summary>How can I view transfers made through the gangway?</summary>
To view transfers made through the gangway:
<ol>
<li>All transfers will show up in the main listing, which displays the last 500 transfers</li>
<li>In case a wrong location is registered, you can select each transfer in the listing to amend this information</li>
<li>A summary of where personnel is dropped off to is available below the list of gangways</li>
<li>This summary groups locations either in Custom locations or a Named Group from locations that ScanReach has uploaded</li>
<li>Clicking on a Drop-off location item will expand it and show the names of the people dropped off to that location</li>
</ol>
</details>
